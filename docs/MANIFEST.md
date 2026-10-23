# Site content bundle: MANIFEST

Content for the public Astro Starlight site `biginner-journey`. The site deploys to GitHub Pages at the base path `/biginner-journey/` (repo `eslammohamed-1/biginner-journey`; the spelling is intentional).

## Books

| slug | title | chapters | appendices | chapter exercise files | exercises | mcq | scenario | command | order | fill |
|---|---|---|---|---|---|---|---|---|---|---|
| 01-terminal | الـ Terminal — المرجع الشخصي (إصدار macOS) | 16 | 3 | 16 | 202 | 88 | 32 | 44 | 15 | 23 |
| 02-git | Git و GitHub — من الصفر | 19 | 3 | 19 | 223 | 90 | 40 | 52 | 19 | 22 |
| 03-web | الإنترنت والويب و DevTools — دليل المذاكرة | 23 | 4 | 23 | 269 | 134 | 46 | 39 | 24 | 26 |
| 04-python | Python for AI — دليل المذاكرة | 31 | 5 | 31 | 361 | 177 | 41 | 59 | 31 | 53 |
| 05-apis | APIs و JSON — دليل المذاكرة | 24 | 5 | 24 | 285 | 147 | 32 | 37 | 25 | 44 |
| 06-frontend | عالم الفرونت إند — دليل المذاكرة | 27 | 5 | 27 | 318 | 157 | 36 | 52 | 27 | 46 |
| 07-docker | Docker — دليل المذاكرة | 13 | 2 | 13 | 150 | 58 | 21 | 37 | 14 | 20 |
| 08-kubernetes | Kubernetes — دليل المذاكرة | 22 | 3 | 22 | 261 | 120 | 29 | 57 | 23 | 32 |
| **total** | | 175 | 30 | | **2069** | 971 | 277 | 377 | 178 | 266 |

Every numbered chapter has 10–15 exercises, using at least 4 types and a mix of easy, medium and think levels. Appendices have no exercises.

## Layout

```
site-content/
  MANIFEST.md
  books/NN-slug/
    index.md            # book landing page: lead, download links, map, chapter list by stage
    chNN.md             # one per chapter; Starlight frontmatter: title, description, sidebar.order/label
    appendix-N.md       # sidebar.order 100+
    assets/             # chNN-figK.png (diagram screenshots), plus original images
  exercises/
    SCHEMA.md           # JSON schema and answer-checking rules
    NN-slug/chNN.json   # one per numbered chapter
  downloads/
    NN-slug-book.pdf
    NN-slug-cheatsheet.pdf
```

## Notes for the site builder
- **Downloads:** copy `downloads/*` to `public/downloads/`. The book `index.md` pages link to `/biginner-journey/downloads/NN-slug-book.pdf` and `-cheatsheet.pdf`.
- **Exercises:** load `exercises/<slug>/chNN.json` and render it after (or alongside) `books/<slug>/chNN.md`. The rules are in `exercises/SCHEMA.md`: shuffle order items, normalize command answers, and show every option's `why`.
- Cross-references inside chapters are relative links of the form `../chNN/#anchor`.
- Diagrams are PNG screenshots of the original HTML figures, stored in each book's `assets/`.
- The PDFs are all under 25 MB, so none were recompressed.

## Changes since the v1 bundle
- v1 had books 01–08 and exercises 01–03.
- New: exercises for 04-python, 05-apis, 06-frontend, 07-docker and 08-kubernetes; `exercises/SCHEMA.md`; this MANIFEST; and `downloads/`.
- Exercises 01–03 were regenerated from the same sources with identical content. Books are unchanged.
