---
title: "مصادر للاستزادة"
description: "كل اللينكات دي اتراجعت وكانت شغالة وقت كتابة الكتاب (أكتوبر 2026)، ومعظمها مراجع رسمية بتتحدث باستمرار: MDN و Chrome for Developers و web.dev و RFCs و Cloudflare. ابدأ بـ MDN لأي موضوع، وارجع لدوكيومنتيشن Chrome الرسمية لأي حاجة في DevTools، لأن الواجهة بتتغير شوية مع كل نسخة."
sidebar:
  order: 103
  label: "ملحق ج: المصادر"
---

كل اللينكات دي اتراجعت وكانت شغالة وقت كتابة الكتاب (أكتوبر 2026)، ومعظمها مراجع رسمية بتتحدث باستمرار: MDN و Chrome for Developers و web.dev و RFCs و Cloudflare. ابدأ بـ MDN لأي موضوع، وارجع لدوكيومنتيشن Chrome الرسمية لأي حاجة في DevTools، لأن الواجهة بتتغير شوية مع كل نسخة.

<a id="a3-1"></a>

## ج.1 ابدأ من هنا: الصورة الكبيرة

- <strong>MDN · How does the Internet work?</strong> · شرح بسيط للإنترنت والـ Packets والراوترات (الفصول 1–2).https://developer.mozilla.org/en-US/docs/Learn\_web\_development/Howto/Web\_mechanics/How\_does\_the\_Internet\_work
- **MDN · How browsers work** · رحلة الصفحة من الطلب للرسم (الفصلين 2 و 16).https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How\_browsers\_work
- **web.dev · How browsers work** · المقالة الكلاسيكية المفصلة عن جوه المتصفح.https://web.dev/articles/howbrowserswork
- **web.dev · Critical rendering path** · DOM و CSSOM و Render-blocking (الفصل 16).https://web.dev/articles/critical-rendering-path
- **Julia Evans · HTTP: Learn your browser's language** · Zine مرسوم وممتع عن HTTP (مدفوع).https://wizardzines.com/zines/http/

<a id="a3-2"></a>

## ج.2 العناوين والأسماء: IP و DNS و URL

- <strong>MDN · What is a URL?</strong> · أجزاء الـ URL (الفصل 6).https://developer.mozilla.org/en-US/docs/Learn\_web\_development/Howto/Web\_mechanics/What\_is\_a\_URL
- <strong>MDN · What is a domain name?</strong> · الدومينات ومستوياتها (الفصل 5).https://developer.mozilla.org/en-US/docs/Learn\_web\_development/Howto/Web\_mechanics/What\_is\_a\_domain\_name
- **MDN · URIs** · المرجع الكامل للـ URL والـ Schemes.https://developer.mozilla.org/en-US/docs/Web/URI
- <strong>Cloudflare · What is DNS?</strong> · خطوات الـ Resolution بالرسم (الفصل 5).https://www.cloudflare.com/learning/dns/what-is-dns/
- **RFC 1035 · Domain names** · المواصفة الأصلية للـ DNS (للفضول).https://www.rfc-editor.org/rfc/rfc1035
- **RFC 9293 · TCP** · مواصفة TCP الحديثة (الفصل 4).https://www.rfc-editor.org/rfc/rfc9293
- **MDN · TCP handshake** · الـ Handshake الثلاثي (SYN و SYN-ACK و ACK) باختصار.https://developer.mozilla.org/en-US/docs/Glossary/TCP\_handshake

<a id="a3-3"></a>

## ج.3 HTTP: اللغة نفسها

