---
title: "قاموس المصطلحات"
description: "كل مصطلح مهم في الكتاب في سطر واحد، مترتب أبجدياً. ارجعله كل ما تقابل كلمة ومش فاكر معناها."
sidebar:
  order: 102
  label: "ملحق ب: القاموس"
---

كل مصطلح مهم في الكتاب في سطر واحد، مترتب أبجدياً. ارجعله كل ما تقابل كلمة ومش فاكر معناها.

## A

- **ACAO**: اختصار `Access-Control-Allow-Origin`: الـ Header اللي السيرفر بيقول بيه مين مسموحله يقرا الرد (CORS).

- **Alt-Svc**: Header بيقول للمتصفح إن فيه طريقة تانية للوصول، زي `h3=":443"` لـ HTTP/3.

- **Anycast**: نفس الـ IP متعلن من أماكن كتير، والشبكة بتوديك لأقرب واحد. بتستخدمه سيرفرات الـ DNS والـ CDNs.

- **API**: واجهة برمجية: عناوين بترد ببيانات (غالباً JSON) بدل صفحات.

- **Authorization**: Header فيه إثبات الهوية، زي `Bearer <token>` أو `Basic`.

## B

- **Breakpoint**: علامة على سطر بتوقف الكود عنده عشان تبص على المتغيرات.

## C

- **CA**: Certificate Authority: جهة موثوقة بتمضي على شهادات المواقع.

- **Cache-Control**: Header بيحدد مين يكاش الرد وقد إيه: `max-age` و`no-cache` و`no-store`.

- **CDN**: شبكة سيرفرات في مدن كتير (Edge) بتحتفظ بنسخ من المحتوى قريب من اليوزر.

- **Certificate**: ملف فيه اسم الموقع والـ Public key ومدة الصلاحية وإمضا CA.

- **CHIPS**: كوكيز `Partitioned`: Third-party cookie متخزنة منفصلة لكل موقع أب.

- **CIDR**: طريقة كتابة نطاق IPs زي `192.168.1.0/24`.

- **Client / Server**: اللي بيطلب (المتصفح أو curl) / اللي بيرد.

- **Console**: Panel في DevTools فيه الرسايل والأخطاء ومكان تكتب فيه JS على الصفحة.

- **Content-Type**: Header بيقول نوع الـ Body، زي `application/json`.

- **Cookie**: تذكرة صغيرة السيرفر بيحطها بـ `Set-Cookie` والمتصفح بيرجعها مع كل طلب.

- **CORS**: استثناء من Same-origin policy بيدّيه السيرفر بـ Headers `Access-Control-*`.

- **CSP**: Content Security Policy: قايمة من الموقع بالأماكن المسموح للصفحة تحمّل منها أو تكلمها.

- **CSRF**: هجوم بيخلي موقع شرير يبعت طلب لموقع تاني بكوكيز اليوزر. SameSite بيمنعه.

## D

- **DevTools**: أدوات المطورين المدمجة في المتصفح.

- **DNS**: نظام بيترجم الأسماء زي `example.com` لـ IPs.

- **DOM**: شجرة عناصر الصفحة اللي المتصفح بيبنيها من الـ HTML والـ JS بيعدل فيها.

- **Domain**: اسم الموقع، ومقسم مستويات: `www` . `example` . `com`.

- **DOMContentLoaded**: حدث: الـ HTML اتقرا كله والـ DOM جاهز (الخط الأزرق).

## E

- **ETag**: بصمة لنسخة الرد، المتصفح بيسأل بيها `If-None-Match`.

## F

- **Fetch/XHR**: الطلبات اللي الـ JS بيعملها بـ `fetch` أو `XMLHttpRequest`، وفلتر في Network.

- **Fragment**: الجزء بعد `#` في الـ URL، مبيتبعتش للسيرفر.

## H

- **Handshake**: تبادل رسايل أولي لفتح اتصال: TCP (SYN/SYN-ACK/ACK) أو TLS.

- **HAR**: ملف JSON فيه جلسة Network كلها.

- **Header**: سطر `Name: value` في الطلب أو الرد.

- **HOL blocking**: Head-of-line blocking: طلب بطيء في الأول بيوقف اللي وراه.

- **Hosts file**: `/etc/hosts`: أسماء وعناوين على جهازك بتتقري قبل الـ DNS.

- **HSTS**: Header بيقول للمتصفح يستخدم HTTPS بس مع الموقع ده لمدة معينة.

- **HTTP**: البروتوكول اللي المتصفح والسيرفر بيتكلموا بيه: طلب ورد.

- **HTTP/2**: نسخة Binary فيها Multiplexing على اتصال واحد و HPACK.

- **HTTP/3**: HTTP فوق QUIC (UDP)، فكل Stream مستقل.

- **HttpOnly**: Attribute بيخبي الكوكي عن الـ JS.

- **HTTPS**: HTTP جوه نفق TLS.

## I

- **Idempotent**: طلب لو اتكرر نفس النتيجة: GET و PUT و DELETE.

- **Initiator**: مين اللي عمل الطلب: Parser أو Script أو Redirect.

