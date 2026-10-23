---
title: "الإجابات والحلول"
description: "جاوب بنفسك الأول، وبعدين قارن. لكل فصل: إجابات أسئلة المراجعة، وبعدها صح ولا غلط، وبعدها حلول التحديات. حلول التحديات طريقة واحدة من طرق كتير، فلو حلّك مختلف وشغال فهو صح."
sidebar:
  order: 103
  label: "ملحق ج: الإجابات"
---

جاوب بنفسك الأول، وبعدين قارن. لكل فصل: إجابات أسئلة المراجعة، وبعدها صح ولا غلط، وبعدها حلول التحديات. حلول التحديات طريقة واحدة من طرق كتير، فلو حلّك مختلف وشغال فهو صح.

#### الفصل 1: جوه الـ Terminal

1. الـ Terminal (Terminal.app أو iTerm2) هو الشباك اللي بيعرض ويستقبل الكتابة، والـ Shell (zsh على الماك) هو البرنامج اللي جواه بيفهم الأوامر وينفذها.
2. لأن البرنامج الخارجي بيشتغل في Process ابن، وتغيير المجلد في الابن مش بيرجع للأب؛ فلازم الـ Shell نفسه يغير مجلده.
3. اللي مجلده جاي الأول في الـ PATH (غالباً `/opt/homebrew/bin` قبل `/usr/bin`). اتأكد بـ `which -a node` أو `type -a node`.
4. لأن المجلد الحالي مش في الـ PATH (لأسباب أمنية)، فلازم تقول المسار صراحة: `./` = هنا.

<strong>صح ولا غلط:</strong> (1) غلط: الاتنين مستقلين، و iTerm2 بيشغّل نفس zsh. · (2) صح. · (3) غلط: `type` (أو `whence -w` في zsh) هو الأدق.

<strong>التحديات:</strong>

1. المسارين مختلفين، زي `/dev/ttys000` و `/dev/ttys001`: كل تابة ليها Terminal خاصة.
2. `cd` و `pwd` و `type` Builtins، و `ls` برنامج خارجي `/bin/ls` (وممكن يطلع alias).
3. `echo "$PATH" | tr ':' '\n'`: اطبع المتغير، وحوّل كل `:` لسطر جديد.
4. الـ PPID بتاع bash = الـ PID بتاع zsh. `ps -o pid,ppid,command` بيبيّن السلسلة: Terminal ← login ← `-zsh` ← bash ← ps.

#### الفصل 2: تشريح أي أمر

1. GNU هي نسخ الأوامر في Linux، و BSD هي النسخ اللي الماك واخدها من FreeBSD، ونفس الأمر بيختلف في Options. `sed -i` على الماك محتاجة امتداد للنسخة الاحتياطية، فبتتكتب `sed -i '' 's/a/b/' f`.
2. `grep` الأمر، و `--max-count=20` Option طويلة بقيمة (وقف بعد 20 تطابق)، و `-i` تجاهل حالة الحروف، و `error` النمط (Argument)، و `a.log b.log` الملفات.
3. `rm -- --help` أو `rm ./--help`.
4. `head -n` عدد السطور، و `ls -n` أرقام UID/GID، و `sort -n` ترتيب رقمي (و `grep -n` أرقام السطور، و `lsof -n` من غير DNS).
5. `man passwd` بيفتح القسم 1 (الأمر passwd)، و `man 5 passwd` القسم 5 (صيغة ملف `/etc/passwd`).

<strong>صح ولا غلط:</strong> (1) غلط: `f` بتاخد اللي بعدها، فـ `z` هتبقى اسم الأرشيف. · (2) غلط: `-R` Recursive و `-r` Reverse. · (3) صح.

<strong>التحديات:</strong>

1. الـ Flag هو `-h` (Human-readable)، مع `-l` أو `-s`.
2. `rm -- -n` و `rm ./-n`.
3. أرشف `logs/` مضغوط على stdout (`-f -`)، و Pipe لـ ssh، وعلى السيرفر فك من stdin في `/backup`. الشرح كامل في فصل الشبكات (tar).

#### الفصل 3: الـ Shells

