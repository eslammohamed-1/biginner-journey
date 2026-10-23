---
title: "Cheat Sheet وجدول الـ Flags وجدول الرموز"
description: "ورقة مراجعة لأهم أوامر curl و HTTPie و jq وسطور fetch و Express والأدوات اللي في الكتاب، مقسّمة حسب الموضوع، وبعدها جدول الـ Flags وجدول لكل رمز ممكن تقابله في طلب أو رد أو Spec."
sidebar:
  order: 101
  label: "ملحق أ: Cheat Sheet"
---

ورقة مراجعة لأهم أوامر curl و HTTPie و jq وسطور fetch و Express والأدوات اللي في الكتاب، مقسّمة حسب الموضوع، وبعدها جدول الـ Flags وجدول لكل رمز ممكن تقابله في طلب أو رد أو Spec.

#### curlالطلبات

| الأمر | بيعمل إيه |
|---|---|
| `curl -s URL \| jq` | اطلب واقرا JSON |
| `curl -i URL` | الهيدرز + الـ Body |
| `curl -sv URL` | كل حاجة على stderr |
| `curl -s -D h.txt URL` | احفظ الهيدرز في ملف |
| `curl --json '{"a":1}' URL` | POST بـ JSON (والـ Headers) |
| `curl -X PATCH -H 'Content-Type: application/merge-patch+json' -d @p.json URL` | PATCH بنوع خاص |
| `curl -G URL --data-urlencode 'q=a b'` | Query مع Encoding |
| `curl --fail-with-body URL` | Exit 22 + Body لو 4xx/5xx |
| `curl -w '%{http_code}\n' -o /dev/null URL` | الـ Status بس |
| `curl -u user:pass URL` | Basic auth |
| `curl -H 'Authorization: Bearer $T' URL` | Bearer |
| `curl -H 'If-None-Match: "…"' URL` | Conditional (304) |
| `curl --data-binary @f.json URL` | ابعت الملف زي ما هو |

#### HTTPieHTTPie

| الأمر | بيعمل إيه |
|---|---|
| `http URL` | GET ملوّن |
| `http POST URL title=Hi n:=5 ok:=true` | String / JSON values |
| `http URL q==term` | Query param |
| `http URL Header:value` | Header |
| `http --offline POST URL a=1` | شوف الطلب من غير ما يتبعت |
| `http -A bearer -a $T URL` | Bearer |
| `--ignore-stdin` | في Scripts (مش tty) |

#### jqjq

| الأمر | بيعمل إيه |
|---|---|
| `.a.b / .[0] / .[]` | المسارات |
| `.a?  /  .x // "default"` | أمان / بديل |
| `map(select(.done))` | فلترة |
| `{id, title}` | Object جديد |
| `length / keys / sort_by(.x) / group_by(.x)` | Functions |
| `-r / -c / -s / -n / -e` | Flags |
| `--arg k v / --argjson k 5` | متغيرات |
| `@csv / @tsv / @uri / @base64d` | تحويلات |

#### fetchJavaScript

| الأمر | بيعمل إيه |
|---|---|
| `const res = await fetch(url, { signal: AbortSignal.timeout(10_000) })` | طلب بـ Timeout |
| `if (!res.ok) throw ...` | 4xx/5xx مش بترمي لوحدها |
| `await res.json() / res.text()` | Body مرة واحدة |
| `res.headers.get("link")` | Header |
| `fetch(url, { method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(o) })` | POST |
| `new URLSearchParams({ q, limit: 10 })` | Query |
| `JSON.stringify(o, null, 2)` | JSON منسّق |
| `JSON.parse(s, reviver)` | Parse بتحويل |

#### Express 5Express

| الأمر | بيعمل إيه |
|---|---|
| `app.use(express.json())` | اقرا JSON |
| `app.get("/v1/articles/:id", (req, res) => …)` | Route |
| `req.params / req.query / req.body / req.get(h)` | الـ Input |
| `res.status(201).location(u).json(o)` | 201 + Location |
| `res.status(204).end()` | من غير Body |
| `res.type("application/problem+json")` | Problem |
| `app.use((err, req, res, next) => …)` | Error handler (4 args) |
| `express.raw({ type: "application/json" })` | Raw body للـ Webhooks |
| `"/v1/articles/:id\\:publish"` | ‎:publish حرفي |

#### Specs & toolsأدوات

