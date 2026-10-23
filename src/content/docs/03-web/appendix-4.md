---
title: "الإجابات والحلول"
description: "جاوب بنفسك الأول، وبعدين قارن. لكل فصل: إجابات أسئلة المراجعة، وبعدها صح ولا غلط، وبعدها حلول التحديات. أغلب التحديات تجارب عملية، فلو وصلت لنفس النتيجة بطريقة تانية فهي صح."
sidebar:
  order: 104
  label: "ملحق د: الإجابات"
---

جاوب بنفسك الأول، وبعدين قارن. لكل فصل: إجابات أسئلة المراجعة، وبعدها صح ولا غلط، وبعدها حلول التحديات. أغلب التحديات تجارب عملية، فلو وصلت لنفس النتيجة بطريقة تانية فهي صح.

#### الفصل 1: حكاية الإنترنت

1. Circuit switching بيحجز خط كامل طول المكالمة حتى لو ساكت (هدر)، ولو حتة في الطريق وقعت المكالمة كلها بتقع. Packet switching بيقطّع الرسالة Packets كل واحدة بتمشي لوحدها وتشارك الخطوط مع غيرها، ولو طريق وقع بتلف من طريق تاني.
2. HTML (لغة الصفحة والروابط)، و URL (عنوان لكل حاجة)، و HTTP (طريقة طلبها ونقلها). ومعاهم أول متصفح وأول سيرفر.
3. لابتوبك وانت شغال Vite: المتصفح Client بيطلب من السيرفر اللي على نفس الجهاز، والسيرفر ده Server. وفي نفس الوقت اللابتوب Client لـ GitHub وهو بيعمل push.
4. Protocol = قواعد متفق عليها للكلام بين جهازين: مين يبدأ، وشكل الرسالة، وتعمل إيه لو حاجة غلط. في الكتاب: IP و TCP و UDP و DNS و HTTP و TLS و QUIC.

<strong>صح ولا غلط:</strong> (1) غلط: الويب خدمة واحدة فوق الإنترنت. · (2) غلط: كل Packet ممكن تمشي في طريق. · (3) غلط: أي جهاز شغال عليه برنامج بيرد على طلبات يبقى Server، حتى اللابتوب.

<strong>التحديات:</strong>

1. مثال: YouTube و Gmail في المتصفح = ويب. WhatsApp و Zoom و Spotify App = خدمات فوق الإنترنت من غير ويب (وممكن تستخدم HTTP جواها برضه).
2. ناقص: CSS والصور والـ JS والتفاعل والـ Login. بس الفكرة الأساسية (صفحة فيها روابط) هي هي.
3. تلخيص: الوثيقة دي بتشرح معنى HTTP: الرسايل والـ Methods والـ Status codes والـ Headers، بغض النظر عن نسخة النقل (1.1 أو 2 أو 3).

#### الفصل 2: رحلة الطلب

1. DNS، ثم TCP، ثم TLS، ثم HTTP Request، ثم (الرد و) الرسم.
2. الشبكة بتشتغل بالأرقام (IPs) مش بالأسماء. الاسم للبني آدمين، والـ DNS بيترجمه لعنوان الراوترات تفهمه.
3. بيرمي الـ Body (الـ HTML) بدل ما يتطبع، فيفضل قدامك سطور `-v` بس.
4. كاش الـ DNS (مش محتاج يسأل تاني)، وكاش المتصفح للملفات، واتصال مفتوح بيتعاد استخدامه (من غير Handshake جديد).

<strong>صح ولا غلط:</strong> (1) غلط: صفحة واحدة ممكن تعمل عشرات أو مئات الطلبات. · (2) غلط: الـ DNS قبل أي اتصال. · (3) صح: `<` = جاي من السيرفر، و`>` = طالع منك.

<strong>التحديات:</strong>

1. علّم: سطور Trying/Connected (TCP)، وسطور TLS، وسطور `>` (الطلب)، وسطور `<` (الرد).
2. موقع إخباري غالباً 100–300 طلب، وموقع بسيط أقل من 20.
3. قارن بعد الكتاب: لازم تلاقي DNS و TCP و TLS و HTTP والكاش والرسم في إجابتك.

#### الفصل 3: IP والـ Ports