1. POSIX معيار مشترك لسلوك الـ Shells والأوامر. Script بـ `sh` هيشتغل على أي نظام Unix (حتى اللي مفيهوش bash زي Alpine، أو dash على Ubuntu).
2. الـ Arrays بتبدأ من 1 في zsh ومن 0 في bash، و zsh مبيقسمش المتغيرات اللي من غير Quotes على المسافات (bash بيقسمها).
3. bash: `export NAME=Ali`، و fish: `set -gx NAME Ali`، و PowerShell: `$env:NAME = "Ali"`.
4. `brew install bash`، وبعدين `echo /opt/homebrew/bin/bash | sudo tee -a /etc/shells`، وبعدين `chsh -s /opt/homebrew/bin/bash`. لازم `/etc/shells` لأن `chsh` بيرفض أي Shell مش مكتوب فيه.
5. لأن bash 4 وما بعده رخصتهم GPLv3 و Apple مش عايزة تلتزم بيها، فوقفت عند 3.2.57. ومش هيشتغل فيه: `declare -A` و `mapfile` و `${var,,}` و `globstar` و `|&`.

<strong>صح ولا غلط:</strong> (1) غلط: fish مش POSIX والـ Syntax مختلف. · (2) غلط: `$SHELL` = الـ Login shell، مش اللي شغال (اعرفه بـ `ps -p $$`). · (3) صح.

<strong>التحديات:</strong>

1. `echo $SHELL` و `ps -p $$` و `echo $0`. ممكن يختلفوا لو فتحت Shell جوه Shell.
2. مفيش إجابة واحدة: المهم تلاحظ الاقتراح الرمادي من الـ History والألوان.
3. bash: `for i in 1 2 3; do echo $i; done`، و fish: `for i in 1 2 3; echo $i; end`، و PowerShell: `foreach ($i in 1..3) { $i }`.
4. `/bin/bash -c 'declare -A m; m[a]=1; echo ${m[a]}'` هيقولك `declare: -A: invalid option`، و `/opt/homebrew/bin/bash -c '...'` هيطبع 1.

#### الفصل 4: الـ Filesystem على الماك

1. SSH في `~/.ssh/config`، و VS Code في `~/Library/Application Support/Code/User/settings.json`، وبرامج Homebrew على M2 في `/opt/homebrew/bin` (والملفات الحقيقية في `/opt/homebrew/Cellar`).
2. `../../Downloads`.
3. الـ Hard link اسم تاني لنفس الـ inode، والـ inode جوه Filesystem واحد بس، فمينفعش لقرص تاني. وللمجلدات ممنوع عشان ميحصلش لف في الشجرة.
4. لأن `/etc` على الماك Symlink لـ `/private/etc`، والملفات الحقيقية هناك. `ls -ld /etc` بيوريك السهم.
5. `du -h -d 1 ~ 2>/dev/null | sort -h | tail -4` (آخر سطر هو الـ home نفسه).

<strong>صح ولا غلط:</strong> (1) صح: الـ inode بيفضل طول ما فيه اسم بيشاور عليه. · (2) غلط: مفيش `/proc`؛ المعلومات بتيجي من `sysctl` و `ps`. · (3) صح: APFS افتراضياً Case-insensitive. · (4) غلط: نسبي، بيبدأ من المجلد الحالي.

<strong>التحديات:</strong>

1. مفيش إجابة واحدة؛ المهم إن `cd -` بيرجعك، و `open .` بيفتح نفس المكان في Finder.
2. `sysctl -n hw.memsize` (بالبايت) و `sysctl -n machdep.cpu.brand_string`، و `diskutil info / | grep -i 'file system'` هيقول APFS.
3. الـ Hard link لسه بيطبع المحتوى (نفس الـ inode)، والـ Soft link بيقول `No such file or directory` لأنه بيشاور على اسم اتمسح.
4. الماك هيلاقي الملف عادي لأنه مش حساس للحالة. على سيرفر Linux `import './Test'` و `'./test'` ملفين مختلفين، فالكود اللي شغال عندك ممكن يقع هناك.
5. الملف التنفيذي في `Calculator.app/Contents/MacOS/Calculator`، وتشغله بالمسار ده كامل (والـ .app نفسه مجلد عادي).

#### الفصل 5: التنقل والملفات

