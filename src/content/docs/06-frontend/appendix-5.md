---
title: "الإجابات والحلول"
description: "جاوب بنفسك الأول، وبعدين قارن. لكل فصل: إجابات أسئلة المراجعة، وبعدها صح ولا غلط، وبعدها مفاتيح التحديات. أغلب التحديات تجارب عملية، فلو وصلت لنفس النتيجة بطريقة تانية فهي صح."
sidebar:
  order: 105
  label: "ملحق ه: الإجابات"
---

جاوب بنفسك الأول، وبعدين قارن. لكل فصل: إجابات أسئلة المراجعة، وبعدها صح ولا غلط، وبعدها مفاتيح التحديات. أغلب التحديات تجارب عملية، فلو وصلت لنفس النتيجة بطريقة تانية فهي صح.

#### الفصل 1: حكاية الفرونت إند

1. مثلاً بنك: تطبيق الموبايل والشاشات اللي بتشوفها = فرونت، والسيرفر اللي بيحسب الرصيد ويحفظ التحويلات = باك.
2. AJAX حل مشكلة «كل ضغطة = صفحة جديدة» (تجيب بيانات من غير Reload). jQuery حل مشكلة «كل متصفح بيتكلم DOM بطريقة مختلفة» (API واحد سهل).
3. الصفحة فاضية لحد ما JS ينزل (بطء أول ظهور)، و SEO ومعاينة الروابط ضعيفة، وBundle كبير.
4. لأن كل الأدوات (npm و Vite و ESLint و TypeScript) برامج JS بتشتغل على جهازك بـ Node.

<strong>صح ولا غلط:</strong> (1) غلط: أي كود في المتصفح مقروء. · (2) غلط: ده Server-rendered. الـ SPA بيغيّر الصفحة بـ JS. · (3) صح.

<strong>التحديات:</strong>

1. عدد قليل جداً من الـ Tags (title و h1 و a و dl و p…).
2. طلبات Fetch/XHR بتطلع والصفحة ماعملتش Reload.
3. View Source فيه محتوى = Server-rendered أو Meta-framework (‎/\_next/ = Next.js)، و div فاضي = SPA.

#### الفصل 2: خريطة الإيكوسيستم

1. المنصة (HTML و Web APIs)، ولغات فوق اللغة (TypeScript و JSX)، والأدوات على جهازك (npm و Vite)، والمكتبات (React و Tailwind)، والـ Meta-framework (Next.js و Nuxt)، والاستضافة (Vercel و Netlify).
2. انت بتنادي الـ Library وقت ما تحب. الـ Framework هو اللي بينادي كودك في أماكن محددة (Inversion of control).
3. لأن node\_modules فيه أدوات التطوير كلها (Vite و ESLint ونسخ لكل نظام)، والموقع بياخد بس الكود اللي اتعمله import بعد التصغير.
4. Routing و SSR/SSG و Data fetching على السيرفر وتحسين الصور والخطوط.

<strong>صح ولا غلط:</strong> (1) غلط: لازم يتحول لـ JS. · (2) غلط: أداة تطوير، بس الناتج بتاعها اللي بيتبعت. · (3) صح.

<strong>التحديات:</strong>

1. مثلاً React في UI، و Next.js في Meta-framework، و Jest في الجودة…
2. غالباً نسخ أحدث ونفس الـ scripts. قارن بنفسك.
3. ‎/\_next/static/ = Next.js، و /assets/index-xxxx.js = غالباً Vite.

#### الفصل 3: Semantic HTML

1. شجرة بيبنيها المتصفح من الـ HTML فيها الدور والاسم والحالة لكل عنصر. بتستخدمها Screen readers وأدوات الأتمتة.
2. article: حاجة مستقلة ليها معنى لوحدها (بوست، كارت منتج). section: جزء ليه عنوان من حاجة أكبر. div: للتنسيق بس من غير معنى.
3. مش بيوصله Tab، ومش بيشتغل بـ Enter/Space، ومالوش Role «button» في الـ Accessibility tree.
4. المتصفح يدخل Quirks mode وحسابات CSS زي الـ Box model ممكن تختلف.

<strong>صح ولا غلط:</strong> (1) غلط: العناوين للهيكل، والحجم بالـ CSS. · (2) غلط: alt="" = «صورة زينة، تجاهلها». من غير alt بيقرا اسم الملف. · (3) صح: الافتراضي type="submit".

