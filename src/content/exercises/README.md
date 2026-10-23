# Exercise JSON

Drop one file per chapter:

`src/content/exercises/<book-slug>/chNN.json`

Example: `src/content/exercises/04-python/ch01.json`

The page `src/content/docs/<book-slug>/chNN.md` picks it up from `chapterFile`. No other code change. See `docs/EXERCISES_SCHEMA.md`. Field rules for typed answers are in `SCHEMA.md` in this folder.

All eight books have a file for every numbered chapter. Appendices have none. A chapter whose file is removed still renders and shows "التمارين جاية قريب".