1. لأن الاتنين Private IPs جوه شبكات منفصلة (كل بيت ليه NAT). الإنترنت بيشوف الـ Public IP بتاع الراوتر بس.
2. نفس الجهاز، بس برنامجين مختلفين: كل Port باب لبرنامج. وكمان Origins مختلفين.
3. `2001:db8::1`.
4. `-n` أرقام IP من غير أسماء، و`-P` أرقام Ports من غير أسماء، و`-iTCP:3000` اتصالات TCP على Port 3000، و`-sTCP:LISTEN` اللي في حالة استماع بس.

<strong>صح ولا غلط:</strong> (1) غلط: كل رقم من 0 لـ 255. · (2) غلط: بيشوفوا الـ Public IP بتاع الراوتر. · (3) غلط: 127.0.0.1 = الجهاز نفسه بس. لازم 0.0.0.0 أو IP الجهاز.

<strong>التحديات:</strong>

1. `ipconfig getifaddr en0` و`route -n get default` و`curl -4 ifconfig.me`.
2. من غير `--bind` بيسمع على كل الـ Interfaces فالموبايل يفتحه. مع `--bind 127.0.0.1` الموبايل مش هيوصل، لأن السيرفر بيسمع على Loopback بس.
3. التاني بيقول `Address already in use`. `lsof -nP -iTCP:8000 -sTCP:LISTEN` يديك الـ PID، و`kill PID` يحرره.

#### الفصل 4: TCP و UDP

1. تضيع (TCP بيعيد بعتها لما مايجيش ACK)، تيجي بترتيب غلط (أرقام seq بترتبها)، تتكرر (الأرقام بتكشف المكرر).
2. الـ ACK معناه "استلمت لحد 100، ومستني 101"، يعني الرقم اللي جاي.
3. لأن الصوت المتأخر مالوش لازمة: أحسن تفوّت جزء صغير على إنك توقف المكالمة تستنى إعادة إرسال.
4. Refused: الجهاز وصل ورد إن مفيش حد على الـ Port. مستني: محدش بيرد خالص (Firewall بيرمي، أو IP غلط).
5. `\r\n` نهاية سطر في HTTP، والسطر الفاضي (التانية) معناه إن الـ Headers خلصت.

<strong>صح ولا غلط:</strong> (1) غلط: الراوتر بيبص على الـ IP بس. · (2) غلط: UDP مبيضمنش ترتيب ولا وصول. · (3) غلط: سيرفرات كتير بتمنع ping (ICMP) وهي شغالة.

<strong>التحديات:</strong>

1. الأقرب (1.1.1.1 غالباً في مصر) أقل، والبعيد (أستراليا) أعلى بكتير. السبب: المسافة الفعلية وسرعة الضوء.
2. هتلاقي قفزة كبيرة عند خروج الطلب من مصر (كابلات البحر). النجوم `* * *` = راوتر مش بيرد، مش عطل.
3. الرد `HTTP/1.0 200 OK` و Headers وبعدها HTML، وفي تابة السيرفر سطر `"GET / HTTP/1.1" 200 -`.

#### الفصل 5: DNS

1. ملف واحد مركزي: بيكبر جداً، وتحديثه بطيء، وفيه تعارض أسماء. DNS قسّمها شجرة موزعة كل مستوى مسؤول عن اللي تحته، وفيه كاش.
2. من غير كاش كل طلب يعدي على Root و TLD و Authoritative. الكاش بيحفظ الإجابة مدة الـ TTL، فأغلب الطلبات بتترد فوراً.
3. `A` لما عندك IP مباشر. `CNAME` لما الاسم ده مجرد اسم تاني لاسم (زي `www` ← خدمة استضافة بتغير الـ IPs).
4. `dig` بيسأل سيرفر DNS مباشرة ومبيقراش hosts. استخدم `dscacheutil -q host -a name x` أو `ping` أو المتصفح.
5. `sudo` صلاحيات Admin، و`killall` ابعت إشارة لكل البرامج بالاسم ده، و`-HUP` إشارة "اقرا إعداداتك من الأول"، و`mDNSResponder` برنامج DNS بتاع الـ Mac.

<strong>صح ولا غلط:</strong> (1) غلط: بيعرف سيرفرات الـ TLDs بس. · (2) غلط. · (3) صح.

