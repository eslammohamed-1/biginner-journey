---
title: "قاموس المصطلحات"
description: "كل مصطلح مهم في الكتاب في سطر واحد، مترتب أبجدياً. ارجعله كل ما تقابل كلمة ومش فاكر معناها."
sidebar:
  order: 102
  label: "ملحق ب: القاموس"
---

كل مصطلح مهم في الكتاب في سطر واحد، مترتب أبجدياً. ارجعله كل ما تقابل كلمة ومش فاكر معناها.

### A

- **Alias**: اسم مختصر بيستبدله الـ Shell بأمر أطول قبل التنفيذ.

- **APFS**: Apple File System: نظام ملفات الماك، فيه Clones و Snapshots، وافتراضياً مش حساس لحالة الحروف.

- **Apple Silicon**: معالجات Apple (M1 وما بعده، arm64). Homebrew عليها في /opt/homebrew.

- **Argument**: أي كلمة بعد اسم الأمر: ملف أو قيمة أو Option.

- **Arithmetic expansion**: `$(( ))`: حساب أرقام صحيحة جوه الـ Shell.

- **Array**: متغير فيه أكتر من قيمة: `a=(x y)` و `"${a[@]}"`.

### B

- **Background job**: أمر شغال في الخلفية بـ `&` والـ Prompt راجعلك.

- **bash**: Bourne Again SHell: الافتراضي على أغلب توزيعات Linux. الماك شايل نسخة قديمة 3.2 بسبب رخصة GPLv3، والحديثة بـ brew install bash.

- **Bottle**: نسخة جاهزة متجمعة من Formula في Homebrew، بتتنزل بدل ما تتبني من الكود.

- **Brace expansion**: `{a,b}` و `{1..5}`: توليد كلمات قبل التنفيذ.

- **BSD**: عيلة Unix جه منها جزء كبير من الماك؛ أوامر الماك (sed و date و stat) نسخ BSD مش GNU.

- **Builtin**: أمر جوه الـ Shell نفسه (cd و export) مش برنامج على القرص.

### C

- **Cask**: حزمة Homebrew لبرنامج بواجهة (.app) زي VS Code: `brew install --cask`.

- **Command substitution**: `$(cmd)`: حط ناتج أمر مكانه في السطر.

- **Console**: الشاشة والكيبورد المتوصلين بالجهاز مباشرة، أو Terminal النظام النصي.

- **cron**: خدمة بتشغّل أوامر على مواعيد متكررة (`crontab -e`).

### D

- **Daemon**: برنامج شغال في الخلفية على طول (sshd و nginx)، وغالباً اسمه بينتهي بـ d.

- **Darwin**: اسم الـ Kernel والنظام الأساسي تحت macOS (`uname -s`).

- **Dependency**: مكتبة أو حزمة لازمة عشان برنامج يشتغل.

- **dotfiles**: ملفات الإعدادات المخفية في الـ home (.bashrc و .zshrc و .ssh/config).

### E

- **Environment variable**: متغير بيتورّث للبرامج اللي بتتشغل (`export`).

- **Exit code**: رقم بيرجّعه الأمر: 0 نجاح وأي حاجة تانية فشل (`$?`).

### F

- **FHS**: Filesystem Hierarchy Standard: مكان كل نوع ملفات في Linux. الماك قريب منه بس عنده /Users و /Applications و /Library و /System.

- **File descriptor**: رقم للقناة المفتوحة: 0 stdin و 1 stdout و 2 stderr.

- **fish**: Shell حديث سهل باقتراحات تلقائية، مش POSIX.

- **Flag / Option**: حرف أو كلمة بشَرطة بتغير سلوك الأمر (`-l` و `--all`).

- **fork / exec**: الـ Shell بينسخ نفسه (fork)، والنسخة بتستبدل نفسها بالبرنامج (exec).

- **Fork bomb**: دالة بتنادي نفسها بشكل متضاعف لحد ما الجهاز يقف.

- **Formula**: حزمة Homebrew لأداة Terminal أو مكتبة: `brew install wget`.

- **Full Disk Access**: صلاحية في Privacy & Security بتسمح لبرنامج (زي Terminal) يوصل للفولدرات المحمية.

### G

- **Gatekeeper**: حماية الماك اللي بتفحص البرامج اللي نزلت من النت قبل أول تشغيل.

