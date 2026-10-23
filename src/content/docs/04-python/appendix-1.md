---
title: "Cheat Sheet وجدول الـ Flags وجدول الرموز"
description: "ورقة مراجعة لأهم أوامر الـ Terminal وسطور Python و OpenAI و Gemini و OpenRouter اللي في الكتاب، مقسّمة حسب الموضوع، وبعدها جدول الـ Flags وجدول لكل رمز ممكن تقابله في اسكريبت Python."
sidebar:
  order: 101
  label: "ملحق أ: Cheat Sheet"
---

ورقة مراجعة لأهم أوامر الـ Terminal وسطور Python و OpenAI و Gemini و OpenRouter اللي في الكتاب، مقسّمة حسب الموضوع، وبعدها جدول الـ Flags وجدول لكل رمز ممكن تقابله في اسكريبت Python.

#### Terminal (macOS)التشغيل

| الأمر | بيعمل إيه |
|---|---|
| `python3 --version / which python3` | أنهي Python |
| `python3 -m venv .venv` | اعمل venv |
| `source .venv/bin/activate / deactivate` | فعّل / اقفل |
| `python -m pip install -r requirements.txt` | سطّب من الملف |
| `pip freeze > requirements.txt` | ثبّت النسخ |
| `pip show openai` | نسخة مكتبة |
| `python script.py --help` | اقرا الخيارات |
| `python -m pkg.main` | شغّل Package |
| `export OPENAI_API_KEY=...` | متغير بيئة للجلسة دي |
| `grep -nE 'open\(\|unlink\|sk-' s.py` | دوّر على الخطر |

#### Python basicsاللغة

| الأمر | بيعمل إيه |
|---|---|
| `f"{x:,.2f}"` | تنسيق رقم |
| `text[:100] / text[-20:]` | Slice |
| `d.get("k", default)` | قيمة بأمان |
| `[x for x in xs if c]` | List comprehension |
| `for i, x in enumerate(xs, 1)` | رقم + عنصر |
| `for a, b in zip(xs, ys)` | اتنين مع بعض |
| `def f(a, *, b=1) -> int` | Keyword-only + hint |
| `f(**params)` | افرد dict |
| `sorted(rows, key=lambda r: r["cost"])` | ترتيب |
| `try / except X as e / else / finally` | الأخطاء |

#### Files & dataالملفات

| الأمر | بيعمل إيه |
|---|---|
| `Path("a") / "b.md"` | مسار |
| `p.read_text(encoding="utf-8")` | اقرا نص |
| `p.write_text(s, encoding="utf-8")` | اكتب (فوق!) |
| `sorted(folder.glob("*.md"))` | ملفات بترتيب |
| `p.stem / p.suffix / p.name` | أجزاء الاسم |
| `json.loads(s) / json.dumps(o, ensure_ascii=False)` | JSON |
| `open(p, "a") + f.flush()` | JSONL للـ Resume |
| `pd.read_excel(p) / df.to_excel(p, index=False)` | Excel |
| `df.to_csv(p, index=False, encoding="utf-8-sig")` | CSV لـ Excel |

#### OpenAI SDKOpenAI

| الأمر | بيعمل إيه |
|---|---|
| `client = OpenAI(max_retries=4, timeout=60)` | Client |
| `client.responses.create(model=, instructions=, input=)` | طلب |
| `r.output_text / r.status / r.usage` | الرد |
| `max_output_tokens=500` | سقف |
| `reasoning={"effort": "low"}` | تفكير أقل |
| `client.responses.parse(..., text_format=Model)` | Structured |
| `r.output_parsed` | الـ Object |
| `client.with_options(max_retries=0)` | إعداد لطلب |
| `client.responses.input_tokens.count(...)` | عدّ Tokens |
| `client.embeddings.create(model=, input=[...])` | Embeddings |

#### Google Gen AI SDKGemini

| الأمر | بيعمل إيه |
|---|---|
| `client = genai.Client()` | Client (GEMINI\_API\_KEY) |
| `client.models.generate_content(model=, contents=, config=)` | طلب |
| `types.GenerateContentConfig(system_instruction=, max_output_tokens=)` | الإعدادات |
| `r.text (ممكن None)` | الرد |
| `r.usage_metadata` | Tokens |
| `response_mime_type="application/json" + response_json_schema=` | Structured |
| `HttpOptions(timeout=60_000, retry_options=HttpRetryOptions(attempts=5))` | ms + Retries |
| `types.Part.from_bytes(data=, mime_type=)` | صورة/ملف |
| `client.models.count_tokens(model=, contents=)` | عدّ |
| `client.aio.models.generate_content(...)` | async |

