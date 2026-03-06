# KubeJS Wiki Documentation Guide

## Project Overview

This is a **multilingual documentation site** for KubeJS, a Minecraft mod that enables JavaScript-based game customization. The wiki uses a custom `.kubedoc` markup format and supports 5 languages (en, de, pl, zh-cn, zh-tw).

**Primary Goal:** Document missing events, methods, and features by extracting information from the [KubeJS source code](https://github.com/KubeJS-Mods/KubeJS) and writing beginner-friendly documentation.

**Current Status:** 68 events have only `meta.yml` files and need `page.kubedoc` documentation:
- ItemEvents (16), PlayerEvents (12), BlockEvents (9), ClientEvents (9), ServerEvents (8), LevelEvents (5), EntityEvents (4), StartupEvents (4), NetworkEvents (1)

**Version Priority:** Focus on **1.20.1** examples (primary), with 1.21 as secondary. Use version tabs when behavior differs between versions.

## Accessing Source Code

Use the `github_repo` tool to read KubeJS source files:
```
Repository: KubeJS-Mods/KubeJS
```

The source contains `@Info` annotations with method descriptions, parameters, and usage notes that should be extracted for documentation.

## Documentation Structure

### Page Anatomy
Each documented feature lives in its own directory with:
- `meta.yml` - Page metadata (script type, version range, see-also links)
- `page.kubedoc` - Main content in kubedoc format
- `en.yml` - English text/translations (optional if no language keys used)
- `{lang}.yml` - Other language translations

### Key Directories
- `wiki/events/` - Event documentation organized by type (PlayerEvents, ServerEvents, etc.)
- `wiki/tutorials/` - Step-by-step guides
- `wiki/concepts/` - Conceptual explanations
- `wiki/ref/` - API reference (TypeScript definitions)
- `global.yml` - Global replacements (emojis, URLs, common text)

## Kubedoc Format Quick Reference

**Text Formatting:**
- `**bold**`, `*italic*`, `~~strikethrough~~`, `__underline__`, `` `code` ``, `==highlight==`
- `{key}` - Language key or global variable (e.g., `{discord-url}`)
- `#[[red|colored text]]` - Colored text (hex: `#z\RRGGBB` or named colors)

**Links:**
- `[[/path/to/page]]` or `[[/path/to/page|Custom Text]]` - Internal links
- `[Text](https://url)` - External links (HTTPS only)

**Media:**
- `![[image.png]]` or `![[image.png|Alt text]]` - Images/videos in same directory
- `![[youtube:VIDEO_ID]]` - YouTube embeds
- `![[emoji:icon.png]]` - Inline images

**Structure:**
- `# Heading 1`, `## Heading 2`, `### Heading 3`
- `---` - Horizontal rule
- Code blocks: `` ```js ... ``` ``
- Lists: Start with `- ` (unordered) or `. ` (ordered), indent with 2N spaces

**Special Blocks:**
```
>>> info
Info callout text with **formatting**
<<<
```
Types: `quote` (gray), `info` (blue), `success` (green), `warning` (orange), `danger` (red)

**Tabs (for version differences):**
```
|> 1.21
Content for version 1.21
<||> 1.20.1
Content for version 1.20.1
<|
```

**Spoilers:**
```
|> Title
Hidden content
<|
```

## Writing Documentation Patterns

### Event Documentation Template
```kubedoc
# Info
Brief description of what this event does and when it fires.

# Available Event Fields
- `event.player` - description
- `event.server` - description
- `event.level` - description

# Example

|> 1.21
```js
ServerEvents.eventName(event => {
    // Practical example with comments
    event.server.tell('Hello!')
})
```
<||> 1.20.1
```js
ServerEvents.oldEventName(event => {
    // Version-specific example
})
```
<|
```

### Meta.yml Pattern
```yaml
script: "server"  # or "client" or "startup"
event-result: false  # true if event can be cancelled
see-also: "$EventType/relatedEvent"  # optional
```

### Style Guidelines
1. **Beginner-friendly** - Assume JavaScript knowledge but not Java
2. **Practical examples** - Real use cases, not abstract demos
3. **Copy-paste ready** - Working code snippets
4. **Version awareness** - Use tabs for version differences (1.21 vs 1.20.1)
5. **Explain parameters** - Document all event fields/methods
6. **Common pitfalls** - Warn about gotchas using `>>> warning` blocks

## Workflow

### Adding Missing Documentation
1. **Find source code** in KubeJS repo (e.g., `PlayerEvents.java`)
2. **Extract `@Info` annotations** and method signatures
3. **Check existing similar docs** in `wiki/events/` for style reference
4. **Create directory** (if needed) with `meta.yml`
5. **Write `page.kubedoc`** following templates above
6. **Add `en.yml`** only if using language keys (most event docs don't need this)

### Translation Workflow
- Primary language is **English**
- Other languages only translate `{key}` values in `.yml` files
- Use `tools/search-untranslated-file.py` to find missing translations
- Each language has translation guidelines in `languages/{lang}/README.md`

## Common Mistakes to Avoid

- ❌ Don't wrap file paths in backticks when making kubedoc links
- ❌ Don't use Markdown link syntax for internal pages (use `[[ ]]`)
- ❌ Don't forget callout types (`>>> info` not `>>> Info`)
- ❌ Don't create generic docs - extract real info from source code
- ❌ Don't use `&&` in tab syntax - use `<||>` to separate tabs
- ✅ Do check version compatibility (1.21 vs 1.20.1)
- ✅ Do include practical, real-world examples
- ✅ Do use tabs for version-specific content

## Finding Missing Documentation

**PowerShell command to list all undocumented events:**
```powershell
Get-ChildItem -Path "wiki\events" -Recurse -Filter "meta.yml" | 
  ForEach-Object { 
    $dir = $_.DirectoryName
    $hasPage = Test-Path (Join-Path $dir "page.kubedoc")
    if (-not $hasPage) { 
      $_.DirectoryName.Replace((Get-Location).Path, "").TrimStart('\') 
    } 
  } | Sort-Object
```

**Priority order for documentation:**
1. **ItemEvents** - Most commonly used by modpack developers
2. **PlayerEvents** - Essential gameplay interactions
3. **ServerEvents** - Core server functionality
4. **BlockEvents** - World interaction events
5. Other event types as needed

**Good documentation examples:**
- `wiki/events/ItemEvents/modifyTooltips/` - Complete with advanced features
- `wiki/events/ServerEvents/basicCommand/` - Simple event with version tabs
- `wiki/tutorials/getting-started/` - Tutorial structure

**Reference files:**
- `README.md` - Complete kubedoc syntax specification
- `global.yml` - Available global replacements
- `.ai-context.md` - Extended project context