- **MDN · Overview of HTTP** · مدخل HTTP الأساسي (الفصل 7).https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview
- **MDN · HTTP messages** · شكل الطلب والرد سطر سطر.https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Messages
- **MDN · Evolution of HTTP** · من 0.9 لحد HTTP/3 (الفصلين 7 و 11).https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Evolution\_of\_HTTP
- **MDN · HTTP request methods** · كل Method وخصائصه.https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods
- **MDN · HTTP response status codes** · كل Status code (الفصل 8).https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
- **MDN · HTTP headers** · مرجع كل Header (الفصل 9).https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers
- **MDN · Using the Fetch API** · fetch و res.ok والـ Body (الفصلين 7 و 20).https://developer.mozilla.org/en-US/docs/Web/API/Fetch\_API/Using\_Fetch
- **http.dev** · موسوعة HTTP مرتبة بالـ Headers والـ Status codes.https://http.dev/
- **RFC 9110 · HTTP Semantics** · المرجع الرسمي للـ Methods والـ Status والـ Headers.https://www.rfc-editor.org/rfc/rfc9110
- **RFC 9113 · HTTP/2** · مواصفة HTTP/2.https://www.rfc-editor.org/rfc/rfc9113
- **RFC 9114 · HTTP/3** · مواصفة HTTP/3.https://www.rfc-editor.org/rfc/rfc9114
- **RFC 9000 · QUIC** · مواصفة QUIC.https://www.rfc-editor.org/rfc/rfc9000
- <strong>Cloudflare · What is HTTP/3?</strong> · QUIC و HOL blocking بالرسم (الفصل 11).https://www.cloudflare.com/learning/performance/what-is-http3/
- **Cloudflare Radar · 2025 Year in Review** · أرقام استخدام HTTP/2 و HTTP/3 و Post-quantum.https://blog.cloudflare.com/radar-2025-year-in-review/

<a id="a3-4"></a>

## ج.4 curl والأدوات

- **curl man page** · كل Flag في curl (الفصل 10).https://curl.se/docs/manpage.html
- **Everything curl** · كتاب مجاني كامل عن curl من صاحبه.https://everything.curl.dev/
- **jq manual** · فلاتر jq للـ JSON والـ HAR.https://jqlang.org/manual/
- **httpbin.org** · سيرفر تجارب بيرجعلك طلبك.https://httpbin.org/
- **JSONPlaceholder** · API وهمي للتجارب (الفصول 10 و 19 و 20).https://jsonplaceholder.typicode.com/

<a id="a3-5"></a>

## ج.5 الأمان: TLS والكوكيز و CORS

- <strong>Cloudflare · What happens in a TLS handshake?</strong> · الـ Handshake خطوة بخطوة (الفصل 12).https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/
- **How HTTPS works** · قصة مصورة عن HTTPS والشهادات.https://howhttps.works/
- **Let's Encrypt · How it works** · إزاي الشهادات المجانية بتتعمل أوتوماتيك.https://letsencrypt.org/how-it-works/
- **CA/Browser Forum · Baseline Requirements** · قواعد الشهادات ومنها العمر اللي بيقصر.https://cabforum.org/working-groups/server/baseline-requirements/
- **RFC 8446 · TLS 1.3** · مواصفة TLS 1.3.https://www.rfc-editor.org/rfc/rfc8446
- **MDN · Strict-Transport-Security** · HSTS بالتفصيل.https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security
- **MDN · Mixed content** · ليه المتصفح بيمنع http جوه https.https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Mixed\_content
- **badssl.com** · مواقع بشهادات بايظة عن قصد للتجربة.https://badssl.com/
- **MDN · Using HTTP cookies** · الكوكيز والـ Attributes (الفصل 13).https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies
- **MDN · Set-Cookie** · كل Attribute ومعناه.https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie
- **MDN · HTTP session** · الـ Session على مستوى HTTP.https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Session
- **MDN · Web Storage API** · localStorage و sessionStorage.https://developer.mozilla.org/en-US/docs/Web/API/Web\_Storage\_API
- **RFC 6265 · HTTP State Management** · المواصفة الرسمية للكوكيز.https://www.rfc-editor.org/rfc/rfc6265
- **Privacy Sandbox · Update on plans** · قرار جوجل عن الـ Third-party cookies وقفل Privacy Sandbox.https://privacysandbox.google.com/blog/update-on-plans-for-privacy-sandbox-technologies
- **jwt.io** · تفك JWT وتشوف جواه.https://jwt.io/
- **MDN · Same-origin policy** · القاعدة اللي CORS استثناء منها (الفصل 14).https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin\_policy
- **MDN · CORS** · Simple requests و Preflight وكل Header.https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS
- **MDN · Content Security Policy** · الـ CSP وأخطاؤه (الفصل 20).https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP
- **Vite · server.proxy** · إعداد Proxy التطوير.https://vite.dev/config/server-options
- **mkcert** · HTTPS محلي من غير تحذيرات.https://github.com/FiloSottile/mkcert