<strong>التحديات:</strong>

1. `dig +short gmail.com A` وكذلك AAAA و MX و NS. الـ MX هيشاور على سيرفرات Google.
2. المتصفح يفتح، و`dscacheutil` يرجع 127.0.0.1، و`dig` ميرجعش حاجة (أو حاجة من النت) لأنه مش بيقرا hosts.
3. أول جزء: `.` من Root server (حرف من a لـ m). التاني: `com.` من `*.gtld-servers.net`. التالت: `github.com` من سيرفرات GitHub (Authoritative) وفيه الـ A.

#### الفصل 6: الـ URL

1. `http` Scheme، و`127.0.0.1` Host، و`8000` Port، و`/api/users` Path، و`page=2&limit=10` Query (اتنين Parameters)، و`top` Fragment.
2. كل حرف عربي 2 Bytes في UTF-8، وكل Byte بيتكتب `%XX`. 3 حروف × 2 = 6.
3. `https://site.com/docs/img/x.png`.
4. الـ `?` zsh بيعتبرها Glob (`no matches found`)، والـ `&` بتشغّل اللي قبلها في الخلفية وتقطع الأمر.

<strong>صح ولا غلط:</strong> (1) صح: 443 هو الافتراضي لـ https. · (2) غلط: الـ Fragment مبيتبعتش. · (3) غلط: الـ Port مختلف.

<strong>التحديات:</strong>

1. هتلاقي `protocol: 'https:'` و`host` و`pathname` و`search` زي ما في الفصل.
2. مع `%26`: `q` = `rock & roll`. مع `&` عادية: `q` = `rock ` وظهر Parameter غريب اسمه ` roll`.
3. `const build=(base,p)=>{const u=new URL(base);for(const[k,v] of Object.entries(p))u.searchParams.set(k,v);return u.href}`.

#### الفصل 7: HTTP

1. خلّى سيرفر واحد على IP واحد يشيل مواقع كتير، لأن الطلب بيقول هو عاوز أنهي اسم.
2. بسطر فاضي (`\r\n\r\n`)، والـ `Content-Length` بيقوله الـ Body طوله قد إيه.
3. PUT بيستبدل الـ User كله: `PUT /api/users/3` بـ Object كامل. PATCH بيعدل جزء: `PATCH /api/users/3` بـ `{"email":"new@x.com"}`.
4. GET المفروض Safe: المتصفحات والـ Prefetch والـ Crawlers بيعملوا GET لوحدهم، فممكن يعملوا Logout أو يمسحوا من غير قصد. وكمان مفيش حماية CSRF.
5. `multipart/form-data`: معمول للملفات الـ Binary. JSON نص، فالصورة لازم تتحول Base64 وتكبر حوالي 33%.

<strong>صح ولا غلط:</strong> (1) غلط. · (2) صح: تكراره نفس النتيجة (الحاجة ممسوحة). · (3) غلط: بيرجع Response و `ok: false`.

<strong>التحديات:</strong>

1. `r.status` = 200، وفي `headers` هتلاقي User-Agent و Accept-Language و Origin… اللي المتصفح بعتها.
2. مع الـ Header: `json` فيه الـ Object. من غيره: `json: null` والنص في `data`، والـ Content-Type `text/plain;charset=UTF-8`.
3. `async function getJSON(url){const r=await fetch(url);if(!r.ok)throw new Error('HTTP '+r.status);return r.json()}`، وعلى 404 هترمي `HTTP 404`.

#### الفصل 8: الـ Status codes

1. تعرف المعنى العام لأي كود جديد من أول رقم، حتى لو أول مرة تشوفه: 4xx طلبك، 5xx السيرفر.
2. `303 See Other` (أو 302 عملياً): يخلي المتصفح يعمل GET للصفحة الجديدة. 307 بيعيد نفس الـ POST، فممكن التسجيل يتكرر.
3. 502 = Proxy أو Gateway ماعرفش ياخد رد سليم من السيرفر اللي وراه. المشكلة في السيرفر أو الإعداد، مش في الـ Frontend.
4. `-s` اسكت، و`-o /dev/null` ارمي الـ Body، و`-w '%{http_code}\n'` اطبع الكود بس وسطر جديد.

