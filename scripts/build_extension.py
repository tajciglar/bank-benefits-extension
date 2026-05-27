#!/usr/bin/env python3
"""Build browser-specific extension bundles.

Reads benefits.js to enumerate the merchant domains the extension needs
access to, and writes them into manifest.host_permissions and
content_scripts[].matches. This avoids the broad `<all_urls>` permission.
"""

from __future__ import annotations

import json
import re
import shutil
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parent.parent
DIST_DIR = ROOT / "dist"
BASE_MANIFEST = ROOT / "manifest.base.json"
MANIFESTS_DIR = ROOT / "manifests"
BENEFITS_JS = ROOT / "benefits.js"
SHARED_FILES = [
    "background.js",
    "benefits.js",
    "content.js",
    "notification.css",
    "popup.css",
    "popup.html",
    "popup.js",
]
SHARED_DIRS = ["icons"]
TARGETS = {
    "chrome": MANIFESTS_DIR / "chrome.json",
    "firefox": MANIFESTS_DIR / "firefox.json",
}


def extract_merchant_domains() -> list[str]:
    """Parse benefits.js and return sorted unique apex domains.

    Looks for `domains: ['x', 'y']` arrays. Strips leading `www.` so each
    registrable domain appears once. Returned list is sorted for
    deterministic manifest output.
    """
    text = BENEFITS_JS.read_text(encoding="utf-8")
    domains: set[str] = set()
    for arr in re.findall(r"domains\s*:\s*\[([^\]]*)\]", text):
        for raw in re.findall(r"['\"]([^'\"]+)['\"]", arr):
            apex = raw.strip().lower().lstrip(".")
            if apex.startswith("www."):
                apex = apex[4:]
            if apex and "." in apex:
                domains.add(apex)
    return sorted(domains)


def domain_match_patterns(domains: list[str]) -> list[str]:
    """Convert a list of apex domains into Chrome match patterns.

    `*://*.example.com/*` matches both the apex (`example.com`) and any
    subdomain (`shop.example.com`) per the Chrome match pattern spec.
    """
    return [f"*://*.{d}/*" for d in domains]


def deep_merge(base: dict[str, Any], override: dict[str, Any]) -> dict[str, Any]:
    result = dict(base)
    for key, value in override.items():
        if isinstance(value, dict) and isinstance(result.get(key), dict):
            result[key] = deep_merge(result[key], value)
        else:
            result[key] = value
    return result


def read_json(path: Path) -> dict[str, Any]:
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def copy_shared_files(target_dir: Path) -> None:
    for file_name in SHARED_FILES:
        shutil.copy2(ROOT / file_name, target_dir / file_name)

    for dir_name in SHARED_DIRS:
        source_dir = ROOT / dir_name
        shutil.copytree(source_dir, target_dir / dir_name)


def build_target(name: str, override_path: Path, match_patterns: list[str]) -> None:
    target_dir = DIST_DIR / name
    if target_dir.exists():
        shutil.rmtree(target_dir)
    target_dir.mkdir(parents=True, exist_ok=True)

    copy_shared_files(target_dir)

    manifest = deep_merge(read_json(BASE_MANIFEST), read_json(override_path))

    # Inject the enumerated host permissions and content-script matches so
    # we never request the broad `<all_urls>` pattern.
    manifest["host_permissions"] = match_patterns
    for cs in manifest.get("content_scripts", []):
        cs["matches"] = match_patterns

    with (target_dir / "manifest.json").open("w", encoding="utf-8") as handle:
        json.dump(manifest, handle, ensure_ascii=False, indent=2)
        handle.write("\n")


def main() -> int:
    DIST_DIR.mkdir(exist_ok=True)
    domains = extract_merchant_domains()
    patterns = domain_match_patterns(domains)
    print(f"Enumerated {len(domains)} merchant domains for host_permissions")
    for name, override_path in TARGETS.items():
        build_target(name, override_path, patterns)
        print(f"Built {name}: {DIST_DIR / name}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
