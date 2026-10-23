---
title: "إجابات أسئلة المراجعة"
description: "حاول تجاوب على الأسئلة بنفسك الأول، وبعدين قارن إجابتك هنا. الإجابات مختصرة ومركّزة على الفكرة."
sidebar:
  order: 102
  label: "ملحق ب: الإجابات"
---

حاول تجاوب على الأسئلة بنفسك الأول، وبعدين قارن إجابتك هنا. الإجابات مختصرة ومركّزة على الفكرة.

#### الفصل 1: المقدمة

1. الكود شغال عند المطور لأن جهازه عليه الـ dependencies والـ versions الصح، والسيرفر مختلف عنه.
2. تنافس على الموارد (app يعطّل الباقي)، وتعارض الـ versions (مساحة كبيرة واحتمال تمسح version حد تاني محتاجها).
3. الـ VM فيها Guest OS كامل، والـ Container بيشارك Kernel الـ Host.
4. العزل: Namespaces. الموارد: cgroups.
5. كانت Low-level من غير Standard ولا طريقة توزيع وإدارتها معقدة، و Docker ضاف Dockerfile و Images و Registry وتجربة سهلة.

#### الفصل 2: Docker

1. Dockerfile ← Image ← Registry ← Container.
2. الـ app + الـ runtime + المكتبات + الـ filesystem بتاع التوزيعة.
3. لأن كل ده بقى جوه الـ Image، والسيرفر محتاج Docker بس.
4. لأن أغلب الشغل بيبدأ من Images جاهزة وبنعدّل عليها.

#### الفصل 3: الـ Images

1. `docker.io/library/nginx:latest`
2. هيتأكد إن عندك آخر نسخة، ولو هي هي مش هينزّل حاجة.
3. لو فيه Container (حتى لو واقف) معمول منها.

#### الفصل 4: الـ Containers

1. لأن الـ Process الأساسية (sh) بتخلص على طول. الحل: `-d` مع أمر زي `sleep infinity`.
2. `ps` الشغال بس، و `ps -a` كله.
3. `docker run -d --name web -p 3000:80 nginx`
4. موجود، لأن الـ Container Layer بتتمسح مع `rm` بس مش مع `stop`.
5. لأن الـ Container بيستخدم Kernel الـ Host، و Windows محتاج Kernel بتاع Windows.

#### الفصل 5: المراقبة

1. `docker logs` على الـ Container.
2. `docker inspect -f` مع مسار الـ IPAddress.
3. `docker run -d --memory 256m image`

#### الفصل 6: الـ Layers

1. لأن الـ Image Layers مشتركة وللقراءة فقط، وكل Container بياخد طبقة رقيقة بس.
2. Copy-on-Write: نسخة بتتعمل في الـ Container Layer والتعديل بيتم عليها.
3. لأ، اتعمل Whiteout بس والملف لسه في الـ Image Layer.

#### الفصل 7: الـ Volumes

1. الأول Named Volume بيديره Docker، والتاني Bind Mount لمسار على جهازك.
2. Bind Mount.
3. `/var/lib/docker/volumes/NAME/_data`
4. لو اتنين حفظوا نفس الملف، اللي حفظ متأخر تعديله هو اللي يفضل ويمسح التاني.
5. بإضافة `:ro` زي `-v data:/app:ro`.

#### الفصل 8: الشبكات

1. لأن الـ IP بيتغير كل ما الـ Container يتعمل من جديد.
2. الـ User-defined فيها DNS داخلي بالأسماء، والافتراضية لأ.
3. لأ، لأنه بيستخدم شبكة الـ Host مباشرة.
4. `db:5432` (بورت الـ Container).

#### الفصل 9: الـ Dockerfile

1. لأنه بيوثّق الخطوات، وتقدر تكرّرها وتراجعها وتعدّلها.
2. `RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*`
3. `ping 8.8.8.8`، لأن كلامك استبدل الـ CMD واتضاف للـ ENTRYPOINT.
4. لأن EXPOSE توثيق بس، والحل `-p 3000:3000`.
5. ENV بيفضل جوه الـ Container (إعدادات التشغيل)، و ARG وقت الـ build بس (زي version أداة).
6. لأن لو حد اخترق الـ App ياخد صلاحيات root وممكن يوصل للـ Host.

#### الفصل 10: البناء

1. المسار الحالي هو الـ Build Context.
2. لأننا ورثنا الـ CMD من `nginx:alpine`.
3. لأ، المرحلة الأخيرة بس هي اللي بتبقى Image، وهي مبنية على nginx.
4. علشان الكاش: الـ install ميتعادش إلا لو `package.json` اتغيّر.

#### الفصل 11: .dockerignore

1. لأن الـ Image بتعمل `npm install` بنفسها، والنسخة اللي عندك تقيلة وممكن تكون لنظام مختلف.
2. `*.md` وبعده `!README.md`
3. تغييرات في ملفات متجاهلة (زي `.git`) مبتغيرش الـ Context، فـ `COPY . .` بيفضل من الكاش.

#### الفصل 12: Docker Hub

1. `docker tag api sara/api:2.0` ثم `docker login` ثم `docker push sara/api:2.0`
2. لأ، مجرد اسم تاني لنفس الـ Image ID.
3. لأنه بيتغير مع كل رفع، فمش هتعرف أنهي نسخة شغالة ولا ترجع لنسخة قديمة بسهولة.

#### الفصل 13: Compose

1. `image` بيستخدم Image جاهزة، و `build` بيبنيها من Dockerfile.
2. لأن Compose بيعمل شبكة فيها DNS بأسماء الـ services.
3. `down`: لأ، الـ Volume موجود. `down -v`: أيوه، اتمسحت.
4. `docker compose up -d --build`
