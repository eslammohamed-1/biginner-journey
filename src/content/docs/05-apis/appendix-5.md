---
title: "الإجابات والحلول"
description: "جاوب بنفسك الأول، وبعدين قارن. لكل فصل: إجابات أسئلة المراجعة، وبعدها صح ولا غلط، وبعدها مفاتيح التحديات. أغلب التحديات تجارب عملية، فلو وصلت لنفس النتيجة بطريقة تانية فهي صح."
sidebar:
  order: 105
  label: "ملحق ه: الإجابات"
---

جاوب بنفسك الأول، وبعدين قارن. لكل فصل: إجابات أسئلة المراجعة، وبعدها صح ولا غلط، وبعدها مفاتيح التحديات. أغلب التحديات تجارب عملية، فلو وصلت لنفس النتيجة بطريقة تانية فهي صح.

## الفصل 1: حكاية الـ API

1. الـ Endpoint (العنوان)، والـ Input المطلوب (Parameters و Body)، وشكل الـ Output، والأخطاء الممكنة وأكوادها. (وكمان الـ Auth والحدود.)
2. لأن الـ Shell بيعتبر `&` "شغّل الأمر في الخلفية"، فالـ URL بيتقطع عندها والباقي بيتنفذ كأمر تاني. علامات التنصيص بتخلي الـ URL كله كلمة واحدة.
3. Library API بتنادي Functions جوه نفس البرنامج (`document.querySelector` أو `Array.prototype.map`). Web API بتكلّم برنامج تاني على الشبكة بـ HTTP (Frankfurter و GitHub).
4. إن الـ Consumers متفقين معاه على العقد بس (الـ URLs وشكل الـ JSON)، مش على الكود جوه. فطالما العقد ثابت، يقدر يغيّر اللغة والـ Database براحته.

<strong>صح ولا غلط:</strong> (1) غلط: أي تغيير في الـ HTML بيكسره، والـ API عقد ثابت. · (2) صح: دي Browser API (Library API). · (3) غلط: Web APIs في MDN هي APIs المتصفح (fetch و DOM)، مش بناء سيرفر.

<strong>التحديات:</strong>

1. نفس الشكل بس الأرقام بالـ EUR.
2. مثلاً `login` و`id` و`public_repos` و`followers` و`created_at`.
3. v1 مفيهاش EGP وشكل الرد مختلف (base و rates)، والـ Docs بتوصّي بـ v2.

## الفصل 2: أنواع الـ APIs

1. Over-fetching: محتاج اسم الدولة بس والرد فيه 50 Field. Under-fetching: محتاج الدولة وعملتها وجيرانها فبتعمل 3 طلبات.
2. لأن كل Resource في REST ليه URL و GET، فالـ Cache بيخزّن بالـ URL. في GraphQL كله POST على URL واحد.
3. Polling = انت بتسأل كل شوية. Webhook = هو بيبعتلك. Polling لما الخدمة مفيهاش Webhooks أو سيرفرك مش متاح من برّه.
4. SSE: البيانات رايحة اتجاه واحد (من السيرفر)، وشغالة على HTTP عادي وبتعيد الاتصال لوحدها.

<strong>صح ولا غلط:</strong> (1) غلط: Endpoint واحد (`/graphql`). · (2) غلط: الأخطاء بترجع جوه `errors` مع 200. · (3) صح.

<strong>التحديات:</strong>

1. `{ country(code: "EG") { name continent { name } } }`.
2. `query($c: ID!) { country(code: $c) { name } }` وغيّر `variables`.
3. `/countries/EG` ثم `/countries/EG/languages`… يعني طلبين أو أكتر بدل واحد.

## الفصل 3: تشريح طلب ورد

1. `Accept` في الطلب: "عايز الرد بالشكل ده". `Content-Type`: "الـ Body اللي معايا بالشكل ده"، وبيتبعت في الطلب (لو فيه Body) وفي الرد.
2. لأن المحتوى ممكن يكون اتغير فعلاً، أو الطلب مختلف في Header موجود في `Vary` (زي Accept أو Authorization) فالـ ETag بتاع نسخة تانية مش هيطابق.
3. غالباً الـ URL غلط أو في Proxy/Login page أو Error page من سيرفر تاني. اقرا أول سطور النص.
4. ID للطلب ده بالذات، تبعته للـ Support علشان يلاقوه في الـ Logs.