<strong>صح ولا غلط:</strong> (1) غلط: 304 = "اللي عندك لسه صح". · (2) غلط: 403 = عارفك ومش مسموحلك. الـ Login مش هيغير حاجة. · (3) غلط: لازم `-L`.

<strong>التحديات:</strong>

1. 201 و 429 و 503.
2. `http://github.com`: 301 لـ `https://github.com/` ثم 200. Google: غالباً 301 أو 302 لـ HTTPS وأحياناً لنسخة البلد.
3. `$( )` = Command substitution: نفّذ الأمر اللي جوه وحط ناتجه مكانه في النص.

#### الفصل 9: الـ Headers

1. إنجليزي أمريكي أولاً، ثم أي إنجليزي (0.9)، ثم عربي (0.7).
2. الـ Encoding: الملف UTF-8 والمتصفح فهمه حاجة تانية. الحل: `<meta charset="utf-8">` وكمان `Content-Type: text/html; charset=utf-8` من السيرفر.
3. `Content-Type` = نوع المحتوى الأصلي (JSON أو HTML). `Content-Encoding` = اتضغط إزاي في النقل (gzip أو br).
4. السيرفر بيبعت `text/html` أو `text/plain` مع `nosniff`، غالباً لأن الملف مش موجود ورجعت صفحة 404. شيك على الـ Status والـ Content-Type في Network.

<strong>صح ولا غلط:</strong> (1) غلط: مجمّد على `10_15_7`. · (2) غلط: Base64 تحويل مش تشفير، أي حد يفكه. · (3) غلط: الـ Headers اللي السيرفر مش فاهمها بيتجاهلها.

<strong>التحديات:</strong>

1. المتصفح بيبعت Headers أكتر (Accept-Language و Sec-CH-UA و Sec-Fetch-\*)، و curl بيبعت User-Agent و Accept بس تقريباً.
2. الصفحات النصية بتوفر غالباً 70–90% مع الضغط.
3. مثال: `strict-transport-security` = HTTPS بس لمدة طويلة، و`content-security-policy` = المصادر المسموحة، و`x-frame-options` = متتحطش في iframe عند حد تاني.

#### الفصل 10: معمل curl

1. لما نفس الطلب (نفس الـ Headers والـ Body) ينجح في curl ويفشل في المتصفح: يبقى السبب حاجة المتصفح بيضيفها (CORS أو كوكيز أو كاش أو Extension).
2. الـ Body، و`Content-Type: application/json`، و`Accept: application/json` (ومعاهم POST تلقائي). عشان كده لـ PATCH لازم `-X PATCH`.
3. `-d` بيحط القيمة زي ما هي (المسافة هتبوظ الـ URL)، و`--data-urlencode` بيشفّرها (`a%20b`).
4. TTFB ناقص TLS ≈ 1.8 ثانية: السيرفر بطيء في تجهيز الرد. الشبكة سليمة.
5. عشان zsh يبدّل `$TOKEN` بقيمته. جوه Single quotes بتتبعت حرفياً `$TOKEN`.

<strong>صح ولا غلط:</strong> (1) صح. · (2) غلط: `-I` HEAD، و`-i` يضمّن الـ Headers مع GET. · (3) غلط: تراكمي من البداية. وقت TLS = appconnect − connect.

<strong>التحديات:</strong>

1. GET 200، و POST 201، و PATCH 200، و DELETE 200.
2. الموقع القريب TLS و TTFB أقل. البعيد كل مرحلة فيها RTT بتكبر.
3. `curl -s -c jar -b jar -L 'https://httpbin.org/cookies/set?name=sara'` ثم `curl -s -b jar https://httpbin.org/cookies` يرجع `"name": "sara"`.

#### الفصل 11: نسخ HTTP

1. زي طابور شباك واحد وأول واحد معاه معاملة طويلة. HTTP/2 خلى كل الطلبات تمشي متداخلة على نفس الاتصال (Streams)، فالصغير ميستناش الكبير.
2. لأن TCP تحتيه بيوقف كل الـ Streams لو Packet واحدة ضاعت، وده بيحصل كتير على الموبايل.
3. "فيه HTTP/3 على UDP Port 443 لنفس الـ Host، افتكر ده يوم".
4. HTTP/2 و 3 بيفرضوا الأسماء small letters، و curl بيطبعها زي ما جت.

