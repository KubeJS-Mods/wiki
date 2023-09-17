# KubeJS Wiki

## Basic Page Structure

Each page is its own directory, containing these files:

- `page.kubejsdoc` - Page Document (see below for syntax). Optional - if not present, its assumed that its an auto-index page that only contains links to its sub-pages
- `en.yml` - English Language Document (see below)
- `other.yml` - Other Language Documents. Language must be specified in [languages.json](/languages.json)

## Language Documents

An example `en.yml`:

```yml
title: "Page Title"
description: "Page Description"
key1: "Text"
```

Documents of other languages will fall back to English if key is missing. Values can contain kubejsdoc syntax like `"Text **bold** text"` and will be recursively parsed. They can contain other language keys, but its recommended to write docs in such way that it's not necessary.

## Page Documents

`page.kubejsdoc` files are very similar to markdown, with few differences, mostly related to linking to pages/files. Full spec below.

### Meta Properties

- `@meta index page1, page2, ...` - Ordered, comma-separated list of pages to include in index
- `@meta versions [1202,1605]` - Versions this page exists for. See Version Syntax below
- `@meta redirect /path/to/redirect` - Redirects this page to another
- `@meta define key-name "Text"` - Defines key overrides. Can be used by both page and language documents

### Basic Syntax

- `**text**` - Bold text
- `*text*` - Italic text
- `~~text~~` - Strikethrough text
- `` `text` `` - Inline code
- `==text==` - Highlighted text
- `{{language-key}}` - Language key (e.g. `{{paragraph-1}}`)
- `{{#autoindex}}` - Include auto-index here
- `[text](url)` - A link. Links to another page if url starts with `/` (e.g. `[KubeJS Website](https://kubejs.com/)` or `[](/addons)`)
- `![alt text](filename)` - Media block - can be an image, video or file in same directory as page (e.g. `![](image.png)`)
- `---` - Horizontal line
- `# Heading 1` - Heading 1
- `## Heading 2` - Heading 2
- `### Heading 3` - Heading 3

### Advanced Syntax

---

#### Tables

```
| Header 1 | Header 2 |
|----------|----------|
| Cell 1 | Cell 2 |
| Cell 3 | Cell 4 |
```

---

#### Code Blocks

\```lang

`code`

\```

---

#### Callout blocks

Special formatted blocks:

```
{{{ info
Info text here.
Supports multiple lines and **formatting** inside of it.
}}}
```

You can use one of these markers:

- `info` (blue)
- `warn` (orange)
- `danger` (red)
- `success` (green)

---

## Misc

### Version Syntax

- `[min,max]` - Version range between min and max, inclusive (e.g. `[1202,1605]`)
- `[min,]` - Version range between min and latest, inclusive (e.g. `[1202,]`)
- `[,max]` - Version range between oldest and max, inclusive (e.g. `[,1605]`)
- `version` - Only one specific version (e.g `1202`)