<strong>صح ولا غلط:</strong> (1) غلط: 304 من غير Body. · (2) غلط: ده Unix timestamp لوقت التصفير. · (3) غلط: الاسم ممكن يتغير (Rename)، و`id` ثابت.

<strong>التحديات:</strong>

1. `remaining` بيقل 1 مع كل طلب.
2. `curl -i -H 'If-None-Match: "…"'` بالـ ETag من الرد الأول.
3. رجّع 415، والمتوقع حسب HTTP هو 406 Not Acceptable.

## الفصل 4: JSON بالتفصيل

1. `.5`←`0.5`، `+1`←`1`، `01`←`1`، `NaN`←`null`، `0x1F`←`31`.
2. لأن الأرقام في JS بتفقد الدقة بعد 2<sup>53</sup>، فالـ ID ممكن يتغير وهو بيتقري.
3. آخر قيمة بتكسب. والـ RFC بيقول السلوك مش متوقع بين الـ Parsers، فممكن سيستم تاني ياخد الأولى.
4. `.json` قيمة واحدة. `.jsonl` كل سطر JSON لوحده، فتقدر تزوّد سطر وتقرا سطر سطر.

<strong>صح ولا غلط:</strong> (1) صح: من RFC 8259 أي قيمة ينفع تبقى JSON text. · (2) غلط: لازم `0.99`. · (3) غلط: UTF-8 عادي مسموح، و`\u` اختياري.

<strong>التحديات:</strong>

1. مثلاً `{"title": "...", "year": 2024, "authors": ["..."], "available": true, "price": 250, "isbn": "9780..."}`. والـ ISBN String لأنه كود مش رقم (وممكن يبدأ بصفر أو فيه X).
2. `"a \"q\"\nb \\ \u0645"`.
3. مسموح للـ Parser يحط حدود (حجم، وعمق، وطول أرقام)، فمتفترضش إن أي JSON صحيح هيتقري في كل مكان.

## الفصل 5: JSON في JavaScript

1. `undefined` بيختفي، و`null` بيتبعت. للسيرفر: الغياب = "متغيرش"، و null = "امسح" (Merge Patch).
2. `JSON.stringify(user, (k, v) => k === "password" ? undefined : v)`.
3. الـ Body فاضي (204 أو Error من غير Body) أو الرد اتقطع.
4. لأن أي `"` أو سطر جديد في القيم هيكسر الـ JSON، وممكن حد يحقن Fields.

<strong>صح ولا غلط:</strong> (1) غلط: `'{}'`. · (2) غلط: بيرجّع String. · (3) غلط: JSON مفيهوش تعليقات (npm بيرفضه).

<strong>التحديات:</strong>

1. الرسايل بتطابق الجدول.
2. `if (!res.headers.get("content-type")?.includes("json")) throw new Error((await res.text()).slice(0,100))`.
3. Regex زي `/^\d{4}-\d{2}-\d{2}T/`، والخطر إن نص عادي يتحول لـ Date غلط. الأحسن تحوّل Fields معروفة بالاسم.

## الفصل 6: jq

1. `.[]` بيطلّع العناصر واحدة واحدة (Stream). `[ … ]` بيجمّع اللي جواه في Array.
2. `.[] | select(.email | endswith(".biz")) | .name`.
3. لأن `--arg` بيعمل Escape صح لأي قيمة، فمفيش JSON مكسور.
4. لما عايز النص من غير علامات تنصيص (علشان تستخدمه في Shell أو ملف).

<strong>صح ولا غلط:</strong> (1) غلط: ده Alternative operator (قيمة بديلة). · (2) غلط: بيرجّع null. · (3) غلط: String، والرقم بـ `--argjson`.

<strong>التحديات:</strong>

1. `jq -r '.abilities[].ability.name' pika.json`.
2. `group_by(.userId) | map({user: .[0].userId, percent: (map(select(.completed)) | length) * 100 / length})`.
3. `jq -r '.[] | [.number, .title, .user.login, ([.labels[].name] | join(";"))] | @csv'`.

