---
title: "Cheat Sheet وجدول الـ Flags وجدول الرموز"
description: "ورقة مراجعة لكل الأوامر المهمة في الكتاب مقسّمة حسب الموضوع، وبعدها جدول الـ Flags المشتركة بين الأوامر ومعانيها المختلفة، وجدول لكل رمز ممكن تشوفه في سطر أوامر."
sidebar:
  order: 101
  label: "ملحق أ: Cheat Sheet"
---

ورقة مراجعة لكل الأوامر المهمة في الكتاب مقسّمة حسب الموضوع، وبعدها جدول الـ Flags المشتركة بين الأوامر ومعانيها المختلفة، وجدول لكل رمز ممكن تشوفه في سطر أوامر.

#### Navigationالتنقل

| الأمر | بيعمل إيه |
|---|---|
| `pwd` | أنا فين؟ |
| `ls -lahG` | كل الملفات بالتفاصيل والمخفي والألوان |
| `ls -lhtr` | بالوقت، الأحدث في الآخر |
| `cd -` | المجلد اللي قبله |
| `cd ~ / cd` | الـ home (/Users/you) |
| `open .` | افتح المجلد في Finder |
| `cdf` | روح لمجلد Finder (دالة الفصل 13) |
| `tree -L 2` | شجرة لمستويين (brew install tree) |

#### Filesالملفات

| الأمر | بيعمل إيه |
|---|---|
| `mkdir -p a/b/c` | مجلدات متداخلة |
| `touch f` | ملف فاضي / حدّث الوقت |
| `cp -a src dst` | نسخة طبق الأصل |
| `cp -c big.mov copy.mov` | Clone على APFS في لحظة |
| `mv old new` | نقل أو تغيير اسم |
| `rm -I files` | امسح واسأل مرة (مفيش Trash!) |
| `trash f` | للـ Trash (brew install trash) |
| `ln -s target link` | Soft link |

#### Viewingالقراية

| الأمر | بيعمل إيه |
|---|---|
| `cat f` | اطبع الملف |
| `less f` | اقرا صفحة صفحة (/ للبحث، q للخروج) |
| `head -n 20 f` | أول 20 سطر |
| `tail -n 50 -f f` | آخر 50 وتابع لايف |
| `file f` | نوع الملف الحقيقي |
| `stat -x f` | التفاصيل كاملة (stat -f للصيغ) |
| `qlmanage -p f` | Quick Look |
| `wc -l f` | عدد السطور |

#### Permissionsالصلاحيات

| الأمر | بيعمل إيه |
|---|---|
| `chmod 755 f` | rwxr-xr-x |
| `chmod u+x f` | ضيف تشغيل للمالك |
| `sudo chown -R $(whoami):staff dir` | رجّع الملكية ليك |
| `id / groups` | أنا مين (staff و admin) |
| `ls -le@` | ACL و Extended attributes |
| `xattr -d com.apple.quarantine app` | شيل علامة النت |
| `csrutil status` | SIP شغال؟ |

#### Textالنصوص

| الأمر | بيعمل إيه |
|---|---|
| `grep -rni 'x' dir` | دوّر جوه الملفات |
| `grep -v x` | السطور اللي مفيهاش x |
| `sed -i '' 's/a/b/g' f` | استبدال جوه الملف (الماك) |
| `awk '{print $1}' f` | العمود الأول |
| `cut -d: -f1 f` | قص بفاصل |
| `sort \| uniq -c \| sort -rn` | الأكتر تكراراً |
| `tr 'a-z' 'A-Z'` | بدّل حروف |
| `pbpaste \| cmd \| pbcopy` | من وإلى الـ Clipboard |

#### Findالبحث عن ملفات

| الأمر | بيعمل إيه |
|---|---|
| `find . -name '*.log'` | بالاسم (المسار إجباري على الماك) |
| `find . -type f -size +100M` | الكبيرة |
| `find . -mtime -1` | اتعدلت النهارده |
| `find . -name '*.tmp' -delete` | دوّر وامسح |
| `find . -print0 \| xargs -0 cmd` | بأمان مع المسافات |
| `mdfind -name invoice` | Spotlight: في ثانية |
| `mdfind -onlyin ~/Docs 'kMDItemKind == PDF'` | Spotlight بشرط ومكان |

