---
title: "الإجابات والحلول"
description: "جاوب بنفسك الأول، وبعدين قارن. لكل فصل: إجابات أسئلة المراجعة، وبعدها صح ولا غلط، وبعدها حلول التحديات أو مفاتيحها. أغلب التحديات تجارب عملية، فلو وصلت لنفس النتيجة بطريقة تانية فهي صح."
sidebar:
  order: 105
  label: "ملحق ه: الإجابات"
---

جاوب بنفسك الأول، وبعدين قارن. لكل فصل: إجابات أسئلة المراجعة، وبعدها صح ولا غلط، وبعدها حلول التحديات أو مفاتيحها. أغلب التحديات تجارب عملية، فلو وصلت لنفس النتيجة بطريقة تانية فهي صح.

#### الفصل 1: حكاية Python

1. كانت عايزة لغة سهلة القراية تربط الأدوات ببعض بسرعة (لغة Scripting). وبقت لغة الـ AI لأن مكتبات الأرقام والتعلم الآلي (numpy و pandas و PyTorch) اتبنت عليها، فالشركات عملت الـ SDKs بتاعتها بـ Python الأول.
2. `=` بتحط قيمة في متغير (Assignment)، و`==` بتسأل "متساويين؟" وبترجّع True أو False.
3. إن الكود ده Python 2 القديمة. في Python 3، `print` فانكشن ولازم أقواس: `print("done")`. وأي كود زي ده محتاج يتحدّث.
4. الـ `f` بتخلي النص f-string: أي حاجة بين `{ }` بتتحسب وقيمتها تتحط مكانها، فلو `n = 3` يطلع `Found 3 files`.

<strong>صح ولا غلط:</strong> (1) غلط: الـ SyntaxError بيتكشف قبل التنفيذ، فولا سطر بيتنفّذ. · (2) صح: Python بتعمله تاني لوحدها. · (3) غلط: المسافات في Python جزء من اللغة وبتحدد البلوكات.

<strong>التحديات:</strong>

1. في الفولدر اللي فيه ملفات بيطبع العدد، وفي الفاضي بيطبع 0 أو رسالة الـ else حسب الكود.
2. هيطلع `IndentationError: expected an indented block after 'if' statement on line N`: بيقول إن بعد الـ if لازم بلوك متزحزح.
3. `'HELLO'` (حروف كبيرة)، و`['a', 'b', 'c']` (قسّم على الشرطة)، و`3` (عدد العناصر).

#### الفصل 2: python3 و venv و pip

1. مشروع قديم محتاج `openai` 1.x ومشروع جديد محتاج 3.x. من غير venv الاتنين بيتسطّبوا في نفس المكان فواحد يبوّظ التاني. الـ venv بيدّي كل مشروع فولدر مكتبات لوحده.
2. `python3` المفسّر، و`-m venv` شغّل Module اسمه venv، و`.venv` اسم الفولدر اللي هيتعمل (والنقطة تخليه مخفي).
3. `>=3.37` أي نسخة 3.37 أو أحدث (ممكن 4.0 تيجي وتكسر حاجة)، و`==3.37.0` النسخة دي بالظبط (ثبات كامل).
4. لأنه كبير وخاص بجهازك ونظامك. التاني بيعمله من `requirements.txt`.

<strong>صح ولا غلط:</strong> (1) غلط: لازم `source .venv/bin/activate` تاني. · (2) صح. · (3) غلط: بيشتغل بس لما الملف يتشغّل مباشرة.

<strong>التحديات:</strong>

1. `python3 -m venv .venv` ثم `source .venv/bin/activate` ثم `pip install openai google-genai` ثم `pip list`.
2. بعد `rm -rf .venv` وإعادة الإنشاء، `pip install -r requirements.txt` بيرجّع نفس النسخ بالظبط.
3. `python tool.py` بيطبع working لأن `__name__ == "__main__"`. أما الملف التاني اللي بيعمل import فمبيطبعهاش، لأن جوه tool.py `__name__` بقى `"tool"`.

#### الفصل 3: خطة القراية

1. (1) الـ Docstring وطريقة التشغيل: بيعمل إيه. (2) الـ Imports: عدّته. (3) الإعدادات (CAPITALS): الموديل والمسارات. (4) الفانكشنز: الوحدات. (5) main: الترتيب. (6) الخطر: كتابة ومسح وفلوس.
2. بيقرا جداول (pandas) ويبعتها لـ Gemini، و`shutil` بيقلق لأنها بتنقل وتمسح ملفات وفولدرات، فدوّر على `rmtree` و`move`.
3. لأنه بيحدد التكلفة والجودة والسرعة، وممكن يكون موديل قديم أو غالي.

