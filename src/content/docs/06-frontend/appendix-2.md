---
title: "قاموس المصطلحات"
description: "كل مصطلح مهم في الكتاب في سطر واحد، مترتب أبجدياً. ارجعله كل ما تقابل كلمة ومش فاكر معناها."
sidebar:
  order: 102
  label: "ملحق ب: القاموس"
---

كل مصطلح مهم في الكتاب في سطر واحد، مترتب أبجدياً. ارجعله كل ما تقابل كلمة ومش فاكر معناها.

### #

- **^ / ~**: Range: نفس الـ MAJOR / نفس الـ MINOR.

### A

- **Accessibility (a11y)**: إن أي حد يقدر يستخدم الموقع: بالكيبورد، أو Screen reader، أو تكبير، أو نظر ضعيف.

- **Accessibility tree**: شجرة بيبنيها المتصفح من الـ HTML فيها الدور والاسم والحالة لكل عنصر.

- **ARIA**: Attributes بتوصف الدور والحالة للتقنيات المساعدة. أول قاعدة: متستخدمهاش لو فيه عنصر HTML بيعمل نفس الحاجة.

### B

- **Bare specifier**: import بالاسم بس (`'react'`). المتصفح مايفهمهوش، والـ Bundler بيحلّه.

- **Baseline**: مؤشر إن ميزة الويب مدعومة في المتصفحات الرئيسية (Newly / Widely available).

- **Bundler**: أداة بتجمّع الـ Modules والـ Packages في ملفات قليلة مصغّرة (Rolldown و webpack).

### C

- **Cascade**: القواعد اللي بتحدد أنهي CSS يكسب: الأهمية، ثم inline، ثم Layers، ثم Specificity، ثم الترتيب.

- **CLS**: Cumulative Layout Shift: الحاجات بتتنطط قد إيه. جيد ≤ 0.1.

- **Code splitting**: تقسيم الكود لملفات بتتحمّل وقت الحاجة بـ `import()`.

- **CommonJS**: نظام Modules القديم بتاع Node: `require` و`module.exports`.

- **Container query**: `@container`: ستايل حسب عرض العلبة مش الشاشة.

- **Core Web Vitals**: تلات مقاييس لتجربة المستخدم: LCP و INP و CLS.

- **CSR**: Client-Side Rendering: HTML فاضي و JS بيبني الصفحة في المتصفح.

- **CSS Modules**: ملفات `*.module.css` أسماء الـ Classes فيها محلية وفريدة.

- **Custom property**: متغير CSS (`--x`) بيعيش في المتصفح ويتغير وقت التشغيل.

### D

- **Dependency**: Package مشروعك محتاجه. dev = أدوات، peer = «سطّبه انت»، optional = «لو فشل كمّل».

- **Deploy**: نشر الموقع: build ثم رفع dist على استضافة.

- **Derived state**: قيمة بتتحسب من الـ State بدل ما تتخزن (زي إجمالي السلة).

- **dist**: فولدر الناتج بتاع `npm run build`. ده الموقع اللي بيترفع.

- **dist-tag**: اسم بيشاور على نسخة: latest و next و beta.

### E

- **ES Modules (ESM)**: نظام الـ Modules الرسمي: `import` و`export`.

- **ESLint**: Linter: بيدوّر على الأخطاء والكود المشكوك فيه.

### F

- **Flat config**: ملف `eslint.config.js`، طريقة الإعداد الوحيدة في ESLint 10.

- **Framework**: كود بينادي كودك في أماكن محددة ويحدد الهيكل (Angular و Next.js).

### H

- **Hash (في اسم الملف)**: حروف من محتوى الملف (`index-Ba828Msq.js`) علشان الـ Cache.

- **HMR**: Hot Module Replacement: تبديل الملف المتعدّل في الصفحة من غير Reload.

- **Hoisting**: npm بيحط الـ Packages متسطّحة في أول مستوى من node\_modules.

- **Hydration**: ربط JS بـ HTML جاي جاهز من السيرفر علشان يبقى تفاعلي.

### I

