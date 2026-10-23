---
title: "قاموس المصطلحات"
description: "كل مصطلح مهم في الكتاب في سطر واحد، مترتب أبجدياً. ارجعله كل ما تقابل كلمة ومش فاكر معناها."
sidebar:
  order: 102
  label: "ملحق ب: القاموس"
---

كل مصطلح مهم في الكتاب في سطر واحد، مترتب أبجدياً. ارجعله كل ما تقابل كلمة ومش فاكر معناها.

### A

- **accessModes**: طريقة الوصول للتخزين: RWO و ROX و RWX و RWOP.

- **Annotation**: معلومة إضافية على الـ Object بيقراها أدوات تانية (زي cert-manager)، ومش بتستخدم في الاختيار زي الـ Labels.

- **API Server**: بوابة الـ Cluster: كل الأوامر (kubectl وغيره) بتكلمه، وهو اللي بيكلم الـ etcd.

### B

- **base64**: ترميز بيحوّل أي بيانات لنص. مش تشفير.

### C

- **CA**: Certificate Authority: جهة موثوقة بتختم الشهادات.

- **cert-manager**: أداة بتجيب شهادات TLS (زي Let's Encrypt) وتجددها أوتوماتيك.

- **Chart**: حزمة Helm: Templates + values.yaml.

- **ClusterIP**: نوع Service افتراضي: عنوان ثابت جوه الـ Cluster بس.

- **ClusterRole**: Role على مستوى الـ Cluster كله.

- **CNI**: الـ Plugin المسؤول عن شبكة الـ Pods وإعطاءهم IPs (زي Calico و Cilium).

- **ConfigMap**: Object بيخزن إعدادات غير سرية منفصلة عن الـ image.

- **Container Runtime**: البرنامج اللي بيشغّل الـ Containers فعلاً (containerd، CRI-O).

- **Context**: مجموعة (Cluster + User + Namespace) في الـ kubeconfig.

- **Controller Manager**: بيشغّل الـ Controllers اللي بتقارن الحالة الحالية بالمطلوبة وتصلّح.

- **CRD**: Custom Resource Definition: نوع Object جديد بتضيفه أداة على Kubernetes.

- **CronJob**: بيعمل Job على ميعاد متكرر.

### D

- **DaemonSet**: بيشغّل Pod واحدة على كل Node (أو Nodes مختارة).

- **Declarative**: توصف الحالة المطلوبة وKubernetes يوصلها.

- **Deployment**: بيدير ReplicaSets ويعمل Rolling Update و Rollback.

### E

- **emptyDir**: Volume مؤقت بيعيش مع الـ Pod.

- **Endpoints**: قايمة IPs الـ Pods اللي الـ Service بتبعتلهم.

- **etcd**: قاعدة البيانات اللي فيها حالة الـ Cluster كلها.

- **Events**: سجل الأحداث اللي حصلت للـ Objects، بيظهر في describe.

### G

- **Gateway API**: الجيل الأحدث بعد الـ Ingress لإدارة الـ Traffic الداخل.

### H

- **Helm**: مدير الحزم لـ Kubernetes.

- **hostPath**: Volume بيركّب فولدر من الـ Node نفسها.

- **HPA**: Horizontal Pod Autoscaler: بيغير عدد الـ Pods حسب الاستهلاك.

### I

- **Ingress**: قواعد بتوجّه HTTP/HTTPS حسب الـ Host والـ Path للـ Services.

- **Ingress Controller**: البرنامج اللي بينفّذ قواعد الـ Ingress فعلاً.

### J

- **Job**: بيشغّل Pod لحد ما تخلص بنجاح.

### K

- **kube-proxy**: بيظبط قواعد الشبكة على كل Node عشان الـ Services تشتغل.

- **kubectl**: أداة الأوامر اللي بتكلم الـ API Server.

- **kubelet**: الـ Agent على كل Node، بيشغّل الـ Pods ويتابعها.

### L

- **Label**: key=value على الـ Object بيستخدم في الاختيار والتنظيم.

- **LimitRange**: قيم requests/limits افتراضية وحدود لكل Container في Namespace.

- **Limits**: أقصى موارد ممكن الـ Container يستخدمها.

- **Liveness Probe**: فحص: الـ Container عايش؟ لو لأ يتعمله restart.

- **LoadBalancer**: نوع Service بياخد IP خارجي من الـ Cloud.

### M

- **metrics-server**: بيجمع استهلاك الـ CPU والـ Memory للـ HPA و kubectl top.

- **minikube**: Cluster محلي للتجربة على جهازك.

### N

- **Namespace**: تقسيم منطقي جوه الـ Cluster.

- **Node**: جهاز (حقيقي أو VM) في الـ Cluster.

- **Node Affinity**: نسخة أقوى من الـ nodeSelector بشروط In و NotIn و Exists.

- **NodePort**: نوع Service بيفتح بورت (30000-32767) على كل Node.

- **nodeSelector**: تشغيل الـ Pod على Nodes عليها Label معينة.

### O

- **OOMKilled**: الـ Container اتقتل لأنه عدّى الـ memory limit.

### P

- **PersistentVolume (PV)**: مساحة تخزين حقيقية في الـ Cluster.

- **Pod**: أصغر وحدة في Kubernetes: Container أو أكتر بيشاركوا الشبكة والتخزين.

- **PVC**: طلب تخزين بيرتبط بـ PV.

### Q

- **QoS Class**: Guaranteed و Burstable و BestEffort: بتحدد مين يتطرد الأول.

### R

- **RBAC**: نظام الصلاحيات: Roles و Bindings.

- **Readiness Probe**: فحص: الـ Container جاهز ياخد Traffic؟

- **Reconciliation Loop**: المقارنة المستمرة بين الحالة المطلوبة والحالية وتصليح الفرق.

- **Release**: نسخة متسطبة من Chart.

- **ReplicaSet**: بيضمن عدد ثابت من الـ Pods.

- **Requests**: الموارد المحجوزة للـ Container، والـ Scheduler بيعتمد عليها.

- **ResourceQuota**: حد أقصى لموارد وعدد Objects في Namespace.

- **Rolling Update**: تحديث تدريجي من غير توقف.

### S

- **Scheduler**: بيختار الـ Node المناسبة لكل Pod.

- **Secret**: Object للبيانات الحساسة (base64، مش تشفير).

- **Selector**: شرط بيختار Objects بالـ Labels.

- **Service**: عنوان ثابت و Load Balancing لمجموعة Pods.

- **ServiceAccount**: هوية للـ Pods لما تكلم الـ API.

- **Sidecar**: Container مساعد جنب الأساسي في نفس الـ Pod.

- **Startup Probe**: فحص للتطبيقات البطيئة في البداية، بيأجّل الـ liveness.

- **StatefulSet**: زي الـ Deployment بس كل Pod ليه اسم وتخزين ثابت.

- **StorageClass**: بيعمل PVs أوتوماتيك (Dynamic Provisioning).

### T

- **Taint / Toleration**: Taint على الـ Node بيمنع الـ Pods، والـ Toleration تصريح بالدخول.

- **TLS Termination**: فك تشفير الـ HTTPS عند الـ Ingress.

### V

- **Volume**: تخزين بيتركّب جوه الـ Container من برّه.

### Y

- **YAML**: صيغة الملفات اللي بنوصف بيها الـ Objects.