1. `ls -lhtrG ~/Downloads`.
2. `cp -r` بينسخ المحتوى بس، و `-a` بيحافظ على الصلاحيات والتواريخ والـ Links. وعلى الماك `cp -R src dst` بينسخ المجلد نفسه، و `cp -R src/ dst` بينسخ محتوياته بس جوه dst.
3. `mv draft.md final.md`.
4. `tail -n 100 -f app.log`.

<strong>صح ولا غلط:</strong> (1) غلط: mv بينقل المجلد على طول. · (2) غلط: من السطر التاني للآخر. · (3) غلط: بيقرا أول Bytes في الملف (Magic numbers).

<strong>التحديات:</strong>

1. `mkdir -p lab/{in,out,tmp} && touch lab/in/{a,b,c}.txt`.
2. `cp -a lab lab-backup` وبعدين `stat -f '%Sm' lab/in/a.txt lab-backup/in/a.txt`: نفس الوقت.
3. `less /var/log/install.log` ثم `G` للآخر، ثم `?error` و `n` للي قبله.

#### الفصل 6: الصلاحيات

1. `750` و `664`.
2. المفتاح الخاص `600`، والـ Script `755` (أو `700` لو ليك بس).
3. هيشيلك من كل الجروبات التانية ويحطك في docker بس (وممكن تخسر sudo لو كنت في جروب sudo). الصح `usermod -aG`.
4. علامة `com.apple.quarantine` اللي المتصفح حطها، و Gatekeeper رافض البرنامج لأنه مش موقّع أو مش Notarized. الحل: كليك يمين ← Open (أو System Settings ← Privacy & Security ← Open Anyway)، أو `xattr -d com.apple.quarantine tool` لو واثق في المصدر.
5. `rwx` للكل عشان أي حد يقدر يعمل ملفات، والـ `t` (Sticky bit) بتمنع أي حد يمسح ملف مش بتاعه. (على الماك `/tmp` Symlink لـ `/private/tmp`).

<strong>صح ولا غلط:</strong> (1) غلط: 4 = قراية بس. · (2) صح. · (3) غلط: الـ `>` بيعملها الـ Shell بصلاحياتك قبل sudo. الحل: `echo hi | sudo tee /etc/test.txt`. · (4) غلط: SIP بيمنع حتى root.

<strong>التحديات:</strong>

1. قبل: `permission denied` (وتقدر تشغله بـ `bash hi.sh`)، وبعد `chmod +x`: `./hi.sh` بيطبع hi.
2. `mkdir secret && chmod 700 secret && touch secret/f && chmod 600 secret/f`، و `sudo -u nobody cat secret/f` هيقولك `Permission denied`.
3. الملف اللي من المتصفح عليه `com.apple.quarantine` (وممكن `com.apple.macl` و `kMDItemWhereFroms`)، واللي من `curl -O` مفيهوش، عشان كده curl بيعدّي من Gatekeeper.
4. `(umask 077; touch f; mkdir d; ls -ld f d)`: الملف `-rw-------` والمجلد `drwx------`. والـ `( )` عشان التغيير ميأثرش على الـ Shell بتاعك.

#### الفصل 7: قوة الـ Shell

1. `find / -name '*.conf' > found.txt 2>/dev/null`.
2. `>` بيكتب في ملف ويمسح القديم، و `>>` بيضيف في الآخر، و `|` بيدّي الناتج لأمر تاني.
3. من غير Quotes لو اسم الملف `my file.txt` هيتقسم لكلمتين، و rm هيحاول يمسح `my` و `file.txt` (اللي ممكن يكونوا ملفات تانية!). الـ Quotes بتخليه اسم واحد.
4. `;` بينفّذ التاني مهما حصل، و `&&` بس لو الأول نجح. استخدم `&&` لما التاني معتمد على الأول (`cd dir && rm *`).
5. `$?` Exit code آخر أمر، و `$$` PID الـ Shell، و `$!` PID آخر أمر في الخلفية.

<strong>صح ولا غلط:</strong> (1) غلط: الترتيب مهم؛ الأخطاء بتروح للشاشة. الصح `> f 2>&1`. · (2) غلط: الـ Shell هو اللي بيوسّع الـ Glob. · (3) صح. · (4) غلط: 0 = نجاح.

<strong>التحديات:</strong>