<strong>صح ولا غلط:</strong> (1) غلط: ابدأ بالصورة الكبيرة (Imports والإعدادات و main). · (2) غلط: ده اتفاق للقراية بس، Python مبتمنعش التغيير. · (3) غلط: الكتابة في الآخر ومفيش try، فالخطأ بيوقّع الاسكريبت قبل ما يكتب أي حاجة.

<strong>التحديات:</strong>

1. مثال: `pathlib` و`csv` و`openai`، يعني ملفات و CSV و OpenAI.
2. مثال: "بياخد ملفات .md من notes، ويلخّص كل واحد بـ gpt-6-luna، ويكتب summaries.csv".
3. مثال: `open(..., "w")` ممكن يكتب فوق ملف قديم، و`for` على كل الملفات بموديل غالي بتصرف فلوس، و`unlink` ممكن تمسح الأصل.

#### الفصل 4: المتغيرات والأنواع

1. `"55"` (لزق نصوص) و`10` (جمع أرقام).
2. `f` = f-string، و`{cost}` = المتغير، و`:` = بداية التنسيق، و`.4` = 4 أرقام بعد العلامة، و`f` = رقم عشري ثابت. فـ 0.12345 تطلع 0.1235.
3. `d["k"]` لما المفتاح لازم يكون موجود (ولو ناقص يبقى Bug ولازم يقع). و`d.get("k")` لما ممكن يكون ناقص وعندك قيمة بديلة.
4. `resp["data"]` List، ثم `[0]` أول عنصر (dict)، ثم `["embedding"]` List أرقام، ثم `[:5]` أول 5 أرقام.

<strong>صح ولا غلط:</strong> (1) صح. · (2) غلط: بترجّع None. · (3) غلط: الـ List الفاضية Falsy.

<strong>التحديات:</strong>

1. `[:20]` أول 20 حرف، و`[-20:]` آخر 20، و`.split()` List كلمات.
2. `for k, v in d.items(): print(k, v)`.
3. `print(f"{name:25}{tokens:>10,}{cost:>12.5f}")`.

#### الفصل 5: الشروط والـ Loops

1. `ids = []` ثم `for r in rows:` ثم `if r["ok"]: ids.append(r["id"])`.
2. بيدّيك رقم الملف من 1، فتطبع `3/120` وتعرف وصلت فين، وتلاقي الملف لو حصلت مشكلة.
3. لو شرط الخروج ماتحققش (Bug أو API بيرجّع نفس الخطأ)، هيفضل يبعت طلبات مدفوعة للأبد. فحط دايماً سقف محاولات.

<strong>صح ولا غلط:</strong> (1) غلط: 0 و 1 و 2. · (2) غلط: بتعدّي اللفة دي بس، و`break` هي اللي بتخرج. · (3) صح.

<strong>التحديات:</strong>

1. `for i, name in enumerate(names, start=1): print(f"{i}/{len(names)} {name}")`.
2. `[n.upper() for n in names if n.endswith(".txt")]`.
3. `for attempt in range(1, 4):` ثم اطبع، و`if random.random() > 0.5: break`، ونفس الفكرة بـ while بعدّاد يزيد لحد 3.

#### الفصل 6: الدوال

1. اسمها `count_tokens`، وبتاخد `text` نص إجباري و`model` نص له قيمة افتراضية، و`-> int` بترجّع رقم صحيح.
2. بتتفرد لـ `create(model="x", input="hi")`.
3. `rows.sort(key=lambda r: r["cost"])` أو `sorted(rows, key=lambda r: r["cost"])`.

<strong>صح ولا غلط:</strong> (1) صح. · (2) غلط: الـ Type hints مبتتفحصش وقت التشغيل. · (3) صح: الـ `*` بتجبر كل اللي بعدها يتبعت بالاسم.

<strong>التحديات:</strong>

1. `def trim(text, limit=1000): return text[:limit]`، و`trim(t, 50)` و`trim(t, limit=50)`.
2. `def show(**kw): print(kw)` و`show(**settings)`، أو بأسماء صريحة.
3. هتلاقي Parameters زي `model` و`input` و`instructions` و`max_output_tokens` و`store`، كلها Keyword-only ونوعها Optional.

