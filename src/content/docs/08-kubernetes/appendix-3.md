---
title: "إجابات أسئلة المراجعة و صح ولا غلط"
description: "حاول تجاوب على الأسئلة بنفسك الأول، وبعدين قارن إجابتك هنا. لكل فصل: إجابات أسئلة المراجعة، وبعدها إجابات صح ولا غلط."
sidebar:
  order: 103
  label: "ملحق ج: الإجابات"
---

حاول تجاوب على الأسئلة بنفسك الأول، وبعدين قارن إجابتك هنا. لكل فصل: إجابات أسئلة المراجعة، وبعدها إجابات صح ولا غلط.

#### الفصل 1: المقدمة

1. إدارة يدوية مستحيلة، الـ Container لو وقع محدش يقومه، توزيع الحمل والـ Scaling، والتحديث من غير توقف.
2. مجموعة Nodes شغالين مع بعض كوحدة واحدة. الـ Node جهاز، والـ Pod أصغر وحدة شغل بتتشغل على Node.
3. إنك توصف الحالة اللي عايزها (3 نسخ من nginx) وKubernetes يوصلها ويحافظ عليها، بدل ما تقوله الخطوات.
4. الـ Cluster Autoscaler (أو خدمة الـ Cloud)، مش Kubernetes لوحده.

<strong>صح ولا غلط:</strong> (1) غلط: بيتعامل مع الـ Pods. · (2) صح. · (3) غلط: محتاج Cluster Autoscaler.

#### الفصل 2: الـ Structure

1. الـ API Server.
2. حالة الـ Cluster كلها بتضيع، فلازم Backup دوري للـ etcd.
3. الـ Scheduler بيختار، والـ kubelet على الـ Node بيشغّل عن طريق الـ Container Runtime.
4. Observe (يشوف الحالي) ← Compare (يقارن بالمطلوب) ← Act (يصلّح الفرق)، وتتكرر على طول.

<strong>صح ولا غلط:</strong> (1) صح. · (2) غلط: بيستخدم Runtime زي containerd. · (3) غلط: ده شغل الـ kubelet والـ Controllers.

#### الفصل 3: الـ Pods

1. Pods، لأن الـ Pod وحدة الـ Scaling، والـ Containers جوه الـ Pod بيتعاملوا كوحدة واحدة.
2. على `localhost` لأنهم بيشاركوا نفس الشبكة.
3. Container بيجمع الـ logs أو Proxy جنب التطبيق.
4. الـ Container لما يقع الـ kubelet بيقومه جوه نفس الـ Pod، لكن الـ Pod لما يتمسح بيروح خالص ومحتاج Controller يعمل واحد جديد.

<strong>صح ولا غلط:</strong> (1) غلط: بيشاركوا IP واحد. · (2) غلط: محتاج Controller زي ReplicaSet. · (3) صح.

#### الفصل 4: minikube

1. `minikube start --profile <name>`.
2. فيه 2 Containers في الـ Pod، واحد بس جاهز.
3. `kubectl run web --image=nginx:1.27`
4. لأنها Pods لوحدها من غير Controller، ومحدش هيقومها لو اتمسحت؛ في الشغل بنستخدم Deployment.

<strong>صح ولا غلط:</strong> (1) صح. · (2) غلط: مسافات بس. · (3) صح.

#### الفصل 5: الـ Probes

1. `exec` أو `tcpSocket`.
2. لأن لو الـ DB وقعت كل الـ Pods هتعمل restart على الفاضي والمشكلة مش فيهم؛ ده مكانه الـ Readiness.
3. الـ Startup Probe، لأنها بتستنى البداية بس، وبعدها الـ liveness تشتغل بسرعة بدل تأخير ثابت دايماً.
4. بيتشال من الـ Endpoints فمياخدش Traffic، من غير restart، ويرجع لما ينجح.

<strong>صح ولا غلط:</strong> (1) غلط: بيتشال من الـ Endpoints بس. · (2) غلط: لازم 1 في الـ liveness. · (3) صح.

