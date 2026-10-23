---
title: "الإجابات والحلول"
description: "جاوب بنفسك الأول، وبعدين قارن. لكل فصل: إجابات أسئلة المراجعة، وبعدها صح ولا غلط، وبعدها حلول التحديات. أغلب التحديات تجارب عملية، فلو وصلت لنفس النتيجة بطريقة تانية فهي صح."
sidebar:
  order: 103
  label: "ملحق ج: الإجابات"
---

جاوب بنفسك الأول، وبعدين قارن. لكل فصل: إجابات أسئلة المراجعة، وبعدها صح ولا غلط، وبعدها حلول التحديات. أغلب التحديات تجارب عملية، فلو وصلت لنفس النتيجة بطريقة تانية فهي صح.

#### الفصل 1: ليه Git أصلاً؟

1. مثلاً: مساحة كبيرة متكررة، ومش عارف إيه اللي اتغير بين نسختين، وأسماء زي `final-final2` بتلخبط، ومفيش طريقة تدمج شغل اتنين.
2. كل واحد عنده التاريخ كامل على جهازه: يشتغل من غير نت، ولو السيرفر وقع مفيش حاجة تضيع.
3. Snapshot للملفات (tree)، والـ Author والوقت، والرسالة، والـ Parent (اللي قبله)، والـ Hash (SHA) بتاعه.
4. لأن الـ Hash محسوب من المحتوى ومن الـ Parent، فأي تغيير بيدّي Hash مختلف ويغيّر كل اللي بعده. ده بيضمن إن التاريخ متلعبش فيه.

<strong>صح ولا غلط:</strong> (1) غلط: الـ Commit محلي خالص. · (2) غلط: بيخزن Snapshot كامل (والملفات اللي متغيرتش بيشاور عليها). · (3) غلط: Git الأداة، و GitHub موقع بيستضيف Repos.

<strong>التحديات:</strong>

1. تجربة: على الـ Mac غالباً هيطلع رقم من Apple Git أو Homebrew.
2. `find ~ -iname "*final*" -o -iname "*copy*" 2>/dev/null | head`
3. إجابة شخصية: آلاف الـ Commits من مئات الناس في نفس الوقت محتاجة تاريخ ودمج أوتوماتيك.

#### الفصل 2: تسطيب Git وتظبيطه

1. الإيميل الشخصي بـ `--global`، وجوه Repo الشغل: `git config user.email work@company.com` (يعني `--local`، وبيغلب).
2. عشان يطابق GitHub (من 2020) ويطابق اللي Git 3.0 هيعمله افتراضي، فمتلاقيش master عندك و main على GitHub.
3. `-h` ملخص قصير في الـ Terminal، و `--help` الـ Manual كامل.
4. `git config --show-origin --show-scope --get-all user.email` (أو `--list --show-origin`) بيوريك القيمة جاية من أنهي ملف.

<strong>صح ولا غلط:</strong> (1) صح. · (2) غلط: Git مش هيستنى وهيعتبر الرسالة فاضية. · (3) صح: عشان كده فيه noreply email.

<strong>التحديات:</strong>

1. `git config --global user.name "…"` و `user.email` و `init.defaultBranch main`، ثم `git config --global --list`.
2. `git config --global core.editor "code --wait"` ثم `git config --global --edit`.
3. `git config --global alias.st "status -sb"` و `git config --global alias.last "log -1 HEAD --stat"`.

#### الفصل 3: الأماكن التلاتة والـ Commit

1. الـ Working directory: الملفات اللي بتعدلها في VS Code. الـ Staging: اللي اخترته بـ `add` للـ Commit الجاي. الـ Repo (`.git`): الـ Commits المتسجلة.
2. عشان تختار: عدّلت 3 حاجات لأغراض مختلفة، فتعمل 3 Commits مركّزة بدل واحد ملخبط.
3. الحرف الأول = حالة الـ Staging، والتاني = الورشة. MM = الملف اتعدّل واتعمله add، وبعدين اتعدّل تاني.
4. `.` كل التغييرات في الفولدر الحالي وتحته، و `-A` كل التغييرات في الـ Repo كله، و `-u` الملفات المتتبَّعة بس (مش الجديدة).

