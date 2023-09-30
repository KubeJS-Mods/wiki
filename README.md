# KubeJS Wiki

## Basic Page Structure

Each page is its own directory, containing these files:

- `meta.yml` - Meta Properties, used to change properties of the page itself
- `page.kubejsdoc` - Page Document (see below for syntax). Optional - if not present, its assumed that its an auto-index page that only contains links to its sub-pages
- `en.yml` - English Language Document
- `<other language>.yml` - Other Language Documents. Language must be specified in [/languages/ directory](/languages/)

## Meta Properties

An example `meta.yml`:

```yml
# Ordered, comma-separated list of pages to include in index. "" for no index
index: "page1, page2, ..."
# Version range this page exists for, see Version Syntax below
versions: "[1202, 1605]"
# Redirects this page to another
redirect: "/path/to/redirect"
# Author ID, you can find yours by right-clicking on yourself in Discord and opening Apps > KubeJS Profile
author: "00000001"
```

## Language Documents

An example `en.yml`:

```yml
# Meta property that is also used for page title
title: "Page Title"
# Meta property that is also used for page subtitle
description: "Page Description"
# Custom key
language-key-1: "Hello"
```

Documents of other languages will fall back to English if key is missing. Values can contain kubejsdoc syntax like `"Text **bold** text"` and will be recursively parsed. They can contain other language keys, but its recommended to write docs in such way that it's not necessary.

## Page Documents

`page.kubejsdoc` files are very similar to markdown, with few differences, mostly related to linking to pages/files. Full spec below.

You can preview some test syntax [here](https://kubejs.com/wiki/en/test).

### Basic Syntax

- `**text**` - Bold text
- `*text*` - Italic text
- `~~text~~` - Strikethrough text
- `__text__` - Underlined text
- `` `text` `` - Inline code
- `==text==` - Highlighted text
- `{replacement}` - Language key or global replacement, typically emojis (e.g. `{language-key-1}` or `{yes}`, see [global.yml](/global.yml))
- `[[/path/to/page]]` or `[[/path/to/page|text]]` - Page link. Text is optional, page title is used otherwise (e.g. `[[/addons]]` or `[[/addons|Cool Addons]]`)
- `![[filename]]` or `![[filename|alt]]` - Media block - can be an image, video or file in same directory as page. Alt text is optional (e.g. `![[image.png]]` or `![[image.png|Image Name]]`)
- `![[youtube|code]]` - Youtube media block (e.g. `![[youtube|eT3BFzSD6YY]]`)
- `[text](url)` - External link, only supports https:// (e.g. `[KubeJS Website](https://kubejs.com/)`)
- `---` - Horizontal line
- `# Heading 1` - Heading 1
- `## Heading 2` - Heading 2****
- `### Heading 3` - Heading 3
- `#[[text|color]]` - Colored text. You can use either hex code `RRGGBB` or color name, one of
    - red
    - yellow
    - green
    - blue****
    - magenta

### Advanced Syntax

---

#### Code Blocks

\```lang

`code`

\```

---

#### Callout Blocks

Special formatted blocks:

```
>>> info
Info text here.
Supports multiple lines and **formatting** inside of it.
<<<
```

You can use one of these markers:

- `quote` (default, gray)
- `info` (blue)
- `warn` (orange)
- `danger` (red)
- `success` (green)

---

#### Variable Blocks

Variable blocks are useful when you want to include multiple elements in one inline block, for example multiple items in a list or table.

Define block:

```
>>> #identifier
Content here.
<<<
```

Reference block: `{{#identifier}}`

e.g.
```
>>> #test
Line 1
![[test.png]]
Line 3
<<<

- List item 1
- {{#test}}
```

---

#### Unordered Lists

Each line starts with 2N spaces (0, 2, 4...) and a `-` followed by space, then content:

```
- Item 1
- Item 2
- Item 3
  - Sub-Item 1
  - Sub-Item 2
  - Sub-Item 3
```

Will create:

- Item 1
- Item 2
- Item 3
    - Sub-Item 1
    - Sub-Item 2
    - Sub-Item 3

---

#### Ordered Lists

Same syntax as unordered lists, but with `.` instead of `-`:

```
. Item 1
. Item 2
. Item 3
  . Sub-Item 1
  . Sub-Item 2
  . Sub-Item 3
```

Will create:

1. Item 1
2. Item 2
3. Item 3
    1. Sub-Item 1
    2. Sub-Item 2
    3. Sub-Item 3

---

#### Spoiler Blocks

```
|> Title
Content
<|
```

You can use `|>+` to make it expanded by default:

```
|>+ Title
Content
<|
```

You can also nest tabs:

```
|> Title
Content
|> Title 2
Content 2
<|
<|
```

---

#### Tabs

```
|> Tab 1 name
Content
<||> Tab 2 name
Content
<|
```

You can use `|>+` to select default tab:

```
|> Tab 1 name
Content
<||>+ Tab 2 name
Content
<|
```

---

#### Tables

```
| Header 1 | Header 2 |
|----------|----------|
| Cell 1 | Cell 2 |
| Cell 3 | Cell 4 |
```

## Misc

### Version Syntax

- `[min,max]` - Version range between min and max, inclusive (e.g. `[1202,1605]`)
- `[min,]` - Version range between min and latest, inclusive (e.g. `[1202,]`)
- `[,max]` - Version range between oldest and max, inclusive (e.g. `[,1605]`)
- `version` - Only one specific version (e.g `1202`)
