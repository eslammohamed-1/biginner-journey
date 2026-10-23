---
title: "قاموس المصطلحات"
description: "كل مصطلح مهم في الكتاب في سطر واحد، مترتب أبجدياً. ارجعله كل ما تقابل كلمة ومش فاكر معناها."
sidebar:
  order: 102
  label: "ملحق ب: القاموس"
---

كل مصطلح مهم في الكتاب في سطر واحد، مترتب أبجدياً. ارجعله كل ما تقابل كلمة ومش فاكر معناها.

## #

- **429**: Too Many Requests: استنى وأعيد (إلا لو الحصة خلصت).

## A

- **API key**: مفتاح سري بيعرّف مشروعك عند الـ API. مكانه متغير بيئة أو `.env`، مش الكود.

- **argparse**: مكتبة Python لقراية الـ Arguments من سطر الأوامر وعمل `--help`.

- **asyncio**: طريقة Python لتشغيل مهام كتير بتستنى في نفس الوقت بـ `async` و`await`.

## B

- **Backoff**: إنك تستنى مدة بتزيد بعد كل فشل قبل ما تعيد (Exponential = بتتضاعف).

- **Base64**: تحويل bytes لنص من 64 حرف آمن علشان يتحط في JSON.

- **BaseModel**: الـ Class الأساسية في Pydantic، اللي بتدّي تحقق من الأنواع و JSON Schema.

- **Batch API**: تبعت طلبات كتير في ملف JSONL وتاخد النتايج خلال 24 ساعة بنص السعر.

## C

- **Chunk**: جزء من مستند (فقرة أو أكتر) بيتعمله Embedding لوحده.

- **Class / Object**: القالب / النسخة المبنية منه، زي `OpenAI` و`client`.

- **Context manager**: أي حاجة بتشتغل مع `with` وبتقفل نفسها في الآخر (`__enter__` و`__exit__`).

- **Context window**: أقصى Tokens الموديل يقدر يشوفها في طلب واحد (Input + Output).

- **Cosine similarity**: مقياس قرب اتجاه Vectorين، من 1 (نفس المعنى) لـ 0.

## D

- **dataclass**: Class للبيانات بتتكتب بسرعة بـ `@dataclass`.

- **DataFrame**: جدول في pandas: صفوف وأعمدة.

- **Decorator**: سطر بيبدأ بـ `@` فوق فانكشن أو Class بيزوّد عليها سلوك.

- **dict**: Python dictionary: مفاتيح وقيم، زي Object في JS.

- **Dry run**: تشغيل بيوريك هيعمل إيه من غير ما يعمل حاجة فعلاً.

## E

- **Embedding**: تمثيل نص كـ Vector أرقام، والمعنى القريب بيدّي أرقام قريبة.

- **Exception**: خطأ وقت التشغيل بيتمسك بـ `try/except`.

- **Exit code**: رقم بيرجّعه البرنامج للـ Terminal: 0 نجاح، وغيره مشكلة.

## F

- **f-string**: نص بيبدأ بـ `f` وبيحسب اللي بين `{ }`.

- **Fallback**: موديل بديل بيتستخدم لو الأول فشل (في OpenRouter: `models`).

- **Few-shot**: إنك تدّي الموديل أمثلة (سؤال وإجابة) في الطلب.

- **Function calling**: الموديل بيطلب تنفيذ فانكشن بـ Arguments، والكود بتاعك بينفّذ.

- **Future**: "إيصال" بنتيجة مهمة لسه شغالة في Thread.

## G

- **Generator**: فانكشن بـ `yield` بترجّع قيم واحدة واحدة.

- **glob**: نمط لاختيار ملفات زي `*.md`.

## I

- **Idempotent**: تشغيله مرتين بيدّي نفس النتيجة من غير تكرار.

- **Implicit caching**: الـ Provider بيحفظ أول الطلب المتكرر لوحده ويحسبه أرخص.

- **import**: إنك تجيب Module أو حاجة منه في الملف بتاعك.