<strong>صح ولا غلط:</strong> (1) غلط: المتتبَّعة بس. · (2) غلط: النسخة اللي وقت الـ add بس. · (3) غلط: بيمسح التاريخ، والملفات بتفضل.

<strong>التحديات:</strong>

1. `git init git-playground`، وبعدين لكل ملف: `git add f` و `git commit -m "…"`.
2. النسخة اللي اتعملها add دخلت، والتعديل التاني فاضل ` M` في الورشة.
3. `cat-file -p HEAD` بيطبع `tree <sha>` والـ author و committer والوقت، وبعد سطر فاضي الرسالة.

#### الفصل 4: قراية التاريخ

1. `git log --oneline -5 -- index.html`
2. `git diff --staged`
3. في النسخة القديمة الجزء ده بيبدأ من السطر 10 وطوله 4 سطور، وفي الجديدة من 10 وطوله 6.
4. بتفصل الـ Options والـ Revisions عن أسماء الملفات، فـ Git ميتلخبطش لو اسم ملف شبه اسم Branch.

<strong>صح ولا غلط:</strong> (1) صح. · (2) صح. · (3) غلط: بيعرضه بس.

<strong>التحديات:</strong>

1. تجربة.
2. `diff` = الورشة مقابل الـ Staging، و `--staged` = الـ Staging مقابل آخر Commit، و `HEAD` = الورشة مقابل آخر Commit (الاتنين مع بعض).
3. `git log -S "word" --oneline` ثم `git show <sha>`.

#### الفصل 5: الـ .gitignore

1. `dist/` أي فولدر بالاسم ده في أي مكان، و `/dist` اللي في الجذر بس (ملف أو فولدر)، و `dist` أي ملف أو فولدر بالاسم ده في أي مكان.
2. `.env` فيه أسرار حقيقية، و `.env.example` بيقول للفريق محتاجين أنهي متغيرات من غير قيم.
3. لما الفولدر نفسه متجاهَل، Git مبيدخلوش أصلاً فمبيشوفش الاستثناء. الصح: `logs/*` ثم `!logs/keep.log`.
4. ضيف `node_modules/` للـ .gitignore، و `git rm -r --cached node_modules`، و Commit.

<strong>صح ولا غلط:</strong> (1) غلط: لازم `git rm --cached`. · (2) غلط: بيتعمله Commit عشان الكل ينزّل نفس الإصدارات. · (3) غلط: بيشيله من Git بس.

<strong>التحديات:</strong>

1. تجربة.
2. `git check-ignore -v .env` يطبع القاعدة، و `git check-ignore -v .env.example` مبيطبعش حاجة.
3. `git rm --cached debug.log` ثم Commit، و `git ls-files` مبقاش فيه الملف.

#### الفصل 6: التراجع

1. `git add file` ثم `git commit --amend --no-edit`.
2. التلاتة بيحركوا الـ Branch. `--soft` بيسيب الـ Staging والورشة، و `--mixed` بيفضّي الـ Staging ويسيب الورشة، و `--hard` بيرجّع التلاتة (ويمسح التعديلات).
3. `git revert <sha>` ثم push: Commit جديد بيلغيه. الـ reset بيغيّر تاريخ عند زميلك وهيعمل مشاكل.
4. `restore` بيرجّع ملف متتبَّع لحالته، و `clean -f` بيمسح ملفات Untracked.

<strong>صح ولا غلط:</strong> (1) غلط: بيشيله من الـ Staging بس. · (2) غلط: بيضيف Commit جديد. · (3) صح.

<strong>التحديات:</strong>

1. تجربة: `git restore f`، ثم `git add f` و `git restore --staged f` و `git diff` يبيّن التعديل.
2. `git reset --soft HEAD~3` ثم `git commit -m "…"`.
3. `ORIG_HEAD` بيتحفظ قبل الـ reset، فـ `git reset --hard ORIG_HEAD` بيرجّعه.

#### الفصل 7: الـ Branches و HEAD

1. feature بيتحرك للـ Commit الجديد، و main فاضل مكانه، و HEAD بيشاور على feature وبيتحرك معاه.
2. `branch x` بيعمل اللافتة بس، و `switch -c x` بيعملها ويتنقل عليها.
3. HEAD بيشاور على Commit مباشرة مش على Branch. اعمل `git switch -c new-branch` قبل ما تمشي.
4. عندك تعديلات هتتمسح بنسخة الـ Branch التاني. الحل: Commit، أو `git stash`.

