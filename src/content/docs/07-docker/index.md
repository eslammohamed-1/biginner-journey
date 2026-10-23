---
title: "Docker — دليل المذاكرة"
description: "المشكلة الأول، وبعدين Images جاهزة، وبعدها تبني Image بتاعتك وتشغّل المشروع."
sidebar:
  order: 0
  label: "عن الكتاب"
---

الكتاب ماشي معاك على 4 مراحل بالترتيب العملي اللي هتحتاجه وانت بتتعلم: نفهم المشكلة اللي Docker اتعمل عشانها الأول، وبعدين نتعامل مع Images جاهزة ونشغّل ونراقب الـ Containers، وبعدها نفهم الطبقات والبيانات والشبكات، وفي الآخر نبني الـ Image بتاعتنا ونشغّل المشروع كامل بـ Docker Compose.

:::tip[تحميل]
- [الكتاب كامل PDF](/biginner-journey/downloads/07-docker-book.pdf)
- [الـ Cheat Sheet PDF](/biginner-journey/downloads/07-docker-cheatsheet.pdf)
:::

## خريطة الكتاب

- **1 · الفكرة والأساسيات**: ليه Docker اتعمل أصلاً (الفرق بين الـ VMs والـ Linux Containers)، ورحلة الشغل من الـ Dockerfile للـ Image للـ Container.
- **2 · تشغيل وإدارة الـ Containers**: سحب وإدارة الـ Images الجاهزة من Docker Hub، وتشغيل الـ Containers والـ Ports، ومراقبتها بـ `logs` و `inspect` و `stats`.
- **3 · الطبقات والبيانات والشبكات**: تشريح الـ Image من جوه (Layers و Caching)، وحفظ البيانات بالـ Volumes والـ Bind Mounts، وتوصيل الـ Containers ببعض عن طريق Docker Networks.
- **4 · بناء الـ Images والمشاريع**: كتابة `Dockerfile` احترافي، والـ Multi-stage Build وتنظيف البناء بـ `.dockerignore`، ورفع الـ Image على Docker Hub، وتشغيل المشروع كله بأمر واحد بـ Docker Compose.

## الفصول

**المرحلة 1 · الفكرة والأساسيات**

- [الفصل 1: المقدمة: ليه Docker اتعمل أصلاً؟](./ch01/)
- [الفصل 2: Docker: الفكرة وطريقة الشغل](./ch02/)

**المرحلة 2 · تشغيل وإدارة الـ Containers**

- [الفصل 3: الـ Images وإزاي بنتعامل معاها](./ch03/)
- [الفصل 4: تشغيل الـ Images والتعامل مع الـ Containers](./ch04/)
- [الفصل 5: مراقبة وفحص الـ Containers: logs و inspect و stats](./ch05/)

**المرحلة 3 · الطبقات والبيانات والشبكات**

- [الفصل 6: فهم Structure الـ Image: الـ Layers](./ch06/)
- [الفصل 7: الـ Volumes: البيانات اللي لازم تعيش](./ch07/)
- [الفصل 8: Docker Networks: إزاي الـ Containers بتكلّم بعض](./ch08/)

**المرحلة 4 · بناء الـ Images والمشاريع**

- [الفصل 9: الـ Dockerfile: وصفة بناء الـ Image](./ch09/)
- [الفصل 10: بناء الـ Image و Multi-stage Build](./ch10/)
- [الفصل 11: ملف .dockerignore: متبعتش الكراكيب للـ build](./ch11/)
- [الفصل 12: رفع الـ Image على Docker Hub: tag و login و push](./ch12/)
- [الفصل 13: Docker Compose: شغّل المشروع كله بأمر واحد](./ch13/)

**الملاحق**

- [ملحق أ: Cheat Sheet: كل الأوامر في مكان واحد](./appendix-1/)
- [ملحق ب: إجابات أسئلة المراجعة](./appendix-2/)