<strong>صح ولا غلط:</strong> (1) غلط: الـ Status codes زي ما هي. · (2) صح: QUIC فوق UDP. · (3) غلط: الطبيعي، المتصفح اتعلم من `alt-svc`.

<strong>التحديات:</strong>

1. مواقع Google و Cloudflare غالباً h3، ومواقع كتير h2، وطلبات قليلة http/1.1.
2. مع 1.1: `HTTP/1.1 200 OK` بـ Reason phrase، والـ Headers ممكن بحروف كبيرة. مع 2: `HTTP/2 200` وأسماء صغيرة.
3. أيوه ممكن: كل Domain تالت اتصال منفصل وممكن يبقى 1.1، والمتصفح بيأخر الطلبات الأقل أولوية (Priority) عن قصد.

#### الفصل 12: HTTPS و TLS

1. في الكافيه الراوتر ممكن يقول "أنا bank.com" ويشفّر معاك هو. التشفير هيبقى سليم بس للحرامي. الشهادة بتثبت إنك بتكلم الحقيقي.
2. SNI بيقول اسم الموقع في أول رسالة، عشان سيرفر واحد شايل آلاف المواقع على نفس الـ IP يطلع الشهادة الصح. Cloudflare فيها ملايين المواقع على IPs مشتركة.
3. Cloudflare TLS Issuing ECC CA 3 مضى على example.com، و SSL.com TLS Transit ECC CA R2 مضى عليه، و SSL.com TLS ECC Root CA 2022 مضى على ده، والـ Root ده (أو اللي فوقه) في الـ Root store.
4. Chrome يمنعك ومفيش زرار تعدي.
5. الشهادة المسروقة بتبقى خطر لمدة أقل، والتغييرات بتنتشر أسرع. الأثر: التجديد لازم يبقى أوتوماتيك.

<strong>صح ولا غلط:</strong> (1) غلط. · (2) صح: مستوى واحد. · (3) غلط: بيلغي التحقق خالص.

<strong>التحديات:</strong>

1. هتلاقي غالباً Let's Encrypt أو Google Trust Services أو DigiCert، والعمر 90 يوم أو أقل من 200.
2. `echo | openssl s_client -connect github.com:443 -servername github.com 2>/dev/null | head -15` وكذلك google.com.
3. expired: `NET::ERR_CERT_DATE_INVALID` و curl (60). wrong.host: `ERR_CERT_COMMON_NAME_INVALID`. self-signed: `ERR_CERT_AUTHORITY_INVALID`.

#### الفصل 13: الكوكيز والـ Sessions

1. عشان محدش يقدر يغيرها ويبقى حد تاني، ومفيش بيانات حساسة عند المتصفح. الرقم العشوائي صعب يتخمن.
2. موقع شرير يبعت فورم POST لموقعك والمتصفح يبعت كوكيز اليوزر. مع Lax، الكوكي مبتتبعتش مع POST أو fetch جايين من موقع تاني.
3. في Set-Cookie بتفصل الكوكي عن الـ Attributes بتاعتها (كوكي واحدة). في Cookie بتفصل كوكيز مختلفة.
4. التخزين مربوط بالـ Origin، والـ Port جزء منه.
5. الـ Session: تمسح السطر من السيرفر فتنتهي فوراً. الـ JWT صالح لحد الـ exp إلا لو عملت Blocklist.

<strong>صح ولا غلط:</strong> (1) صح. · (2) غلط. · (3) غلط: Base64 بيتقري، الإمضا بس اللي بيمنع التعديل.

<strong>التحديات:</strong>

1. الأعمدة: Domain، و Include subdomains (TRUE/FALSE)، و Path، و Secure، و Expires (0 = Session)، و Name، و Value.
2. `JSON.parse(atob(token.split('.')[1]))`، وهتلاقي `sub` و`exp` وغيرهم. (لو فيه `-` أو `_` بدّلهم بـ `+` و`/`.)
3. غالباً دومينات إعلانات و Analytics، وكتير منهم `SameSite=None; Secure` لأنهم محتاجين يتبعتوا Cross-site.

#### الفصل 14: CORS

