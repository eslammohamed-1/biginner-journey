---
title: "Cheat Sheet وجدول الـ Flags وجدول الرموز"
description: "ورقة مراجعة لكل أوامر الـ Terminal واختصارات DevTools والـ Console اللي في الكتاب مقسّمة حسب الموضوع، وبعدها جدول الـ Flags ومعانيها في كل أمر، وجدول لكل رمز ممكن تقابله: علامات curl -v، ورموز الـ URL، والكوكيز، وقيم Network الخاصة."
sidebar:
  order: 101
  label: "ملحق أ: Cheat Sheet"
---

ورقة مراجعة لكل أوامر الـ Terminal واختصارات DevTools والـ Console اللي في الكتاب مقسّمة حسب الموضوع، وبعدها جدول الـ Flags ومعانيها في كل أمر، وجدول لكل رمز ممكن تقابله: علامات curl -v، ورموز الـ URL، والكوكيز، وقيم Network الخاصة.

#### curl: readcurl: تقرا الرد

| الأمر | بيعمل إيه |
|---|---|
| `curl URL` | الـ Body بس |
| `curl -i URL` | Headers الرد + Body |
| `curl -I URL` | طلب HEAD: Headers بس |
| `curl -v URL` | كل حاجة: \> طالع، \< جاي، \* معلومات |
| `curl -sIL URL` | تابع كل الـ Redirects (Headers بس) |
| `curl -s URL \| jq .` | JSON منسق |

#### curl: sendcurl: تبعت

| الأمر | بيعمل إيه |
|---|---|
| `curl -X DELETE URL` | Method معين |
| `curl -H 'Name: value' URL` | Header |
| `curl -d 'a=1&b=2' URL` | Body فورم (POST تلقائي) |
| `curl --json '{"a":1}' URL` | JSON + الـ Headers بتاعته |
| `curl --json @file.json URL` | JSON من ملف |
| `curl -F 'f=@me.png' URL` | رفع ملف multipart |
| `curl -G --data-urlencode 'q=a b' URL` | Query متشفّر |
| `curl -u user URL` | Basic auth (يسألك الباسورد) |

#### curl: controlcurl: تتحكم

| الأمر | بيعمل إيه |
|---|---|
| `curl -L URL` | اتبع الـ Redirects |
| `curl -o f URL / -O` | احفظ باسم / بنفس الاسم |
| `curl -sSf URL` | اسكت، وافشل بصوت عالي |
| `curl --fail-with-body URL` | افشل واطبع الـ Body |
| `curl -c jar -b jar URL` | احفظ وابعت كوكيز |
| `curl --max-time 10 URL` | حد أقصى للوقت |
| `curl --http1.1 / --http2` | نسخة HTTP |
| `curl --resolve h:443:IP URL` | DNS مؤقت للأمر ده |
| `curl -s -o /dev/null -w @timing.txt URL` | قيس المراحل |

#### DNSالأسماء

| الأمر | بيعمل إيه |
|---|---|
| `dig example.com` | A record بالتفصيل |
| `dig +short example.com AAAA` | IPv6 بس |
| `dig example.com MX / NS / TXT` | أنواع تانية |
| `dig @1.1.1.1 example.com` | اسأل Resolver معين |
| `dig +trace example.com` | من الـ Root لحد الإجابة |
| `nslookup example.com` | البديل البسيط |
| `dscacheutil -q host -a name x.test` | زي ما الـ Mac شايفه (و hosts) |
| `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder` | امسح كاش DNS |

#### Networkالشبكة

| الأمر | بيعمل إيه |
|---|---|
| `ipconfig getifaddr en0` | IP جهازك على الـ Wi-Fi |
| `route -n get default` | الراوتر |
| `curl -4 ifconfig.me` | الـ IP العام |
| `ping -c 4 host` | وصلنا؟ والـ RTT |
| `traceroute host` | الطريق راوتر راوتر |
| `nc -zv host 443` | Port مفتوح؟ |
| `lsof -nP -iTCP:3000 -sTCP:LISTEN` | مين ماسك الـ Port |
| `python3 -m http.server 8000` | سيرفر ملفات سريع |
| `sudo nano /etc/hosts` | أسماء على جهازك |

#### TLSالشهادات

| الأمر | بيعمل إيه |
|---|---|
| `openssl s_client -connect h:443 -servername h` | Handshake خام والسلسلة |
| `... \| openssl x509 -noout -dates` | تاريخ الشهادة |
| `... \| openssl x509 -noout -text \| grep -A1 Alternative` | الأسماء (SAN) |
| `curl -v URL 2>&1 \| grep '^\*'` | سطور TLS في curl |

#### DevToolsاختصارات Chrome

| الأمر | بيعمل إيه |
|---|---|
| `⌘⌥I / ⌘⌥J / ⌘⌥C` | افتح / Console / اختار عنصر |
| `⌘⇧P` | Command Menu |
| `Esc` | الـ Drawer |
| `⌘R / ⌘⇧R` | Reload / Hard reload |
| `⌘E` | وقّف/شغّل تسجيل Network |
| `⌘F (Network)` | دوّر في الطلبات |
| `⌘⌥F` | دوّر في كل الملفات |
| `⌘P` | افتح ملف |
| `⌘K` | امسح الـ Console |
| `⇧ + Hover` | مين طلب الطلب ده |
| `F8 / F10 / F11` | Resume / Step over / Step into |

#### Consoleالـ Console