- **Interactions API**: API جديد في Gemini (Beta) بيحفظ حالة المحادثة على السيرفر.

## J

- **Jitter**: رقم عشوائي بيتزوّد على الانتظار علشان الطلبات متتزامنش.

- **JSON Schema**: وصف شكل JSON: الحقول وأنواعها والإجباري منها.

- **JSONL**: ملف فيه JSON Object في كل سطر. مثالي للـ Resume والـ Batch.

## L

- **lambda**: فانكشن صغيرة من غير اسم في سطر: `lambda r: r["cost"]`.

- **List comprehension**: بناء List في سطر: `[x for x in xs if ...]`.

- **LLM**: Large Language Model: موديل لغة كبير بيكمّل النص Token Token.

- **logging**: مكتبة رسايل بمستويات (DEBUG و INFO و WARNING و ERROR).

## M

- **Method**: فانكشن جوه Object، بتتنادي بنقطة.

- **Module / Package**: ملف `.py` / فولدر Modules فيه `__init__.py`.

## O

- **OpenRouter**: خدمة بـ API واحد متوافق مع OpenAI بيوصّلك لموديلات شركات كتير.

## P

- **pathlib**: مكتبة المسارات في Python: `Path`.

- **pip**: أداة تسطيب مكتبات Python.

- **Prompt caching**: إعادة استخدام أول الطلب المتكرر بسعر أقل.

- **Prompt injection**: نص جوه البيانات بيحاول يدّي الموديل أوامر.

- **Pydantic**: مكتبة Models بتتحقق من الأنواع وبتطلّع JSON Schema.

## R

- **RAG**: Retrieval-Augmented Generation: دوّر على الأجزاء المناسبة وابعتها مع السؤال.

- **Rate limit**: حد عدد الطلبات أو الـ Tokens في الدقيقة أو اليوم (RPM و TPM و RPD).

- **Reasoning / Thinking**: Tokens الموديل بيفكّر بيها قبل الرد، ومش ظاهرة بس بتتحسب Output.

- **REPL**: Python التفاعلية (`>>>`): تكتب سطر وتشوف نتيجته.

- **Responses API**: الـ API الأساسي لتوليد النصوص في OpenAI (`responses.create`).

- **Resume**: الاسكريبت يكمّل من مكان ما وقف بدل ما يبدأ من الأول.

- **Retry-After**: Header بيقولك تستنى كام ثانية قبل ما تعيد.

## S

- **SDK**: مكتبة رسمية بتلف الـ API في فانكشنز وClasses.

- **Semaphore**: عدّاد تصاريح بيحدد كام مهمة تشتغل في نفس الوقت.

- **set**: مجموعة من غير تكرار، والبحث فيها سريع.

- **Slug**: اسم الموديل في OpenRouter بالشركة: `openai/gpt-6-luna`.

- **Stateless**: الـ API مبيفتكرش الطلبات اللي فاتت، فلازم تبعت التاريخ.

- **Strict mode**: ضمان إن الرد مطابق للـ Schema بالظبط.

- **Structured output**: رد JSON مضمون مطابق لـ Schema انت محدده.

- **System prompt / instructions**: تعليمات المطوّر الثابتة للموديل.

## T

- **Thread**: مسار تنفيذ جوه البرنامج، وكذا Thread بيستنوا ردود في نفس الوقت.

- **Timeout**: أقصى وقت تستنى فيه رد (OpenAI بالثواني و Gemini بالملّي).

- **Token**: حتة نص (~4 حروف إنجليزي)، وبيها بيتحسب الحد والسعر.

- **tqdm**: مكتبة Progress bar.

- **Traceback**: تقرير الخطأ: اقراه من تحت لفوق.

- **Type hint**: توضيح النوع زي `text: str`، للقراية والأدوات ومبيتفحصش.

## U

- **usage**: جزء من الرد فيه عدد الـ Tokens اللي هتدفعها.

## V

- **Vector**: List أرقام بطول ثابت.

- **venv**: بيئة Python معزولة لكل مشروع.
