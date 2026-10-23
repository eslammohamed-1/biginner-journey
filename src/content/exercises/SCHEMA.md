# Exercise JSON schema

One file per numbered chapter: `exercises/<book-slug>/chNN.json` (for example `exercises/04-python/ch07.json`).
Appendices and front matter have no exercises.

Exercise text is written in Egyptian Arabic, with technical terms kept in English. Commands assume macOS and zsh.

## File

```json
{
  "book": "04-python",          // book slug (same as books/<slug>/)
  "chapter": 7,                 // chapter number
  "chapterFile": "ch07",        // matches books/<slug>/ch07.md
  "title": "…",                 // chapter title
  "count": 12,                  // == exercises.length
  "exercises": [ Exercise, … ]  // 10–15 per chapter, ≥ 4 distinct types
}
```

## Common fields (all types)

| field | type | notes |
|---|---|---|
| `id` | string | Globally unique: `<slug>-chNN-NN`, e.g. `04-python-ch07-03` |
| `type` | `"mcq" \| "scenario" \| "command" \| "order" \| "fill"` | |
| `level` | `"easy" \| "medium" \| "think"` | `think` = reasoning or application question |
| `explanation` | string | Shown after the user answers (right or wrong) |

## Types

### `mcq`: multiple choice
```json
{ "question": "…", "options": [ {"text": "…", "why": "…"} ], "correct": 1, "explanation": "…" }
```
- `options`: 2–5 items. **Every option has a `why`**: for the correct option it explains why it's right; for each wrong option it explains why it's wrong. Show the `why` of the chosen option and of the correct option after answering.
- `correct`: 0-based index into `options`. Options are stored in authoring order; the site may shuffle them, as long as it remaps `correct`.
- True/false questions are mcqs with 2 options.

### `scenario`: "حصلت المشكلة دي، تعمل إيه؟"
Same as `mcq`, plus a `scenario` text:
```json
{ "scenario": "…", "question": "تعمل إيه؟", "options": [...], "correct": 0, "explanation": "…" }
```
Render `scenario` as a highlighted problem box (it's often an error message), then the `question`.

### `command`: type the command or code line
```json
{ "prompt": "…", "accepted": ["git log --oneline", "git log --pretty=oneline"],
  "patterns": ["^git log\\s+--oneline$"], "hint": "…", "explanation": "…" }
```
- `accepted`: exact accepted answers; the first one is the canonical answer to display.
- `patterns` (optional): JavaScript `RegExp` sources (no flags) for answers that are valid but have too many variants to list. Build them with `new RegExp(p)`. Every pattern matches at least one `accepted` entry.
- `hint`: shown on request before answering.
- **Normalization** (apply to both the user input and the `accepted` entries before comparing):
  1. trim leading and trailing whitespace;
  2. strip a leading prompt `$ ` or `% `;
  3. collapse runs of whitespace into a single space;
  4. drop one trailing `;`.
  An answer is correct if the normalized input equals any normalized `accepted` entry, or matches any `patterns` regex (test the regex against the normalized input). Comparison is case-sensitive, because commands are.
- Some "command" items are code lines (Python, JS, CSS, YAML keys) rather than shell commands; the same rules apply.

### `order`: put the steps in order
```json
{ "prompt": "رتّب …", "items": ["first", "second", "third"], "explanation": "…" }
```
- `items` are stored **in the correct order** (at least 3). The site must shuffle them for display (re-shuffle if the shuffle comes out identical) and compare the user's order with the stored order.

### `fill`: fill in the blank(s)
```json
{ "prompt": "…", "template": "git ___ -m \"msg\"", "blanks": [["commit"]], "hint": "…", "lang": "bash", "explanation": "…" }
```
- `template` has one or more `___` (three underscores). The number of `___` == `blanks.length`.
- `blanks[i]` = list of accepted answers for blank i. Compare trimmed, case-sensitive; for Arabic-word blanks it's fine to be lenient (ignore case or diacritics).
- `hint` and `lang` are optional. `lang`, when present, is the code language for rendering the template.

## Validation already done
- All files parse as JSON and match this schema. Every numbered chapter of all 8 books has 10–15 exercises using at least 4 types and at least 2 levels. IDs are unique. Every `correct` index is in range. Every regex compiles in Node and matches an accepted answer.
