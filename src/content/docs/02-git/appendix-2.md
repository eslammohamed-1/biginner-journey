---
title: "قاموس المصطلحات"
description: "كل مصطلح مهم في الكتاب في سطر واحد، مترتب أبجدياً. ارجعله كل ما تقابل كلمة ومش فاكر معناها."
sidebar:
  order: 102
  label: "ملحق ب: القاموس"
---

كل مصطلح مهم في الكتاب في سطر واحد، مترتب أبجدياً. ارجعله كل ما تقابل كلمة ومش فاكر معناها.

## A

- **Actions**: خدمة GitHub لتشغيل Workflows أوتوماتيك (اختبارات، Build، نشر) مع أحداث زي push و PR.

- **Ahead / Behind**: عدد الـ Commits اللي عندك ومش على الـ Remote / اللي على الـ Remote ومش عندك.

- **Alias**: اسم مختصر لأمر Git: `git config --global alias.st status`.

- **Amend**: تعديل آخر Commit (رسالته أو محتواه) بـ `--amend`، وبيعمل Commit جديد بـ Hash جديد.

- **Annotated tag**: Tag كامل فيه اسم وتاريخ ورسالة: `git tag -a`.

- **Atomic commit**: Commit بيعمل حاجة واحدة بس، فيسهل فهمه وإلغاؤه.

## B

- **Bisect**: بحث ثنائي في التاريخ عن أول Commit بايظ: `git bisect`.

- **Blame**: مين آخر حد عدّل كل سطر وفي أنهي Commit: `git blame`.

- **Blob**: Object بيخزن محتوى ملف واحد (من غير اسمه).

- **Branch**: لافتة متحركة بتشاور على Commit، وبتتحرك مع كل Commit جديد.

- **Branch protection / Ruleset**: قواعد على GitHub بتحمي Branch: ممنوع push مباشر، لازم PR ومراجعة.

## C

- **Cherry-pick**: نسخ Commit واحد من مكان لمكان: `git cherry-pick <sha>`.

- **CI**: Continuous Integration: تشغيل الاختبارات أوتوماتيك مع كل تغيير.

- **Clone**: نسخة كاملة من Repo بتاريخه على جهازك.

- **Commit**: Snapshot متسجّل للمشروع، فيه Author ووقت ورسالة و Parent.

- **Conflict**: Git مش عارف يدمج لوحده لأن نفس السطر اتغير بشكلين، فبيسيبلك تختار.

- **Conventional Commits**: صيغة رسايل: `type(scope): description` زي `feat:` و `fix:`.

## D

- **Detached HEAD**: HEAD بيشاور على Commit مباشرة مش على Branch.

- **Diff**: الفرق بين نسختين، سطر سطر بـ `+` و `-`.

- **Distributed VCS**: نظام كل نسخة فيه معاها التاريخ كامل (زي Git).

## F

- **Fast-forward**: Merge من غير Commit جديد: اللافتة بتتحرك لقدام بس.

- **Fetch**: تنزيل الجديد من الـ Remote وتحديث `origin/*` من غير ما يلمس شغلك.

- **Force push**: push بيكتب فوق تاريخ الـ Remote. الآمن: `--force-with-lease`.

- **Fork**: نسخة من Repo حد تاني على حسابك في GitHub.

## G

- **gh**: أداة GitHub الرسمية للـ Terminal: Repos و PRs و Issues و Releases.

- **GitHub Flow**: Workflow بسيط: main دايماً شغال، وكل شغل في Branch و PR.

- **GitHub Pages**: استضافة مجانية لمواقع Static من Repo.

- **.gitignore**: ملف فيه أنماط الملفات اللي Git يتجاهلها.

## H

- **Hash / SHA**: بصمة الـ Object المحسوبة من محتواه (40 حرف Hex في SHA-1).

- **HEAD**: مؤشر بيقول انت فين دلوقتي: غالباً على Branch.

- **Hunk**: جزء متصل من التغييرات في diff، بيبدأ بـ `@@`.

## I

- **Index / Staging area**: المكان اللي بتجهز فيه الـ Commit الجاي بـ `git add`.