1. الصفحة الشريرة تعمل fetch للبنك بكوكيزك. Same-origin policy بتخلي الرد ميتقريش من الـ JS بتاع الصفحة دي.
2. لأن الـ JS ممكن يكون هو الشرير. صاحب البيانات هو اللي يقرر مين يقراها.
3. Method زي PUT أو DELETE، و Content-Type زي application/json، و Header زي Authorization.
4. صفحة الخطأ 500 غالباً من غير Headers الـ CORS، فالمتصفح يقول CORS والسبب الحقيقي السيرفر.
5. المتصفح بيكلم نفس الـ Origin (`localhost:5173/api`)، و Vite بيبعت الطلب للـ API من غير متصفح، فمفيش CORS.

<strong>صح ولا غلط:</strong> (1) غلط. · (2) صح. · (3) غلط: الرد Opaque ومتقدرش تقراه.

<strong>التحديات:</strong>

1. اشتغل: jsonplaceholder بيرد بـ `access-control-allow-origin` بالـ Origin بتاعك.
2. مفيش Preflight (GET بسيط)، والخطأ: No 'Access-Control-Allow-Origin' header is present. الرد وصل والمتصفح حجزه.
3. httpbin هيرد بـ allow-methods فيها DELETE و allow-headers: authorization. وفي Network هتلاقي سطر Type بتاعه `preflight` قبل DELETE.

#### الفصل 15: الكاش والـ CDN

1. Fresh = جوه `max-age`، يتستخدم من غير سؤال. Stale = خلص، فيتسأل السيرفر (Revalidate) ولو اتغير يجيب الجديد.
2. أول رد فيه `ETag: "a1"` والمتصفح يحفظه. بعدين يسأل بـ `If-None-Match: "a1"`، ولو ماتغيرش السيرفر يرد 304 من غير Body.
3. الـ HTML فيه أسماء الملفات الجديدة فلازم يبقى أحدث حاجة. الـ JS اسمه فيه Hash، فأي تغيير = اسم جديد.
4. 100 ثانية.
5. `(disk cache)` = مفيش طلب خالص. `304` = طلب اتبعت والسيرفر قال "زي ما هي".

<strong>صح ولا غلط:</strong> (1) غلط: يعني اسأل الأول. · (2) غلط: من غير Body. · (3) صح.

<strong>التحديات:</strong>

1. غالباً حاجات كتير من `memory cache` (لو نفس التابة) أو `disk cache`.
2. ملفات الـ CDN الثابتة وأغلب الـ APIs اللي فيها ETag هترجع 304.
3. `age` بيزيد و`cf-cache-status: HIT`. مع `?v=123` الـ URL جديد فمفتاح الكاش جديد: أول مرة MISS و age صغير أو مش موجود.

#### الفصل 16: رسم الصفحة

1. Parse HTML ← DOM، و CSS ← CSSOM، ودمجهم Render tree، و Layout يحسب الأماكن، و Paint/Composite يرسم.
2. عشان ميرسمش الصفحة من غير Styles وبعدين تنط (FOUC).
3. Parser = لقاه في الـ HTML وهو بيقراه. Script = كود JS عمل الطلب (fetch مثلاً) بسطر معين.
4. Analytics: `async` (مستقل ومش مهم ترتيبه). التطبيق: `defer` أو module (محتاج الـ DOM والترتيب).

<strong>صح ولا غلط:</strong> (1) غلط. · (2) صح. · (3) غلط: DOMContentLoaded الأول.

<strong>التحديات:</strong>

1. مع Slow 4G الرقمين بيكبروا جداً، و Load أكتر.
2. عادي و defer: a ثم b دايماً. async: اللي يوصل الأول.
3. مثال: الصفحة ← main.js ← chunk.js و api/user.

#### الفصل 17: جولة DevTools

1. كان مفيش طريقة تشوف الأخطاء والطلبات وتعدل الـ HTML/CSS مباشرة. Firebug جمّع ده في مكان واحد.
2. افتح Network ودوس <kbd>Esc</kbd> يطلعلك Console في الـ Drawer.
3. الرسايل والدوكيومنتيشن ونتايج البحث بالإنجليزي، فهتلاقي الأسماء زي ما هي. وكمان Console insights محتاج إنجليزي.
4. غالباً من Extension. جرب Incognito أو Profile من غير Extensions، ولو اختفى، مش بتاعك.