- **IP address**: عنوان الجهاز على الشبكة: IPv4 زي `104.20.23.154` أو IPv6.

## J

- **JSON**: صيغة نصية للبيانات شبه Objects الـ JS.

- **JWT**: Token فيه بيانات Base64 وإمضا. بيتقري بسهولة.

## L

- **Latency**: وقت التأخير لحد أول رد.

- **Load**: حدث: كل حاجة في الصفحة اتحملت (الخط الأحمر).

- **localhost**: جهازك نفسه: `127.0.0.1` أو `::1`.

- **localStorage**: تخزين Key/Value في المتصفح لكل Origin، مبيتبعتش للسيرفر.

## M

- **Method**: الفعل في الطلب: GET و POST و PUT و PATCH و DELETE و OPTIONS.

- **MIME type**: نوع المحتوى زي `text/html`.

- **Mixed content**: صفحة HTTPS بتحمّل حاجة من `http://`.

- **Multiplexing**: طلبات كتير متداخلة على اتصال واحد.

## N

- **NAT**: الراوتر بيخلي أجهزة البيت كلها تطلع بـ IP عام واحد.

- **net::ERR\_\***: أخطاء Chrome لما مفيش رد HTTP، والاسم بيقول المحطة.

- **Network panel**: Panel في DevTools بيوري كل الطلبات وتفاصيلها.

## O

- **Origin**: scheme + host + port. أساس CORS والتخزين.

- **Overrides**: تغيير رد أو Headers من DevTools على جهازك بس.

## P

- **Packet**: حتة بيانات صغيرة بتتنقل على الشبكة لوحدها.

- **Payload**: الـ Body أو الـ Query اللي اتبعت مع الطلب، وتابة في Network.

- **Port**: رقم بيحدد البرنامج جوه الجهاز: 443 و 80 و 5173.

- **Preflight**: طلب `OPTIONS` المتصفح بيعمله قبل طلب Cross-origin مش بسيط.

- **Preserve log**: متمسحش قايمة Network أو Console مع الـ Navigation.

- **Protocol**: مجموعة قواعد للكلام بين جهازين.

- **Proxy**: وسيط بيستقبل الطلب ويبعته لمكان تاني.

## Q

- **Query string**: الجزء بعد `?` في الـ URL.

- **QUIC**: بروتوكول نقل فوق UDP فيه TLS 1.3، أساس HTTP/3.

## R

- **Redirect**: رد 3xx فيه `Location` بيقول روح لعنوان تاني.

- **Resolver**: سيرفر DNS بيدوّر بالنيابة عنك ويكاش الإجابات.

- **RTT**: Round-trip time: وقت الرحلة رايح جاي.

## S

- **Same-origin policy**: قاعدة المتصفح: JS من Origin ميقراش ردود Origin تاني.

- **SameSite**: Attribute بيحدد الكوكي تتبعت مع طلبات Cross-site ولا لأ: Strict و Lax و None.

- **SAN**: Subject Alternative Name: الأسماء اللي الشهادة بتغطيها.

- **Secure**: Attribute: الكوكي على HTTPS بس.

- **Service Worker**: JS بيقف بين الصفحة والشبكة ويقدر يرد من كاش.

- **Session**: حالة اليوزر متخزنة على السيرفر، والكوكي فيها رقمها.

- **sessionStorage**: زي localStorage بس بيتمسح لما التابة تتقفل.

- **SNI**: اسم الموقع اللي المتصفح بيبعته في ClientHello عشان السيرفر يطلع الشهادة الصح.

- **Stack trace**: سلسلة الدوال اللي وصلت للخطأ، أولها مكانه.

- **Stateless**: كل طلب HTTP لوحده والسيرفر مبيفتكرش اللي قبله.

- **Status code**: رقم 3 خانات في الرد: 2xx نجاح، 3xx تحويل، 4xx غلطتك، 5xx غلطة السيرفر.

- **Subdomain**: مستوى قبل الدومين زي `api.`.

## T

- **TCP**: بروتوكول نقل بيضمن وصول البيانات كاملة وبالترتيب.

- **Third-party cookie**: كوكي بتاعة دومين غير الموقع اللي انت فيه.

- **Throttling**: تقليد شبكة أبطأ في DevTools.

- **Timing**: تابة بتقسم وقت الطلب: Queueing و DNS و Connection و SSL و Waiting و Download.

- **TLS**: بروتوكول التشفير والتحقق من الهوية تحت HTTPS.

- **TTFB**: Time To First Byte: لحد أول Byte من الرد. في Chrome: Waiting for server response.

- **TTL**: مدة صلاحية: لـ DNS record، أو عدد القفزات في IP.

## U

- **UDP**: بروتوكول نقل سريع من غير ضمانات.

- **URL**: العنوان الكامل: scheme و host و port و path و query و fragment.

- **User-Agent**: Header بيعرّف المتصفح أو البرنامج.

## V

- **Vary**: Header بيقول للكاش الرد بيختلف حسب أنهي Headers.

## W

- **Waterfall**: عمود في Network بيرسم كل طلب على محور الوقت.