#### الفصل 7: import

1. `import json` بيخليك تكتب `json.loads` فتعرف هي جاية منين. و`from json import loads` أقصر بس مصدرها مش باين.
2. `google` Package، و`.genai` Package جواها، و`import types` Module جوه genai.
3. مش في الـ venv المفعّل، أو انت مفعّل venv تاني، أو اسم التسطيب مختلف عن اسم الـ import. سطّب `pip install python-dotenv`.

<strong>صح ولا غلط:</strong> (1) غلط: اسم الـ import `from google import genai`. · (2) صح. · (3) صح: Python بتلاقي الملف المحلي الأول.

<strong>التحديات:</strong>

1. المسار لازم يكون جوه `.venv/lib/python3.x/site-packages/`.
2. `import helpers` ثم `helpers.f()`، أو `from helpers import f` ثم `f()`.
3. `ImportError: cannot import name 'OpenAI' from 'openai' (.../openai.py)`. والحل: غيّر اسم الملف وامسح `__pycache__`.

#### الفصل 8: الـ Classes

1. `client` Object، و`.models` Object جواه (Resource)، و`.generate_content` Method بتتنادي بالأقواس.
2. بتطبع الرد كله كـ JSON منسق، فتشوف كل الحقول وأساميها بدل التخمين.
3. `ArticleInfo` بيورث من `BaseModel`، فخد التحقق من الأنواع و`model_dump` و`model_validate_json` و`model_json_schema`.

<strong>صح ولا غلط:</strong> (1) غلط: Python بتبعته لوحدها. · (2) غلط: الـ Response Object مش dict، فالأقواس المربعة بتدّي TypeError. · (3) صح.

<strong>التحديات:</strong>

1. بالأسعار اللي في الفصل: (10,000 × سعر الـ Input + 2,000 × سعر الـ Output) ÷ 1,000,000.
2. الأول ينجح. والتاني يطلع `ValidationError` بيقول `tags`: Input should be a valid list.
3. الـ `description` بيظهر جوه `properties` تحت الحقل نفسه.

#### الفصل 9: الملفات

1. `out = Path("output") / Path("input/a.md").with_suffix(".json").name`.
2. لأن ترتيب glob مش مضمون، و`sorted` بيخلي كل تشغيل يمشي بنفس الترتيب، فالـ Logs والـ limit والـ Resume يبقوا متوقعين.
3. المسارات النسبية بتتحسب من الفولدر اللي انت واقف فيه (cwd) مش من فولدر الاسكريبت. والحل: `Path(__file__).parent / "notes"`.

<strong>صح ولا غلط:</strong> (1) غلط: `/` بتلزق المسارات. · (2) غلط: `"w"` بتمسح وتكتب من الأول، و`"a"` هي اللي بتزوّد. · (3) غلط: محتاج `**/*.md` أو `rglob`.

<strong>التحديات:</strong>

1. `for p in sorted(Path(".").glob("*.md")): print(p.name, f"{p.stat().st_size/1024:.1f} KB")`.
2. `out.mkdir(exist_ok=True)`، ثم لكل `p` في `in/*.txt`: `(out / p.name).write_text(p.read_text(encoding="utf-8").upper(), encoding="utf-8")`.
3. قبل الكتابة: `if (out / p.name).exists(): continue`.

#### الفصل 10: JSON و CSV و Excel

1. كل نتيجة بتتكتب سطر لوحدها أول بأول. ولو الاسكريبت وقع ميضيعش اللي خلص، وتقدر تكمّل. والـ JSON العادي لازم يتكتب كله مرة واحدة.
2. بيكتب الـ DataFrame لـ Excel من غير عمود الـ Index. ولو الملف موجود **بيتكتب فوقه**.
3. ده الـ BOM بتاع `utf-8-sig` اتقرا كجزء من الاسم. اقرا بـ `encoding="utf-8-sig"`.

<strong>صح ولا غلط:</strong> (1) غلط: بتاخد نص، و`json.load` بتاخد ملف مفتوح. · (2) غلط: بتعدّل نسخة. استخدم `df.loc` أو عمليات على العمود كله. · (3) غلط: ده العربي متشفّر Unicode escapes، والملف سليم.

<strong>التحديات:</strong>