## الفصل 7: JSON Schema

1. توثيق، و Types، و Forms، و Mock data، وعقد بين الفرق، و Structured output للموديلات.
2. `{"type":"object","required":["email"],"properties":{"email":{"type":"string","format":"email"},"age":{"type":"integer","minimum":13,"maximum":120}}}`.
3. علشان الـ Client ياخد كل الأخطاء مرة واحدة ويصلّحها كلها.
4. `anyOf`: واحد على الأقل يطابق. `oneOf`: واحد بس بالظبط.

<strong>صح ولا غلط:</strong> (1) غلط: الإجباري في `required`. · (2) صح. · (3) غلط: Annotation بس، إلا لو المكتبة اتظبطت تحطه (useDefaults).

<strong>التحديات:</strong>

1. زي الفصل: الملف الصح بيعدّي والغلط بيطلّع 7 أخطاء.
2. كل الـ 200 بيعدّوا.
3. هيفشل لأن `lat` String في JSONPlaceholder. يعني البيانات الوهمية مش متصممة بعناية للأنواع.

## الفصل 8: curl و HTTPie والأدوات

1. `curl --json '{"title":"Hi","userId":1}' URL` و`http POST URL title=Hi userId:=1`.
2. الاتنين Exit code 22، بس `--fail-with-body` بيطبع الـ Body (فيه رسالة الخطأ).
3. لأنه بيعمل Encoding للمسافات و`&` والعربي صح.
4. فيه Cookies وتوكنات الجلسة بتاعتك.

<strong>صح ولا غلط:</strong> (1) غلط: form-urlencoded. · (2) غلط: String، والرقم بـ `:=`. · (3) صح.

<strong>التحديات:</strong>

1. نفس البيانات، و HTTPie بيلوّن.
2. غالباً Cookie واحدة أو Header Authorization كفاية.
3. ملفات `.bru` نصية تقدر ترفعها على Git.

## الفصل 9: APIs للتمرين

1. Open-Meteo بيقولك بالظبط إيه الغلط بـ `reason`. JSONPlaceholder بيرجّع `{}` من غير شرح.
2. لأن السيرفر بيحدد شكل اللينك وانت متعرفش هيتغير إزاي، وبتمشي وراه بس.
3. 401 (مين انت؟) مع رسالة بتقولك تجيب Key منين، أو زي ما عملوا لو مخليين DEMO\_KEY.
4. Deprecation و Sunset قبلها بفترة، وإيميلات، و 410 واضح بلينك Migration.

<strong>صح ولا غلط:</strong> (1) غلط: بيقلّد بس. · (2) غلط: offset ضد page. · (3) صح.

<strong>التحديات:</strong>

1. `latitude=31.2&longitude=29.92&current=temperature_2m&timezone=Africa/Cairo`.
2. Loop على `info.next` لحد null، وعدّ `status === "Dead"`.
3. هتلاقي كل واحد بشكل، وده سبب RFC 9457 (فصل 17).

## الفصل 10: fetch في Node والمتصفح

1. بتتـ Reject لو الشبكة فشلت (DNS، أو اتصال، أو Timeout، أو CORS). مش بتتـ Reject على 4xx و 5xx.
2. لأن 204 مفيهوش Body، و`res.json()` هيرمي Error.
3. `req.body` هيبقى `undefined` لأن `express.json()` مش هيقراه.
4. أي حد يقدر يفتح DevTools ويشوفه.

<strong>صح ولا غلط:</strong> (1) غلط. · (2) غلط: لازم `JSON.stringify`. · (3) غلط: Body is unusable.

<strong>التحديات:</strong>

1. `503 false` من غير Error.
2. اقرا `Retry-After` كثواني، و `await new Promise(r => setTimeout(r, s*1000))` ثم أعد.
3. `async function* paginate(url){ while(url){ const d = await (await fetch(url)).json(); yield* d.results; url = d.info.next; } }`.

## الفصل 11: قراية الـ Docs

1. لأنهم بيحددوا هتكتب الكود إزاي (Retries وتعامل مع الأخطاء) قبل أي Endpoint.
2. Path لهوية الـ Resource (`/users/42`)، و Query للفلترة والخيارات (`?status=open`).
3. اسم فريد للعملية، والأدوات بتعمل منه أسماء Functions.
4. `jq -r '.paths[][] | .operationId? // empty' fr.json`.