1. `touch note{1..10}.txt` ثم `ls note?.txt`.
2. `d=$(date +%F) && mkdir -p "$d" && cd "$d" && printf '%s %s\n' "$USER" "$$" > info.txt || echo failed`.
3. استخدم Here-doc عادي (من غير Quotes حوالين EOF) واكتب `\$HOME` في السطر الأول و `$HOME` في التاني.

#### الفصل 8: النصوص والبحث

1. `grep -ic error *.log` (لكل ملف)، أو `cat *.log | grep -ic error` للإجمالي.
2. على الماك: `sed -i.bak 's/localhost/127.0.0.1/g' config` (نفس السطر شغال على Linux كمان).
3. التلاتة بيحددوا الفاصل بين الأعمدة، كل أداة بحرف مختلف.
4. عشان أسماء الملفات اللي فيها مسافات أو سطور جديدة: `-print0` بيفصل بـ Null و `-0` بيفهمه.
5. `find` للبحث الدقيق بالاسم والحجم والتاريخ في أي مكان (حتى اللي Spotlight مش بيفهرسه)، و `mdfind` للبحث السريع جداً بالاسم أو المحتوى في الملفات اللي Spotlight فهرسها، و `grep` للبحث جوه نص الملفات في مشروع.

<strong>صح ولا غلط:</strong> (1) غلط: Invert. · (2) غلط: بيشيل التكرار المتجاور بس، فلازم `sort` قبله. · (3) غلط: على الماك محتاجة `-i ''`، وإلا هيفهم `'s/a/b/'` على إنه امتداد النسخة ويقولك `invalid command code`. · (4) صح.

<strong>التحديات:</strong>

1. `grep -v '^#' /etc/passwd | cut -d: -f1 | sort`.
2. `awk '$9 == 401 || $9 == 403 {print $7}' access.log | sort | uniq -c | sort -rn | head -5`.
3. `find ~ -type f -exec du -h {} + 2>/dev/null | sort -rh | head -10`.

#### الفصل 9: العمليات والخدمات

1. `ps aux -m | head -6`، أو `top -o mem` (أو Activity Monitor ← Memory).
2. `kill` بالـ PID، و `pkill` بنمط في الاسم أو الأمر (`-f`)، و `killall` بالاسم بالظبط.
3. `Ctrl+Z` وبعدين `bg`.
4. `brew services list` (الحالة)، و `brew services info redis`، واللوج `tail /opt/homebrew/var/log/redis.log`، وبعدين `brew services restart redis` (أو `start` لو مش متسجلة).
5. الـ LaunchAgent بيشتغل في جلستك لما تعمل Login وبصلاحياتك، في `~/Library/LaunchAgents` (أو `/Library/LaunchAgents` لكل المستخدمين). الـ LaunchDaemon بيشتغل مع الـ Boot كـ root، في `/Library/LaunchDaemons`.

<strong>صح ولا غلط:</strong> (1) غلط: TERM (15). · (2) صح. · (3) غلط: launchd مبيقراش ملفات zsh، فلازم `EnvironmentVariables` أو مسارات كاملة. · (4) غلط: بيوقفه مؤقتاً.

<strong>التحديات:</strong>

1. `sleep 600 & sleep 600 & jobs; kill %2`.
2. `pgrep -x Finder >/dev/null && echo running || echo stopped`.
3. plist فيه `Label` و `ProgramArguments` (`/bin/sh -c 'date >> /Users/YOU/hello.log'`) و `StartInterval` = 60، وبعدين `launchctl bootstrap gui/$(id -u) FILE`، و `launchctl print gui/$(id -u)/com.YOU.hello`، و `launchctl bootout gui/$(id -u)/com.YOU.hello`. وعلى Linux: Unit في `~/.config/systemd/user/` + Timer، و `systemctl --user enable --now`.

#### الفصل 10: الشبكات