#### الفصل 6: الـ Resources

1. الـ Memory: يتقتل OOMKilled. الـ CPU: يتعمله Throttling (يبطأ) من غير ما يتقتل.
2. لأنه بيختار Node فيها مكان فاضي على حسب الـ requests.
3. `Mi` = 1024×1024 بايت، و `M` = 1000×1000 بايت.
4. Guaranteed.

<strong>صح ولا غلط:</strong> (1) صح. · (2) غلط: يقدر لحد الـ limit. · (3) صح (BestEffort).

#### الفصل 7: الـ Labels

1. لأن الاسم فريد لكل Pod، والـ Service محتاجة تختار مجموعة متغيرة.
2. `app: myapp`، `tier: backend`، `env: staging`.
3. لأ، الـ Labels حساسة لحالة الحروف.
4. `kubectl get pods -l tier=backend`

<strong>صح ولا غلط:</strong> (1) غلط. · (2) صح. · (3) غلط: في الـ metadata.

#### الفصل 8: الـ ReplicaSets

1. عشان الـ High Availability وتوزيع الحمل.
2. هتعمل Pod جديدة عشان ترجع 3.
3. لازم يطابقوا، وإلا الـ ReplicaSet مش هتلاقي الـ Pods بتاعتها (والـ API بيرفضها).

<strong>صح ولا غلط:</strong> (1) غلط. · (2) صح. · (3) غلط: محتاج Deployment.

#### الفصل 9: الـ Namespaces

1. `api.prod` أو كامل `api.prod.svc.cluster.local`.
2. لأنها لمكونات Kubernetes نفسها، وأي غلطة فيها ممكن توقع الـ Cluster.
3. الـ Pod هيترفض؛ حط resources أو LimitRange بقيم افتراضية.
4. `kubectl config set-context --current --namespace=staging`

<strong>صح ولا غلط:</strong> (1) غلط. · (2) صح. · (3) غلط: محتاج NetworkPolicy.

#### الفصل 10: الـ Deployment

1. لأنها مش بتحدّث Pods موجودة، والـ Deployment بيعمل ReplicaSet جديدة.
2. بيعمل ReplicaSet جديدة ويزوّدها تدريجياً ويقلل القديمة لحد صفر، والقديمة بتفضل للـ rollback.
3. `kubectl rollout undo deployment/<name>`
4. لما مينفعش نسختين يشتغلوا مع بعض (زي schema DB).

<strong>صح ولا غلط:</strong> (1) غلط: تدريجي. · (2) صح. · (3) غلط.

#### الفصل 11: الـ DaemonSet

1. لأن العدد = عدد الـ Nodes المناسبة.
2. `volumeMounts` = المسار جوه الـ Container، و `volumes` = المصدر على الـ Node (hostPath).
3. Node Affinity: `key: disk`، `operator: In`، `values: [ssd, nvme]`.
4. `kubectl describe ds` و `get pods -o wide` وشوف الـ taints.

<strong>صح ولا غلط:</strong> (1) صح. · (2) غلط. · (3) صح.

#### الفصل 12: الـ Jobs

1. لأن الـ Deployment هيعيد تشغيله بعد ما يخلص على طول.
2. `0 23 * * 5`
3. بعد ما الفشل يعدّي الـ backoffLimit (مع الفشل الرابع) الـ Job بيتعلن Failed ويبطل يحاول.
4. `kubectl create job test --from=cronjob/<name>`

<strong>صح ولا غلط:</strong> (1) غلط. · (2) صح. · (3) صح.

#### الفصل 13: الـ Services

1. لأن IP الـ Pod بيتغير كل ما يتعمل من جديد.
2. الـ selector مش مطابق للـ Labels (أو الـ Pods مش Ready).
3. `port: 80`، `targetPort: 3000`.
4. مفيش Cloud يدي IP؛ استخدم `minikube tunnel`.

<strong>صح ولا غلط:</strong> (1) غلط: ClusterIP. · (2) غلط: المدى `30000-32767`. · (3) صح.