<strong>صح ولا غلط:</strong> (1) غلط: Swagger الاسم القديم و OpenAPI الاسم الجديد للمواصفة، و Swagger فضل اسم أدوات. · (2) غلط: دايماً `required: true`. · (3) غلط: دي نسخة الـ API، ونسخة المواصفة في `openapi`.

<strong>التحديات:</strong>

1. Base URL، و Auth، والحدود، وأهم Endpoints، والأخطاء… إلخ.
2. `base` و`quote` الاتنين `in: path`.
3. الـ Collection بتطلع بكل الـ Endpoints جاهزة.

## الفصل 12: الـ Auth

1. بيتسجل في Logs السيرفرات والـ Proxies، و History المتصفح، و Referer header.
2. HS256: Secret واحد بيوقّع ويتحقق. RS256: Private key بيوقّع و Public key أي حد يتحقق بيه.
3. علشان لو اتسرب يبوظ بسرعة. والـ Refresh token بيجيب Access token جديد من غير Login.
4. توكن بيقول `alg: none` من غير توقيع. حدّد الـ Algorithm المسموح في الـ verify ومتاخدهوش من التوكن.

<strong>صح ولا غلط:</strong> (1) غلط: Base64 بس. · (2) صح. · (3) غلط: الختم مش هيطابق.

<strong>التحديات:</strong>

1. فوراً 200، وبعد ما يخلص 401 و`{"message":"Token Expired!"}` (جربناها بـ 70 ثانية).
2. `exp` = `Math.floor(Date.now()/1000) - 60`.
3. قارن `header.alg === "HS256"` و`payload.aud === "articles-api"` قبل التوقيع.

## الفصل 13: OAuth و CORS

1. `state` ضد CSRF (رد مش من طلبك). PKCE ضد سرقة الـ code (لازم الـ verifier الأصلي).
2. لأن الـ URL بيتسجل ويتسرب، والتبديل بيحصل في طلب مباشر (ومعاه PKCE أو Secret).
3. Client Credentials: مفيش مستخدم، السيرفر بيتكلم باسمه.
4. من غيره الـ JS في المتصفح مش هيقدر يقرا `Link`.

<strong>صح ولا غلط:</strong> (1) غلط: عام. · (2) صح. · (3) غلط: CORS قيد في المتصفح بس.

<strong>التحديات:</strong>

1. `createHash("sha256").update(verifier).digest("base64url")`.
2. هتلاقي `response_type=code` و`scope` و`state` وغالباً `code_challenge`.
3. GitHub بيرجّع CORS مفتوح فبتشتغل، بس الهيدر ممكن ميتقريش لو مش في Expose. و httpbin مع Authorization بيعمل Preflight.

## الفصل 14: REST والتسمية

1. لأن GET المفروض Safe، فأي Crawler أو Prefetch أو Cache ممكن يبعته ويمسح بيانات.
2. Resource = المقالة 42 كفكرة. Representation = الـ JSON أو الـ HTML اللي بيوصل لها.
3. PATCH لتغيير حالة بسيط. `:publish` لما فيه شغل وآثار (Validation وإيميلات و Webhooks).
4. التعليق ليه ID لوحده، والمسار الطويل بيتكسر لو العلاقة اتغيرت.

<strong>صح ولا غلط:</strong> (1) غلط. · (2) غلط: Stateless = كل طلب فيه كل اللي محتاجه، والـ Database عادي. · (3) صح.

<strong>التحديات:</strong>

1. زي جدول "قواعد التسمية" في الفصل.
2. `/lists` و`/lists/{id}/items` و`position` في كل Item، وترتيب بـ PATCH.
3. مثلاً Endpoints فيها أفعال زي `/repos/{o}/{r}/merges`: اختاروا وضوح العملية.

## الفصل 15: الـ Methods