1. `ipconfig getifaddr en0` (عندي IP؟) ← `route -n get default` و `ping` للراوتر ← `ping 8.8.8.8` (النت) ← `dig site.com` (الـ DNS) ← `curl -I https://site.com` (الخدمة) ← على السيرفر `ss -tlnp` أو `lsof -i` (بيسمع؟).
2. `-f` افشل لو HTTP error، و `-s` ساكت، و `-S` بس اعرض الأخطاء، و `-L` اتبع الـ Redirects.
3. `Host myserver` ثم `HostName IP` ثم `User admin` ثم `Port 2200`.
4. `-n` من غير DNS، و `-P` أرقام البورتات، و `-iTCP` اتصالات TCP، و `-sTCP:LISTEN` اللي بيسمع بس. المقابل على Linux: `sudo ss -tlnp`.
5. لأن `-W` على الماك بالملي ثانية، فـ `-W 2` = استنى 2 ملي ثانية بس، وأغلب الردود بتاخد أكتر. الصح `-W 2000`.

<strong>صح ولا غلط:</strong> (1) غلط: سيرفرات كتير بتقفل ICMP. · (2) غلط: البورت في scp بـ `-P` كبيرة. · (3) غلط: الأولى بتنسخ المحتويات، والتانية بتعمل `dst/src`. · (4) صح.

<strong>التحديات:</strong>

1. `dig +short github.com @1.1.1.1`، و `scutil --dns | grep nameserver`.
2. `[ "$(curl -s -o /dev/null -w '%{http_code}' https://site.com)" = 200 ] && echo UP || echo DOWN`.
3. `ssh-keygen -t ed25519 -f ~/.ssh/lab`، و Host lab في الـ config بـ `IdentityFile ~/.ssh/lab`، و `ssh-copy-id -i ~/.ssh/lab.pub lab`، ثم `rsync -avz --dry-run dir/ lab:dir/` وبعدين من غير `--dry-run`.

#### الفصل 11: Homebrew ومديري الحزم

1. `update` بيحدّث brew وقائمة الحزم، و `upgrade` بيرقّي البرامج نفسها. نفس الفرق بالظبط في `apt update` و `apt upgrade`.
2. Formula = أداة Terminal أو مكتبة (`git` و `wget`)، و Cask = برنامج .app بواجهة (`google-chrome` و `visual-studio-code`).
3. `brew shellenv` بيطبع أوامر `export` للـ PATH والمتغيرات، و `$( )` بتاخد الناتج، و `eval` بينفذه في الـ Shell الحالي. ومكانه `~/.zprofile` لأنه بيتقري في كل Login shell (كل تابة على الماك) وبعد path\_helper، فـ `/opt/homebrew/bin` يفضل في أول الـ PATH.
4. `brew install git`، و `sudo apt install git`، و `sudo dnf install git`، و `sudo pacman -S git`، و `winget install --id Git.Git -e`.
5. بيحدّث القائمة ويسطب حزمة جديدة على مكتبات قديمة (Partial upgrade)، وده ممكن يكسر النظام.

<strong>صح ولا غلط:</strong> (1) غلط: بيحدّث القائمة بس. · (2) صح. · (3) غلط: brew بيشتغل من غير sudo. · (4) صح.

<strong>التحديات:</strong>

1. `brew info wget`: هيعرض الإصدار و Dependencies.
2. `brew leaves | wc -l`.
3. `mkdir -p ~/dotfiles && brew bundle dump --file=~/dotfiles/Brewfile`، ثم `brew bundle check --file=~/dotfiles/Brewfile`.
4. `for p in brew apt dnf pacman; do command -v $p >/dev/null && { echo $p; break; }; done`.

#### الفصل 12: الـ Scripting

1. `"$@"` كل Argument لوحده، و `"$*"` كلهم نص واحد.
2. `[[ -d "$1" ]] || { echo "not a dir" >&2; exit 1; }`.
3. لأن `$(cat file)` بيتقسم على المسافات مش السطور، وبيعمل Glob. البديل: `while IFS= read -r line; do …; done < file`.
4. `-e` اقفل عند أول فشل، و `-u` المتغير المش متعرّف خطأ، و `-o pipefail` الـ Pipe يفشل لو أي جزء فشل.
5. عشان تنضّف (ملفات مؤقتة) أو تعمل حاجة لما الـ Script يخلص أو يتقطع.
6. `date -v-1d +%F 2>/dev/null || date -d yesterday +%F`.

<strong>صح ولا غلط:</strong> (1) غلط: من غير مسافات. · (2) صح. · (3) غلط: Exit code بس (0-255). · (4) صح.