1. من غير `ensure_ascii=False` العربي بيظهر `\u...`، ومعاها بيظهر عربي.
2. `df["length"] = df["text"].str.len()` ثم `df.to_excel("new.xlsx", index=False)`.
3. `open(p, "a")` لكل سطر، وبعدين `{json.loads(l)["name"] for l in open(p)}`.

#### الفصل 11: الكلام مع أي API

1. الـ Method (POST)، والـ URL، والـ Headers (Authorization و Content-Type)، والـ Body (JSON فيه model و input).
2. 400 الطلب نفسه غلط فمتعيدش وصلّح الكود. و429 كتير أو زيادة عن الحد، فاستنى وأعيد (إلا لو الحصة أو الرصيد خلصوا).
3. لأن الـ SDK بيقرا `OPENAI_API_KEY` من متغيرات البيئة لوحده.

<strong>صح ولا غلط:</strong> (1) صح. · (2) غلط: الـ Key لسه في تاريخ Git. لازم تعمله Rotate. · (3) غلط: الافتراضي مبيكتبش فوق الموجود.

<strong>التحديات:</strong>

1. `load_dotenv()` ثم `print(os.getenv("MODEL"))`.
2. هيطبع 429، و`raise_for_status()` هترمي `HTTPError: 429 Client Error: TOO MANY REQUESTS`.
3. اللي في الـ Terminal (old) بيكسب، ومع `override=True` اللي في .env (new) هو اللي بيكسب.

#### الفصل 12: الأخطاء

1. آخر سطر في الـ Traceback بيقول نوع الخطأ، والسطر اللي قبله بيقول الفانكشن ورقم السطر. واللي فوقه هي سلسلة اللي نادوا عليها (اقرا من تحت لفوق).
2. أي خطأ (Key غلط أو رصيد خلص) بيختفي، والاسكريبت يكمّل على الـ 1000 ويقول خلص، والنتيجة فاضية أو ناقصة من غير ما تعرف.
3. `else` بتتنفّذ لو مفيش خطأ حصل، و`finally` بتتنفّذ دايماً.

<strong>صح ولا غلط:</strong> (1) غلط: آخر سطر. · (2) صح. · (3) صح: RateLimitError بتورث من APIError.

<strong>التحديات:</strong>

1. KeyError و IndexError و AttributeError و ValueError.
2. `try: text = p.read_text()` و`except FileNotFoundError: print("missing", p); continue`.
3. هيطبع 401.

#### الفصل 13: logging و argparse

1. `-h` مساعدة، و`--provider` اختياري بقيمة من اتنين، و`--out` اختياري بقيمة، و`input` إجباري بالترتيب. والأقواس المربعة يعني اختياري.
2. لو وقع بعد ساعة، الـ Log موجود في ملف تقراه، وكمان تشوف التحذيرات اللي فاتت على الشاشة.
3. تشوف هيلمس أنهي ملفات وكام تكلفة من غير ما تصرف ولا تكتب حاجة.

<strong>صح ولا غلط:</strong> (1) غلط: بس WARNING وأعلى. · (2) غلط: `args.dry_run`. · (3) صح.

<strong>التحديات:</strong>

1. من غير input\_dir هيطلع `error: the following arguments are required: input_dir`.
2. قيمة غلط بتطلّع `error: argument --provider: invalid choice`.
3. Handler للشاشة وواحد للملف، و`level = logging.DEBUG if args.verbose else logging.INFO`.

#### الفصل 14: أساسيات الـ LLM API

1. لأن توليد كل Token Output خطوة حساب لوحدها، والـ Input بيتقرا مرة واحدة. والترجمة Output تقريباً قد الـ Input، فالـ Output بيبقى معظم الفاتورة.
2. `instructions`: القواعد الثابتة (الفئات والشكل وإن التعليق بيانات). و`input`: التعليق نفسه.
3. سقف الـ Output أو التفكير أكل المساحة. في OpenAI: `status == "incomplete"` و`incomplete_details.reason`. وفي Gemini: `finish_reason == MAX_TOKENS`.

<strong>صح ولا غلط:</strong> (1) غلط: الـ API Stateless. · (2) غلط: بتتحسب Output. · (3) غلط: الموديلات دي بتتجاهل temperature (وبتدّي Deprecation warning).

<strong>التحديات:</strong>