<strong>التحديات:</strong>

1. قارن بالحل في الفصل.
2. كل Landmark ظاهر بدوره (banner و navigation و main و complementary و contentinfo).
3. مثلاً: div بيتداس، وصور من غير alt، وخانات من غير label، وتباين ضعيف، و Focus مش باين.

#### الفصل 4: Forms

1. id للربط جوه الصفحة (label for و CSS و JS). name هو المفتاح اللي بيتبعت مع البيانات.
2. submit بيلقط Enter وزرار الإرسال وأي طريقة إرسال، وبيدّيك الـ Validation بتاع المتصفح.
3. :invalid من أول ما الصفحة تفتح. :user-invalid بعد ما المستخدم يتعامل مع الخانة.
4. new-password في التسجيل وتغيير الباسورد (علشان يقترح باسورد قوي)، و current-password في تسجيل الدخول.

<strong>صح ولا غلط:</strong> (1) غلط: من غير name مش بيتبعت. · (2) صح: pattern مابيتشيكش على خانة فاضية. · (3) غلط: أي حد يقدر يبعت بـ curl، فالسيرفر لازم يشيك.

<strong>التحديات:</strong>

1. autocomplete="username" و "current-password".
2. ‎?q=…&sort=… في الـ URL، وبعدين preventDefault و fetch بـ FormData.
3. ‎setCustomValidity(a === b ? '' : 'Passwords do not match').

#### الفصل 5: Accessibility

1. حد في مواصلات من غير سماعات، أو في مكان دوشة، بيقرا الـ Captions.
2. لأنه بيظهر للي بيستخدم الكيبورد بس، ومن غيره مستخدم الكيبورد مش عارف هو فين.
3. «متستخدمش ARIA لو فيه عنصر HTML بيعمل نفس الحاجة». الغلط بيوعد Screen reader بسلوك مش موجود (WebAIM: صفحات فيها ARIA فيها أخطاء أكتر).
4. لرسالة بتتغير من غير ما الـ Focus يروحلها: نتيجة إرسال، عدد أخطاء، «اتضاف للسلة».

<strong>صح ولا غلط:</strong> (1) غلط: لازم تكتب الـ Keyboard handlers بنفسك. · (2) غلط: بيخليه يستقبل Focus بالـ JS بس. · (3) غلط: بتمسك جزء بس (فصل 24).

<strong>التحديات:</strong>

1. أول عنصر في الـ body، ويظهر مع الـ Focus.
2. aria-expanded true/false و hidden على القايمة.
3. الأخطاء بتتقري مع كل خانة، والملخص بيتقري بعد الإرسال.

#### الفصل 6: الـ Cascade

1. الأهمية والمصدر، ثم الـ inline style، ثم الـ Layers، ثم الـ Specificity، ثم الترتيب في الملف.
2. (1,2,3): ‎#menu = 1، و .active و :hover = 2، و ul و li و a = 3.
3. لأن المتصفح نفسه عامل قاعدة لون للـ a، وأي قاعدة على العنصر نفسه بتكسب الوراثة.
4. content-box: ‎300 + 20 + 4 = 324px. border-box: ‎300px.

<strong>صح ولا غلط:</strong> (1) غلط: أي ID بيكسب أي عدد Classes. · (2) صح: زي ما شفنا في #buy. · (3) غلط: margin مش بيتورث.

<strong>التحديات:</strong>

1. اقرا القاعدة الكسبانة فوق في Styles.
2. ‎@layer reset, base, components; والـ .btn بيكسب.
3. ‎:where(h1, h2, h3, p) { margin: 0 } (Specificity صفر).

#### الفصل 7: Flexbox

1. space-between: مفيش مسافة على الأطراف. space-evenly: نفس المسافة بين الكل وعلى الأطراف.
2. flex: 1 = ‎1 1 0% (يبدأ من صفر ويتقسّم بالتساوي). flex: auto = ‎1 1 auto (يبدأ من حجم المحتوى).
3. لأنه بيغيّر الترتيب اللي بتشوفه بس، والـ Tab والـ Screen reader بيمشوا بترتيب الـ HTML.
4. body: ‎display:flex; flex-direction:column; min-height:100svh و main { flex: 1 }.