<strong>التحديات:</strong>

1. `name="${1:-}"; [[ -z "$name" ]] && read -rp "Name: " name; echo "أهلاً يا $name"`.
2. `for f in *.*; do [[ -f "$f" ]] || continue; ext="${f##*.}"; mkdir -p "$ext" && mv -- "$f" "$ext/"; done` (جوه نسخة في `/tmp` الأول).
3. `while getopts "nd:" o; do case $o in n) dry=1;; d) dir=$OPTARG;; esac; done`، ثم `find "$dir" -type f -mtime +30` مع `-delete` لو مش dry، و `wc -l` للإجمالي.

#### الفصل 13: التخصيص

1. Login أول دخول (SSH، وكل تابة في Terminal.app لأنه بيفتح Login دايماً)، و Interactive أي Shell بتكتب فيه. في zsh: Login بيقرا `.zprofile` ثم `.zshrc`، و Interactive بيقرا `.zshrc` (و `.zshenv` دايماً). في bash: Login بيقرا `~/.bash_profile` (أو `.profile`)، و Interactive `~/.bashrc`.
2. `echo "alias gs='git status'" >> ~/.zshrc && source ~/.zshrc`.
3. الـ `~` جوه Quotes مبتتوسعش، والأهم إنه مسح الـ PATH القديم كله. الصح: `export PATH="$HOME/bin:$PATH"`.
4. لأن الـ Script بيشتغل في Shell ابن، والـ `cd` بتاعه مبيرجعش للـ Shell بتاعك.
5. أداة بيشغّلها `/etc/zprofile`، بتبني الـ PATH من `/etc/paths` و `/etc/paths.d` وتحط اللي كان موجود بعدهم. عشان كده سطر Homebrew مكانه `~/.zprofile` (بيتقري بعدها) مش `~/.zshenv` (قبلها، فيتزق لآخر الـ PATH).

<strong>صح ولا غلط:</strong> (1) صح. · (2) غلط: الـ Script بيشتغل في Process ابن. · (3) صح. · (4) غلط: path\_helper هيعيد الترتيب بعده؛ مكانه `~/.zprofile`.

<strong>التحديات:</strong>

1. مفيش إجابة واحدة؛ المهم يكونوا في `~/.zshrc` ويشتغلوا في تابة جديدة.
2. `mkdir -p ~/.local/bin`، وحط الـ Script و `chmod +x`، و `echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zprofile`، وافتح تابة جديدة.
3. `security add-generic-password -a "$USER" -s my-token -w`، وفي `~/.zshrc`: `export MY_TOKEN="$(security find-generic-password -s my-token -w)"`.
4. `PROMPT='%(?.%F{green}.%F{red})%1~ %#%f '` مع `autoload -Uz vcs_info; precmd() { vcs_info; }; setopt prompt_subst; RPROMPT='${vcs_info_msg_0_}'`. وفي bash: `PROMPT_COMMAND='[[ $? == 0 ]] && c=32 || c=31; PS1="\[\e[${c}m\]\w\$\[\e[0m\] "'`.

#### الفصل 14: الإنتاجية

1. `sudo !!`.
2. `Ctrl+C` يلغي (SIGINT)، و `Ctrl+Z` يوقف مؤقتاً (SIGTSTP)، و `Ctrl+D` نهاية الدخل (ويقفل الـ Shell لو السطر فاضي).
3. `tmux new -s job`، وشغّل الأمر، و `Ctrl+B d`، وتاني يوم `ssh` ثم `tmux attach -t job`.
4. `pbcopy < package.json`، و `code .` (أو `open -a "Visual Studio Code" .`).

<strong>صح ولا غلط:</strong> (1) صح. · (2) غلط: آخر Argument. · (3) غلط: بتفضل شغالة. · (4) غلط: لازم تفعّل Use Option as Meta key.

<strong>التحديات:</strong>

1. مفيش إجابة واحدة: جرّب (ولو Alt+F كتب حرف غريب، فعّل Option as Meta).
2. `history 1 | awk '{print $2}' | sort | uniq -c | sort -rn | head -10`.
3. `notify() { "$@" && m="نجح" || m="فشل"; osascript -e "display notification \"$m: $*\" with title \"Terminal\""; }`.
4. `tmux new -s mon`، و `Ctrl+B %` و `Ctrl+B "`، وشغّل `htop` و `tail -f`، ثم `Ctrl+B d` و `tmux a -t mon`.