#### الفصل 14: الـ Ingress

1. Load Balancer واحد بدل واحد لكل Service.
2. الـ Resource قواعد، والـ Controller البرنامج اللي بينفذها.
3. `Prefix`.
4. `host: shop.example.com` ← `path: /` ← `service: shop-service` port 80.

<strong>صح ولا غلط:</strong> (1) غلط: لازم تسطّب واحد. · (2) صح. · (3) غلط.

#### الفصل 15: الـ TLS

1. لأنه تقيل على الـ CPU جداً.
2. لأنها مختومة من CA المتصفح واثق فيها.
3. بتقول للـ cert-manager يعمل شهادة من الـ ClusterIssuer ده.
4. عشان متتحظرش من الـ Rate Limits وإنت بتجرب.

<strong>صح ولا غلط:</strong> (1) غلط: بيفضل مع السيرفر بس. · (2) صح. · (3) صح.

#### الفصل 16: الـ Volumes

1. `volumes` المصدر في الـ Pod، و `volumeMounts` مكان التركيب في الـ Container.
2. لأن البيانات على Node واحدة، ولو الـ Pod راح Node تانية مش هيلاقيها.
3. `describe pvc`: StorageClass غلط أو مفيش PV مناسب.
4. لما البيانات مهمة ومينفعش تتمسح مع الـ PVC.

<strong>صح ولا غلط:</strong> (1) غلط. · (2) غلط: Node واحدة. · (3) صح.

#### الفصل 17: الـ ConfigMaps

1. عشان تغير القيم في مكان واحد من غير ما تبني image جديدة.
2. `valueFrom` متغير واحد باسم تختاره، و `envFrom` كل الـ keys.
3. الـ env بتتقري وقت التشغيل بس؛ اعمل `rollout restart`.

<strong>صح ولا غلط:</strong> (1) غلط: Secret. · (2) صح. · (3) صح.

#### الفصل 18: الـ Secrets

1. لأنه ترميز أي حد يقدر يفكه.
2. `data` قيم base64، و `stringData` نص عادي.
3. عشان الـ newline ميتحسبش جزء من القيمة.
4. RBAC، و Encryption at Rest (أو أدوات زي External Secrets).

<strong>صح ولا غلط:</strong> (1) غلط. · (2) صح. · (3) صح.

#### الفصل 19: الـ RBAC

1. الـ Role لـ Namespace، والـ ClusterRole للـ Cluster كله.
2. لأن الـ pods في الـ core group واسمه فاضي.
3. `resources: ["pods", "pods/log"]`، `verbs: ["get", "list"]`.
4. `kubectl auth can-i list secrets --as=system:serviceaccount:ns:name`

<strong>صح ولا غلط:</strong> (1) غلط. · (2) صح. · (3) غلط.

#### الفصل 20: الـ HPA

1. مفيش metrics-server، أو مفيش CPU requests.
2. `ceil(3 × 90 / 60) = ceil(4.5) = 5` Pods.
3. الـ HPA بيزوّد Pods، والـ Cluster Autoscaler بيزوّد Nodes.

<strong>صح ولا غلط:</strong> (1) غلط: الـ requests. · (2) صح. · (3) غلط.

#### الفصل 21: الـ Troubleshooting

1. `kubectl logs <pod> --previous` و `describe`.
2. الـ Container اتقتل بـ SIGKILL، وغالباً OOMKilled.
3. الـ selector مش مطابق، أو الـ Pods مش Ready.
4. لما الـ image مفيهاش shell (distroless).

<strong>صح ولا غلط:</strong> (1) غلط: Scheduling. · (2) صح. · (3) صح.

#### الفصل 22: الـ Helm

1. الـ Chart الحزمة، والـ Release نسخة متسطبة منها.
2. `--set`.
3. `helm history` وبعدين `helm rollback <release> <rev>`.
4. يوريك الـ YAML النهائي من غير تسطيب.

<strong>صح ولا غلط:</strong> (1) صح. · (2) غلط: بيعمل revision جديدة. · (3) صح.
