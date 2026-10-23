---
title: "Cheat Sheet: أوامر kubectl و Helm"
description: "ورقة مراجعة سريعة لكل الأوامر اللي في الكتاب، مقسّمة حسب الموضوع، وبعدها مرجع لكل Flag وكل علامة بتظهر في الأوامر ومعناها."
sidebar:
  order: 101
  label: "ملحق أ: Cheat Sheet"
---

ورقة مراجعة سريعة لكل الأوامر اللي في الكتاب، مقسّمة حسب الموضوع، وبعدها مرجع لكل Flag وكل علامة بتظهر في الأوامر ومعناها.

#### Cluster & Contextالـ Cluster والإعدادات

| الأمر | بيعمل إيه |
|---|---|
| `minikube start` | تشغيل Cluster محلي |
| `minikube start --profile=dev` | Cluster تاني باسم dev |
| `minikube status` | حالة الـ Cluster |
| `kubectl cluster-info` | عنوان الـ API Server |
| `kubectl get nodes -o wide` | الـ Nodes بتفاصيلها |
| `kubectl config get-contexts` | كل الـ Contexts (Clusters) |
| `kubectl config use-context dev` | التبديل لـ Cluster تاني |
| `kubectl config set-context --current --namespace=dev` | تغيير الـ Namespace الافتراضية |

#### Podsالـ Pods

| الأمر | بيعمل إيه |
|---|---|
| `kubectl run web --image=nginx:1.27` | إنشاء Pod بسرعة |
| `kubectl get pods -o wide` | عرض الـ Pods بالـ IP والـ Node |
| `kubectl get pods --show-labels` | عرض الـ Labels |
| `kubectl describe pod web` | التفاصيل والـ Events |
| `kubectl exec -it web -- sh` | الدخول جوه الـ Container |
| `kubectl delete pod web` | مسح Pod |
| `kubectl top pod` | الاستهلاك الحالي (محتاج metrics-server) |

#### Apply & YAMLالملفات

| الأمر | بيعمل إيه |
|---|---|
| `kubectl apply -f app.yaml` | إنشاء أو تحديث من ملف |
| `kubectl apply -f ./k8s/` | كل الملفات في فولدر |
| `kubectl delete -f app.yaml` | مسح اللي في الملف |
| `kubectl diff -f app.yaml` | الفرق بين الملف واللي في الـ Cluster |
| `kubectl create deploy web --image=nginx --dry-run=client -o yaml > d.yaml` | توليد YAML جاهز |
| `kubectl explain deployment.spec.strategy` | شرح أي حقل في الـ YAML |
| `kubectl edit deploy web` | تعديل مباشر |

#### Deploymentsالـ Deployments والـ ReplicaSets

| الأمر | بيعمل إيه |
|---|---|
| `kubectl get deploy,rs` | عرض الـ Deployments والـ ReplicaSets |
| `kubectl scale deploy web --replicas=5` | تغيير العدد |
| `kubectl set image deploy/web web=nginx:1.28` | تحديث الـ image (Rolling Update) |
| `kubectl rollout status deploy/web` | متابعة التحديث |
| `kubectl rollout history deploy/web` | النسخ اللي فاتت |
| `kubectl rollout undo deploy/web` | الرجوع للنسخة اللي قبلها |
| `kubectl rollout restart deploy/web` | إعادة تشغيل كل الـ Pods |

#### Labels & Namespacesالتنظيم

| الأمر | بيعمل إيه |
|---|---|
| `kubectl get pods -l app=web` | فلترة بالـ Label |
| `kubectl label pod web tier=frontend` | إضافة Label |
| `kubectl label pod web tier=backend --overwrite` | تغيير Label موجود |
| `kubectl label pod web tier-` | مسح Label |
| `kubectl get ns` | عرض الـ Namespaces |
| `kubectl create ns dev` | إنشاء Namespace |
| `kubectl get pods -A` | من كل الـ Namespaces |

#### WorkloadsDaemonSet و Jobs

| الأمر | بيعمل إيه |
|---|---|
| `kubectl get ds -n kube-system` | الـ DaemonSets |
| `kubectl label nodes node-1 hardware=gpu` | Label على Node |
| `kubectl get jobs,cronjobs` | الـ Jobs والـ CronJobs |
| `kubectl create job test --from=cronjob/backup` | تشغيل CronJob دلوقتي |

#### Networkingالـ Services والـ Ingress

| الأمر | بيعمل إيه |
|---|---|
| `kubectl expose deploy web --port=80 --target-port=8080` | عمل Service |
| `kubectl get svc,endpoints` | الـ Services والـ Endpoints |
| `kubectl port-forward svc/web 8080:80` | نفق من جهازك للـ Service |
| `minikube service web --url` | رابط Service على minikube |
| `minikube addons enable ingress` | تفعيل Ingress Controller |
| `kubectl get ingress` | عرض الـ Ingress |
| `kubectl get certificate` | حالة شهادات cert-manager |

#### Config & Storageالإعدادات والتخزين

| الأمر | بيعمل إيه |
|---|---|
| `kubectl create configmap app --from-literal=K=V` | ConfigMap من قيم |
| `kubectl create configmap ng --from-file=nginx.conf` | ConfigMap من ملف |
| `kubectl create secret generic db --from-literal=PASS=x` | Secret عام |
| `kubectl create secret tls t --cert=c.crt --key=k.key` | Secret للشهادات |
| `kubectl get secret db -o jsonpath='{.data.PASS}' \| base64 -d` | قراية قيمة Secret |
| `kubectl get pv,pvc` | التخزين الدائم |

