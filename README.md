# رحلة المبتدئ

موقع مذاكرة عربي (من اليمين لليسار) لثماني كتب، بتمارين تفاعلية بعد كل فصل.

**كتب المسارات الجانبية**

الترتيب مهم: Terminal، ثم Git، ثم الويب، ثم Python، ثم APIs، ثم الفرونت إند، ثم Docker، ثم Kubernetes.

الموقع المقصود: <https://eslammohamed-1.github.io/biginner-journey/>

## تشغيل محلي

```bash
npm install
npm run dev
```

المعاينة بعد البناء:

```bash
npm run build
npm run preview
```

العنوان المحلي يبقى تحت `/biginner-journey/` لأن ده مسار GitHub Pages.

## التمارين

ملفات التمارين هنا:

`src/content/exercises/<book-slug>/chNN.json`

مثال: `src/content/exercises/04-python/ch01.json` يظهر لوحده تحت `src/content/docs/04-python/ch01.md`.

لو الملف مش موجود، الفصل يتعرض وآخره مكتوب **التمارين جاية قريب**. مفيش تعديل في الكود عشان تضيف تمارين كتاب جديد من الثمانية. التفاصيل في [docs/EXERCISES_SCHEMA.md](docs/EXERCISES_SCHEMA.md) و [CONTRIBUTING.md](CONTRIBUTING.md).

التقدّم بتاع القارئ بيتحفظ في المتصفح (`localStorage`) وبيظهر على كروت الصفحة الرئيسية وعلى صفحة كل كتاب.

## ملفات PDF

الملفات موجودة في `public/downloads/` بالأسماء المكتوبة في `public/downloads/README.md`. روابط صفحة كل كتاب بتفتحها من `/biginner-journey/downloads/`.

## النشر

ملف `.github/workflows/deploy.yml` يبني الموقع بـ `withastro/action` على Node `22.23.4` (أقل نسخة يقبلها Astro 7.4) وينشره بـ `actions/deploy-pages` عند الدفع على `main`.

لازم صاحب الريبو يفعّل GitHub Pages من الإعدادات: **Settings → Pages → Build and deployment → Source: GitHub Actions**. من غير الخطوة دي الـ workflow مش هيقدر ينشر.

---

# Beginner Journey

Arabic (right-to-left) study site for eight books, with interactive exercises after every chapter. Tagline: **كتب المسارات الجانبية**.

Study order matters: Terminal, Git, the web, Python, APIs, frontend, Docker, then Kubernetes.

Live URL (after Pages is enabled and `main` is deployed): <https://eslammohamed-1.github.io/biginner-journey/>

## Local

```bash
npm install
npm run dev
```

`site` is `https://eslammohamed-1.github.io` and `base` is `/biginner-journey`, so local URLs use that base path too.

## Exercises

Put one JSON file per chapter at:

`src/content/exercises/<book-slug>/chNN.json`

The chapter page with the same `chapterFile` picks it up on the next build. A chapter with no file shows "التمارين جاية قريب" and the build still passes. Field-by-field rules: [docs/EXERCISES_SCHEMA.md](docs/EXERCISES_SCHEMA.md). How to add a book: [CONTRIBUTING.md](CONTRIBUTING.md).

Reader progress stays in `localStorage` and shows on the home cards and on each book index.

## PDFs

The book and cheat-sheet PDFs are in `public/downloads/` and linked from each book index as `/biginner-journey/downloads/*.pdf`. Names are listed in `public/downloads/README.md`.

## Deploy

`.github/workflows/deploy.yml` builds with the official `withastro/action` on Node `22.23.4` (the minimum Astro 7.4 accepts) and deploys with `actions/deploy-pages` on every push to `main`.

The repo owner has to set **Settings → Pages → Build and deployment → Source: GitHub Actions** once. The workflow cannot turn that on by itself.