<strong>صح ولا غلط:</strong> (1) صح. · (2) غلط: الـ DOM الحالي بعد الـ JS. · (3) غلط: طول ما DevTools مفتوح بس.

<strong>التحديات:</strong>

1. <kbd>⌘</kbd><kbd>⌥</kbd><kbd>I</kbd> و<kbd>J</kbd> و<kbd>C</kbd>، ثم ⋮ ← Dock side، ثم Network ← Disable cache.
2. "Capture full size screenshot" و "Disable JavaScript". في مواقع React مثلاً الصفحة هتبقى فاضية تقريباً.
3. في Profile عادي هتلاقي طلبات ورسايل زيادة من الـ Extensions.

#### الفصل 18: Network: القايمة

1. الـ POST بيعمل Redirect والصفحة الجديدة بتمسح القايمة. فعّل Preserve log.
2. `method:POST -status-code:201`.
3. transferred = اللي اتنقل على الشبكة (مضغوط ومن غير الكاش). resources = الحجم الحقيقي بعد فك الضغط.
4. المتصفح استخدم اتصال مفتوح قبل كده لنفس الـ Origin.
5. يأكدلك إن الطلب راح للـ IP اللي حطيته في hosts فعلاً.

<strong>صح ولا غلط:</strong> (1) غلط: الـ `-` عكس، فيوريك كل حاجة ما عدا google.com. · (2) غلط: مفيش رد HTTP خالص. · (3) صح.

<strong>التحديات:</strong>

1. غالباً صور أو فيديو أو JS كبير، والـ Domains ممكن تبقى 20 أو أكتر.
2. Slow 4G بيضرب Finish و Load في 3 أو 5 أو أكتر.
3. المفروض الأرقام تقرب: DNS ≈ namelookup، و Initial connection ≈ connect − namelookup، و SSL ≈ appconnect − connect، و Waiting ≈ starttransfer − appconnect.

#### الفصل 19: Network: التفاصيل

1. مش الـ Headers الحقيقية. أسباب: جه من الكاش، أو اتمنع (CORS أو Extension)، أو لسه مكملش.
2. Payload ← view source. السبب: نسيت `JSON.stringify`.
3. Preview منسق، و Response خام. Preview مش بيعرض JSON بايظ أو HTML جه مكان JSON.
4. أي حد يقدر يعمل طلبات بحسابك بالـ Token والكوكيز لحد ما يخلصوا.
5. Block request domain في Request conditions، واعمل Reload، وشوف الصفحة شغالة.

<strong>صح ولا غلط:</strong> (1) غلط: بيشيل Cookie و Set-Cookie و Authorization بس. · (2) غلط: عندك انت بس. · (3) صح.

<strong>التحديات:</strong>

1. Headers فيها POST و 201، و Payload فيه title، و Preview فيه id: 101.
2. نفس 201 ونفس الشكل، والـ fetch المعدل يظهر طلب جديد في Network.
3. `jq -r '.log.entries[].request.url' file.har`.

#### الفصل 20: الـ Console

1. الحاجة اللي قبل `.name`، مش name.
2. NAME\_NOT\_RESOLVED = الـ DNS، اختبره بـ `dig`. CONNECTION\_REFUSED = TCP ومفيش حد على الـ Port، اختبره بـ `nc -zv` و`lsof`.
3. CORS: السيرفر التاني مدّاش إذن. CSP: الموقع اللي انت فيه حاطط قايمة منعت الطلب.
4. الـ Console بيحتفظ بـ Reference وبيقرا القيم لما تفتح الـ Object.
5. `const u = await (await fetch('https://jsonplaceholder.typicode.com/users/1')).json(); u.email`.

<strong>صح ولا غلط:</strong> (1) غلط. · (2) صح. · (3) غلط.

<strong>التحديات:</strong>

1. `console.table(users)` و`console.time/timeEnd` حوالين fetch و`console.group`.
2. الأول ERR\_NAME\_NOT\_RESOLVED (DNS). التاني ERR\_CONNECTION\_REFUSED (TCP، مفيش حد على 3999). التالت 404 (HTTP) ومن غير Error في الكود.
3. الـ Stack هيقول السطر اللي فيه `.x.y`، وتصلحه بـ Optional chaining `?.` أو تصلح البيانات.