#### OpenRouterOpenRouter

| الأمر | بيعمل إيه |
|---|---|
| `OpenAI(base_url="https://openrouter.ai/api/v1", api_key=...)` | Client |
| `model="openai/gpt-6-luna"` | Slug بالشركة |
| `extra_body={"models": [a, b]}` | Fallbacks |
| `extra_body={"provider": {"sort": "price"}}` | الـ Routing |
| `getattr(c.usage, "cost", None)` | التكلفة |
| `completion.model` | الموديل اللي رد فعلاً |

#### Scale & safetyعلى نطاق واسع

| الأمر | بيعمل إيه |
|---|---|
| `ThreadPoolExecutor(4) + as_completed` | توازي |
| `asyncio.Semaphore(8) + gather` | async بحد |
| `tqdm(iterable, desc=)` | Progress |
| `--dry-run / --limit N` | أول تشغيل |
| `load_done() + "a"` | Resume |
| `Batch API: JSONL + custom_id` | نص السعر |
| `backoff: min(cap, base*2**n) + jitter` | Retry |

<a id="a1-1"></a>

## أ.1 جدول الـ Flags

نفس الحرف ممكن يبقى ليه معنى مختلف من أمر للتاني. ولما تشك: `python script.py --help` أو `man grep`.

**الـ Flags ومعانيها حسب الأمر**

| الـ Flag | في | المعنى |
|---|---|---|
| `-m` | python | شغّل Module (venv و pip و Package) |
| `-c` | python | شغّل كود من سطر الأوامر |
| `-i` | python | افتح REPL بعد التشغيل |
| `-r` | pip install | من ملف requirements |
| `-U` | pip install | حدّث لأحدث نسخة |
| `--help / -h` | argparse | اطبع الاستخدام |
| `action="store_true"` | argparse | Flag من غير قيمة |
| `type=int / type=Path` | argparse | تحويل القيمة |
| `choices=[...]` | argparse | قيم مسموحة بس |
| `required=True` | argparse | Option إجباري |
| `-n` | grep | رقم السطر |
| `-E` | grep | Regex ممتد (\|) |
| `-R` | cp | انسخ فولدر بكل اللي فيه |
| `-s / -o /dev/null` | curl | اسكت / ارمي الـ Body |
| `-w '%{http_code}'` | curl | اطبع الـ Status |

<a id="a1-2"></a>

## أ.2 جدول الرموز

**كل رمز في الكتاب ومعناه**

| الرمز | المعنى | مثال |
|---|---|---|
| `#` | تعليق | `# skip hidden files` |
| `:` | آخر سطر قبل بلوك | `if x:` |
| `= / ==` | تعيين / مقارنة | `n = 0 / n == 0` |
| `f"{x}"` | f-string | `f"{n} files"` |
| `{x:,} {x:.4f} {x:>10}` | تنسيق | `f"{cost:.4f}"` |
| `{{ }}` | قوس حرفي جوه format | `"{{\"a\": 1}}"` |
| `[a:b]` | Slice | `text[:100]` |
| `**` | أُس / افرد dict | `2**3 / f(**kw)` |
| `*` | افرد List / بعده بالاسم | `f(*xs) / def f(*, a)` |
| `//` | قسمة صحيحة | `len(t) // 4` |
| `@` | Decorator / ضرب مصفوفات | `@dataclass / m @ v` |
| `->` | نوع الرجوع | `def f() -> str` |
| `\|` | Union في الأنواع | `str \| None` |
| `_` | مش محتاجه / فاصل أرقام | `for _ in ... / 20_000` |
| `__x__` | أسماء خاصة بـ Python | `__name__ / __init__` |
| `.` | Attribute / Relative import | `r.usage / from .config` |
| `!r` | repr في f-string | `f"{name!r}"` |
| `b'...'` | bytes | `b'\x89PNG'` |
| `\n` | سطر جديد | `"a\nb"` |
| `...` | بقية محذوفة في أمثلة الكتاب | `sk-proj-...` |