| الأمر | بيعمل إيه |
|---|---|
| `await fetch(url)` | طلب سريع |
| `res.status / res.ok` | اتأكد من النجاح |
| `res.headers.get('x')` | Header من الرد |
| `console.table(arr)` | جدول |
| `console.time / timeEnd` | قيس وقت |
| `$0 / $_ / $$('a')` | العنصر / آخر نتيجة / كل العناصر |
| `copy(obj)` | انسخ JSON |
| `document.cookie` | الكوكيز اللي الـ JS شايفها |
| `localStorage.getItem('k')` | اقرا التخزين |

<a id="a1-1"></a>

## أ.1 جدول الـ Flags

نفس الحرف ممكن يبقى ليه معنى مختلف من أمر للتاني (`-v` في curl و nc، و`-n` في lsof و route). ولما تشك: `man curl` أو `curl --help all`.

**الـ Flags ومعانيها حسب الأمر**

| الـ Flag | في الأوامر | المعنى |
|---|---|---|
| `-v` | curl | Verbose: كل التفاصيل |
| `-i` | curl | Include: Headers الرد |
| `-I` | curl | Head: طلب HEAD |
| `-X` | curl | الـ Method |
| `-H` | curl | Header |
| `-d` | curl | Data: Body (فورم) |
| `--data-raw` | curl | زي -d بس @ مش ملف |
| `--json` | curl | Body JSON + Content-Type + Accept |
| `-F` | curl | Form multipart |
| `-G` | curl | حط الـ Data في الـ Query |
| `-L` | curl | Location: اتبع الـ Redirects |
| `-o / -O` | curl | احفظ باسم / بنفس الاسم |
| `-s / -S` | curl | Silent / Show errors |
| `-f` | curl | Fail: Exit code 22 لو ≥400 |
| `-w` | curl | Write-out: اطبع متغيرات |
| `-A` | curl | User-Agent |
| `-u` | curl | User: Basic auth |
| `-b / -c` | curl | ابعت كوكيز / احفظ كوكيز |
| `-k` | curl | Insecure: من غير تحقق (محلي بس) |
| `-C -` | curl | كمّل تحميل |
| `-4 / -6` | curl / ping / nc | IPv4 / IPv6 بس |
| `+short` | dig | الإجابة بس |
| `+trace` | dig | الرحلة من الـ Root |
| `@server` | dig | اسأل سيرفر معين |
| `-c N` | ping | عدد المحاولات |
| `-z` | nc | Zero I/O: افحص بس |
| `-v` | nc | Verbose |
| `-l` | nc | Listen: استنى اتصال |
| `-n` | lsof / route | أرقام بدل أسماء |
| `-P` | lsof | Ports أرقام |
| `-iTCP:3000` | lsof | الـ Port ده |
| `-sTCP:LISTEN` | lsof | اللي مستني اتصالات بس |
| `-connect` | openssl s\_client | Host:Port |
| `-servername` | openssl s\_client | SNI |
| `-m` | python3 | شغّل Module |

<a id="a1-2"></a>

## أ.2 جدول الرموز

**كل رمز في الكتاب ومعناه**

| الرمز | المعنى | مثال |
|---|---|---|
| `> / < / *` | في curl -v: طالع / جاي / معلومة | `> GET / HTTP/2` |
| `@` | في curl: اقرا من ملف | `-d @body.json` |
| `@-` | اقرا من stdin | `cat x \| curl -d @- URL` |
| `'...'` | احمي الـ ? و & و \* من zsh | `curl 'a.com/?q=1&b=2'` |
| `? & =` | الـ Query: بداية / فاصل / قيمة | `/search?q=git&page=2` |
| `#` | Fragment: مبيتبعتش للسيرفر | `/docs#install` |
| `%20 %26` | Percent-encoding: مسافة / & | `q=rock%20%26%20roll` |
| `:port` | الـ Port في الـ URL | `localhost:5173` |
| `:method :path` | Pseudo-headers في HTTP/2 | `":path: /users"` |
| `; (Set-Cookie)` | بين الكوكي والـ Attributes | `sid=a1; HttpOnly` |
| `; (Cookie)` | بين كوكيز مختلفة | `a=1; b=2` |
| `W/"..."` | ETag ضعيف | `W/"3e-Jwo8"` |
| `*` | في ACAO: أي Origin | `access-control-allow-origin: *` |
| `q=0.8` | وزن في Accept-\* | `ar;q=0.9, en;q=0.8` |
| `1xx..5xx` | فئة الـ Status | `404` |
| `(pending) (failed) (canceled)` | Status من غير رد HTTP | `(failed) net::ERR_...` |
| `(blocked:…)` | اتمنع: devtools / mixed-content / csp / other | `(blocked:devtools)` |
| `(disk cache) (memory cache)` | في Size: من الكاش | `(memory cache)` |
| `h2 / h3` | في Protocol: HTTP/2 / HTTP/3 | `h3` |
| `$0 $_ $$` | Console: العنصر / آخر نتيجة / كل العناصر | `$0.click()` |
| `x / ! / >` | في أمثلة الكتاب: خطأ / تحذير / سطر بتكتبه | `x Uncaught TypeError` |
| `::1 / 127.0.0.1` | localhost بـ IPv6 / IPv4 | `curl http://[::1]:8000` |
| `0.0.0.0` | في السيرفر: كل الـ Interfaces | `--host 0.0.0.0` |
| `/24` | CIDR: عدد البتات الثابتة | `192.168.1.0/24` |
