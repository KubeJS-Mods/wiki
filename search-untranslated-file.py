from pathlib import Path

CURRENT_PATH = Path(__file__).parent
LANGUAGES = CURRENT_PATH / "languages"
WIKI = CURRENT_PATH / "wiki"

target_language_code = "zh-tw"

for en_file in WIKI.rglob("en.yml"):
    target_file = en_file.parent / f"{target_language_code}.yml"
    print(f"{target_file}")

# print("\n".join(map(str, WIKI.rglob("en.yml"))))