#### Redirectionالتوجيه والربط

| الأمر | بيعمل إيه |
|---|---|
| `cmd > f` | stdout لملف (يمسح) |
| `cmd >> f` | ضيف في الآخر |
| `cmd 2> /dev/null` | اخفي الأخطاء |
| `cmd > f 2>&1` | الاتنين لملف |
| `a \| b` | ناتج a يدخل b |
| `a && b` | b لو a نجح |
| `a \|\| b` | b لو a فشل |
| `echo $?` | Exit code آخر أمر |

#### Processesالعمليات

| الأمر | بيعمل إيه |
|---|---|
| `ps aux -m \| head` | العمليات بالرامات (-r بالـ CPU) |
| `top -o cpu / htop` | مراقبة لايف |
| `pgrep -lf name` | PIDs بالاسم |
| `kill PID` | اقفل بأدب (TERM) |
| `kill -9 PID` | اقتل فوراً (Force Quit) |
| `pkill -f pattern` | بنمط في الأمر |
| `cmd & / Ctrl+Z ثم bg / fg` | خلفية / وقّف / قدام |
| `nohup cmd &` | يعيش بعد قفل الـ Terminal |
| `caffeinate -i cmd` | متخليش الماك ينام |

#### Servicesالخدمات (launchd)

| الأمر | بيعمل إيه |
|---|---|
| `brew services list` | خدمات Homebrew |
| `brew services start x` | شغّل ومع كل Login |
| `launchctl list \| grep x` | متسجلة؟ PID و Exit code |
| `launchctl bootstrap gui/$(id -u) f.plist` | سجّل LaunchAgent |
| `launchctl kickstart -k gui/$(id -u)/label` | إعادة تشغيل |
| `launchctl bootout gui/$(id -u)/label` | وقّف وشيل |
| `log stream --predicate 'process == "x"'` | لوج لايف |
| `log show --last 1h` | لوج آخر ساعة |

#### Networkالشبكة

| الأمر | بيعمل إيه |
|---|---|
| `ipconfig getifaddr en0` | الـ IP بتاعي |
| `networksetup -listallhardwareports` | الكروت (en0 = Wi-Fi) |
| `ping -c 4 host` | الاتصال (-W بالملي ثانية) |
| `dig +short host` | الـ DNS |
| `scutil --dns` | DNS servers الماك |
| `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder` | امسح الـ DNS cache |
| `curl -I url / curl -fsSLO url` | الـ Headers / حمّل |
| `lsof -nP -iTCP -sTCP:LISTEN` | مين بيسمع على أنهي بورت |

#### SSH & Transferالسيرفرات والنقل

| الأمر | بيعمل إيه |
|---|---|
| `ssh user@host` | ادخل |
| `ssh -p 2222 host` | بورت تاني |
| `ssh-keygen -t ed25519` | مفتاح جديد |
| `ssh-copy-id host` | ركّب المفتاح على السيرفر |
| `ssh-add --apple-use-keychain key` | الـ Passphrase في الـ Keychain |
| `scp -P 2222 f host:/p` | انسخ (P كبيرة) |
| `rsync -avzP --dry-run a/ host:b/` | مزامنة (جرّب الأول) |
| `ssh -N -L 8080:localhost:80 host` | نفق |

#### Archivesالأرشيف

| الأمر | بيعمل إيه |
|---|---|
| `tar -czvf a.tar.gz dir` | اعمل أرشيف مضغوط |
| `COPYFILE_DISABLE=1 tar -czf a.tgz dir` | من غير ملفات .\_ بتاعة الماك |
| `tar -xzvf a.tar.gz -C /dst` | فك في مكان |
| `tar -tzf a.tar.gz` | اعرض المحتوى |
| `zip -r a.zip dir / unzip a.zip` | zip |

#### Homebrewالحزم

