---
title: "Cheat Sheet وجدول الـ Flags وجدول الرموز"
description: "ورقة مراجعة لكل أوامر Git و gh المهمة في الكتاب مقسّمة حسب الموضوع، وبعدها جدول الـ Flags ومعانيها في كل أمر، وجدول لكل رمز ممكن تشوفه في Git: HEAD~ و .. و علامات الـ Conflict وأنماط الـ .gitignore."
sidebar:
  order: 101
  label: "ملحق أ: Cheat Sheet"
---

ورقة مراجعة لكل أوامر Git و gh المهمة في الكتاب مقسّمة حسب الموضوع، وبعدها جدول الـ Flags ومعانيها في كل أمر، وجدول لكل رمز ممكن تشوفه في Git: HEAD~ و .. و علامات الـ Conflict وأنماط الـ .gitignore.

### Setup · التظبيط

| الأمر | بيعمل إيه |
|---|---|
| `brew install git gh` | تسطيب على الـ Mac |
| `git config --global user.name "Sara"` | اسمك |
| `git config --global user.email me@x.com` | إيميلك |
| `git config --global init.defaultBranch main` | main افتراضي |
| `git config --global core.editor "code --wait"` | الـ Editor |
| `git config --list --show-origin` | كل الإعدادات ومنين |
| `git help cmd / git cmd -h` | المساعدة |

### Start · البداية

| الأمر | بيعمل إيه |
|---|---|
| `git init` | Repo جديد هنا |
| `git clone URL [dir]` | نسخة من Remote |
| `git status / -sb` | الحالة / مختصرة |
| `git add f / . / -A / -p` | جهّز ملف / الكل / حتة حتة |
| `git commit -m "msg"` | سجّل |
| `git commit -am "msg"` | add للمتتبَّع + commit |

### History · التاريخ

| الأمر | بيعمل إيه |
|---|---|
| `git log --oneline --graph --all` | الشجرة كلها |
| `git log -p -- f` | تعديلات ملف |
| `git log -S "text"` | مين ضاف الكلمة |
| `git diff` | الورشة مقابل Staging |
| `git diff --staged` | Staging مقابل آخر Commit |
| `git diff --stat` | ملخص الملفات |
| `git show sha / sha:f` | Commit / ملف في Commit |

### Ignore · التجاهل

| الأمر | بيعمل إيه |
|---|---|
| `echo node_modules/ >> .gitignore` | تجاهل فولدر |
| `git check-ignore -v f` | ليه متجاهَل |
| `git rm --cached f` | بطّل تتابعه وسيبه |
| `git mv old new` | غيّر اسم |

### Undo · التراجع

| الأمر | بيعمل إيه |
|---|---|
| `git restore f` | ارمي تعديلات الملف |
| `git restore --staged f` | شيله من الـ Staging |
| `git commit --amend [--no-edit]` | صلّح آخر Commit |
| `git reset --soft HEAD~1` | الغي الـ Commit وسيب كله staged |
| `git reset HEAD~1` | الغي وسيب في الورشة |
| `git reset --hard HEAD~1` | الغي وامسح (خطر) |
| `git revert sha` | Commit عكسي (آمن بعد push) |
| `git clean -nd / -fd` | جرّب / امسح Untracked |

### Branches · الفروع

| الأمر | بيعمل إيه |
|---|---|
| `git branch [-a] [-vv]` | اعرض |
| `git switch -c name` | اعمل وروح |
| `git switch name / -` | روح / اللي قبله |
| `git branch -d / -D name` | امسح / بالقوة |
| `git branch -m new` | غيّر الاسم |
| `git merge name` | ادمج في الحالي |
| `git merge --abort` | الغي Merge |

### Remotes · الريموت

| الأمر | بيعمل إيه |
|---|---|
| `git remote -v` | اعرض |
| `git remote add origin URL` | اربط |
| `git remote set-url origin URL` | غيّر الرابط |
| `git push -u origin main` | أول push |
| `git push / git pull` | ابعت / هات وادمج |
| `git fetch --prune` | هات المعلومات ونضّف |
| `git push --force-with-lease` | بعد rebase (Branch بتاعتك) |
| `ssh -T git@github.com` | اختبر SSH |