- **Glob**: نمط أسماء ملفات (`*` و `?` و `[]`) بيوسعه الـ Shell.

- **GNU coreutils**: الأوامر الأساسية (ls و cp و rm…) في Linux. على الماك brew install coreutils بيجيبها بأسامي gls و gcp و gdate.

- **Group**: مجموعة مستخدمين ليهم نفس الصلاحيات على ملفات.

### H

- **Hard link**: اسم تاني لنفس الـ inode على نفس الـ Filesystem.

- **Here-doc**: `<<EOF`: كتابة سطور كتير كـ stdin.

- **History expansion**: `!!` و `!$`: إعادة استخدام أوامر قديمة.

- **home**: مجلدك الشخصي (`~` و `$HOME`).

- **Homebrew**: مدير الحزم الأشهر على الماك (`brew`)، بيشتغل من غير sudo.

### I

- **inode**: السجل اللي فيه بيانات الملف (الحجم والصلاحيات ومكانه) من غير الاسم.

- **Interactive shell**: Shell بتكتب فيه بنفسك، بيقرا `~/.zshrc` (أو `~/.bashrc` في bash).

### J

- **Job control**: التحكم في الأوامر: `&` و Ctrl+Z و fg و bg و jobs.

- **journalctl**: أداة قراية لوجات systemd على Linux (المقابل على الماك: `log show`).

### K

- **Kernel**: قلب نظام التشغيل اللي بيدير العمليات والذاكرة والأجهزة.

- **Keychain**: خزنة الباسوردات المتشفرة في الماك، وتوصلها من الـ Terminal بـ `security`.

### L

- **LaunchAgent**: خدمة بتشتغل في جلستك لما تعمل Login، ملفها plist في `~/Library/LaunchAgents`.

- **launchctl**: الأداة اللي بتكلم بيها launchd: bootstrap و bootout و kickstart و print.

- **launchd**: الـ PID 1 على الماك، وبيدير كل الخدمات والـ Agents (المقابل لـ systemd).

- **LaunchDaemon**: خدمة نظام بتشتغل مع الـ Boot كـ root، في `/Library/LaunchDaemons`.

- **Login shell**: أول Shell بعد الدخول (SSH أو su -، وكل تابة Terminal على الماك)، بيقرا .zprofile أو .bash\_profile.

### M

- **man page**: صفحة الدليل الرسمي لأي أمر (`man ls`).

- **mDNS / Bonjour**: أسامي الأجهزة على الشبكة المحلية بـ `.local` من غير DNS server.

### N

- **noclobber**: Option بتمنع `>` من الكتابة فوق ملف موجود.

### O

- **Octal permissions**: الصلاحيات بالأرقام (755 و 644): r=4 و w=2 و x=1.

- **openrsync**: نسخة rsync بترخيص BSD اللي بقت `/usr/bin/rsync` من macOS 15.4.

### P

- **Package manager**: أداة بتسطب وتحدّث البرامج من مخازن (brew على الماك، و apt و dnf على Linux).

- **PATH**: قائمة المجلدات اللي الـ Shell بيدوّر فيها على البرامج.

- **path\_helper**: أداة في `/etc/zprofile` بتبني الـ PATH من `/etc/paths` و `/etc/paths.d`.

- **PID / PPID**: رقم العملية / رقم العملية الأب.

- **Pipe**: `|`: توصيل stdout أمر بـ stdin أمر تاني.

- **plist**: Property List: ملف إعدادات بصيغة XML (أو Binary) بيستخدمه الماك لكل حاجة، ومنه ملفات launchd.

- **Port**: رقم بيحدد البرنامج اللي بيستقبل الاتصال جوه الجهاز (22 و 443).

- **POSIX**: معيار مشترك لسلوك الـ Shells والأوامر على أنظمة Unix.

- **PowerShell**: Shell من Microsoft، الـ Pipe فيه بيعدّي Objects مش نصوص.

- **Process**: برنامج شغال في الذاكرة ليه PID.

- **Prompt**: النص اللي قبل المؤشر (`user@MacBook ~ %`)، في zsh متغير PROMPT وفي bash PS1.

- **PTY**: Pseudo-terminal: Terminal افتراضية بتعملها برامج زي Terminal.app و iTerm2 و ssh (`/dev/ttys000` على الماك).

### Q