<strong>صح ولا غلط:</strong> (1) غلط: لافتة (ملف صغير فيه SHA). · (2) غلط: اللي عليه HEAD بس. · (3) صح: محتاج `-D`.

<strong>التحديات:</strong>

1. التعديل بيختفي على main ويرجع على feature.
2. هتشوف خطين بيتفرعوا من Commit مشترك.
3. `git reflog`، دوّر على الـ Commit، ثم `git branch rescue <sha>`.

#### الفصل 8: الـ Merge والـ Conflicts

1. Fast-forward لما main معملش Commits من ساعة ما اتفرعت (الخط مستقيم). 3-way لما الاتنين عملوا Commits.
2. آخر Commit مشترك بين الاتنين. Git بيقارن كل Branch بيه عشان يعرف مين غيّر إيه.
3. `<<<<<<< HEAD` بداية نسختك، و `=======` الفاصل، و `>>>>>>> feature` نهاية النسخة الجاية.
4. `git status`، افتح الملف واختار، امسح العلامات، `git add`، `git commit`.

<strong>صح ولا غلط:</strong> (1) غلط: بيغيّر main. · (2) غلط: بيحرّك اللافتة بس. · (3) صح.

<strong>التحديات:</strong>

1. الرسالة فيها `Fast-forward`.
2. تجربة.
3. `git merge --abort`، وبعدين `git checkout --theirs index.html` و add و commit.

#### الفصل 9: GitHub والـ Remotes

1. HTTPS: `https://github.com/u/r.git` بـ Token أو Keychain. SSH: `git@github.com:u/r.git` بمفتاح.
2. لو حد خد الملف الخاص، ميقدرش يستخدمه من غير الـ Passphrase. والـ Keychain بيحفظها فمش هتكتبها كل مرة.
3. `git remote set-url origin git@github.com:u/r.git`
4. الـ Fine-grained ليه Repos محددة وصلاحيات محددة وتاريخ انتهاء، و Classic صلاحيات عامة على كل حاجة.

<strong>صح ولا غلط:</strong> (1) غلط: اسم افتراضي. · (2) غلط: الـ `.pub`. · (3) غلط: ده نجاح.

<strong>التحديات:</strong>

1. تجربة.
2. `ssh-keygen -t ed25519 -C "you@mail.com"`، و `pbcopy < ~/.ssh/id_ed25519.pub`، ثم `ssh -T git@github.com`.
3. `git remote add origin https://…`، ثم `git remote set-url origin git@…` و `git remote -v`.

#### الفصل 10: clone و push و fetch و pull

1. بيعمل الفولدر، وينزّل كل التاريخ، ويضيف origin، ويعمل Branch محلي متابع للـ Default.
2. `--set-upstream`: بيربط main المحلي بـ origin/main، فبعد كده `git push` و `git pull` من غير أسماء.
3. الأولى = اللي على GitHub ومش عندك (behind)، والتانية = اللي عندك ومش على GitHub (ahead).
4. فيه Commits على GitHub مش عندك. `git pull` وبعدين `git push`.

<strong>صح ولا غلط:</strong> (1) غلط: بيحدّث origin/\* بس. · (2) غلط: clone بيضيفه. · (3) غلط: مع fetch أو pull بس.

<strong>التحديات:</strong>

1. تجربة.
2. `status` هيقول behind 1، و `log main..origin/main` هيعرض الـ Commit.
3. الـ push التاني يترفض، فـ `git pull` وحل الـ Conflict و push، وبعدين pull في الأولى.

#### الفصل 11: التعاون

1. `switch main`، `pull`، `switch -c feat/x`، شغل و Commits، `push -u origin feat/x`، افتح PR، مراجعة وتعديلات، Merge، `switch main` و `pull` و `branch -d feat/x`.
2. `origin` = الـ Fork بتاعك (بتعمل push عليه)، و `upstream` = المشروع الأصلي (بتعمل منه fetch).
3. لما الـ Branch فيه Commits كتير صغيرة و wip ومش عاوزها كلها في main.
4. تكتب في وصف الـ PR `Closes #12` (أو Fixes أو Resolves).