| الأمر | بيعمل إيه |
|---|---|
| `npx -y @redocly/cli@latest lint openapi.yaml` | Lint |
| `npx -y @redocly/cli@latest build-docs openapi.yaml -o docs.html` | Docs |
| `npx -y openapi-typescript@latest openapi.yaml -o schema.d.ts` | Types |
| `new Ajv2020({ allErrors: true })` | Validation |
| `openssl dgst -sha256 -hmac SECRET -hex < body` | توقيع HMAC |
| `date -r 1792758101` | Unix time ← تاريخ (Mac) |

<a id="a1-1"></a>

## أ.1 جدول الـ Flags

نفس الحرف ممكن يبقى ليه معنى مختلف من أداة للتانية (`-s` في curl غير `-s` في jq). ولما تشك: `man curl` أو `jq --help` أو `http --help`.

**الـ Flags ومعانيها حسب الأداة**

| الـ Flag | في | المعنى |
|---|---|---|
| `-s` | curl | اسكت (من غير Progress) |
| `-i` | curl | اطبع هيدرز الرد |
| `-I` | curl | HEAD بس |
| `-v` | curl | اطبع كل الحوار |
| `-D file` | curl | احفظ الهيدرز |
| `-o file` | curl | احفظ الـ Body |
| `-L` | curl | امشي ورا الـ Redirects |
| `-X` | curl | الـ Method |
| `-H` | curl | Header |
| `-d` | curl | Body (form، وبيشيل Newlines من @file) |
| `--json` | curl | Body JSON + Headers |
| `-G` | curl | حوّل -d لـ Query |
| `-f / --fail-with-body` | curl | Exit 22 على Errors |
| `-w` | curl | اطبع متغيرات (http\_code) |
| `-u` | curl | Basic auth |
| `-r` | jq | نص خام |
| `-c` | jq | سطر واحد |
| `-s` | jq | اقرا كله كـ Array |
| `-n` | jq | من غير Input |
| `-e` | jq | Exit code حسب النتيجة |
| `--arg / --argjson` | jq | متغير String / JSON |
| `==` | HTTPie | Query param |
| `:=` | HTTPie | قيمة JSON (رقم/Boolean) |
| `:` | HTTPie | Header |
| `--offline` | HTTPie | اطبع الطلب بس |

<a id="a1-2"></a>

## أ.2 جدول الرموز

**كل رمز في الكتاب ومعناه**

| الرمز | المعنى | مثال |
|---|---|---|
| `{ }` | Object في JSON / Block في JS | `{"a": 1}` |
| `[ ]` | Array | `[1, 2]` |
| `" "` | String في JSON (مفيش ') | `"title"` |
| `\` | Escape | `"a\"b"` |
| `?` | بداية الـ Query | `/articles?limit=5` |
| `&` | فاصل Query (وفي Shell: خلفية!) | `a=1&b=2` |
| `#` | Fragment / JSON Pointer في URI | `#/components/schemas` |
| `/` | فاصل المسار / JSON Pointer | `/title` |
| `~1 ~0` | / و ~ جوه JSON Pointer | `#/paths/~1articles` |
| `:id` | Path param في Express | `/articles/:id` |
| `{id}` | Path param في OpenAPI | `/articles/{articleId}` |
| `:publish` | Custom method | `/articles/42:publish` |
| `-createdAt` | ترتيب تنازلي | `?sort=-createdAt` |
| `<…>; rel="next"` | Link header | `<url>; rel="next"` |
| `W/"…"` | Weak ETag | `W/"113-…"` |
| `@1790812800` | Date في Structured field | `Deprecation: @…` |
| `q= w= r= t=` | RateLimit params | `"default";r=0;t=60` |
| `sha256=` | بادئة التوقيع | `X-Hub-Signature-256` |
| `$ref` | مرجع في Schema/Spec | `{"$ref": "#/$defs/x"}` |
| `. \| //` | jq: المسار / Pipe / بديل | `.a \| .b // 0` |
| `Bearer` | نوع التوكن | `Authorization: Bearer …` |
| `eyJ` | بداية أي JWT (Base64url لـ {") | `eyJhbGciOi…` |
| `2XX` | أي كود في الـ 200s (OpenAPI) | `"2XX":` |
| `...` | بقية محذوفة في أمثلة الكتاب | `{"id":"4",...}` |