#### Security & Scalingالصلاحيات والـ Scaling

| الأمر | بيعمل إيه |
|---|---|
| `kubectl auth can-i delete pods --as=ahmed -n dev` | اختبار صلاحية |
| `kubectl create sa app-sa` | ServiceAccount |
| `kubectl create rolebinding rb --clusterrole=view --user=ahmed -n dev` | إعطاء صلاحية |
| `kubectl autoscale deploy web --cpu-percent=50 --min=2 --max=10` | عمل HPA |
| `kubectl get hpa -w` | متابعة الـ HPA |

#### Troubleshootingالتشخيص

| الأمر | بيعمل إيه |
|---|---|
| `kubectl logs web -f` | متابعة الـ logs لايف |
| `kubectl logs web --previous` | logs الـ Container اللي مات |
| `kubectl logs web -c sidecar --tail=50` | Container معين، آخر 50 سطر |
| `kubectl get events --sort-by=.lastTimestamp` | الأحداث بالترتيب |
| `kubectl debug -it web --image=busybox` | Container مؤقت للتشخيص |

#### Helmالحزم

| الأمر | بيعمل إيه |
|---|---|
| `helm repo add NAME URL && helm repo update` | إضافة مستودع وتحديثه |
| `helm install rel repo/chart -n ns --create-namespace` | تسطيب |
| `helm upgrade --install rel ./chart -f values.yaml` | ترقية أو تسطيب |
| `helm list -A` | الـ Releases |
| `helm rollback rel 1` | الرجوع لنسخة |
| `helm template rel ./chart` | عرض الـ YAML النهائي |
| `helm uninstall rel` | مسح |

<a id="a1-1"></a>

## أ.1 مرجع الـ Flags

**أشهر الـ Flags في kubectl ومعناها**

| الـ Flag | الاسم الطويل | المعنى |
|---|---|---|
| `-f` | `--filename` | الملف أو الفولدر اللي فيه الـ YAML |
| `-n` | `--namespace` | الـ Namespace اللي هيتنفّذ فيها الأمر |
| `-A` | `--all-namespaces` | كل الـ Namespaces |
| `-o wide` | `--output` | أعمدة زيادة (IP و Node) |
| `-o yaml / json` | `--output` | الـ Object كامل بصيغة YAML أو JSON |
| `-o jsonpath='{...}'` | `--output` | حقل واحد بس من الـ Object |
| `-l key=value` | `--selector` | فلترة بالـ Labels |
| `--show-labels` | — | عمود فيه الـ Labels |
| `-w` | `--watch` | متابعة التغييرات لايف |
| `-it` | `-i -t` | تفاعلي: input مفتوح + Terminal |
| `--` | — | فاصل: اللي بعده أمر جوه الـ Container |
| `-c NAME` | `--container` | اختيار Container معين في الـ Pod |
| `-p` | `--previous` | logs الـ Container اللي مات |
| `--tail=N` | — | آخر N سطر |
| `--sort-by=PATH` | — | ترتيب النتايج بحقل |
| `--dry-run=client` | — | جرّب من غير ما تعمل حاجة في الـ Cluster |
| `--image=` | — | الـ image للـ Pod أو الـ Deployment |
| `--port / --target-port` | — | بورت الـ Service / بورت التطبيق |
| `--replicas=N` | — | عدد النسخ |
| `--overwrite` | — | استبدال Label موجود |
| `--rm` | — | امسح الـ Pod بعد ما تخرج |
| `--as=USER` | — | نفّذ كأنك المستخدم ده (للاختبار) |
| `--from-literal / --from-file` | — | مصدر قيم الـ ConfigMap أو الـ Secret |
| `--set a.b=v` | `(helm)` | تغيير قيمة في الـ values، النقطة = مستوى أعمق |

<a id="a1-2"></a>

## أ.2 مرجع العلامات (Symbols)

**العلامات اللي بتظهر في الأوامر ومعناها**

| العلامة | المعنى | مثال |
|---|---|---|
| `\|` | Pipe: ناتج الأمر الأول يدخل للتاني | `kubectl get pods \| grep web` |
| `$( )` | نفّذ اللي جوه وحط ناتجه مكانه | `curl -LO .../$(curl -Ls .../stable.txt)/...` |
| `\` | الأمر مكمّل في السطر اللي تحت | `kubectl create cm a \` |
| `&&` | نفّذ التاني لو الأول نجح | `helm repo add ... && helm repo update` |
| `>` | احفظ الناتج في ملف (يكتب فوقه) | `... -o yaml > d.yaml` |
| `>>` | ضيف الناتج في آخر الملف | `date >> log.txt` |
| `#` | تعليق: اللي بعده مش بيتنفّذ | `# comment` |
| `;` | افصل بين أوامر في سطر واحد | `sleep 5; date` |
| `' '` | نص حرفي، الـ Shell مش بيفسّر جواه حاجة | `'{.data.PASS}'` |
| `<name>` | مكان تكتب فيه قيمتك (مش بتتكتب كده) | `kubectl describe pod <name>` |
| `type/name` | نوع واسم في كلمة واحدة | `svc/web , deploy/web` |
| `a,b` | أكتر من نوع في أمر واحد | `kubectl get deploy,rs` |
