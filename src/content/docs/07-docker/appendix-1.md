---
title: "Cheat Sheet: كل الأوامر في مكان واحد"
description: "ورقة مراجعة سريعة لكل الأوامر والـ Instructions اللي في الكتاب، مقسّمة حسب الموضوع. اطبعها وحطها جنبك وانت بتشتغل."
sidebar:
  order: 101
  label: "ملحق أ: Cheat Sheet"
---

ورقة مراجعة سريعة لكل الأوامر والـ Instructions اللي في الكتاب، مقسّمة حسب الموضوع. اطبعها وحطها جنبك وانت بتشتغل.

#### Imagesسحب وعرض ومسح

| الأمر | بيعمل إيه |
|---|---|
| `docker pull nginx:1.27` | سحب Image بـ version معينة |
| `docker images` | عرض الـ Images اللي عندك |
| `docker rmi image-name` | مسح Image (و -f بالإجبار) |
| `docker image history nginx` | عرض الـ Layers بتاعة الـ Image |
| `docker image inspect nginx` | كل تفاصيل الـ Image |
| `docker image prune` | مسح الـ Images اللي ملهاش اسم (dangling) |

#### Build & Pushبناء ونشر

| الأمر | بيعمل إيه |
|---|---|
| `docker build -t app .` | بناء Image من الـ Dockerfile في المسار الحالي |
| `docker build -t app -f MyFile .` | بناء من ملف باسم مختلف |
| `docker build --build-arg V=2 -t app .` | تمرير قيمة لـ ARG |
| `docker tag app moaz/app:1.0` | اسم جديد للـ Image قبل الرفع |
| `docker login` | تسجيل الدخول على Docker Hub |
| `docker push moaz/app:1.0` | رفع الـ Image |

#### Runتشغيل Container

| الأمر | بيعمل إيه |
|---|---|
| `docker run nginx` | تشغيل Container (و pull لو مش موجودة) |
| `docker run -d --name web nginx` | في الخلفية وباسم واضح |
| `docker run -d -p 8080:80 nginx` | Port Mapping من الـ Host للـ Container |
| `docker run -d -P nginx` | بورت عشوائي لكل EXPOSE |
| `docker run -e PORT=9090 app` | تمرير Environment variable |
| `docker run --rm -it ubuntu bash` | Container تفاعلي بيتمسح لما تخرج |
| `docker run -d --memory 512m --cpus 1 app` | تحديد الموارد (cgroups) |

#### Containersإدارة

| الأمر | بيعمل إيه |
|---|---|
| `docker ps` | الـ Containers الشغالة |
| `docker ps -a` | كل الـ Containers |
| `docker exec -it web sh` | الدخول جوه Container شغال |
| `docker stop web` | إيقاف |
| `docker start web` | تشغيل Container واقف |
| `docker restart web` | إعادة تشغيل |
| `docker rm web` | مسح Container (و -f بالإجبار) |
| `docker container prune` | مسح كل الـ Containers الواقفة |

#### Monitoringمراقبة وفحص

| الأمر | بيعمل إيه |
|---|---|
| `docker logs -f --tail 50 web` | متابعة آخر الـ logs |
| `docker inspect web` | كل التفاصيل في JSON |
| `docker inspect -f '{{.State.Status}}' web` | استخراج قيمة واحدة |
| `docker stats --no-stream` | استهلاك الموارد |
| `docker top web` | الـ Processes جوه الـ Container |
| `docker system df` | المساحة المستخدمة |

#### Volumesتخزين البيانات

| الأمر | بيعمل إيه |
|---|---|
| `docker run -v my-vol:/data app` | Named Volume |
| `docker run -v /path/on/host:/app app` | Bind Mount |
| `docker run -v my-vol:/data:ro app` | Read-only |
| `docker run --tmpfs /tmp/secure app` | tmpfs في الـ RAM |
| `docker volume create my-vol` | إنشاء Volume |
| `docker volume ls` | عرض الـ Volumes |
| `docker volume inspect my-vol` | مكانه على الـ Host (Mountpoint) |
| `docker volume rm my-vol` | مسح Volume |
| `docker volume prune` | مسح الـ Volumes اللي مش مستخدمة |

#### Networksالشبكات

| الأمر | بيعمل إيه |
|---|---|
| `docker network ls` | عرض الشبكات |
| `docker network create app-net` | إنشاء شبكة فيها DNS |
| `docker run -d --network app-net --name db postgres` | تشغيل على شبكة معينة |
| `docker network connect app-net web` | توصيل Container شغال بشبكة |
| `docker network inspect app-net` | تفاصيل الشبكة |
| `docker run --network host nginx` | استخدام شبكة الـ Host |
| `docker network rm app-net` | مسح شبكة |

#### Composeالمشروع كله

| الأمر | بيعمل إيه |
|---|---|
| `docker compose up -d` | تشغيل كل الـ services |
| `docker compose up -d --build` | إعادة البناء ثم التشغيل |
| `docker compose ps` | حالة الـ services |
| `docker compose logs -f backend` | logs لـ service معينة |
| `docker compose exec backend sh` | الدخول جوه service |
| `docker compose down` | إيقاف ومسح (الـ Volumes بتفضل) |
| `docker compose down -v` | ومسح الـ Volumes كمان |

#### Dockerfileالـ Instructions

| الأمر | بيعمل إيه |
|---|---|
| `FROM node:18-alpine AS builder` | الـ Base Image (و AS لتسمية المرحلة) |
| `LABEL author="moaz"` | Metadata |
| `ENV PORT=8080` | متغير بيفضل جوه الـ Container |
| `ARG VERSION=1.0` | متغير وقت الـ build بس |
| `WORKDIR /app` | مسار الشغل |
| `COPY . .` | نسخ ملفات (الاختيار الافتراضي) |
| `ADD app.tar.gz /app/` | نسخ مع فك ضغط |
| `RUN npm install` | أمر وقت الـ build |
| `COPY --from=builder /app/build ./` | نسخ من مرحلة سابقة |
| `EXPOSE 80` | توثيق البورت |
| `USER appuser` | المستخدم اللي هيشغّل الـ App |
| `VOLUME /data` | Anonymous Volume |
| `ENTRYPOINT ["ping"]` | البرنامج الثابت |
| `CMD ["google.com"]` | الأمر أو الـ Arguments الافتراضية |

:::caution[أوامر خطيرة خلي بالك منها]
`docker rm -f` و `docker rmi -f` و `docker volume prune` و `docker compose down -v` و `docker system prune -a`: كلهم بيمسحوا حاجات نهائياً. اقرا اللي هيتمسح قبل ما توافق.
:::
