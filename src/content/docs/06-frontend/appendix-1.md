---
title: "Cheat Sheet وجدول الـ Flags وجدول الرموز"
description: "ورقة مراجعة لأهم أوامر npm و npx و Vite و Tailwind وأدوات الجودة والنشر، مقسّمة حسب الموضوع، وبعدها جدول الـ Flags وجدول لرموز الـ SemVer والـ CSS وغيرها."
sidebar:
  order: 101
  label: "ملحق أ: Cheat Sheet"
---

ورقة مراجعة لأهم أوامر npm و npx و Vite و Tailwind وأدوات الجودة والنشر، مقسّمة حسب الموضوع، وبعدها جدول الـ Flags وجدول لرموز الـ SemVer والـ CSS وغيرها.

#### npmالتسطيب

| الأمر | بيعمل إيه |
|---|---|
| `npm init -y` | package.json جديد |
| `npm i` | سطّب كل اللي في package.json |
| `npm i react` | dependencies |
| `npm i -D vite` | devDependencies |
| `npm i -E prettier` | نسخة بالظبط (من غير ^) |
| `npm i ms@~2.0.0 / x@latest` | Range أو Tag |
| `npm un x` | امسح |
| `npm ci` | تسطيب نظيف من الـ Lockfile (CI) |
| `npm update` | أحدث نسخة جوه الـ Range |
| `npm outdated` | Current / Wanted / Latest |

#### npmالفحص والإدارة

| الأمر | بيعمل إيه |
|---|---|
| `npm ls / npm ls --all` | الشجرة |
| `npm explain x` | مين جاب x |
| `npm view x versions / dist-tags` | اسأل الـ Registry |
| `npm audit / audit fix` | الثغرات المعروفة |
| `npm audit signatures` | Signatures و Provenance |
| `npm pkg get x / set a.b=c` | اقرا وعدّل package.json |
| `npm prefix -g` | مكان الـ Global |
| `npm install-scripts ls / approve x` | npm 12: Install scripts |
| `npm rebuild` | شغّل الـ Scripts المسموحة |

#### npm runScripts و npx

| الأمر | بيعمل إيه |
|---|---|
| `npm run` | لستة الـ Scripts |
| `npm run dev / build / preview` | Scripts بتاعة Vite |
| `npm start / npm test` | من غير run |
| `npm run lint -- --fix` | ‎-- تعدّي Flags للأمر |
| `preX / postX` | بيشتغلوا قبل/بعد X لوحدهم |
| `npx x` | شغّل من .bin أو نزّل مؤقتاً |
| `npm create vite@latest app -- --template react` | = npx create-vite@latest |

#### ViteVite

| الأمر | بيعمل إيه |
|---|---|
| `npm run dev -- --host` | افتح للشبكة (موبايل) |
| `vite --port 3000 --open` | بورت ويفتح المتصفح |
| `vite build --mode staging` | يحمّل .env.staging |
| `vite preview` | يقدّم dist على 4173 |
| `base: '/repo/'` | GitHub Pages |
| `import.meta.env.VITE_X` | متغير عام (نص) |
| `MODE / DEV / PROD / BASE_URL` | متغيرات جاهزة |
| `%VITE_X%` | جوه index.html |
| `import('./x.js')` | Code splitting |
| `*.module.css` | CSS Modules |

#### Tailwind v4CSS

| الأمر | بيعمل إيه |
|---|---|
| `npm i tailwindcss @tailwindcss/vite` | تسطيب |
| `plugins: [tailwindcss()]` | vite.config.js |
| `@import "tailwindcss";` | سطر الـ CSS |
| `@theme { --color-brand: #1d63ed; }` | لون ← text-brand و bg-brand |
| `p-4 = calc(var(--spacing) * 4)` | 1rem |
| `hover: / focus-visible: / md: / dark:` | Variants |

#### Quality & Deployالجودة والنشر