### Stash & Tags · الرف والتاجات

| الأمر | بيعمل إيه |
|---|---|
| `git stash push -u -m "msg"` | خبّي (مع الجديد) |
| `git stash list / show -p` | اعرض |
| `git stash pop / apply` | رجّع |
| `git tag -a v1.0.0 -m "msg"` | Annotated tag |
| `git push origin v1.0.0 / --tags` | ابعت Tag |

### Advanced · المتقدم

| الأمر | بيعمل إيه |
|---|---|
| `git rebase main` | انقل الـ Branch فوق main |
| `git rebase -i HEAD~3` | نضّف آخر 3 |
| `git rebase --continue / --abort` | كمّل / الغي |
| `git cherry-pick -x sha` | انسخ Commit |
| `git reflog` | كل حركات HEAD |
| `git branch rescue HEAD@{2}` | أنقذ من الـ reflog |
| `git bisect start / good / bad / reset` | دوّر على الـ Bug |
| `git blame -w f` | مين كتب كل سطر |

### ghGitHub CLI

| الأمر | بيعمل إيه |
|---|---|
| `gh auth login` | ادخل |
| `gh repo create name --public --source=. --push` | Repo من هنا |
| `gh pr create --fill` | افتح PR |
| `gh pr checkout 12` | جرّب PR |
| `gh pr merge --squash --delete-branch` | ادمج |
| `gh issue create / list` | Issues |
| `gh run watch` | تابع Actions |

### AI safety · مع الـ AI

| الأمر | بيعمل إيه |
|---|---|
| `git status` | لازم clean قبل الـ AI |
| `git switch -c ai/try` | تجربة في Branch |
| `git diff --stat` | إيه اللي اتغير |
| `git add -p` | اقبل جزء |
| `git restore . && git clean -fd` | ارمي الباقي |

<a id="a1-1"></a>

## أ.1 جدول الـ Flags المشتركة

نفس الحرف ممكن يبقى ليه معنى مختلف من أمر للتاني. الجدول ده بيجمع أشهر الحروف ومعانيها حسب الأمر. ولما تشك: `git cmd -h` أو `git help cmd`.

**الـ Flags ومعانيها حسب الأمر**

| الـ Flag | في الأوامر | المعنى |
|---|---|---|
| `-m` | commit / tag / stash push | Message: الرسالة |
| `-m` | branch | Move: غيّر الاسم |
| `-a` | commit | All: كل المتتبَّع المتعدّل |
| `-a` | branch | All: حتى الـ Remote |
| `-a` | tag | Annotated |
| `-A` | add | All: كل التغييرات في الـ Repo |
| `-u` | add | Update: المتتبَّع بس |
| `-u` | push | Set upstream: اربط الـ Branch |
| `-u` | stash | Untracked: الجديد كمان |
| `-p` | add / restore / stash | Patch: حتة حتة |
| `-p` | log / show | Patch: اعرض الـ diff |
| `-d / -D` | branch | Delete / بالقوة |
| `-d` | clean | Directories كمان |
| `-c / -C` | switch | Create / بالقوة |
| `-f` | clean | Force: لازم عشان يمسح |
| `-f / --force` | push | اكتب فوق الـ Remote (خطر) |
| `--force-with-lease` | push | Force بس لو محدش ضاف حاجة |
| `-n` | clean / add | Dry run: جرّب |
| `-n` | log | عدد الـ Commits (`-n 5` = `-5`) |
| `-v` | remote / branch | Verbose: تفاصيل |
| `-vv` | branch | ومعاه الـ upstream و ahead/behind |
| `-s` | status | Short |
| `-b` | status | Branch في الـ Short |
| `-x` | cherry-pick | اكتب أصل الـ Commit في الرسالة |
| `-i` | rebase | Interactive |
| `-w` | diff / blame | تجاهل المسافات |
| `-S` | log | دوّر على نص اتضاف أو اتشال |
| `--staged / --cached` | diff / restore / rm | الـ Staging (الاسمين واحد في diff) |
| `--soft / --mixed / --hard` | reset | حرّك الـ Branch بس / + Staging / + الورشة |
| `--oneline` | log | سطر لكل Commit |
| `--graph / --all` | log | رسم / كل الـ Branches |
| `--stat` | log / diff / show | ملخص الملفات |
| `--amend` | commit | صلّح آخر Commit |
| `--no-edit` | commit / merge | من غير ما تفتح الـ Editor |
| `--abort / --continue` | merge / rebase / cherry-pick | الغي / كمّل |
| `--global / --local / --system` | config | مستوى الإعداد |
| `--prune` | fetch | امسح origin/\* اللي اتمسحت |
| `--rebase` | pull | rebase بدل merge |
| `--squash` | merge | جمّع في Staging من غير Merge commit |
| `--no-ff` | merge | اعمل Merge commit حتى لو ينفع FF |
| `--ours / --theirs` | checkout / restore | في Conflict: نسختي / نسختهم |
| `--fill` | gh pr create | العنوان والوصف من الـ Commits |
| `--web` | gh | افتح في المتصفح |

