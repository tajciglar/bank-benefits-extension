#!/usr/bin/env python3
"""Build browser-specific extension bundles."""

from __future__ import annotations

import json
import shutil
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parent.parent
DIST_DIR = ROOT / "dist"
BASE_MANIFEST = ROOT / "manifest.base.json"
MANIFESTS_DIR = ROOT / "manifests"
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


def build_target(name: str, override_path: Path) -> None:
    target_dir = DIST_DIR / name
    if target_dir.exists():
        shutil.rmtree(target_dir)
    target_dir.mkdir(parents=True, exist_ok=True)

    copy_shared_files(target_dir)

    manifest = deep_merge(read_json(BASE_MANIFEST), read_json(override_path))
    with (target_dir / "manifest.json").open("w", encoding="utf-8") as handle:
        json.dump(manifest, handle, ensure_ascii=False, indent=2)
        handle.write("\n")


def main() -> int:
    DIST_DIR.mkdir(exist_ok=True)
    for name, override_path in TARGETS.items():
        build_target(name, override_path)
        print(f"Built {name}: {DIST_DIR / name}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