1. PUT بيقول "خليها كده" فتكراره نفس النتيجة. POST بيقول "اعمل جديدة" فتكراره = مقالتين.
2. Merge Patch: ابعت الـ Array كلها بالـ 6. JSON Patch: `{"op":"add","path":"/tags/-","value":"x"}`.
3. 409 Conflict (حسب الـ Draft).
4. بحث بـ Body وفي نفس الوقت Safe و Idempotent ويتخزّن.

<strong>صح ولا غلط:</strong> (1) غلط: الأثر المهم مش الرد. · (2) غلط: بيمسح الـ Field. · (3) غلط: نفس المفتاح لكل الإعادات.

<strong>التحديات:</strong>

1. PATCH بيحافظ على الباقي، و PUT بيرجّع اللي بعتّه بس.
2. `[{"op":"test","path":"/status","value":"draft"},{"op":"replace","path":"/title","value":"..."},{"op":"remove","path":"/tags/0"}]`.
3. Redis أو جدول بـ TTL 24 ساعة، وحالة "processing" ترجّع 409.

## الفصل 16: Status و Body

1. (أ) 409. (ب) 415. (ج) 202. (د) 400.
2. علشان الـ Client يعرف يتابع حالة الشغل منين.
3. تزوّده جنب `data` من غير ما تكسر حد.
4. `null`: معروف إنه مفيش (مش منشورة). مش موجود: مش متاح في الرد ده.

<strong>صح ولا غلط:</strong> (1) غلط: 403. · (2) غلط: 200 و `[]`. · (3) غلط: Integer بالقروش + عملة.

<strong>التحديات:</strong>

1. مثلاً 400 و 404 و 409 و 415 و 422.
2. `{"id":"7","name":"...","role":"editor","articleCount":12,"isActive":true,"joinedAt":"2026-...Z","bio":null,"tags":[]}`.
3. snake\_case، و null كتير (`mirror_url`)، و Objects متداخلة (`owner`).

## الفصل 17: الـ Errors

1. علشان لو الـ Body اتنقل أو اتسجل لوحده يفضل مفهوم.
2. `title` ثابت لكل نوع، و`detail` للمرة دي بالذات.
3. `{"type":".../insufficient-balance","title":"Not enough balance","status":403,"balance":30,"cost":50}`.
4. علشان تربط شكوى المستخدم بالـ Log من غير ما تكشف التفاصيل.

<strong>صح ولا غلط:</strong> (1) غلط. · (2) صح. · (3) غلط.

<strong>التحديات:</strong>

1. `{"type":"about:blank","title":"Not Found","status":404,"detail":"..."}` و`application/problem+json`.
2. لو `p.status === 429` اقرا `Retry-After` واستنى وأعد مرة.
3. validation و article-not-found و already-published و precondition و rate-limited و forbidden-role.

## الفصل 18: الـ Pagination

1. صفحة 1 = أول 2 (5 و 4). الـ 6 دخل في الأول، فالـ offset 2 بقى بيشاور على 4 تاني.
2. جداول صغيرة أو Admin محتاج أرقام صفحات وقفز.
3. يحمي السيرفر من `limit=1000000`.
4. في الـ Body (`next` عند PokeAPI) أو هيدر `Link` (GitHub).

<strong>صح ولا غلط:</strong> (1) صح. · (2) غلط: معتم. · (3) غلط.

<strong>التحديات:</strong>

1. `offset=0,50,100,150` و `limit=50` مع آخر واحد `limit=1`، أو `limit=151` في طلب واحد.
2. هيفوّت عنصر.
3. مقالتين بنفس `createdAt` ممكن واحدة تتكرر أو تتفوّت. الحل Cursor فيه `(createdAt, id)`.

## الفصل 19: التطوير والحدود

1. Deprecation (‎@timestamp) = اتعلن قديم. Sunset (HTTP-date) = هيقف.
2. علشان الكود القديم ميتكسرش لوحده.
3. اتنين فتحوا المقالة، والتاني حفظ فوق الأول. `If-Match` بيرفض الحفظ القديم بـ 412.
4. كل سيرفر بيعد لوحده، فالحد الحقيقي يبقى 3 أضعاف.

<strong>صح ولا غلط:</strong> (1) غلط. · (2) غلط: ثواني من دلوقتي. · (3) صح.

<strong>التحديات:</strong>

