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

كل المعلومات اتاخدت من المصادر الرسمية (RFCs، و MDN، و json.org، و OpenAPI spec، و Docs بتاعة GitHub و Stripe و Express) يوم **23 أكتوبر 2026**، وكل الـ 160 لينك اللي في ملحق الروابط اتفتحوا في نفس اليوم. الـ APIs العامة بتتغير (زي ما حصل مع REST Countries)، فلو رد عندك اختلف عن الكتاب، الرد الحقيقي هو الصح.

<a id="a4-2"></a>

## د.2 النسخ اللي اتجربت عليها

- Node.js 24.22.1 (LTS)، و Express 5.3.0، و zod 4، و ajv 8.20.0، و ajv-formats 3.0.1، و yaml 2.9.1.
- curl و OpenSSL 3.5.7، و jq 1.8.2، و HTTPie 3.2.4.
- Redocly CLI 2.70.0، و openapi-typescript 7.13.0 (بـ `npx`).
- OpenAPI 3.2.0 للـ Specs اللي كتبناها، و JSON Schema 2020-12.

<a id="a4-3"></a>

## د.3 إيه اللي اتجرب وإزاي

- **كل الطلبات للـ APIs العامة** (GitHub، و Stripe من غير Key، و JSONPlaceholder، و DummyJSON، و PokeAPI، و Open-Meteo، و Frankfurter، و NASA، و REST Countries، و GraphQL countries، و httpbin) اتبعتت فعلاً، والردود في الكتاب حقيقية (أحياناً مقصوصة بـ `...`).
- **كل السيرفرات والسكريبتات** (`server.js` و`library.js` و`hook.js` و`contract.mjs` و`report.mjs` وغيرهم) اتشغّلت، والخرج في الكتاب منها. `library.js` اتعدّل خلال الفصول، وكل رد مكتوب من النسخة اللي كانت شغالة وقتها.
- الـ JWT و HMAC و PKCE اتأكدنا منهم بالـ Test vectors الرسمية (GitHub و RFC 7636).
- <strong>البيئة Linux مش macOS.</strong> أوامر الـ Mac (brew، و`date -r`، و jq المدمج في macOS، و LibreSSL) مكتوبة من الدوكيومنتيشن. وفيه فروق صغيرة متوقعة، زي رسالة خطأ DNS (على الـ Mac غالباً `ENOTFOUND`، وفي بيئتنا ظهر `ECONNRESET`) وشكل خرج `openssl dgst`.

<a id="a4-4"></a>

## د.4 حاجات لسه Draft أو جديدة

- هيدرز `RateLimit` و`Idempotency-Key` لسه IETF Drafts، وممكن تتغير قبل ما تبقى RFC.
- OAuth 2.1 لسه Draft. والـ QUERY method (RFC 10008) جديد، والدعم في الأدوات لسه بيتبني.
- OpenAPI 3.2 جديد، وبعض الأدوات ممكن تكون لسه على 3.1. Redocly و openapi-typescript اشتغلوا معاه في تجاربنا.

<a id="a4-5"></a>

## د.5 ملاحظات لقيناها وإحنا بنجرّب

- GitHub مبيبعتش `WWW-Authenticate` مع الـ 401، ونسخة API مش موجودة بترجّع 400 (والـ Docs بتقول نسخة اتقفلت = 410).
- Express بيرجّع 404 مش 405 للـ Method الغلط، وبيحط Weak ETag أوتوماتيك.
- REST Countries v3.1 اتقفلت، و Frankfurter v1 مفيهاش الجنيه.