<strong>صح ولا غلط:</strong> (1) صح. · (2) غلط: الولاد المباشرين بس. · (3) صح.

<strong>التحديات:</strong>

1. justify-content: space-between، والاتجاه بيقلب لوحده.
2. آخر كارت بيتمط على السطر كله، و Grid بيمنع ده.
3. —

#### الفصل 8: Grid

1. Flex بيوزّع كل سطر لوحده، فآخر سطر بيكبّر عناصره. Grid أعمدة ثابتة لكل الصفوف.
2. «العمود عمره ما يقل عن 120px، ولو فيه مساحة ياخد نصيبه منها».
3. auto-fill بيسيب أعمدة فاضية لو العناصر قليلة. auto-fit بيقفلها فالعناصر تتمط.
4. ‎"header header header" "left main right" "footer footer footer".

<strong>صح ولا غلط:</strong> (1) غلط: Grid بس. · (2) غلط: Responsive لوحدها. · (3) صح.

<strong>التحديات:</strong>

1. عدد الأعمدة بيتغير مع العرض.
2. Media query واحدة بتغيّر grid-template-areas لعمود واحد.
3. dense بيملا الفراغات بعناصر بعدين.

#### الفصل 9: Responsive

1. الموبايل كان بيعرض الصفحة كأنها 980px ويصغّرها (من أيام iPhone الأول). السطر بيقول «العرض = عرض الجهاز».
2. لأن rem بيحترم حجم الخط اللي المستخدم اختاره في الإعدادات.
3. ‎(min-width: 640px) and (max-width: 1023.98px) و ‎(640px \<= width \< 1024px).
4. لما الكومبوننت بيظهر في أماكن بعروض مختلفة في نفس الشاشة (سايدبار ومحتوى).

<strong>صح ولا غلط:</strong> (1) غلط: الصفحة بتتعرض كأنها 980px. · (2) غلط: بيسأل عن عرض الـ Container. · (3) غلط: تأخّر الـ LCP. Lazy للي تحت الشاشة بس.

<strong>التحديات:</strong>

1. من غير السطر الكلام صغير جداً.
2. Mobile-first بـ min-width.
3. كل نسخة حسب عرض علبتها.

#### الفصل 10: CSS الحديث

1. ‎el.style.setProperty('--brand', 'red'). متغيرات Sass بتختفي وقت البناء فمفيش حاجة تتغير.
2. li:has(a).
3. padding-inline-start: 1rem; border-inline-end: 1px solid; text-align: start;
4. Newly: كل المتصفحات الرئيسية دعمتها مؤخراً. Widely: بقالها 30 شهر على الأقل.

<strong>صح ولا غلط:</strong> (1) غلط: بتفضل في المتصفح. · (2) صح. · (3) غلط: بيتجاهل السطر ده بس.

<strong>التحديات:</strong>

1. ‎.danger { --brand: … } والزرار نفسه يستخدم var(--brand).
2. ‎\[data-theme="dark"\] { --bg: …; --text: … }.
3. ‎form:has(:user-invalid) button { … }.

#### الفصل 11: ليه Frameworks

1. Imperative: «امشي يمين، اطلع الدور التالت…». Declarative: «عايز أوصل الشقة دي».
2. لأن innerHTML بيمسح الخانة ويعمل واحدة جديدة مع كل حرف، فالـ Focus بيروح لـ BODY.
3. لأن الرقم المتخزن ممكن ينسى يتحدّث ويبقى غلط. احسبه من الـ State كل مرة.
4. Virtual DOM: يعيد تشغيل الكومبوننت ويقارن. Signals: كل قيمة عارفة مين بيستخدمها وتحدّثه هو بس.

<strong>صح ولا غلط:</strong> (1) غلط. · (2) صح. · (3) غلط.

<strong>التحديات:</strong>

1. الخانة بتفقد الـ Focus.
2. حدّث h1 و ul بس.
3. النسخة التانية أقصر وأسهل تتصلّح.

#### الفصل 12: مقارنة الـ Frameworks