| الأمر | بيعمل إيه |
|---|---|
| `npx eslint . [--fix]` | Lint |
| `npx prettier . --check / --write` | Format |
| `npx tsc --noEmit` | فحص الأنواع |
| `node --env-file=.env app.js` | env في Node |
| `npx lighthouse URL` | تقرير Lighthouse |
| `netlify deploy [--prod]` | Netlify CLI |
| `vercel / npx vercel` | Vercel CLI |
| `Settings ← Pages ← GitHub Actions` | GitHub Pages |

<a id="a1-1"></a>

## أ.1 جدول الـ Flags

نفس الحرف ممكن يبقى ليه معنى مختلف من أداة للتانية. ولما تشك: `npm help install` أو `npx vite --help` أو `npx create-vite@latest --help`.

**الـ Flags ومعانيها حسب الأداة**

| الـ Flag | في | المعنى |
|---|---|---|
| `-y` | npm init / npx | وافق على كل حاجة |
| `-D` | npm i | --save-dev |
| `-E` | npm i | --save-exact |
| `-g` | npm i / ls | Global |
| `--prefix` | npm | مكان بديل |
| `--all` | npm ls | الشجرة كلها |
| `--omit=dev` | npm i / ci | من غير devDependencies |
| `--force` | npm audit fix | يسمح بـ MAJOR |
| `--legacy-peer-deps` | npm i | تجاهل الـ peers (بحذر) |
| `--` | npm run / create | اللي بعدي للأمر |
| `-t / --template` | create-vite | القالب |
| `--eslint` | create-vite | ESLint بدل Oxlint (React) |
| `--no-interactive` | create-vite | من غير أسئلة |
| `-i` | create-vite | install + dev |
| `--host` | vite | افتح للشبكة |
| `--port` | vite | البورت |
| `--mode` | vite | ملف .env.\[mode\] |
| `--fix` | eslint | صلّح المضمون |
| `--check / --write` | prettier | افحص / اكتب |
| `--noEmit` | tsc | افحص بس |
| `-b` | tsc | Build mode للـ references |
| `--frozen-lockfile` | pnpm / bun | زي npm ci |
| `--env-file` | node | حمّل .env |

<a id="a1-2"></a>

## أ.2 جدول الرموز

**رموز SemVer و npm و CSS في الكتاب**

| الرمز | المعنى | مثال |
|---|---|---|
| `^1.2.3` | أي 1.x من 1.2.3 (الافتراضي) | `>=1.2.3 <2.0.0` |
| `~1.2.3` | Patches بس | `>=1.2.3 <1.3.0` |
| `1.2.3` | بالظبط | `-E` |
| `^0.2.3` | مع 0.x أضيق | `>=0.2.3 <0.3.0` |
| `1.x / 1.*` | أي 1 | `1.0.0 … 1.9.9` |
| `*` | أي نسخة | `خطر` |
| `>= <` | حدود صريحة | `>=1.2.3 <1.3.0` |
| `\|\|` | أو | `^5.2.0 \|\| ^6` |
| `1.3.0-beta.1` | Prerelease | `مش بتيجي مع ^` |
| `@scope/name` | Package تحت Scope | `@tailwindcss/vite` |
| `x@latest / x@next` | dist-tag | `vite@latest` |
| `--` | نهاية Flags بتاعة npm | `npm run dev -- --host` |
| `./ ../ /` | مسار نسبي/مطلق (مش Bare) | `./math.js` |
| `#id .class` | Specificity (1,0,0) / (0,1,0) | `#buy / .btn` |
| `:where() / :is()` | Specificity صفر / أعلى واحد | `:where(h1,p)` |
| `:has()` | الأب حسب الولاد | `li:has(a)` |
| `&` | Nesting (CSS و Sass) | `&:hover` |
| `$x` | متغير Sass (وقت البناء) | `$brand` |
| `--x / var(--x)` | Custom property (وقت التشغيل) | `var(--color-brand)` |
| `@layer` | طبقات الـ Cascade | `@layer base, components` |
| `%VITE_X%` | env في HTML | `<title>` |
| `○ ◐` | Static / Partial Prerender | `next build` |