1. مثال (أكتوبر 2026): gpt-6-luna ‏$0.10/$0.50، و gemini-3.5-flash-lite ‏$0.30/$2.50.
2. على الموديلات الجديدة شيل temperature، واستبدل max\_tokens بـ `max_output_tokens` (Responses) أو `max_output_tokens` في config (Gemini).
3. usage.output\_tokens\_details.reasoning\_tokens هيبقى أكبر بكتير مع high.

#### الفصل 15: خريطة الموديلات

1. Input = 2,000,000 و Output = 300,000. Luna: ‏0.20 + 0.15 = **$0.35**. و 3.8 Flash: ‏1.50 + 1.125 = **$2.625** (قبل يناير 2027).
2. لأن البيانات الحساسة أو بيانات العملاء ممكن تتستخدم لتحسين منتجاتهم، فاستخدم Paid tier للحاجات دي.
3. اسم الموديل: غالباً الـ AI كتب اسم قديم أو مش موجود أو بشكل غلط. قارنه بصفحة Models.

<strong>صح ولا غلط:</strong> (1) غلط: الـ alias بيتغيّر لوحده. · (2) غلط: مش متاح على الـ Free tier. · (3) صح: ‏$0.10/$0.50 مقابل $0.75/$4.50.

<strong>التحديات:</strong>

1. إجابة مفتوحة: قارن بجداول الفصل، واكتب التاريخ.
2. OpenAI `m.id` و Gemini `m.name` (بيبدأ بـ `models/`).
3. مثال: ملف 1500 Token + 200 Output، واحسب بالمعادلة لكل موديل.

#### الفصل 16: OpenAI SDK

1. Responses: `client.responses.create(model=M, instructions=S, input=U)`. وChat: `client.chat.completions.create(model=M, messages=[{"role":"developer","content":S},{"role":"user","content":U}])`.
2. دفعت 328 Input و52 Output (380 إجمالي)، ومنهم 0 Reasoning.
3. علشان الطلبات والردود متتخزنش عند OpenAI (الافتراضي true)، وانت مش محتاج previous\_response\_id.

<strong>صح ولا غلط:</strong> (1) غلط: ممكن يبقى reasoning. · (2) غلط: لازم تبعتها تاني. · (3) صح.

<strong>التحديات:</strong>

1. كل حقل في جدول الفصل هتلاقيه في الـ JSON.
2. `status` هيبقى `incomplete` و`incomplete_details.reason` هيبقى `max_output_tokens`.
3. input\_tokens بيزيد كل دور، لأن التاريخ كله بيتحسب Input.

#### الفصل 17: Gemini SDK

1. كبير: لو `GOOGLE_API_KEY` القديم موجود في البيئة، هو اللي بيتاخد بدل الجديد. امسحه أو ابعت `api_key=` صريح.
2. 9 + 40 = **49** (الظاهر + التفكير).
3. generate\_content للإنتاج والـ Batch والثبات، و Interactions (Beta) للمحادثات اللي محتاجة حالة على السيرفر، أو لو هتجرب الجديد.

<strong>صح ولا غلط:</strong> (1) غلط: 30 ميلّي ثانية. · (2) غلط: ممكن None. · (3) غلط: الـ Batch مش متاح لسه في Interactions.

<strong>التحديات:</strong>

1. هتلاقي prompt\_token\_count و candidates\_token\_count و thoughts\_token\_count.
2. `FinishReason.MAX_TOKENS`.
3. Chats بتبعت التاريخ كله كل مرة من جهازك، و Interactions بيخزّنه على السيرفر ويكفي `previous_interaction_id`.

#### الفصل 18: المقارنة

1. `client.responses.create(model=M, instructions=system_instruction, input=contents, max_output_tokens=N)`.
2. علشان الاسكريبت ميعتمدش على شكل رد شركة معينة. لو غيّرت الـ Provider، main مبيتغيرش.
3. Timeout 30 ميلّي ثانية، فكل طلب هيفشل تقريباً.

<strong>صح ولا غلط:</strong> (1) صح. · (2) غلط: التفكير في thoughts\_token\_count. · (3) غلط: محتاج HttpRetryOptions.

<strong>التحديات:</strong>

1. قارن الطول والأسلوب و usage.
2. `model: str` في Reply، وتتملي من `r.model` في OpenAI و`r.model_version` في Gemini.
3. فرع `if PROVIDER == "openrouter"` بـ `OpenAI(base_url="https://openrouter.ai/api/v1", api_key=os.environ["OPENROUTER_API_KEY"])` و chat.completions.