| الأمر | بيعمل إيه |
|---|---|
| `brew update && brew outdated` | إيه الجديد |
| `brew upgrade` | رقّي الكل |
| `brew install x / --cask x` | أداة / برنامج .app |
| `brew search x / brew info x` | دوّر / تفاصيل |
| `brew leaves` | اللي سطبته بنفسك |
| `brew uninstall x && brew autoremove` | شيل ونضّف |
| `brew doctor` | اكتشف المشاكل |
| `brew bundle dump / brew bundle` | Brewfile: احفظ / رجّع |

#### Serversعلى سيرفر Linux

| الأمر | بيعمل إيه |
|---|---|
| `sudo apt update && sudo apt upgrade` | Debian/Ubuntu |
| `sudo dnf upgrade` | Fedora |
| `systemctl status x` | حالة الخدمة |
| `sudo systemctl enable --now x` | مع الـ Boot ودلوقتي |
| `journalctl -u x -f` | لوج الخدمة لايف |
| `ip -br addr / sudo ss -tulnp` | العناوين / البورتات |

#### BSD vs GNUالماك قصاد Linux

| الأمر | بيعمل إيه |
|---|---|
| `sed -i '' / sed -i` | تعديل ملف |
| `date -v-1d / date -d yesterday` | امبارح |
| `stat -f%z / stat -c%s` | حجم الملف |
| `ls -G / ls --color` | ألوان |
| `du -d 1 / du --max-depth=1` | عمق واحد |
| `grep -E / grep -P` | Regex (مفيش -P على الماك) |
| `brew install coreutils` | gls و gsed و gdate |

#### Scriptingالـ Scripts

| الأمر | بيعمل إيه |
|---|---|
| `#!/usr/bin/env bash` | أول سطر (يلاقي bash brew) |
| `set -euo pipefail` | الوضع الصارم |
| `"$var" / ${var:-def}` | استخدم المتغير بأمان |
| `[[ -f f ]] && …` | شرط |
| `for f in *.txt; do …; done` | لوب على ملفات |
| `while IFS= read -r l; do …; done < f` | سطر سطر |
| `trap 'cleanup' EXIT` | نضّف عند الخروج |
| `${arr[@]+"${arr[@]}"}` | Array فاضية في bash 3.2 |

#### Shell configالإعدادات (zsh)

| الأمر | بيعمل إيه |
|---|---|
| `~/.zprofile` | Homebrew والـ PATH |
| `~/.zshrc` | aliases ودوال و Prompt |
| `source ~/.zshrc / exec zsh` | طبّق التعديلات |
| `alias ll='ls -lahG'` | اختصار |
| `export PATH="$HOME/.local/bin:$PATH"` | ضيف للـ PATH |
| `which -a cmd / type cmd` | ده إيه وفين |
| `security find-generic-password -s x -w` | سر من الـ Keychain |

#### Mac goodiesأدوات الماك

| الأمر | بيعمل إيه |
|---|---|
| `open -a 'Visual Studio Code' .` | افتح بالبرنامج ده |
| `pbcopy < f / pbpaste > f` | الـ Clipboard |
| `say "done"` | الماك يتكلم |
| `osascript -e 'display notification "x"'` | Notification |
| `defaults write dom key val` | إعداد مخفي |
| `softwareupdate --list` | تحديثات macOS |
| `screencapture -i -c` | Screenshot للـ Clipboard |
| `sw_vers / pmset -g batt` | النسخة / البطارية |

#### Keys & tmuxالاختصارات

| الأمر | بيعمل إيه |
|---|---|
| `Ctrl+R` | دوّر في الـ History |
| `Ctrl+A / Ctrl+E` | أول / آخر السطر |
| `Ctrl+W / Ctrl+U` | امسح كلمة / السطر |
| `!! / !$` | آخر أمر / آخر Argument |
| `Cmd+K / Ctrl+L` | امسح الـ Scrollback / الشاشة |
| `Cmd+T / Cmd+D` | تابة / قسّم (iTerm2) |
| `Option as Meta` | عشان Alt+B و Alt+F |
| `tmux new -s n / attach -t n` | Session جديدة / ارجع |

<a id="a1-1"></a>

## أ.1 جدول الـ Flags المشتركة

