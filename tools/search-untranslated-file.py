from pathlib import Path

CWD = Path.cwd()
LANGUAGES = CWD / "languages"
WIKI = CWD / "wiki"
TOOLS = CWD / "tools"
EXCLUDE_PATHS = ["test/"]

en_files = [*WIKI.rglob("en.yml")]

#! Remember to change this
target_language_code = None

dump_md_lines = [
    "# Untranslate files",
    f"Target language: `{target_language_code}`",
    f"Exclude paths: `{EXCLUDE_PATHS}`",
    f"Total file count: {len(en_files)}",
    "Untranslate file count: {COUNT}",
    "## Files",
]
not_file_lines = len(dump_md_lines)
for en_file in en_files:
    target_file = en_file.parent / f"{target_language_code}.yml"
    is_exclude = False

    if target_file.exists():
        continue
    target_file_path = target_file.relative_to(CWD).as_posix()
    for exclude_path in EXCLUDE_PATHS:
        if exclude_path in target_file_path:
            is_exclude = True
            break
    if is_exclude:
        continue

    dump_md_lines.append(f"- [ ] {target_file_path}")

with open(TOOLS / "generated" / "untranslate_files.md", "w") as check_list_file:
    check_list_file.write(
        "  \n".join(dump_md_lines).replace(
            "{COUNT}", str(len(dump_md_lines) - not_file_lines)
        )
    )
