# إضافة تمارين

التمارين بتتحمّل لوحدها من:

`src/content/exercises/<book-slug>/chNN.json`

الكتب الثمانية موجودة أصلًا. عشان تضيف تمارين كتاب لسه فاضي (زي `04-python`):

1. اعمل ملف لكل فصل، مثلاً `src/content/exercises/04-python/ch01.json`.
2. خلّي `book` هو `04-python` و `chapterFile` هو `ch01`، عشان يطابقوا المسار وملف `src/content/docs/04-python/ch01.md`.
3. خلّي `count` يساوي عدد عناصر `exercises`.
4. شغّل `npm run build`.

مفيش تعديل في المكوّنات. الفصل من غير ملف JSON بيعرض "التمارين جاية قريب". شكل كل نوع (`mcq` و `scenario` و `order` و `command` و `fill`) مكتوب في [docs/EXERCISES_SCHEMA.md](docs/EXERCISES_SCHEMA.md).

لو الكتاب نفسه جديد ومش من الثمانية، ضيف الماركدوان تحت `src/content/docs/<book-slug>/` وصف في `src/data/books.ts` عشان يظهر في القائمة وفي الصفحة الرئيسية.

# Add exercises

Drop JSON files here:

`src/content/exercises/<book-slug>/chNN.json`

The eight books are already on the site. To add exercises for a book that does not have them yet:

1. Add one file per chapter, for example `src/content/exercises/04-python/ch01.json`.
2. Set `book` to `04-python` and `chapterFile` to `ch01`. Those values must match the path and `src/content/docs/04-python/ch01.md`.
3. Set `count` to `exercises.length`.
4. Run `npm run build`.

No component changes. A chapter with no JSON file renders and shows "التمارين جاية قريب". The five types are documented in [docs/EXERCISES_SCHEMA.md](docs/EXERCISES_SCHEMA.md).

A brand-new ninth book also needs its markdown in `src/content/docs/<book-slug>/` and an entry in `src/data/books.ts` so the sidebar and the home page list it.
