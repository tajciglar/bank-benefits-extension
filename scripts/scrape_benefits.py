#!/usr/bin/env python3
"""
Scrape bank benefit pages and output data compatible with benefits.js.

Config schema (JSON):
{
  "sources": [
    {
      "bank": "OTP Banka",
      "url": "https://example.com/benefits",
      "entry_selector": ".benefit-card",
      "fields": {
        "merchant": ".merchant",
        "discount": ".discount",
        "code": ".code",
        "conditions": ".terms",
        "merchant_link": ".merchant a@href",
        "link": "a@href"
      },
      "defaults": {
        "link": "https://example.com/benefits",
        "domains": []
      }
    }
  ]
}

Selector syntax:
- "a@href" extracts an attribute from the first matching element.
- "@href" extracts an attribute from the entry element itself.
- ":self" returns the full text of the entry element.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import time
from typing import Any, Dict, Iterable, List, Optional
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup

DEFAULT_USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/120.0.0.0 Safari/537.36"
)


def _clean_text(value: Optional[str]) -> Optional[str]:
    if value is None:
        return None
    cleaned = re.sub(r"\s+", " ", value).strip()
    return cleaned or None


def _select_value(node, selector: Optional[str]) -> Optional[str]:
    if not selector:
        return None
    if selector == ":self":
        return _clean_text(node.get_text(" ", strip=True))

    if "@" in selector:
        css, attr = selector.rsplit("@", 1)
        css = css.strip()
        attr = attr.strip()
        target = node if css == "" else node.select_one(css)
        if not target:
            return None
        return _clean_text(target.get(attr))

    target = node.select_one(selector)
    if not target:
        return None
    return _clean_text(target.get_text(" ", strip=True))


def _parse_domains(value: Any) -> List[str]:
    if not value:
        return []
    if isinstance(value, list):
        return [str(v).strip().lower() for v in value if str(v).strip()]

    text = str(value).strip()
    if not text:
        return []

    # If the value looks like a URL, use its hostname.
    parsed = urlparse(text)
    if parsed.scheme and parsed.hostname:
        return [parsed.hostname.lower()]

    parts = re.split(r"[\s,]+", text)
    return [p.strip().lower() for p in parts if p.strip()]


def _infer_domains_from_link(link: Optional[str]) -> List[str]:
    if not link:
        return []
    parsed = urlparse(link)
    if parsed.hostname:
        return [parsed.hostname.lower()]
    return []


def _fetch_html(url: str, timeout: int, user_agent: str) -> str:
    resp = requests.get(
        url,
        headers={"User-Agent": user_agent},
        timeout=timeout,
    )
    resp.raise_for_status()
    return resp.text


def _extract_entries(source: Dict[str, Any], timeout: int, user_agent: str) -> List[Dict[str, Any]]:
    url = source.get("url")
    if not url:
        return []

    html = _fetch_html(url, timeout=timeout, user_agent=user_agent)
    soup = BeautifulSoup(html, "html.parser")

    entry_selector = source.get("entry_selector")
    if entry_selector:
        entries = soup.select(entry_selector)
    else:
        entries = [soup.body or soup]

    fields = source.get("fields", {})
    defaults = source.get("defaults", {})

    extracted: List[Dict[str, Any]] = []
    for entry in entries:
        item: Dict[str, Any] = {}

        for key, selector in fields.items():
            item[key] = _select_value(entry, selector)

        # Normalize link fields
        if item.get("link"):
            item["link"] = urljoin(url, item["link"])
        if item.get("merchant_link"):
            item["merchant_link"] = urljoin(url, item["merchant_link"])

        # Apply defaults when missing or empty
        for key, value in defaults.items():
            if not item.get(key):
                item[key] = value

        if not item.get("bank"):
            item["bank"] = source.get("bank")

        # Parse domains
        item["domains"] = _parse_domains(item.get("domains"))
        if not item["domains"] and item.get("merchant_link"):
            item["domains"] = _infer_domains_from_link(item.get("merchant_link"))

        if not item.get("link"):
            item["link"] = url

        # Skip empty entries
        if not (item.get("merchant") or item.get("discount") or item.get("code")):
            continue

        extracted.append(item)

    return extracted


def _group_by_bank(items: Iterable[Dict[str, Any]]) -> Dict[str, List[Dict[str, Any]]]:
    grouped: Dict[str, List[Dict[str, Any]]] = {}

    for item in items:
        bank = item.get("bank") or "Unknown"
        entry = {
            "merchant": item.get("merchant"),
            "domains": item.get("domains", []),
            "discount": item.get("discount"),
            "code": item.get("code"),
            "conditions": item.get("conditions"),
            "link": item.get("link"),
        }
        grouped.setdefault(bank, []).append(entry)

    return grouped


def _format_output(grouped: Dict[str, List[Dict[str, Any]]], fmt: str) -> str:
    if fmt == "json":
        return json.dumps(grouped, ensure_ascii=False, indent=2)

    if fmt == "js":
        payload = json.dumps(grouped, ensure_ascii=False, indent=2)
        return f"const BENEFITS_DATABASE = {payload};\n"

    raise ValueError(f"Unsupported format: {fmt}")


def main() -> int:
    parser = argparse.ArgumentParser(description="Scrape bank benefit pages.")
    parser.add_argument(
        "--config",
        default="scripts/sources.json",
        help="Path to JSON config with sources.",
    )
    parser.add_argument(
        "--output",
        default="scripts/benefits.json",
        help="Output file path. Use '-' for stdout.",
    )
    parser.add_argument(
        "--format",
        choices=["json", "js"],
        default="json",
        help="Output format.",
    )
    parser.add_argument(
        "--timeout",
        type=int,
        default=20,
        help="HTTP timeout in seconds.",
    )
    parser.add_argument(
        "--rate-limit",
        type=float,
        default=1.0,
        help="Delay between requests in seconds.",
    )
    parser.add_argument(
        "--user-agent",
        default=DEFAULT_USER_AGENT,
        help="User-Agent header to send.",
    )

    args = parser.parse_args()

    try:
        with open(args.config, "r", encoding="utf-8") as handle:
            config = json.load(handle)
    except FileNotFoundError:
        print(f"Config not found: {args.config}", file=sys.stderr)
        return 2

    sources = config.get("sources", [])
    if not sources:
        print("No sources configured. Add sources to the config file.", file=sys.stderr)
        return 2

    all_items: List[Dict[str, Any]] = []
    for index, source in enumerate(sources):
        url = source.get("url")
        if not url:
            print(f"Skipping source {index}: missing url", file=sys.stderr)
            continue

        try:
            items = _extract_entries(source, timeout=args.timeout, user_agent=args.user_agent)
        except requests.RequestException as exc:
            print(f"Failed to fetch {url}: {exc}", file=sys.stderr)
            continue

        all_items.extend(items)

        if index < len(sources) - 1 and args.rate_limit > 0:
            time.sleep(args.rate_limit)

    grouped = _group_by_bank(all_items)
    output = _format_output(grouped, args.format)

    if args.output == "-":
        print(output)
        return 0

    with open(args.output, "w", encoding="utf-8") as handle:
        handle.write(output)

    print(f"Wrote {args.output}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