#### الفصل 19: OpenRouter

1. لأن `models` مش Parameter معروف في الـ OpenAI SDK، و`create()` بيرفض أي Keyword مش معروف. و`extra_body` بيحطه في الـ JSON زي ما هو.
2. OpenRouter: `anthropic/claude-sonnet-5.5` (بنقطة). وAnthropic: `claude-sonnet-5-5` (بشرطة). كل منصة ليها أسماءها.
3. خصائص جديدة بتنزل الأول على الـ API الرسمي (زي Responses أو Interactions)، وبيانات حساسة محتاجة اتفاق مباشر، وكمان رسوم شراء الرصيد.

<strong>صح ولا غلط:</strong> (1) غلط: هيدوّر على OPENAI\_API\_KEY. · (2) صح: 0.0000003 × 1,000,000 = 0.30. · (3) غلط: بتدفع سعر الموديل اللي اتستخدم فعلاً.

<strong>التحديات:</strong>

1. رتّب بـ `float(m["pricing"]["prompt"])` بعد ما تفلتر `m["id"].startswith("openai/")`.
2. `getattr(c.usage, "cost", None)` لكل موديل.
3. نفس إجابة تحدي الفصل 18.

#### الفصل 20: Prompt engineering

1. Identity: "You classify support tickets". Instructions: الفئات المسموحة والشكل. Examples: تذكرتين بالإجابة. Context: التذكرة جوه `<ticket>`.
2. علشان الكود يقدر يقارنها بـ `==` بالظبط، والصياغة الحرة صعب تتكشف.
3. تعرف كل نتيجة اتعملت بأنهي Prompt، فتقارن الجودة وتعيد اللي اتعمل بالقديم بس.

<strong>صح ولا غلط:</strong> (1) صح: `{{ }}` بتطلع قوس واحد. · (2) غلط: من غير Structured output مفيش ضمان. · (3) غلط: بتقلّل الخطر بس.

<strong>التحديات:</strong>

1. `TEMPLATE.format(...)` ومثال JSON بـ `{{ }}`.
2. من غير Tags ممكن ينفّذ الجملة، ومعاها غالباً بيلخّصها كمحتوى.
3. CSV فيه file و v1 و v2، وقارن بعينك.

#### الفصل 21: Structured output

1. `category: Literal["billing","bug","account","other"]` و`priority: Literal[1,2,3]` و`summary: str` و`order_id: str | None`.
2. `Literal` بيتحول `enum` في الـ Schema، فالـ API نفسه بيضمن القيمة، والكلام في الـ Prompt مجرد طلب.
3. `json.loads` بيدّي dict من غير أي تحقق. و`model_validate_json` بيتأكد من الحقول والأنواع ويدّي Object.

<strong>صح ولا غلط:</strong> (1) غلط: بيضمن JSON صحيح بس. · (2) غلط: في الـ Strict لازم كله required، والاختياري بـ null. · (3) صح.

<strong>التحديات:</strong>

1. هتلاقي properties و required و enum.
2. `rows.append(info.model_dump())` ثم `csv.DictWriter`.
3. `status == "incomplete"`، فاعمل Retry بـ `max_output_tokens` أكبر.

#### الفصل 22: Function calling

1. لأن الطلب الجاي لازم يشوف إن الموديل طلب الأداة (والـ call\_id)، والـ API Stateless.
2. سقف للّفات. من غيره الموديل ممكن يفضل يطلب أدوات للأبد وانت بتدفع.
3. `{"type":"function","name":"count_words","parameters":{"type":"object","properties":{"path":{"type":"string"}},"required":["path"],"additionalProperties":false},"strict":true}`. والحماية: `Path(BASE, p).resolve().is_relative_to(BASE)`.

<strong>صح ولا غلط:</strong> (1) غلط: الكود بتاعك اللي بينفّذ. · (2) غلط: نص JSON محتاج json.loads. · (3) صح.

<strong>التحديات:</strong>

1. `"parameters": {"type": "object", "properties": {}, "required": [], "additionalProperties": false}`.
2. Automatic أقصر بكتير، بس تحكّم أقل.
3. `resolve()` و`is_relative_to(BASE)`، وإلا رجّع "ERROR: not allowed".

#### الفصل 23: صور وملفات

