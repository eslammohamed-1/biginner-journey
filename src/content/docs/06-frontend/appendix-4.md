---
title: "المصادر ومنهجية التحقق"
description: "إزاي اتجمعت المعلومات في الكتاب ده، وإيه اللي اتجرب فعلاً وإيه اللي متجربش، علشان تعرف تثق في إيه وتراجع إيه بنفسك."
sidebar:
  order: 104
  label: "ملحق د: المصادر والتحقق"
---

إزاي اتجمعت المعلومات في الكتاب ده، وإيه اللي اتجرب فعلاً وإيه اللي متجربش، علشان تعرف تثق في إيه وتراجع إيه بنفسك.

<a id="a4-1"></a>

## د.1 تاريخ اللقطة

كل المعلومات اتاخدت من الدوكيومنتيشن الرسمي (MDN و web.dev و npm و Node و Vite و Tailwind و ESLint و Prettier و TypeScript و Next.js و GitHub و Netlify و Vercel) يوم **23 أكتوبر 2026**، وكل اللينكات اللي في ملحق الروابط اتفتحت في نفس اليوم. الإيكوسيستم ده من أسرع الحاجات تغيّراً، فلو أمر أو رسالة عندك اختلفت عن الكتاب، الدوكيومنتيشن والنسخة اللي عندك هما الصح.

<a id="a4-2"></a>

## د.2 النسخ اللي اتجربت عليها

- Node.js 24.22.1 (LTS) و npm 11.19.1 (اللي جاي معاه)، و npm 12.2.1 بـ `npx npm@12` لتجارب فصل 16.
- create-vite 9.3.1 و Vite 8.3.5، و Tailwind CSS 4.3.3، و sass 1.106.1.
- ESLint 10.13.0 و @eslint/js 10.0.1 و eslint-config-prettier 10.1.8 و Prettier 3.9.10.
- TypeScript 6.0.3 (اللي في قالب create-vite) و TypeScript 7.0.2 للمقارنة.
- Next.js 16.4.2 (create-next-app 16.4.2)، و React 19.3.1 في قوالب Vite (و 19.3.0 في قالب Next).
- pnpm 12.15.0 و Bun 1.4.4 (بـ npx)، و Lighthouse 13.5.0، و Google Chrome على Linux لتجارب المتصفح.
- Vue 3.5 و Svelte 5 و Angular 22 لمقارنة فصل 12.

<a id="a4-3"></a>

## د.3 إيه اللي اتجرب وإزاي

- **كل أمر في الكتاب ليه Output اتشغّل فعلاً**، والخرج منقول منه (أحياناً مختصر بـ `…`). المسارات اللي فيها `/workspace` أو `/tmp` من جهاز التجربة.
- تجارب المتصفح (Accessibility tree، و Forms، و الـ Cascade، و HMR، و ESM و CORS) اتعملت في Chrome حقيقي بـ Puppeteer، والقيم المحسوبة منقولة منه.
- أحجام الـ Builds من Output بتاع Vite نفسه. حجم Angular في فصل 12 تقدير من Output الـ CLI، مش نفس طريقة القياس بالظبط.
- <strong>البيئة Linux مش macOS.</strong> أوامر الماك (Homebrew، و `/opt/homebrew`، و `⌘`، و VoiceOver، و Packages زي `darwin-arm64` و fsevents) مكتوبة من الدوكيومنتيشن ومن معرفة سلوك npm، ومتوقع فروق صغيرة: اسم الـ Package الخاص بالنظام في `node_modules`، ورسالة zsh بدل bash، ومكان `npm prefix -g`.
- <strong>ماعملناش Deploy حقيقي.</strong> النشر حاجة عامة بحسابك. خطوات GitHub Pages و Netlify و Vercel من الدوكيومنتيشن الرسمي، والـ Workflow اتكتب واتجرّب محلياً (lint و build و preview) بس ماتشغّلش على GitHub.

<a id="a4-4"></a>

## د.4 حاجات جديدة أو بتتغير

- npm 12 (يوليو 2026) هو `latest` على الـ Registry، بس Node 24 لسه جاي معاه npm 11. خطوات `allowScripts` ممكن تتغير في نسخ 12.x الجاية (الدوكيومنتيشن بيذكر `approve-scripts` كمان).
- TypeScript 7 جديدة، والقوالب لسه على 6.0، وأدوات بتعتمد على API بتاع TS محتاجة وقت.
- Cache Components في Next.js 16.4 شغالة افتراضياً في المشاريع الجديدة، والـ APIs بتاعتها (`use cache` و `cacheLife`) لسه بتتطور.
- قوالب React في create-vite بقت Oxlint افتراضياً، و Lighthouse فيه Category جديدة اسمها Agentic Browsing.

<a id="a4-5"></a>

## د.5 ملاحظات لقيناها وإحنا بنجرّب

- `npm init -y` في npm 11 بيكتب `"type": "commonjs"`، فـ `import` بيضرب Error في Node.
- `npm run x --flag` من غير `--`: npm بياكل الـ Flag.
- متغير `VITE_` في `.env.local` بيوصل للـ Bundle عادي. `.local` بيحمي من Git بس.
- Lighthouse ماشافش `div onclick` ولا `input` بـ placeholder من غير label.
- `vite build` لوحده بيعدّي Type errors، و `tsc` هو اللي بيوقفها.
