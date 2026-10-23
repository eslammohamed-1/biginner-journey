# Exercise JSON schema

Future chapters only need a new file. The site loads every `src/content/exercises/**/*.json` at build time and injects it on the chapter whose path matches `book` + `chapterFile`.

```
src/content/exercises/<book>/<chapterFile>.json
```

Example: `src/content/exercises/04-python/ch03.json` is shown at the bottom of `src/content/docs/04-python/ch03.md`.

If that file is missing, the chapter still builds and shows **التمارين جاية قريب**. Appendices and the book index do not show an exercise block.

## File

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `book` | string | yes | Folder name, e.g. `01-terminal`. Must match the directory. |
| `chapter` | number | yes | Chapter number, e.g. `1`. |
| `chapterFile` | string | yes | `ch` + digits, e.g. `ch01`. Must match the filename and the markdown file. |
| `title` | string | yes | Chapter title. |
| `count` | number | yes | Must equal `exercises.length`. |
| `exercises` | array | yes | At least one exercise. |

`src/content/exercises/01-terminal/ch01.json` → `book` is `01-terminal` and `chapterFile` is `ch01`. The build fails if those fields and the path disagree.

## Shared exercise fields

Every item in `exercises` has:

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `id` | string | yes | Stable id, e.g. `01-terminal-ch01-01`. |
| `type` | string | yes | `mcq`, `scenario`, `order`, `command`, or `fill`. |
| `level` | string | yes | `easy` (سهل), `medium` (متوسط), or `think` (فكّر). |
| `explanation` | string | yes | Shown after the learner answers, or after reveal. |

`question`, `prompt`, `scenario`, `why`, `hint`, and `explanation` may contain `` `code` `` and `**bold**`.

## `mcq`

| Field | Type | Notes |
| --- | --- | --- |
| `question` | string | The question. |
| `options` | `{ text, why }[]` | At least two. `why` is the feedback for choosing that option. |
| `correct` | number | Zero-based index into `options`. |

Choosing an option immediately shows صح or غلط, that option's `why`, and `explanation`. A wrong choice also shows the correct option's text and `why`.

## `scenario`

Same as `mcq`, plus:

| Field | Type | Notes |
| --- | --- | --- |
| `scenario` | string | The situation, shown above `question`. |

## `order`

| Field | Type | Notes |
| --- | --- | --- |
| `prompt` | string | What to sort. |
| `items` | string[] | The **correct** order. At least two. Items must be unique. The page shuffles a copy for display. |

The learner reorders with drag or with فوق / تحت, then presses تحقق. `explanation` appears after the check.

## `command`

| Field | Type | Notes |
| --- | --- | --- |
| `prompt` | string | What to type. |
| `accepted` | string[] | Accepted answers. At least one. |
| `patterns` | string[] | Optional. JavaScript `RegExp` sources with no flags (`new RegExp(p)`). Any match on the normalized input also counts as correct. |
| `hint` | string | Optional. Shown only after تلميح. |

The same rules apply to shell commands and to code lines (Python, JS, CSS, YAML). Comparison is case-sensitive.

Normalization, applied to the learner's input and to every `accepted` entry:

1. Trim leading and trailing whitespace.
2. Strip one leading prompt `$ ` or `% `.
3. Collapse runs of whitespace into a single space.
4. Drop one trailing `;`, then trim again.

An answer is correct when the normalized input equals any normalized `accepted` entry, or when a `patterns` regex matches that normalized input. The first `accepted` entry is the one shown by اعرض الإجابة.

## `fill`

| Field | Type | Notes |
| --- | --- | --- |
| `prompt` | string | The instruction. |
| `template` | string | Text containing one `___` per blank. |
| `blanks` | string[][] | `blanks[i]` is every accepted string for placeholder `i`. |
| `hint` | string | Optional. |
| `lang` | string | Optional. Code language for the template. |

The number of `___` markers must equal `blanks.length`. A blank may list several accepted spellings (for example `["ppid"]` or `["Closes", "closes", "Fixes"]`).

Each blank is trimmed and compared case-sensitively. Arabic diacritics and tatweel are ignored, so `كِتاب` matches `كتاب`. Command normalization (`$`, `%`, trailing `;`) is not applied to blanks.

## Progress

Correct answers are stored in `localStorage` under `bj-progress-v1`, keyed by `book/chapterFile`. The book index and the home cards read that store. Nothing is sent to a server.

## Adding a chapter

1. Add `src/content/exercises/<book>/chNN.json`.
2. Run `npm run build`.

No component edits. For a book that is not already one of the eight, also add its markdown under `src/content/docs/<book>/` and a row in `src/data/books.ts`.