<strong>صح ولا غلط:</strong> (1) غلط: تعمل push على نفس الـ Branch والـ PR يتحدث. · (2) صح. · (3) غلط: بيجمعهم في Commit واحد.

<strong>التحديات:</strong>

1. تجربة.
2. بعد Squash هتلاقي Commit واحد جديد على main.
3. `git remote add upstream …`، و `git fetch upstream`، و `git merge upstream/main`، و `git push`.

#### الفصل 12: GitHub Flow

1. main دايماً شغال، وكل شغل في Branch باسم واضح، و Commits و push بانتظام، و PR للمراجعة، و Merge بعد الموافقة والـ Checks، والـ Deploy من main.
2. عشان تبدأ من آخر نسخة وتقلل الـ Conflicts بعد كده.
3. `git switch -c fix/x` (الـ Commits بتنتقل معاك)، و `git push -u origin fix/x`، وافتح PR. وصلّح main المحلي: `git switch main` و `git reset --hard origin/main`.
4. GitHub Flow فيه main و Branches قصيرة بس، و Git Flow فيه develop و release و hotfix لمشاريع بإصدارات مجدولة.

<strong>صح ولا غلط:</strong> (1) غلط. · (2) غلط: بيمسح الـ origin/\* اللي اتمسحت هناك من عندك. · (3) صح.

<strong>التحديات:</strong>

1. تجربة.
2. الـ push يترفض بـ `GH013`، وتصلّح بالطريقة اللي في السؤال 3.
3. `git switch feature/b` و `git fetch` و `git merge origin/main`.

#### الفصل 13: رسايل الـ Commits

1. `fix(auth): handle wrong PIN on login`، و `docs: add README`، ودي اتنين: `feat(nav): add navbar` و `style: update color palette`.
2. عشان يكمّل الجملة: "لو اتطبق، الـ Commit ده هي…" add navbar. وده نفس أسلوب الرسايل اللي Git بيعملها (Merge branch...).
3. `fix` بيصلح سلوك غلط، و `refactor` بيغيّر شكل الكود من غير ما يغيّر السلوك.
4. تلغي تغيير واحد بس من غير ما تشيل معاه حاجات تانية ملهاش علاقة.

<strong>صح ولا غلط:</strong> (1) غلط: تنسيق الكود (مسافات و Format) مش شكل الموقع. · (2) صح. · (3) غلط.

<strong>التحديات:</strong>

1. تجربة.
2. `git add -p`: `y` للأول و `n` للتاني، Commit، وبعدين `git add` للباقي و Commit.
3. `git commit` من غير `-m`، وفي آخر الجسم سطر `Closes #3`.

#### الفصل 14: الـ Stash والـ Tags

1. `pop` بيطبّق ويمسحه من القايمة، و `apply` بيطبّق ويسيبه.
2. لما الشغل هيقعد أيام: اعمل Branch و Commit wip أحسن.
3. الـ Tag ثابت على Commit واحد، والـ Branch بيتحرك. الـ Annotated فيه اسم وتاريخ ورسالة (Object كامل)، والـ Lightweight مجرد اسم.
4. 1.4.0، و 1.3.3، و 2.0.0.

<strong>صح ولا غلط:</strong> (1) غلط: محتاج `-u`. · (2) غلط: `git push origin v1.0.0` أو `--tags`. · (3) صح.

<strong>التحديات:</strong>

1. تجربة.
2. من غير `-u` الملف الجديد بيفضل في الورشة.
3. `git tag -a v0.1.0 -m "…"` و `git push origin v0.1.0`.

#### الفصل 15: الـ Rebase والـ Cherry-pick

1. الـ Rebase بيعيد Commits الـ Branch فوق آخر main فالخط مستقيم، والـ Merge بيسيب الخطين ويضيف Merge Commit.
2. لأنه بيعمل Commits جديدة بـ Hashes جديدة، والناس اللي عندهم القديمة هيلاقوا تاريخين.
3. الاتنين بيدمجوا مع اللي قبله، بس `squash` بيخليك تكتب الرسالة، و `fixup` بيرمي رسالته.
4. لما محتاج Commit واحد (Fix مثلاً) في Branch تاني. مش عادة لأنه بيعمل نسخة مكررة بـ Hash تاني.