نفس الحرف ممكن يبقى ليه معنى مختلف من أمر للتاني. الجدول ده بيجمع أشهر الحروف ومعانيها حسب الأمر. ولما تشك: `cmd --help` أو `man cmd`.

**الـ Flags ومعانيها حسب الأمر**

| الـ Flag | في الأوامر | المعنى |
|---|---|---|
| `-h` | ls و df و du و free و sort | Human-readable: أحجام K و M و G |
| `-h / --help` | معظم الأوامر | المساعدة (لو -h مش محجوزة لحاجة تانية) |
| `-r / -R` | cp و rm و grep و chmod و chown | Recursive: المجلد وكل اللي جواه (chmod و chown بالكبيرة بس) |
| `-r` | ls و sort | Reverse: اعكس الترتيب |
| `-f` | rm و cp و mv و ln | Force: من غير أسئلة |
| `-f` | tail و journalctl | Follow: تابع لايف |
| `-f` | pgrep و pkill | Full: دوّر في الأمر كامل |
| `-f` | tar | File: اسم الأرشيف بعدها |
| `-F` | grep / awk | Fixed string / Field separator |
| `-v` | cp و mv و rm و mkdir و tar و rsync و curl و ssh | Verbose: اشرح اللي بتعمله |
| `-v` | grep | Invert: اعكس التطابق |
| `-i` | cp و mv و rm | Interactive: اسأل قبل |
| `-i` | grep و sort و locate | Ignore case |
| `-i` | sed | In-place: عدّل الملف نفسه (على الماك -i '') |
| `-i` | ssh | Identity: ملف المفتاح |
| `-n` | head و tail | عدد السطور |
| `-n` | grep و cat -n و less -N | أرقام السطور |
| `-n` | sort | Numeric |
| `-n / -nP` | ss و netstat و lsof | Numeric: أرقام مش أسامي (lsof: -n للـ IP و -P للبورت) |
| `-n` | rsync و sed | Dry run / متطبعش تلقائي |
| `-a` | ls | All: حتى المخفي |
| `-a` | cp و rsync | Archive: نسخة طبق الأصل |
| `-a` | tee و usermod -aG | Append: ضيف |
| `-l` | ls | Long: سطر تفاصيل |
| `-l` | wc / grep / ss | سطور / أسماء ملفات / Listening |
| `-p` | mkdir | Parents: اعمل الأبهات |
| `-p` | ssh / ss / read / netstat | Port / Process / Prompt / Protocol (على الماك) |
| `-P` | scp | Port (كبيرة) |
| `-c` | grep و uniq | Count: عِد |
| `-c` | tar / ping / wc / cp | Create / Count / Bytes / Clone على APFS (الماك) |
| `-o` | sort و curl و gcc | Output: ملف الناتج |
| `-O` | curl / wget | اسم من الـ URL / اسم تختاره |
| `-q` | grep و wget و apt | Quiet: من غير ناتج |
| `-y` | apt و dnf و choco | Yes: وافق تلقائي (brew مبيسألش أصلاً) |
| `-u` | ps و sudo و top على Linux | User |
| `-U` | top على الماك | User (كبيرة؛ -u الصغيرة معناها تاني) |
| `-u` | sort / journalctl | Unique / Unit |
| `-s` | curl / tr / read | Silent / Squeeze / Silent |
| `-t` | ls / sort / ssh / lsof | Time / Separator / TTY / PIDs بس |
| `-e` | ps / echo / grep | Every / Escapes / Expression |
| `-x` | bash -x / grep -x / stat -x | Trace / السطر كله / شكل مفصّل (الماك) |
| `-G` | ls على الماك | Color: ألوان (على Linux --color=auto) |
| `-W` | ping | Wait: بالملي ثانية على الماك، بالثواني على Linux |
| `-v` | date على الماك | Adjust: date -v-7d = من أسبوع |
| `--` | كل الأوامر تقريباً | نهاية الـ Options: اللي بعدها أسماء حتى لو بتبدأ بـ - |
| `-` | tar و cat و diff | اسم ملف = stdin أو stdout |
| `--dry-run` | rsync و kubectl و git (وفي apt اسمها -s) | جرّب من غير تنفيذ |
| `--color=auto` | grep و diff (و ls على Linux) | لوّن على الشاشة بس |

