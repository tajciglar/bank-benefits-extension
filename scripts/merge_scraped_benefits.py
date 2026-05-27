"""Merge scraped JSON benefit files into JS object literals for benefits.js."""

import json
import sys
from pathlib import Path

PLANNING = Path(__file__).resolve().parent.parent / ".planning"


def js_str(value):
    if value is None:
        return "null"
    if isinstance(value, list):
        return "[" + ", ".join(js_str(v) for v in value) + "]"
    if isinstance(value, str):
        escaped = value.replace("\\", "\\\\").replace("'", "\\'")
        return f"'{escaped}'"
    raise TypeError(f"Cannot serialize: {value!r}")


def benefit_to_js(b, link=None):
    """Convert one benefit dict to a JS object literal string."""
    fields = [
        ("merchant", b.get("merchant")),
        ("domains", b.get("domains") or []),
        ("discount", b.get("discount")),
        ("code", b.get("code")),
        ("conditions", b.get("conditions")),
        ("expires", b.get("expires")),
        ("link", link or b.get("link")),
    ]
    inner = ",\n      ".join(f"{k}: {js_str(v)}" for k, v in fields)
    return "    {\n      " + inner + "\n    }"


def render_array(name, benefits, link=None):
    items = ",\n".join(benefit_to_js(b, link) for b in benefits)
    return f"  '{name}': [\n{items}\n  ]"


def load(name):
    with open(PLANNING / f"{name}-benefits.json") as f:
        return json.load(f)


def main():
    nlb = load("nlb")
    dh = load("dh")
    bks = load("bks")
    mc = load("mastercard")
    smaller = load("smaller-banks")

    # Group smaller by bank field
    by_bank = {}
    for b in smaller:
        by_bank.setdefault(b["bank"], []).append(b)

    sections = []

    sections.append(render_array("NLB", nlb))
    sections.append(render_array("Delavska hranilnica", dh,
                                  link="https://www.dh.si/mastercard-ugodnosti/"))

    # BKS: tier-aware. Split into BKS Mastercard Standard/Gold and BKS Mastercard Platinum+
    # Each benefit has a `tiers` list. For simplicity, store as one key per top-level group.
    # Strategy: each benefit lists its tiers explicitly; the popup shows all under "BKS Bank".
    sections.append(render_array("BKS Bank", bks))

    sections.append(render_array("Intesa Sanpaolo", by_bank.get("Intesa Sanpaolo", [])))
    sections.append(render_array("Addiko Bank", by_bank.get("Addiko Bank", [])))
    sections.append(render_array("Sparkasse", by_bank.get("Sparkasse", [])))
    sections.append(render_array("Gorenjska banka", by_bank.get("Gorenjska banka", [])))

    # Mastercard tiers: most benefits apply to World + World Elite. Mirror Visa pattern.
    mc_world = [b for b in mc if "Mastercard World" in (b.get("tiers") or [])]
    mc_elite = [b for b in mc if "Mastercard World Elite" in (b.get("tiers") or [])]
    sections.append(render_array("Mastercard World", mc_world))
    sections.append(render_array("Mastercard World Elite", mc_elite))

    print(",\n\n".join(sections))


if __name__ == "__main__":
    main()