<a id="a1-2"></a>

## أ.2 جدول الرموز

**كل رمز في Git ومعناه**

| الرمز | المعنى | مثال |
|---|---|---|
| `HEAD` | انت فين دلوقتي | `git show HEAD` |
| `HEAD~ / HEAD~2` | الأب / الجد (أول Parent) | `git reset HEAD~2` |
| `HEAD^ / HEAD^2` | الأب / الأب التاني في Merge commit | `git show HEAD^2` |
| `@` | اختصار لـ HEAD | `git log @~3..@` |
| `@{n} / HEAD@{2}` | مكان في الـ reflog | `git reset --hard HEAD@{1}` |
| `@{u}` | الـ upstream بتاع الـ Branch | `git log @{u}..` |
| `ORIG_HEAD` | قبل آخر reset أو merge | `git reset --hard ORIG_HEAD` |
| `a..b` | اللي في b ومش في a | `git log main..feature` |
| `a...b` | اللي في واحد منهم بس (diff: من الـ base) | `git diff main...feature` |
| `--` | بعدها أسماء ملفات | `git log -- app.js` |
| `sha:path` | ملف في Commit | `git show HEAD~1:app.js` |
| `origin/main` | صورة main على الـ Remote | `git diff origin/main` |
| `sha (7 حروف)` | أول حروف الـ Hash كفاية | `git show a1b2c3d` |
| `<<<<<<< / ======= / >>>>>>>` | علامات Conflict: نسختي / فاصل / نسختهم | `<<<<<<< HEAD` |
| `@@ -a,b +c,d @@` | مكان الـ Hunk: قديم / جديد | `@@ -10,4 +10,6 @@` |
| `+ / -` | سطر اتضاف / اتشال في diff | `+const x = 1;` |
| `M A D R ?? !!` | status -s: متعدّل / جديد staged / ممسوح / اتغير اسمه / Untracked / متجاهَل | `?? new.js` |
| `MM` | staged ومتعدّل تاني | `MM app.js` |
| `*` | في branch: الحالي. في .gitignore: أي حروف | `*.log` |
| `**` | في .gitignore: أي عمق | `**/temp` |
| `!` | في .gitignore: استثناء | `!.env.example` |
| `/` | في .gitignore: أول = الجذر، آخر = فولدر | `/dist build/` |
| `#` | تعليق في .gitignore وفي الـ Editor | `# deps` |
| `.` | الفولدر الحالي | `git add .` |
| `~` | الـ Home | `~/.gitconfig` |
| `#12` | في GitHub: Issue أو PR رقم 12 | `Closes #12` |
| `@user` | في GitHub: منشن | `@sara review` |
| `type(scope)!:` | Conventional Commits، و ! = تغيير بيكسر | `feat(api)!: drop v1` |
| `v1.2.3` | Tag بـ SemVer | `git tag -a v1.2.3` |
| `${{ }}` | تعبير في GitHub Actions | `${{ secrets.KEY }}` |
| `<x> / [x]` | في الشرح: قيمتك / اختياري | `git branch [-d] <name>` |