1. React: useState، و Vue: ref، و Svelte: ‎$state، و Angular: signal.
2. JSX = JavaScript فيها HTML (تكتب map و ternary). Templates = HTML فيها إضافات (v-if و {#if}).
3. لأن التطبيق الحقيقي كوده أكبر من الـ Framework، والفريق والإيكوسيستم والوظايف بيفرقوا أكتر.
4. Components و Props، و State و Derived state، و Events، و Conditional/List rendering.

<strong>صح ولا غلط:</strong> (1) غلط: الـ Compiler بيحوّلها. · (2) صح. · (3) غلط: الحجم الثابت حاجة، والأداء بيعتمد على التطبيق.

<strong>التحديات:</strong>

1. شغال على 5173.
2. React: react و react-dom في dependencies، والباقي devDependencies.
3. —

#### الفصل 13: Node و npm

1. لأن vite بيعتمد على Packages وهما بيعتمدوا على غيرهم: Transitive dependencies.
2. انت طلبت نسخة بالظبط، و npm كتب ‎^4.17.20 (أي 4.x من 4.17.20 وطالع).
3. علشان كل مشروع ياخد نسخته المكتوبة في package.json، والفريق ياخد نفس النسخة.
4. بتقول لـ npm «اللي بعدي مش ليك»، فـ ‎--template يوصل لـ create-vite.

<strong>صح ولا غلط:</strong> (1) غلط: devDependencies. · (2) غلط: فيه Packages Native لكل نظام. · (3) صح.

<strong>التحديات:</strong>

1. v24.x و 11.x أو 12.x، و /opt/homebrew أو فولدر nvm، و registry.npmjs.org.
2. Apple Silicon: darwin-arm64، و Intel: darwin-x64.
3. من غير Lockfile ممكن تاخد نسخ أحدث جوه الـ Range.

#### الفصل 14: package.json

1. علشان npm يرفض ينشره بالغلط على الـ Registry العام.
2. prebuild ثم build. لو prebuild فشل (exit مش صفر)، build مش هيشتغل.
3. dependency: الـ Package بيسطّبه لنفسه. peer: «لازم انت تسطّبه»، علشان الكل يستخدم نسخة واحدة (react).
4. لما Package جوه الشجرة نسخته فيها مشكلة وصاحبه مش هيحدّث. الخطر: الـ Package الأب ماتجرّبش مع النسخة دي.

<strong>صح ولا غلط:</strong> (1) غلط: Cannot use import statement outside a module. · (2) غلط: npm بياكله، لازم ‎--. · (3) صح.

<strong>التحديات:</strong>

1. React و react-dom تطبيق، و vite و eslint أدوات.
2. ‎"prebuild": "rm -rf dist".
3. ‎"type": "module" أو غيّر الامتداد لـ .mjs.

#### الفصل 15: SemVer و Lockfile

1. مفيش Lockfile متوحد، فكل واحد خد نسخة مختلفة جوه الـ ^. الـ Lockfile بيقفل النسخة لكل الناس.
2. لأ: مع 0.x الـ ^ مابيغيرش الـ MINOR، فيقبل 0.4.x بس.
3. لما الـ Latest برة الـ Range (MAJOR جديد، أو ~ ومحتاج MINOR جديد).
4. لأنه بيلتزم بالـ Lockfile بالحرف، وبيفشل لو مش متوافق مع package.json، وبيبدأ من node\_modules نضيف.

<strong>صح ولا غلط:</strong> (1) صح. · (2) غلط: ~ = Patches بس. · (3) غلط: بيغيّر الـ Lockfile بس. · (4) غلط: EUSAGE.

<strong>التحديات:</strong>

1. Current/Wanted/Latest لكل Package.
2. ‎npx semver -r "^2.4.1" 2.9.0 بيرجّع 2.9.0، و ~2.4.1 مع 2.5.0 مايرجّعش حاجة.
3. ‎npm ci يفشل بـ EUSAGE، والحل npm install والـ diff يبين النسخة الجديدة.

#### الفصل 16: بدائل npm والأمان

1. import لـ Package مش في package.json بتاعك بس موجود بالصدفة لأن حد تاني جابه. pnpm مابيحطش غير اللي طلبته في node\_modules.
2. ‎pnpm i --frozen-lockfile و bun install --frozen-lockfile، و pnpm dlx create-vite و bunx create-vite.
3. لأن الـ Lockfile فيه النسخة القديمة بالـ integrity، و npm ci مش هيجيب نسخة جديدة.
4. fix: جوه الـ Range. ‎--force: ممكن MAJOR جديد يكسر المشروع.

<strong>صح ولا غلط:</strong> (1) غلط: استخدم pnpm. · (2) غلط: الثغرات المعروفة بس. · (3) صح.

<strong>التحديات:</strong>

1. عدد الثغرات وعدد الـ signatures والـ attestations.
2. المرة التانية reused أكتر و downloaded أقل.
3. ‎install-scripts approve esbuild ثم npm rebuild، وبعدها النسخة بتطبع.

#### الفصل 17: Modules و Bundlers

1. الـ Modules بتتحمّل بقواعد CORS، و file:// الـ Origin بتاعه null.
2. main.js يستورد app.js، و app.js يستورد button.js: المتصفح مايعرفش button غير بعد ما app ينزل.
3. الأول جوه نفس الملف. التاني (Dynamic) ملف لوحده بيتحمّل وقت الحاجة.
4. Hash من المحتوى علشان الـ Cache: الاسم بيتغير لما المحتوى يتغير بس.

<strong>صح ولا غلط:</strong> (1) غلط: Bare specifier. · (2) صح. · (3) صح.

<strong>التحديات:</strong>

1. index و main و math (وغالباً favicon).
2. CORS error من origin 'null'.
3. Hash بتاع chart اتغير، وغالباً index كمان لأنه بيشاور على اسم chart.

#### الفصل 18: Vite

1. لأنه مش بيعمل Bundle في الـ Dev، بيقدّم ESM للمتصفح ملف ملف.
2. src/assets (بـ import، و Hash ويتحذف لو مش مستخدم). public لملف محتاج اسم ثابت (favicon و robots.txt).
3. CSS بيعمل accept للـ HMR، و counter.js لأ، فـ Vite عمل Reload.
4. base غلط (مسارات /assets)، أو مسار ملف في public غلط، أو env مش موجود وقت البناء.

<strong>صح ولا غلط:</strong> (1) غلط. · (2) غلط. · (3) صح.

<strong>التحديات:</strong>

1. ‎/@vite/client بيفتح WebSocket.
2. رابط Network من سطر الـ Terminal.
3. file:// و Modules = CORS. preview بيحلها.

#### الفصل 19: env و .env

1. لأنه مش بادئ بـ VITE\_، فـ Vite رفض يحطه في كود المتصفح.
2. build: .env.production (الـ mode أقوى). dev: .env لأن الـ mode development.
3. سيرفر وسيط (Express أو Serverless function) معاه المفتاح، والمتصفح يكلّم السيرفر.
4. import.meta.env في كود Vite وقيمه بتتكتب وقت البناء. process.env في Node وقت التشغيل على السيرفر.

<strong>صح ولا غلط:</strong> (1) غلط: VITE\_ = في الـ Bundle. · (2) غلط: نص. · (3) غلط: لازم ‎npm run build -- --mode staging.

<strong>التحديات:</strong>

1. ‎%VITE\_APP\_TITLE% في HTML.
2. ‎"build:staging": "vite build --mode staging".
3. grep هيلاقيها في dist/assets.

#### الفصل 20: CSS Ecosystem

1. Tailwind بيولّد الـ Classes اللي لقاها مكتوبة بس. الفخ: أسماء متركبة بـ template string.
2. Sass وقت البناء ويختفي. Custom property في المتصفح وتتغير بـ JS و Media queries.
3. shadcn/ui كود بيتنسخ في مشروعك وتعدّله. MUI Package بشكل جاهز.

<strong>صح ولا غلط:</strong> (1) غلط: ‎@import و @theme. · (2) غلط: Hash مختلف لكل ملف. · (3) غلط: بيختفي وقت البناء.

<strong>التحديات:</strong>

1. ‎p-4 = 1rem.
2. ‎.bg-brand و hover بنسبة شفافية.
3. الأرقام بتختلف، و Tailwind بيضيف Reset و Theme فبيبقى أكبر في كارت واحد، والفرق بيقل مع كبر المشروع.

#### الفصل 21: TypeScript

1. لأن Vite بيشيل الأنواع ومابيفحصش.
2. src/App.tsx السطر 8 العمود 5، و TS2322 = نوع مش متوافق.
3. React مكتوبة JS وأنواعها في DefinitelyTyped. Vite بيجيب أنواعه معاه.

<strong>صح ولا غلط:</strong> (1) غلط. · (2) غلط: بيكمّل ويعرض الصفحة. · (3) غلط: ERR\_UNSUPPORTED\_TYPESCRIPT\_SYNTAX.

<strong>التحديات:</strong>

1. خط أحمر تحت القيمة.
2. npm run build يفشل بـ exit 2، و vite build ينجح.
3. 7 غالباً أسرع، والفرق بيبان في المشاريع الكبيرة.

#### الفصل 22: Rendering و Next.js

1. المنيو SSG أو ISR (تتغير نادراً و SEO مهم). صفحة الطلبات SSR أو CSR ورا Login.
2. لأنها اتبنت وقت البناء ومتخزنة (cacheLife minutes)، فالوقت = وقت آخر بناء.
3. ○ Static كاملة وقت البناء. ◐ جزء ثابت وجزء ديناميكي بيتبعت Stream.

<strong>صح ولا غلط:</strong> (1) غلط. · (2) غلط. · (3) صح.

<strong>التحديات:</strong>

1. Vite: div فاضي. Next.js: المحتوى.
2. ○ للمسارات اللي في generateStaticParams.
3. ‎/now بيتغير كل طلب، و /news بعد الدقيقة: أول طلب بيرجّع القديم ويبني الجديد في الخلفية، والطلب اللي بعده بيجيب الجديد.

#### الفصل 23: ESLint و Prettier

1. error بيرجّع exit 1 ويوقف الـ CI، و warn لأ.
2. علشان يعرف المتغيرات الجاهزة في المتصفح (document و window) أو Node.
3. لأن أي نسخة ممكن تغيّر التنسيق، فكل الفريق لازم نفس النسخة.

<strong>صح ولا غلط:</strong> (1) غلط: ده شغل ESLint. · (2) غلط: المضمون بس. · (3) صح.

<strong>التحديات:</strong>

1. الملف بيتنسق مع الحفظ.
2. —
3. == بيعمل تحويل أنواع (0 == '' = true)، و === بيقارن من غير تحويل.

#### الفصل 24: الأداء والـ a11y

1. لأن الـ Dev مش مضغوط وفيه HMR وملفات كتير، فالأرقام مش حقيقية.
2. SSR/SSG (Next.js)، و Code splitting، وصورة أصغر بصيغة حديثة، و Preload للصورة الأساسية.
3. div بيتداس، وinput بـ placeholder بس، ونص لينك «click here»، وترتيب Focus غلط.

<strong>صح ولا غلط:</strong> (1) غلط: TBT بدله. · (2) صح. · (3) غلط.

<strong>التحديات:</strong>

1. Performance و Accessibility و Best Practices و SEO.
2. lang و alt و تباين و aria-label و main، وبعدين button و label.
3. Field data محتاجة زيارات كفاية من Chrome.

#### الفصل 25: النشر

1. push ثم npm ci ثم build ثم رفع dist ثم رابط.
2. تجرّب كل تغيير على رابط لوحده قبل ما يوصل الـ Production.
3. افتح Network، ولو /assets 404 ظبط base لاسم الـ repo واعمل push.

<strong>صح ولا غلط:</strong> (1) غلط: ملفات ثابتة. · (2) غلط: ‎/ لأنه على جذر الدومين. · (3) صح.

<strong>التحديات:</strong>

1. preview زي dev.
2. —
3. Pages: ‎/my-links/ و Vercel: ‎/.

#### الفصل 26: المشروع النهائي

1. create-vite: index.html و .gitignore و favicon، و Tailwind: vite.config.js و style.css، والصفحة: main.js و links.js و .env، و Lint: eslint.config.js و .prettierrc و .prettierignore، و package.json و Lockfile مع كل install، و deploy.yml للنشر.
2. امسح base (أو خليه ‎/)، و Import في Vercel، وزوّد VITE\_APP\_TITLE لو مش هترفع .env.
3. .env فيه قيم عامة، و .env.local للأسرار والـ .gitignore فيه ‎\*.local.

<strong>التحديات:</strong>

1. الأرقام قريبة، والـ Hashes ممكن تختلف.
2. ‎dark:bg-slate-900 و dark:text-slate-100.
3. Lighthouse على الرابط الحقيقي.

#### الفصل 27: الـ Roadmap

1. غالباً Vite (18) و env (19) و Deploy (25).
2. Vite بدل create-react-app (فصل 18)، و Tailwind v4 بـ ‎@import و @theme (فصل 20).