#### الفصل 15: الأوامر الخطيرة

1. لو `DIR` فاضي أو مش متعرّف، السطر بيبقى `rm -rf /*`. الآمن: `set -u` و `rm -rf -- "${DIR:?}"/*`.
2. `diskutil list external` قبل وبعد تركيب الفلاشة، وشوف الحجم و `external, physical`. `/dev/disk4` بيعدّي على Cache النظام، و `/dev/rdisk4` (Raw) مباشر وأسرع بكتير مع dd.
3. 777 بتخلي أي حد يعدّل ويشغّل. البديل: صلّح المالك (`chown`) وصلاحيات مناسبة (755 للمجلدات و 644 للملفات).
4. نزّل الملف (`curl -fsSLo`)، اقراه (`less`)، قارن الـ Checksum (`shasum -a 256`)، وشغّله من غير sudo لو ينفع.

<strong>صح ولا غلط:</strong> (1) غلط: `/*` بيتوسع لمسارات والحماية مبتشوفهاش. · (2) صح. · (3) صح. · (4) غلط: SIP بيحمي النظام بس، وملفاتك حمايتها Time Machine.

<strong>التحديات:</strong>

1. `setopt noclobber; echo a > f; echo b > f` (تاني واحد هيقول `file exists`)، و `echo b >| f` بتكتب عادي.
2. من غير حماية الـ echo بيطبع `rm -rf /Applications /Library /System …`. مع `set -u` و `unset DIR`: `DIR: unbound variable` (أو `parameter not set` في zsh). ومع `${DIR:?}`: `parameter null or not set`.
3. `saferm(){ local d="$HOME/.trash/$(date +%F)"; mkdir -p -- "$d"; for f in "$@"; do case "$(realpath -- "$f")" in /|"$HOME") echo "refusing: $f" >&2; return 1;; esac; mv -- "$f" "$d/"; done; }`.

#### الفصل 16: المشروع النهائي

1. عشان النتايج بس تروح لـ stdout، فلو عملت Pipe أو `>` الرسايل متتخلطش بالبيانات وتفضل ظاهرة على الشاشة.
2. `ls -1t` الأرشيفات الأحدث الأول، و `tail -n +8` كل حاجة بعد أحدث 7، و `while IFS= read -r` اسم اسم، و `rm -v --` يمسح. ومستخدمناش `find -printf` لأنه GNU بس ومش موجود في find بتاع الماك.
3. لأن الـ Array الفاضية مبتضيفش Argument خالص، أما المتغير الفاضي في Quotes بيبقى `''`. والشكل `${dry[@]+...}` عشان bash 3.2 مع `set -u` بيعتبر الـ Array الفاضية مش متعرّفة.
4. بـ `uname -s`: `Darwin` = الماك. اللي بيختلف: `sysctl` و `vm_stat` بدل `/proc` و `free`، و `lsof` بدل `ss`، و `ps -A … -r` بدل `--sort`، و `df -h -l` بدل `-x tmpfs`.

<strong>صح ولا غلط:</strong> (1) غلط: log على stderr. · (2) صح. · (3) غلط: launchd مبيقراش ملفات zsh؛ عشان كده حطينا PATH في `EnvironmentVariables`.

<strong>التحديات:</strong>

1. `opskit --version` بيطبع 1.0، و `health` بيطبع الأقسام الخمسة.
2. `cmd_clean(){ local dry=0; [[ "${1:-}" == -n ]] && dry=1; if (( dry )); then find /tmp -maxdepth 1 -user "$USER" -mtime +7 -print; else find /tmp -maxdepth 1 -user "$USER" -mtime +7 -exec rm -rf -- {} +; fi; }` وضيفها للـ case.
3. في آخر `cmd_health`: `df -h -l | awk 'NR>1 {sub("%","",$5); if ($5+0 > 90) bad=1} END {exit bad}'`، والـ plist فيه `StartInterval` = 3600 و `ProgramArguments`: `/bin/sh -c 'opskit health >/dev/null || osascript -e "display notification \"Disk > 90%\""'`.
