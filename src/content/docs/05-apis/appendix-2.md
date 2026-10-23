---
title: "قاموس المصطلحات"
description: "كل مصطلح مهم في الكتاب في سطر واحد، مترتب أبجدياً. ارجعله كل ما تقابل كلمة ومش فاكر معناها."
sidebar:
  order: 102
  label: "ملحق ب: القاموس"
---

كل مصطلح مهم في الكتاب في سطر واحد، مترتب أبجدياً. ارجعله كل ما تقابل كلمة ومش فاكر معناها.

### #

- **201 / 204**: Created + Location / نجاح من غير Body.

- **400 / 422**: طلب مش مقري / مقري بس محتواه مش مقبول.

- **401 / 403**: مين انت؟ / عارفك بس لأ.

- **409 / 412**: متعارض مع الحالة / الشرط (If-Match) فشل.

- **429**: Too Many Requests: استنى (Retry-After) وأعد.

### A

- **Access token**: توكن قصير العمر بيتبعت مع كل طلب (غالباً Bearer).

- **API**: عقد بين برنامجين: تبعت إيه، وترجع إيه، والأخطاء شكلها إيه.

- **API key**: مفتاح بيعرّف مشروعك. مكانه Header، مش Query ولا كود Frontend.

- **Authentication**: إثبات انت مين (401 لو فشل).

- **Authorization**: مسموحلك تعمل إيه (403 لو فشل).

### B

- **Base64url**: Base64 بـ `-` و`_` ومن غير `=`، آمن في URLs (JWT والـ Cursors).

- **Basic auth**: `user:pass` بـ Base64 في Header. مش تشفير.

- **Bearer**: "اللي معاه التوكن يعدّي": `Authorization: Bearer …`.

- **Breaking change**: تغيير بيكسر Clients شغالة: شيل Field، أو غيّر نوعه أو معناه.

### C

- **Client Credentials**: OAuth flow لسيرفر بيكلم API باسمه من غير مستخدم.

- **Consumer / Provider**: اللي بيستخدم الـ API / اللي بيبنيه.

- **Content negotiation**: اختيار الشكل بـ `Accept` و`Content-Type`.

- **Contract test**: اختبار إن ردود السيرفر الحقيقية مطابقة للـ Spec.

- **CORS**: قواعد المتصفح لطلبات من Origin تاني، والسيرفر بيسمح بهيدرز.

- **Cursor**: علامة معتمة لـ "بعد العنصر ده" في الـ Pagination.

- **Custom method**: عملية مش CRUD زي `POST /articles/42:publish`.

### D

- **Deprecation**: هيدر (RFC 9745) بيقول الحاجة دي قديمة من تاريخ معين.

- **Design-first**: تكتب الـ Spec وتتفق عليه قبل الكود.

### E

- **Endpoint**: Method + URL بيعمل حاجة معينة.

- **Envelope**: غلاف حوالين البيانات: `{data, nextCursor}`.

- **ETag**: بصمة لنسخة الـ Resource، للـ Cache (304) وللـ If-Match (412).

- **Express**: Framework لـ Node بيبني APIs بسلسلة Middleware.

### F

- **fetch**: دالة HTTP المدمجة في المتصفح و Node.

### G

- **GraphQL**: API بـ Endpoint واحد والـ Client بيحدد الـ Fields اللي عايزها.

- **gRPC**: RPC سريع بـ Protocol Buffers و HTTP/2، غالباً بين السيرفرات.

### H

- **HATEOAS**: الرد فيه لينكات للخطوات الجاية (مستوى 3 في Richardson).

- **HMAC**: Hash بسر مشترك، بيثبت إن الرسالة مجتش متغيرة ومن صاحب السر.

- **HTTPie**: أداة سطر أوامر للـ HTTP بصيغة أبسط من curl.

### I

- **I-JSON**: JSON بقيود أمان (RFC 7493): UTF-8، ومفيش Keys مكررة، وأرقام آمنة.

- **Idempotency-Key**: هيدر بمفتاح فريد علشان إعادة POST متعملش حاجة مرتين.

- **Idempotent**: مرة زي عشرة في أثرها على السيرفر.

- **If-Match**: "نفّذ بس لو النسخة لسه دي"، وإلا 412.

### J