<a id="a3-6"></a>

## ج.6 السرعة والكاش

- **MDN · HTTP caching** · الكاش كله في مكان واحد (الفصل 15).https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching
- **MDN · Cache-Control** · كل Directive.https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cache-Control
- **web.dev · HTTP cache** · استراتيجيات عملية والـ Hash في الأسماء.https://web.dev/articles/http-cache
- **web.dev · Time to First Byte** · الـ TTFB وأسبابه.https://web.dev/articles/ttfb
- <strong>Cloudflare · What is a CDN?</strong> · الـ Edge والـ Origin.https://www.cloudflare.com/learning/cdn/what-is-a-cdn/
- **RFC 9111 · HTTP Caching** · المواصفة الرسمية للكاش.https://www.rfc-editor.org/rfc/rfc9111

<a id="a3-7"></a>

## ج.7 Chrome DevTools (دوكيومنتيشن جوجل الرسمية)

- **Open Chrome DevTools** · كل طرق الفتح (الفصل 17).https://developer.chrome.com/docs/devtools/open
- **Keyboard shortcuts** · كل الاختصارات بالـ Mac.https://developer.chrome.com/docs/devtools/shortcuts
- **Inspect network activity** · درس عملي على Network (الفصل 18).https://developer.chrome.com/docs/devtools/network
- **Network features reference** · المرجع الكامل: الفلاتر والأعمدة والـ Timing والـ HAR (الفصلين 18 و 19).https://developer.chrome.com/docs/devtools/network/reference
- **Network panel overview** · الواجهة بالصور.https://developer.chrome.com/docs/devtools/network/overview
- **Request conditions** · Block و Throttling لطلبات معينة.https://developer.chrome.com/docs/devtools/request-conditions
- **Overrides** · Override content و headers.https://developer.chrome.com/docs/devtools/overrides
- **Console overview** · مدخل الـ Console (الفصل 20).https://developer.chrome.com/docs/devtools/console
- **Console features reference** · الفلاتر والإعدادات والـ Sidebar.https://developer.chrome.com/docs/devtools/console/reference
- **Log messages in the Console** · console.\* بالتفصيل.https://developer.chrome.com/docs/devtools/console/log
- **Understand errors and warnings** · Console insights وحدوده.https://developer.chrome.com/docs/devtools/console/understand-messages
- **MDN · Console API** · كل دوال console.https://developer.mozilla.org/en-US/docs/Web/API/Console\_API
- **Application panel** · التخزين والـ Service Workers (الفصل 21).https://developer.chrome.com/docs/devtools/application
- **View, edit, and delete cookies** · جدول الكوكيز.https://developer.chrome.com/docs/devtools/application/cookies
- **View and edit local storage** · localStorage.https://developer.chrome.com/docs/devtools/storage/localstorage
- **Debug JavaScript** · درس Breakpoints عملي (الفصل 22).https://developer.chrome.com/docs/devtools/javascript
- **Pause your code with breakpoints** · كل أنواع الـ Breakpoints.https://developer.chrome.com/docs/devtools/javascript/breakpoints
- <strong>What's new in DevTools (Chrome 125)</strong> · مثال على تحديثات DevTools المستمرة. تابع مدونة What's new مع كل نسخة.https://developer.chrome.com/blog/new-in-devtools-125

<a id="a3-8"></a>

## ج.8 Safari على الـ Mac

- **WebKit · Web Inspector** · دوكيومنتيشن Web Inspector الرسمية.https://webkit.org/web-inspector/
- **Apple · Use the developer tools in the Develop menu** · تفعيل قايمة Develop (الفصل 21).https://support.apple.com/guide/safari/use-the-developer-tools-in-the-develop-menu-sfri20948/mac