<strong>صح ولا غلط:</strong> (1) غلط: Hashes جديدة. · (2) صح. · (3) صح.

<strong>التحديات:</strong>

1. تجربة.
2. `pick` للأول و `fixup` للي بعده، و `reword` للرسايل.
3. حل وبعدين `git add` و `git rebase --continue`، ثم `git cherry-pick -x <sha>`.

#### الفصل 16: الـ Reflog و Bisect و Blame

1. `log` = تاريخ الـ Commits المتشاركة، و `reflog` = مذكرات جهازك: كل مكان HEAD راحله.
2. `git reflog`، دوّر على آخر Commit كان عليه، و `git branch name <sha>`.
3. حوالي 10، لأن كل تجربة بتقسم الباقي نصين (2<sup>10</sup> = 1024).
4. `-w` بيتجاهل تغييرات المسافات، فيظهر اللي كتب السطر فعلاً مش اللي عمل Format.

<strong>صح ولا غلط:</strong> (1) غلط: محلي بس. · (2) غلط: بيفضلوا موجودين لحد ما gc يمسحهم بعد المدة. · (3) صح.

<strong>التحديات:</strong>

1. `git reset --hard HEAD@{1}`
2. `git reflog` ودوّر على `checkout: moving from x`.
3. `git bisect start HEAD <first>` ثم `git bisect run sh -c '! grep -q BUG file'`.

#### الفصل 17: README و Pages و Actions و gh

1. مثال: `# Title`، و `![shot](img.png)`، و `[Demo](url)`، و `- item`، وبلوك بـ 3 Backticks.
2. لأن الموقع على `/repo/` مش `/`، فالملفات اللي Vite بيعملها لازم مساراتها تبدأ بيه.
3. `uses` بيشغّل Action جاهز، و `run` بيشغّل أمر Shell.
4. في Settings ← Secrets and variables ← Actions، واستخدمه بـ `${{ secrets.NAME }}`.

<strong>صح ولا غلط:</strong> (1) غلط: Static files بس. · (2) غلط: لازم مسار نسبي. · (3) صح.

<strong>التحديات:</strong>

1. تجربة.
2. تجربة.
3. تجربة: الـ PR هيظهر فيه ✗ لحد ما الاختبار يعدّي.

#### الفصل 18: Git والـ AI

1. عشان أي تغيير بعد كده هو بتاع الـ AI بس، فـ `diff` يعرضه لوحده و `restore` يرجّع بالظبط.
2. `git add -p` للي عاوزه ثم Commit، وبعدين `git restore .` للباقي.
3. `.env` و `.env.*` و `!.env.example`.
4. الغيه واعمل واحد جديد، وحط الجديد في .env، وشيله من الكود و Commit، ولو ينفع نضّف التاريخ.

<strong>صح ولا غلط:</strong> (1) غلط: لسه في التاريخ. · (2) غلط: أسماء بس. · (3) صح.

<strong>التحديات:</strong>

1. تجربة.
2. تجربة.
3. `git rebase -i` و `edit` على الـ Commit، شيل المفتاح، `git commit --amend`، و `git rebase --continue`، وبعدين `git log -p | grep KEY` فاضي.

#### الفصل 19: الإنقاذ

1. `git branch feature/x` ثم `git reset --hard origin/main` (أو `HEAD~2`) ثم `git switch feature/x`.
2. اللي اتعمله push: `revert` عشان التاريخ المتشارك ميتغيرش. المحلي: `reset` أو `amend` عادي.
3. تاريخين ملهمش Commit مشترك (README على GitHub و init عندك). ابدأ بـ clone أو Repo فاضي.
4. `git reflog` ودوّر على الـ SHA، ثم `git branch name <sha>`.

<strong>صح ولا غلط:</strong> (1) غلط: Git عمره ما شافها. · (2) صح. · (3) غلط: لازم يتشال من الـ Commits نفسها.

<strong>التحديات:</strong>

1. تجربة.
2. تجربة.
3. `git reflog` ودوّر على السطر اللي كان HEAD فيه على الـ Branch.