- **jq**: أداة سطر أوامر لقراية وتحويل JSON.

- **JSON**: صيغة بيانات نصية: Object و Array و String و Number و Boolean و null.

- **JSON Merge Patch**: PATCH بشكل الـ Resource، و null = امسح (RFC 7396).

- **JSON Patch**: PATCH كقايمة عمليات op/path (RFC 6902).

- **JSON Pointer**: مسار لقيمة جوه JSON: `/tags/0` (RFC 6901).

- **JSON Schema**: وصف شكل JSON للـ Validation والتوثيق (2020-12).

- **JSONL**: سطر = JSON. للـ Logs والبيانات الكبيرة.

- **JWT**: توكن فيه Header و Payload وتوقيع، مقروء لأي حد ومختوم.

### L

- **Link header**: لينكات في هيدر (RFC 8288) زي `rel="next"`.

- **Lint**: فحص الـ Spec ضد قواعد صحة و Best practices.

- **Lost update**: تعديل بيمسح تعديل حد تاني من غير ما حد ياخد باله.

### M

- **Middleware**: Function في سلسلة Express بترد أو تنادي `next()`.

### O

- **OAuth 2.0**: إطار لإعطاء App صلاحية محددة على حسابك من غير الباسورد.

- **Offset pagination**: "عدّي N وهات M". بسيط، بس بيكرر لما البيانات تتغير.

- **OIDC**: OpenID Connect: طبقة Login فوق OAuth بـ ID token.

- **OpenAPI**: مواصفة لوصف HTTP APIs في ملف YAML/JSON (اسمها القديم Swagger).

- **operationId**: اسم فريد لعملية في OpenAPI.

- **Over-fetching**: الرد فيه بيانات أكتر من اللي محتاجه.

### P

- **PKCE**: حماية للـ Authorization code بـ verifier و challenge.

- **Polling**: تسأل كل شوية "في جديد؟".

- **Preflight**: طلب OPTIONS المتصفح بيبعته قبل طلب CORS "مش بسيط".

- **Problem Details**: شكل Errors موحّد `application/problem+json` (RFC 9457).

### Q

- **QUERY**: Method جديد (RFC 10008): بحث بـ Body وهو Safe.

### R

- **Rate limit**: حد لعدد الطلبات في فترة، و 429 لما تعدّيه.

- **Refresh token**: توكن طويل بيجيب Access token جديد.

- **Representation**: شكل الـ Resource اللي بيتبعت (JSON مثلاً).

- **Resource**: "الحاجة" اللي ليها URL: `/articles/42`.

- **REST**: أسلوب معماري بقيود (Stateless و Uniform interface…) من رسالة Fielding.

- **Retry-After**: هيدر بيقول تستنى قد إيه قبل ما تعيد.

- **RFC 3339**: صيغة تواريخ `2026-10-23T11:43:20Z`.

### S

- **Safe**: Method مبيغيرش حاجة (GET و HEAD).

- **Scope**: صلاحية محددة في OAuth (`repo:read`).

- **SDK**: مكتبة جاهزة بتلف الـ API في Functions.

- **SSE**: Server-Sent Events: سيرفر بيبعت Events على اتصال HTTP مفتوح.

- **Stateless**: كل طلب فيه كل اللي السيرفر محتاجه.

- **Status code**: رقم 3 خانات بيلخّص نتيجة الطلب للآلة.

- **Sunset**: هيدر (RFC 8594) بتاريخ وقف الحاجة نهائياً.

- **Swagger UI**: أداة بتعرض OpenAPI كصفحة تجرّب منها.

### T

- **timingSafeEqual**: مقارنة بوقت ثابت ضد الـ Timing attacks.

### U

- **Under-fetching**: محتاج طلبات كتير علشان تجمع اللي عايزه.

- **URLSearchParams**: كلاس JS لبناء وقراية Query strings بـ Encoding صح.

### V

- **Versioning**: طريقة تعيش بيها نسخ من الـ API: `/v1` أو Header بتاريخ.

### W

- **Webhook**: الـ Provider بيبعتلك POST لما حاجة تحصل.

- **WebSocket**: اتصال مفتوح في الاتجاهين.

### Y

- **YAML**: صيغة زي JSON بالمسافات، شائعة لملفات OpenAPI.