1. `read_bytes` بيدّي bytes (للصور والـ PDF)، و`read_text` بيدّي نص (للنصوص) بـ encoding.
2. الـ PDF، لأن OpenAI بيستخرج النص وصور الصفحات منه، والـ docx نص بس.
3. لما الملف كبير (قريب من حدود الطلب)، أو هتستخدمه في كذا طلب.

<strong>صح ولا غلط:</strong> (1) غلط: بيكبّر ~الثلث. · (2) غلط: from\_bytes بياخد bytes عادية. · (3) غلط: بتتمسح بعد 48 ساعة.

<strong>التحديات:</strong>

1. PNG دايماً بتبدأ `iVBORw0KGgo`، و JPEG بتبدأ `/9j/`.
2. استبدل generate\_content بـ `responses.create` و`image_part(path, "low")`.
3. `doc = client.files.upload(...)` ثم `try: ...` و`finally: client.files.delete(name=doc.name)`.

#### الفصل 24: Embeddings و RAG

1. "أرجّع فلوسي إزاي؟" مفيهاش كلمة refund. البحث بالمعنى بيلاقيها لأن الـ Vectors قريبة.
2. `argsort` بيدّي أماكن من الأصغر للأكبر، و`[::-1]` بيقلبها، و`[:3]` أحسن 3.
3. علشان الإجابة تذكر مصدرها وانت ترجع له وتتأكد.

<strong>صح ولا غلط:</strong> (1) صح. · (2) غلط: Vector واحد مجمّع. · (3) غلط: كل موديل ليه فضاء مختلف.

<strong>التحديات:</strong>

1. `1×0.6 + 0×0.8 = 0.6`.
2. خزّن `{"model":..., "dims":..., "records":[...]}`، وفي search قارن بالموديل الحالي.
3. `gemini_embed(c, query=False, title=source)` لكل Chunk، و`query=True` للسؤال.

#### الفصل 25: Retries و Rate limits

1. `min(60, 1 × 2^4) = 16` ثانية، ومع الـ Jitter رقم عشوائي من 0 لـ 16.
2. علشان الـ Threads اللي وقعت مع بعض متخبطش مع بعض تاني في نفس اللحظة.
3. 4 × 3 = **12** مرة.

<strong>صح ولا غلط:</strong> (1) غلط: لازم HttpRetryOptions. · (2) غلط: بتتحسب. · (3) غلط: الحدود على الـ Project.

<strong>التحديات:</strong>

1. `raw = client.responses.with_raw_response.create(...)` ثم `raw.headers.get(...)`.
2. `start = time.monotonic()`، وقبل النوم `if time.monotonic() - start + delay > max_total: raise`.
3. عدّاد في الـ Handler و`if n % 2: send 429`.

#### الفصل 26: ملفات كتير

1. الـ Future إيصال بنتيجة هتيجي. والـ Exception اللي حصل جوه الـ Thread بيترمي لما تنادي `future.result()`.
2. الـ 2000 طلب هيتبعتوا مرة واحدة، فـ 429 بالجملة وممكن Timeouts.
3. Batch لما مش مستعجل وعايز نص السعر. وعيوبه: بياخد لحد 24 ساعة، والترتيب مش مضمون (ومحتاج custom\_id)، وكمان Polling وكود زيادة.

<strong>صح ولا غلط:</strong> (1) غلط: بترتيب ما خلصت. · (2) غلط: لازم "a". · (3) غلط: اربط بالـ custom\_id.

<strong>التحديات:</strong>

1. التشغيل التاني بيقول done=N ويكمّل الباقي.
2. `failed.txt` بالأسامي، و`--retry-failed` يقرا القايمة دي بدل الفولدر.
3. اكتب batch.id في ملف، والتاني يعمل retrieve ثم files.content ويحوّل كل سطر لـ `{custom_id, text}`.

#### الفصل 27: التكلفة

1. Input = 8M و Output = 1.5M. قبل يناير: ‏8 × 0.75 + 1.5 × 3.75 = 6 + 5.625 = **$11.625**. وبعده: ‏8 × 1.50 + 1.5 × 7.50 = 12 + 11.25 = **$23.25**.
2. العربي غالباً بيتقسّم Tokens أكتر لكل حرف. اعرف الرقم الحقيقي بـ `count_tokens` أو `input_tokens.count` على عينة.
3. System prompt، وبعدين الأمثلة، وبعدين المقال (المتغير في الآخر).