1. `date -r 1792758101`.
2. GET ← PATCH بـ ETag ← لو 412 GET تاني واعرض.
3. زوّد `author` جنب `authorId`، و Deprecation على `authorId` في الـ Docs والهيدرز، و Sunset بعد مهلة طويلة، ثم شيله في v2.

## الفصل 20: الـ Webhooks

1. 5 × 120 = 600 في الساعة، والحد 60.
2. اللي معاه السر يقدر يزوّر أي Delivery. غيّره فوراً (Rotate).
3. التوقيع بيشمل الوقت، فالرسالة القديمة بترفض بعد 5 دقايق.
4. لأن `-d` بيشيل الـ Newlines فالبايتات تتغير.

<strong>صح ولا غلط:</strong> (1) غلط: البايتات اتغيرت. · (2) غلط: Timing attack. · (3) غلط: يرد بسرعة.

<strong>التحديات:</strong>

1. `false`.
2. `if (event !== "issues" || payload.action !== "opened") return res.status(204).end()` بعد التحقق.
3. smee-client بيحوّل لـ `localhost:4000/webhooks/github`.

## الفصل 21: كتابة OpenAPI

1. اسم ثابت للعملية، والأدوات بتعمل منه Functions.
2. علشان متكررش الـ Fields، وأي تعديل يحصل في مكان واحد.
3. Lint بيراجع الـ Spec نفسه. Contract test بيراجع إن السيرفر ملتزم بيه.
4. Design-first: الـ Frontend يبدأ على Mock و Types من الـ Spec.

<strong>صح ولا غلط:</strong> (1) غلط. · (2) غلط: "مفيش Auth" عن قصد. · (3) صح.

<strong>التحديات:</strong>

1. `examples` في الـ Schema وهيظهر في الـ Docs.
2. Path جديد و Schema `Author`، و `404` بـ Problem.
3. `test("422", ..., "ValidationProblem")` بطلب POST غلط.

## الفصل 22: الجسر لـ Express

1. لأن Express بيمشي بالترتيب، فلو قبلهم هيرد على كل حاجة.
2. الـ Body هيتقري ويتحول، والتوقيع هيفشل.
3. لأن الـ Weak ETag مينفعش مع If-Match، فعملنا Strong بإيدنا.
4. مثلاً: Auth، ثم Database، ثم Tests.

<strong>صح ولا غلط:</strong> (1) غلط: String. · (2) غلط: 4 بالظبط. · (3) صح.

<strong>التحديات:</strong>

1. HTTPie: `http :3001/v1/articles limit==3`.
2. `const router = express.Router()` و`app.use("/v1/articles", router)`.
3. نفس `problem()` و `etagOf()`.

## الفصل 23: مشروع 1

1. من `rel="last"` و `page=56` و`per_page=3`.
2. علشان أي Script أو CI يعرف إنه فشل.
3. `status` String، ومفيش `type`، والـ Content-Type `application/json`.
4. علشان التوكن ميتكتبش في الكود ولا يترفع على Git.

<strong>صح ولا غلط:</strong> (1) غلط: Search عدّاد لوحده 10 في الدقيقة. · (2) غلط: فيها PRs. · (3) صح.

<strong>التحديات:</strong>

1. أرقام مختلفة، ونفس الشكل.
2. Loop على `Link` واعمل `filter(i => !i.pull_request)`.
3. احفظ `{etag, body}` في ملف، ولو 304 اطبع "from cache".

## الفصل 24: مشروع 2

1. علشان متكشفش إن الـ Draft موجود.
2. لأن فيه Validation وتواريخ و Webhook، أكبر من تغيير Field.
3. يمكن OAuth بـ PKCE، و Fields أقل (`fields=`)، ونسخ أقدم من الـ App لازم تفضل شغالة.
4. مثلاً Pagination من أول يوم، و Errors بـ RFC 9457، و If-Match.

<strong>صح ولا غلط:</strong> (1) غلط: 403. · (2) صح. · (3) صح.

<strong>التحديات:</strong>

1. Path `/tags` و`/tags/{slug}` و Schema `Tag`.
2. Webhook `commentCreated` بنفس شكل الأول.
3. GitHub بيعدّي معظم النقاط، والـ Errors مش RFC 9457.