- **Interactive rebase**: `rebase -i`: تعدّل وتجمع وترتب وتمسح Commits.

- **Issue**: تذكرة على GitHub لـ Bug أو فكرة أو مهمة.

## K

- **Keychain**: مخزن كلمات السر في macOS. Git و SSH بيحفظوا فيه بيانات الدخول.

## L

- **Lightweight tag**: Tag مجرد اسم على Commit من غير معلومات إضافية.

## M

- **Markdown**: طريقة تنسيق نص برموز بسيطة، بيستخدمها README و GitHub.

- **Merge**: دمج تاريخ Branch في Branch تاني.

- **Merge base**: آخر Commit مشترك بين Branchين، Git بيقارن بيه في الـ 3-way merge.

- **Merge commit**: Commit ليه Parentين بيجمع خطين.

## O

- **Object**: وحدة التخزين في `.git/objects`: blob أو tree أو commit أو tag.

- **ORIG\_HEAD**: مكان HEAD قبل آخر عملية خطيرة زي reset أو merge.

- **origin**: الاسم الافتراضي للـ Remote اللي عملت منه clone.

- **origin/main**: Remote-tracking branch: صورة main على GitHub آخر مرة عملت fetch.

## P

- **Personal access token**: بديل الباسوورد للـ HTTPS، بصلاحيات وتاريخ انتهاء.

- **Pull**: `fetch` + `merge` (أو rebase).

- **Pull Request (PR)**: طلب دمج Branch في Branch، مع مراجعة ونقاش.

- **Push**: إرسال الـ Commits بتاعتك للـ Remote.

- **Push protection**: ميزة GitHub بترفض push فيه مفاتيح سرية معروفة.

## R

- **Rebase**: إعادة تشغيل Commits فوق Base جديد، بـ Hashes جديدة.

- **Ref**: اسم بيشاور على Commit: Branch أو Tag أو HEAD.

- **Reflog**: سجل محلي بكل مكان HEAD والـ Branches كانوا فيه.

- **Release**: صفحة على GitHub مربوطة بـ Tag فيها ملاحظات وملفات.

- **Remote**: نسخة من الـ Repo على سيرفر تاني (زي GitHub).

- **Repository (Repo)**: المشروع + فولدر `.git` اللي فيه التاريخ كله.

- **Reset**: تحريك الـ Branch لـ Commit تاني، بـ `--soft` أو `--mixed` أو `--hard`.

- **Restore**: رجّع ملف لنسخة من الـ Staging أو من Commit.

- **Revert**: Commit جديد بيلغي تأثير Commit قديم من غير ما يمسحه.

## S

- **Secret scanning**: فحص GitHub للـ Repos عن مفاتيح وكلمات سر متسرّبة.

- **Semantic Versioning**: ترقيم `MAJOR.MINOR.PATCH`: كسر / ميزة / إصلاح.

- **Snapshot**: صورة كاملة لكل الملفات لحظة الـ Commit.

- **Squash**: جمع كذا Commit في Commit واحد.

- **SSH key**: زوج مفاتيح (خاص وعام) للدخول على GitHub من غير باسوورد.

- **Stash**: رف مؤقت بتحط عليه تعديلات مش جاهزة: `git stash`.

## T

- **Tag**: اسم ثابت على Commit معين، غالباً لإصدار زي `v1.0.0`.

- **Tracked / Untracked**: ملف Git بيتابعه / ملف جديد Git شايفه بس مش بيتابعه.

- **Tree**: Object بيمثل فولدر: أسماء الملفات والـ blobs والـ trees اللي جواه.

## U

- **Upstream**: الـ Branch على الـ Remote اللي الـ Branch المحلي متابعه، أو المشروع الأصلي في حالة الـ Fork.

## W

- **Workflow (Actions)**: ملف YAML في `.github/workflows` بيحدد إمتى وإيه اللي يتشغّل.

- **Working directory**: الملفات اللي قدامك وبتعدّلها.

- **Worktree**: فولدر تاني لنفس الـ Repo على Branch تانية: `git worktree add`.