<strong>صح ولا غلط:</strong> (1) غلط: بتتحسب Output. · (2) صح: 1.25× أو 2.5×. · (3) غلط: الثابت في الأول.

<strong>التحديات:</strong>

1. إجابة مفتوحة.
2. اجمع `cost()` بعد كل نتيجة، و`if total > args.budget: break`.
3. النسبة = الحقيقي ÷ التقدير على العينة، وبعدين اضربها في تقدير الكل.

#### الفصل 28: اطلب وراجع

1. علشان الموديل يقولك قرر إيه من عنده (مكان الإخراج أو التعامل مع الأخطاء)، فتراجع القرارات دي بدل ما تكتشفها بعدين.
2. `open(p, "w")` و`Path.write_text` و`df.to_csv` و`df.to_excel` (وكمان `shutil.copy` و`os.replace`).
3. (1) اعمل Revoke أو Rotate للـ Key فوراً. (2) شيله من الكود وراجع الاستخدام والفواتير، والتاريخ في Git لسه فيه، فالـ Rotate هو الحل الحقيقي.

<strong>صح ولا غلط:</strong> (1) غلط: بيخفي الأخطاء. · (2) غلط: ممكن يكون قديم أو مش موجود. · (3) صح.

<strong>التحديات:</strong>

1. إجابة مفتوحة.
2. قارن بـ run\_many.py: glob و Path و env key و output/ و luna و try/log و limit.
3. إجابة مفتوحة.

#### الفصل 29: فولدر ← Excel

1. علشان `**info.model_dump()` فيها keywords كـ List، والمفتاح اللي بعدها بيكتب فوقه بالنص.
2. `find_notes` ثم `todo` ثم `pool.submit(extract...)` ثم `responses.parse` ثم `future.result()` ثم `out.write` ثم `results.jsonl` ثم `pd.DataFrame` ثم `to_excel`.
3. argparse هيرفض (مش في choices)، فمستحيل تشغّل موديل سعره مش معروف بالغلط.

<strong>صح ولا غلط:</strong> (1) غلط: بيرجع قبل إنشاء الـ Client. · (2) غلط: بيتبني من الـ JSONL كله في التشغيل الجاي. · (3) غلط: بيتسجّل في failed.txt بس.

<strong>التحديات:</strong>

1. `"words": len(text.split())` في extract.
2. `if args.budget and est_cost > args.budget: parser.error(...)`.
3. dict `EXTRACTORS = {"openai": extract_openai, "gemini": extract_gemini}`.

#### الفصل 30: ترجمة Excel

1. الـ ID رقم صغير ثابت، والنص ممكن يتكرر أو يتغير أو يرجع مترجم.
2. أرقام الصفوف اتزحزحت، فالـ Cache هيحط ترجمات في صفوف غلط. والحل: ID ثابت زي `sku`.
3. Output كبير يقرّب من max\_output\_tokens، فهتلاقي incomplete أكتر، والـ ID اللي بيتنسي أكتر، والدفعة الفاشلة بتضيّع شغل أكتر.

<strong>صح ولا غلط:</strong> (1) غلط: الشكل بس مش الـ IDs. · (2) غلط: بيبدأ Cache جديد. · (3) صح: ‏`-(-7//3)` = `-(-3)` = 3.

<strong>التحديات:</strong>

1. `--out` ومقارنة `resolve()` بالـ Input.
2. `df[args.id_column]` بدل الـ Index.
3. `set(re.findall(r"\d+", src)) != set(re.findall(r"\d+", dst))`.

#### الفصل 31: المشروع النهائي

1. ai\_client.py (فرع جديد) و config.py (القيم والأسعار والـ Key). وprompts.py و files.py و main.py مش هيتلمسوا.
2. علشان تقدر تشوف الخطة من غير Key ومن غير أي خطر.
3. 1 (خلص بس في ملفات فشلت).

<strong>صح ولا غلط:</strong> (1) غلط: التاني بس هو اللي بيشغّل الـ Relative imports. · (2) صح. · (3) صح.

<strong>التحديات:</strong>

1. `log.debug("settings: %s", settings)` مع `-v`.
2. `OpenAI(base_url="https://openrouter.ai/api/v1", api_key=...)` و`chat.completions.create` + `NoteInfo.model_validate_json`.
3. `def test_find_notes(tmp_path): (tmp_path/"a.md").write_text("x"); assert [p.name for p in find_notes(tmp_path)] == ["a.md"]`.