- **Quarantine**: علامة `com.apple.quarantine` اللي المتصفح بيحطها على أي حاجة نزلت من النت.

- **Quoting**: استخدام `'` و `"` و `\` عشان تتحكم في فهم الـ Shell للرموز.

### R

- **Readline**: المكتبة اللي بتدي اختصارات السطر (Ctrl+A و Ctrl+R) في bash وغيره؛ zsh عنده محرر خاص بيه اسمه ZLE بنفس الاختصارات.

- **Redirection**: توجيه stdin أو stdout أو stderr لملف (`>` و `<` و `2>`).

- **Regex**: Regular Expression: لغة أنماط للبحث في النصوص (grep و sed و awk).

- **Repository**: سيرفر فيه حزم موقّعة بيسحب منه مدير الحزم.

- **root**: المستخدم الأعلى صلاحيات (UID 0)، وكمان اسم المجلد `/`.

- **Rosetta**: مترجم بيشغّل برامج Intel على Apple Silicon.

- **rsync**: أداة مزامنة بتنقل الفرق بس، محلياً أو عبر SSH.

### S

- **Script**: ملف فيه أوامر بتتنفذ ورا بعض، أوله Shebang.

- **setuid**: صلاحية بتخلي البرنامج يشتغل بصلاحيات صاحبه (زي passwd).

- **Shebang**: `#!` في أول سطر: بيحدد البرنامج اللي هيشغّل الـ Script.

- **Shell**: البرنامج اللي بيفهم الأوامر وينفذها (bash و zsh و fish).

- **Signal**: رسالة بتتبعت لعملية (TERM و KILL و INT و HUP).

- **SIP**: System Integrity Protection: بيمنع حتى root إنه يعدّل ملفات النظام المحمية.

- **Soft link (Symlink)**: ملف بيشاور على مسار ملف تاني، وبيتكسر لو الأصل اتمسح.

- **Spotlight**: فهرس البحث في الماك؛ من الـ Terminal بـ `mdfind`.

- **SSH**: اتصال متشفر لتشغيل Shell على جهاز تاني.

- **SSH key**: زوج مفاتيح (خاص وعام .pub) للدخول من غير باسورد.

- **stdin / stdout / stderr**: الدخل والخرج والأخطاء: القنوات 0 و 1 و 2.

- **Sticky bit**: على مجلد: محدش يمسح غير ملفاته (`/tmp`).

- **Subcommand**: فعل بعد اسم الأداة (`git commit` و `apt install`).

- **Subshell**: نسخة ابن من الـ Shell (`( )` أو Pipe)، تغييراتها مبترجعش.

- **sudo**: تشغيل أمر واحد بصلاحيات root بباسوردك.

- **systemd**: نظام الـ Init وإدارة الخدمات في أغلب توزيعات Linux (PID 1). المقابل على الماك launchd.

### T

- **Tab completion**: Tab بيكمّل أسماء الأوامر والملفات.

- **tar**: أداة أرشفة بتجمع ملفات في ملف واحد، ومعاها ضغط.

- **TCC**: Transparency, Consent, and Control: نظام صلاحيات الخصوصية (Documents و Desktop والكاميرا).

- **Terminal**: البرنامج (أو الجهاز زمان) اللي بيعرض النص ويستقبل الكتابة.

- **Terminal.app**: برنامج الـ Terminal اللي جاي مع الماك، بديله الأشهر iTerm2.

- **tmux**: Terminal multiplexer: Sessions بتفضل شغالة بعد ما تفصل، وتقسيم للشاشة.

- **TTY**: TeleTYpewriter: اسم الـ Terminal (`/dev/ttys000` على الماك، و `/dev/pts/0` على Linux).

### U

- **UID / GID**: رقم المستخدم / رقم الجروب.

- **umask**: قناع بيحدد الصلاحيات الافتراضية للملفات الجديدة.

### W

- **Word splitting**: تقسيم الـ Shell للقيم على المسافات لو مش جوه Quotes.

### X

- **xargs**: بيحوّل سطور stdin لـ Arguments لأمر.

- **xattr**: Extended attributes: بيانات إضافية على الملف زي Quarantine، بتشوفها بـ `ls -l@` و `xattr -l`.

### Z

- **zsh**: Shell متوافق تقريباً مع bash بمميزات أكتر، الافتراضي على macOS من Catalina (2019).