#### الفصل 21: Application و Safari

1. Domain أو Path مش مطابق، أو SameSite منعها (Cross-site)، أو Secure على HTTP، أو الطلب fetch من غير `credentials: 'include'`.
2. لما الموقع معلق في حالة غريبة ومش عارف أنهي كوكي أو تخزين أو Service Worker السبب.
3. يرد بنسخة قديمة من الكاش بتاعه. فعّل Update on reload أو Bypass for network أو Unregister.
4. WebKit مختلف في الكوكيز والخصوصية، وكل متصفحات الـ iPhone جواها WebKit.

<strong>صح ولا غلط:</strong> (1) غلط: بتظهر وعليها علامة HttpOnly. · (2) غلط: الموقع ده بس. · (3) غلط.

<strong>التحديات:</strong>

1. غالباً HttpOnly و Secure و SameSite Lax.
2. غالباً اتعملك Logout. و Clear site data بيرجّع الموقع كأنه أول مرة.
3. ممكن تلاقي كوكيز أقل في Safari (Third-party ممنوعة).

#### الفصل 22: خطة الـ Debugging

1. Console ← الطلب موجود؟ ← رقم ولا أقواس؟ ← 2xx؟ ← الشكل صح؟ ← كودك. كل سؤال بيشيل نص الاحتمالات ومن الأرخص للأغلى.
2. `(failed)`: قبل HTTP، فدوّر بـ dig و nc و curl -v. `500`: السيرفر رد، فدوّر في Response و Logs السيرفر.
3. URL لسه localhost، أو Mixed content (http جوه https)، أو Proxy التطوير مش موجود فرجع CORS.
4. جوه Loop أو دالة بتتنادى كتير ومحتاج حالة معينة بس.
5. اللي عاوزه، واللي حصل بالنص، واللي جربته ونتيجته، والبيئة، ومن غير أسرار.

<strong>صح ولا غلط:</strong> (1) غلط: المتصفح أو الطلب نفسه. · (2) غلط: بيطبع بس. · (3) صح.

<strong>التحديات:</strong>

1. هتلاقي Local و Closure و Global، والـ Call Stack.
2. XHR/fetch Breakpoints ← + ← `api`، والكود يقف على سطر الـ fetch.
3. غالباً آه: كتابة القالب بتكشف الحاجة اللي ناقصة.

#### الفصل 23: المشروع النهائي

1. الملف `data/user.json` مش موجود، فالسيرفر رد 404 بصفحة HTML، والكود عمل `res.json()` من غير ما يشيك `res.ok`. أول حرف `<`.
2. الملف نفسه 404، ومفيش `access-control-allow-origin`. يعني لو حتى اتسمح، الملف مش موجود.
3. عشان فشل طلب واحد ميوقفش الباقي، ويبقى فيه رسالة مفهومة.
4. كل طلب لـ localhost:8000 يقابله سطر في Log السيرفر، إلا لو جه من الكاش أو اتمنع قبل ما يتبعت.

<strong>صح ولا غلط:</strong> (1) صح. · (2) غلط: الإذن من السيرفر بتاع example.com. · (3) صح.

<strong>التحديات:</strong>

1. الحلول: (1) `src="app.js"` بدل `js/app.js` (أو انقل الملف). (2) `data/users.json`. (3) شيل الفاصلة اللي بعد آخر Object (json.tool بيقول: Illegal trailing comma). (4) `data.data.forEach` و`data.data.length`. (5) loadQuote: شيلها أو حطها في try/catch واعرض "مفيش quote". (6) `body: JSON.stringify({...})`، وبعدها `echo.json` هيبقى فيه البيانات. (7) ping: شيلها أو try/catch (ERR\_CONNECTION\_REFUSED). (8) الكاش: Reload عادي بيرجع 304 بسبب Last-Modified، وبعد التعديل 200 بالجديد.
2. Slow 4G تبان رسالة التحميل، والـ Block لـ httpbin ميأثرش على الـ users، والـ Override بـ `[]` يظهر 0.
3. مثال سهل: كوكي اتمنعت، أو Mixed content على صفحة https.
