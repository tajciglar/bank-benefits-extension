"""Surgically replace the NLB section and append new bank sections to benefits.js."""

import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BENEFITS = ROOT / "benefits.js"

# Run merger to (re)generate scraped sections
result = subprocess.run(
    ["python3", str(ROOT / "scripts" / "merge_scraped_benefits.py")],
    capture_output=True, text=True, check=True,
)
new_sections = result.stdout.strip()

text = BENEFITS.read_text()

# Split the scraped sections — NLB comes first, then everything else
nlb_section, _, rest_sections = new_sections.partition(",\n\n  'Delavska hranilnica':")
rest_sections = "  'Delavska hranilnica':" + rest_sections

# 1. Replace existing 'NLB': [ ... ], block
# Match from "  'NLB': [" until matching "  ],"
nlb_pattern = re.compile(
    r"  'NLB': \[.*?\n  \],",
    re.DOTALL,
)
if not nlb_pattern.search(text):
    raise SystemExit("Could not locate existing NLB block")

text = nlb_pattern.sub(nlb_section + ",", text, count=1)

# 2. Insert new bank sections before the closing "};" of BENEFITS_DATABASE
# The Visa Business array ends with "  ]\n};". Replace the final "  ]\n};" with
# "  ],\n\n" + rest_sections + "\n};"
close_pattern = re.compile(r"\n  \]\n\};\n")
if not close_pattern.search(text):
    raise SystemExit("Could not locate BENEFITS_DATABASE closing brace")

text = close_pattern.sub(
    "\n  ],\n\n" + rest_sections + "\n};\n",
    text,
    count=1,
)

BENEFITS.write_text(text)
print(f"Updated benefits.js — {len(text.splitlines())} lines")