<a id="a1-2"></a>

## أ.2 جدول الرموز

**كل رمز في سطر الأوامر ومعناه**

| الرمز | المعنى | مثال |
|---|---|---|
| `\|` | Pipe: stdout الأول = stdin التاني | `ps aux \| grep ssh` |
| `\|&` | Pipe لـ stdout و stderr مع بعض (zsh و bash 4+) | `make \|& less` |
| `>` | stdout لملف ويمسح القديم | `ls > list.txt` |
| `>>` | stdout لملف ويضيف | `date >> log.txt` |
| `<` | stdin من ملف | `wc -l < f` |
| `2>` | stderr لملف | `cmd 2> err.txt` |
| `2>&1` | stderr لنفس مكان stdout | `cmd > all 2>&1` |
| `&>` | الاتنين لملف (bash/zsh) | `cmd &> all` |
| `<<EOF` | Here-doc: سطور كـ stdin | `cat <<EOF` |
| `<<<` | Here-string: نص كـ stdin | `wc -w <<< "a b"` |
| `>\| / >!` | اكتب فوق رغم noclobber (\>! في zsh) | `ls >\| f` |
| `&` | شغّل في الخلفية | `sleep 60 &` |
| `&&` | نفّذ لو اللي قبله نجح | `make && ./app` |
| `\|\|` | نفّذ لو اللي قبله فشل | `cd x \|\| exit` |
| `;` | فاصل أوامر | `cd /tmp; ls` |
| `( )` | Subshell | `(cd /tmp && ls)` |
| `{ ; }` | Group في نفس الـ Shell | `{ date; ls; } > f` |
| `$VAR / ${VAR}` | قيمة متغير | `echo "${HOME}"` |
| `$( )` | ناتج أمر (Command substitution) | `echo $(date)` |
| `` ` ` `` | نفس $() بشكل قديم | `` echo `date` `` |
| `$(( ))` | حساب أرقام | `echo $((2+3))` |
| `' '` | نص حرفي 100% | `echo '$HOME'` |
| `" "` | نص بيفك المتغيرات | `echo "$HOME"` |
| `\` | الغي معنى الحرف اللي بعده / كمّل السطر | `my\ file` |
| `*` | أي حروف (Glob) | `ls *.jpg` |
| `?` | حرف واحد (Glob) | `ls img?.png` |
| `[ ]` | حرف من مجموعة (Glob) | `ls [ab]*` |
| `{a,b} / {1..5}` | توليد كلمات (Brace) | `mkdir {css,js}` |
| `**` | أي عمق (zsh، أو globstar في bash 4+) | `ls **/*.py` |
| `~` | الـ home | `cd ~/docs` |
| `.` | المجلد الحالي / source | `./run.sh` |
| `..` | المجلد الأب | `cd ..` |
| `/` | الجذر أو فاصل المسار | `/etc/hosts` |
| `#` | تعليق (أو Prompt الـ root) | `# note` |
| `#!` | Shebang: أول سطر في Script | `#!/usr/bin/env bash` |
| `% / $ / #` | Prompt: zsh (الماك) / bash / root | `% ls` |
| `$? $$ $! $0` | Exit code / PID / PID الخلفية / الاسم | `echo $?` |
| `$1 $@ $#` | Arguments / كلها / عددها | `"$@"` |
| `$'...'` | نص فيه Escapes زي \\n و \\r (ANSI-C) | `sed $'s/\r$//'` |
| `!! / !$` | آخر أمر / آخر Argument | `sudo !!` |
| `%1` | رقم Job | `fg %1` |
| `{}` | مكان الاسم في find -exec و xargs -I | `-exec rm {} +` |
| `\; / +` | نهاية find -exec / جمّع | `-exec ls {} \;` |
| `<name> / [opt]` | في الشرح: قيمتك / اختياري (مش بتتكتب) | `ssh <host>` |
| `user@host:path` | مسار على جهاز تاني (scp و rsync) | `deploy@srv:/var/www` |
| `=` | تعريف متغير (من غير مسافات) | `name=Ali` |