- **INP**: Interaction to Next Paint: سرعة رد الصفحة على الضغط. جيد ≤ 200ms. بدل FID من مارس 2024.

- **ISR**: Incremental Static Regeneration: صفحة Static بتتجدد كل فترة.

### J

- **JSX**: HTML جوه JavaScript في React، بيتحول لـ JS.

### L

- **LCP**: Largest Contentful Paint: أكبر عنصر ظهر إمتى. جيد ≤ 2.5 ثانية.

- **Library**: كود انت اللي بتناديه وقت ما تحب (React بتوصف نفسها كده).

- **Lighthouse**: أداة من Chrome بتقيس الأداء والـ Accessibility والـ SEO (Lab data).

- **Lockfile**: `package-lock.json`: النسخ اللي اتسطبت بالظبط مع resolved و integrity.

### M

- **Meta-framework**: Framework فوق مكتبة UI بيضيف Routing و SSR (Next.js و Nuxt و SvelteKit).

### N

- **Node.js**: Runtime بيشغّل JavaScript برة المتصفح. كل أدوات الفرونت شغالة بيه.

- **node\_modules**: فولدر الـ Packages المتسطبة. مش بيترفع على Git.

- **npm**: مدير Packages Node: Registry + CLI + موقع.

- **npx**: يشغّل أمر من node\_modules/.bin أو ينزّله مؤقتاً. = npm exec.

### O

- **overrides**: مفتاح في package.json بيجبر نسخة Package جوه الشجرة.

### P

- **Package**: أي فولدر فيه package.json.

- **Partial Prerendering (PPR)**: جزء ثابت اتبنى وقت البناء وجزء ديناميكي بيتبعت Stream (◐ في Next.js).

- **Phantom dependency**: Package بتعمله import وهو مش في package.json بتاعك، موجود بالصدفة.

- **pnpm**: مدير Packages بمخزن واحد على الجهاز و Symlinks.

- **Prettier**: Formatter: بيوحّد شكل الكود.

- **Provenance**: إثبات إن الـ Package اتبنى من repo معين على CI (Attestation).

### R

- **Registry**: السيرفر اللي فيه كل الـ Packages: registry.npmjs.org.

### S

- **Semantic HTML**: استخدام العنصر اللي معناه مناسب (button و nav و main) مش div لكل حاجة.

- **SemVer**: MAJOR.MINOR.PATCH: بيكسر . ميزة . إصلاح.

- **Server Component**: Component في Next.js بيشتغل على السيرفر بس وكوده مش بيوصل للمتصفح.

- **Signals**: طريقة Reactivity: كل قيمة عارفة مين بيستخدمها (Vue و Svelte و Angular).

- **SPA**: Single Page Application: صفحة واحدة و JS بيغيّر المحتوى.

- **Specificity**: «دقة» الـ Selector: (IDs, Classes, Elements).

- **SSG**: Static Site Generation: الـ HTML بيتبني مرة واحدة وقت build.

- **SSR**: Server-Side Rendering: الـ HTML بيتبني على السيرفر مع كل Request.

- **Supply chain attack**: هجوم على Package موقعك بيعتمد عليه بدل موقعك نفسه.

### T

- **Tailwind CSS**: Utility classes في الـ HTML، وبيولّد اللي انت استخدمته بس.

- **Transitive dependency**: Package جه لأن Package تاني محتاجه.

- **Tree-shaking**: شيل الكود اللي مش متعمله import من الـ Bundle.

- **TypeScript**: JavaScript + أنواع، بيلاقي الأخطاء قبل التشغيل.

- **Typosquatting**: Package باسم قريب من مشهور فيه كود ضار.

### V

- **Virtual DOM**: نسخة في الذاكرة من الواجهة بيقارنها React علشان يحدّث اللي اتغير.

- **Vite**: Build tool: Dev server سريع بـ ESM و HMR و Build بـ Rolldown.

- **VITE\_**: بادئة المتغيرات اللي Vite بيحطها في كود المتصفح. يعني عامة.

### W

- **WCAG**: معايير الـ Accessibility الدولية (2.2).
