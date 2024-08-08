---
title: Git使用手册
date: 2023-04-06 22:28:20
permalink: /helper/git/
author: 张牧楠
categories: 
  - 开发工具
  - 版本控制
tags: 
  - 
---

## 常用命令

### git init

`git init` 命令用于初始化一个新的Git仓库。它会在当前目录下创建一个名为.git的子目录，该子目录将保存Git仓库的所有元数据和对象。该命令只需要在第一次创建Git仓库时运行一次。

**用法**

在要初始化为Git仓库的目录下运行以下命令：

```bash
git init
```

**示例**

以下示例演示如何使用 `git init` 命令在当前目录下创建一个新的Git仓库：

```bash
$ cd my_project/
$ git init
Initialized empty Git repository in /Users/username/my_project/.git/
```

这将在my_project目录下创建一个新的Git仓库。您可以使用其他Git命令来管理和操作该仓库。

### git add

`git add` 命令用于将文件添加到Git仓库的 `暂存区` 。使用该命令将更改添加到 `暂存区` 是提交更改之前的必要步骤。

**用法**

将文件添加到暂存区：

```bash
git add <file>
```

将所有更改添加到暂存区：

```bash
git add .
```

**示例**

以下示例演示如何使用 `git add` 命令将文件添加到Git仓库的暂存区：

```bash
$ git add file.txt
```

### git commit

git commit命令用于提交更改到 `本地` Git仓库。提交更改时，需要添加一条有意义的提交信息以便于以后的追踪和管理。

**用法**

提交更改并添加提交信息：

```bash
git commit -m "Commit message"
```

**示例**

以下示例演示如何使用 `git commit` 命令提交更改到本地Git仓库：

```bash
$ git commit -m "Add new feature"
```

### git status

`git status` 命令用于查看当前Git仓库中文件的状态。该命令显示已修改的文件、已暂存的文件和未跟踪的文件。

**用法**

查看Git仓库中文件的状态：

```bash
git status
```

**示例**  

以下示例演示如何使用 `git status` 命令查看Git仓库中文件的状态：

```bash
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)
  
        modified:   file.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

### git log

`git log` 命令用于查看Git仓库的提交日志。该命令显示每个提交的作者、提交日期、提交信息和提交哈希值。

**用法**

查看Git仓库的提交日志：

```bash
git log
```

**示例**

以下示例演示如何使用 `git log` 命令查看Git仓库的提交日志：

```bash
$ git log
commit 51f5352b9c57d0682f02d43f8e77c50a94f12452
Author: John Doe <john@example.com>
Date:   Mon Mar 29 10:00:00 2021 -0700

    Add new feature

commit 56e8fbc9cf6c88d7f178c1e8b7aa2e90a13b7d15
Author: Jane Doe <jane@example.com>
Date:   Fri Mar 26 15:00:00 2021 -0700

    Update file.txt
```

### git diff

`git diff` 命令用于比较文件的不同版本之间的差异。该命令可以用于比较工作目录和暂存区之间的差异，或者比较暂存区和上次提交之间的差异。

**用法**

比较工作目录和暂存区之间的差异：

```bash
git diff
```

比较暂存区和上次提交之间的差异：

```bash
git diff --cached
```

比较两个分支之间的差异：

```bash
git diff <branch1> <branch2>
```

**示例**

以下示例演示如何使用 `git diff` 命令比较文件的不同版本之间的差异：

比较工作目录和暂存区之间的差异：

```bash
$ git diff
diff --git a/file.txt b/file.txt
index 7c8762d..cb1fc5c 100644
--- a/file.txt
+++ b/file.txt
@@ -1,2 +1,3 @@
 This is a sample file.
 Here is some new text.
+And here is even newer text.
```

比较暂存区和上次提交之间的差异：

```bash
git diff --cached
diff --git a/file.txt b/file.txt
index 7c8762d..cb1fc5c 100644
--- a/file.txt
+++ b/file.txt
@@ -1,2 +1,3 @@
 This is a sample file.
 Here is some new text.
+And here is even newer text.
```

比较两个分支之间的差异：

```bash
git diff branch1 branch2
diff --git a/file.txt b/file.txt
index 7c8762d..cb1fc5c 100644
--- a/file.txt
+++ b/file.txt
@@ -1,2 +1,3 @@
 This is a sample file.
 Here is some new text.
+And here is even newer text.
注意，输出中以加号表示新增的内容，以减号表示删除的内容，以及前面的@@ -1,2 +1,3 @@行表示差异的位置。
```

### git branch

`git branch` 命令用于列出、创建或删除分支。

**用法**

列出所有本地分支：

```bash
git branch
```

创建新的分支：

```bash
git branch <branch_name>
```

删除分支：

**示例**

以下示例演示如何使用 `git branch` 命令列出、创建或删除分支：

列出所有本地分支：

```bash
$ git branch
  master
* new_feature
  development
```

上面的输出表明当前在new_feature分支上，并且存在master、new_feature、development三个本地分支。

创建新的分支：

```bash git branch hotfix```

上面的命令创建了一个名为hotfix的新分支。

删除分支：

```bash git branch -d development```

上面的命令删除了名为development的分支。

**注意**

- 列出所有分支时，当前所在的分支会在其前面显示一个 `*` 号。
- 创建分支时，分支名称只能包含字母、数字、下划线和中划线。
- 删除分支时，如果分支还没有被合并到其他分支中，需要加上-D选项才能删除。

### git checkout

`git checkout` 命令用于切换分支或还原工作区中的文件。

**用法**

切换到另一个分支：

```bash
git checkout <branch_name>
```

创建并切换到新分支：

```bash
git checkout -b <branch_name>
```

还原工作区中的文件：

```bash
git checkout -- <file_name>
```

**示例**

以下示例演示如何使用 `git checkout` 命令切换分支或还原工作区中的文件：

切换到另一个分支：

```bash
$ git checkout feature
Switched to branch 'feature'
```

上面的命令将当前分支切换到名为 `feature` 的分支上。

创建并切换到新分支：

```bash
git checkout -b hotfix
Switched to a new branch 'hotfix'
```

上面的命令创建了一个名为 `hotfix` 的新分支，并切换到该分支上。

还原工作区中的文件：

```bash
git checkout -- index.html
```

上面的命令将index.html文件还原到最近一次提交的版本。

**注意**

- 创建并切换到新分支时，分支名称只能包含字母、数字、下划线和中划线。
- 还原文件时，如果文件被修改但未被添加到暂存区，则还原后的文件将回到最近一次提交的状态；如果文件已经被添加到暂存区，则还原后的文件将回到最近一次添加到- 暂存区的状态。

### git merge

`git merge` 命令用于将一个分支的修改合并到另一个分支上。

**用法**

合并指定分支到当前分支：

```bash
git merge <branch_name>
```

**示例**

以下示例演示如何使用 `git merge` 命令将一个分支的修改合并到当前分支上：

合并指定分支到当前分支：

```bash
$ git merge feature
Updating 3f8b46a..6abaeae
Fast-forward
 README.md | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)
```

上面的命令将 `feature` 分支的修改合并到当前分支上。

**注意**

- 在合并分支之前，需要先将本地仓库中的修改提交到当前分支。
- 如果合并时发生冲突，需要手动解决冲突后再提交合并结果。

### git rebase

`git rebase` 命令用于将一个分支的修改合并到另一个分支上，并保持提交历史的线性。

**用法**

将当前分支的修改在指定分支上重演：

```bash
git rebase <branch_name>
```

**示例**

以下示例演示如何使用 `git rebase` 命令将当前分支的修改在指定分支上重演：

将当前分支的修改在指定分支上重演：

```bash
$ git rebase master
First, rewinding head to replay your work on top of it...
Applying: Add new feature
```

上面的命令将当前分支的修改重演在 `master` 分支上，并保持提交历史的线性。

**注意**

- 在重演提交时，可能会产生冲突，需要手动解决冲突后再继续重演。
- 重演提交可能会改变提交的顺序和内容，因此需要谨慎使用git rebase命令。

### git pull

`git pull` 命令用于从远程仓库获取最新的提交，并将其合并到当前分支上。

**用法**

从远程仓库获取最新的提交，并将其合并到当前分支上：

```bash
git pull
```

**示例**

以下示例演示如何使用 `git pull` 命令从远程仓库获取最新的提交，并将其合并到当前分支上：

从远程仓库获取最新的提交，并将其合并到当前分支上：

```bash
$ git pull
remote: Counting objects: 5, done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 0), reused 0 (delta 0)
Unpacking objects: 100% (3/3), done.
From https://github.com/username/repo
   3f8b46a..6abaeae  master     -> origin/master
Updating 3f8b46a..6abaeae
Fast-forward
 README.md | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)
 ```

上面的命令从远程仓库获取最新的提交，并将其合并到当前分支上。

**注意**

- 在执行 `git pull` 命令之前，需要将本地仓库中的修改提交到当前分支。
- 如果在合并远程提交时发生冲突，需要手动解决冲突后再提交合并结果。

### git push

`git push` 命令用于将本地的提交推送到远程仓库。

**用法**

将当前分支的修改推送到远程仓库：

```bash
git push
```

**示例**

以下示例演示如何使用 `git push` 命令将当前分支的修改推送到远程仓库：

将当前分支的修改推送到远程仓库：

```bash
$ git push
Counting objects: 3, done.
Writing objects: 100% (3/3), 246 bytes | 0 bytes/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/username/repo.git
   74bc5f5..303567c  master -> master
```

上面的命令将当前分支的修改推送到远程仓库。

**注意**

- 在执行 `git push` 命令之前，需要将本地仓库中的修改提交到当前分支。
- 如果推送的分支在远程仓库中不存在，需要使用 `git push --set-upstream` 命令将分支推送到远程仓库并设置为跟踪分支。

### git clone

`git clone` 命令用于从远程仓库克隆一个副本到本地。

**用法**

克隆远程仓库到本地：

```bash
git clone [url]
```

**示例**

以下示例演示如何使用 `git clone` 命令从远程仓库克隆一个副本到本地：

克隆远程仓库到本地：

```bash
Copy code
$ git clone https://github.com/username/repo.git
Cloning into 'repo'...
remote: Counting objects: 100, done.
remote: Compressing objects: 100% (80/80), done.
remote: Total 100 (delta 20), reused 93 (delta 13), pack-reused 0
Receiving objects: 100% (100/100), 12.44 KiB | 0 bytes/s, done.
Resolving deltas: 100% (20/20), done.
```

上面的命令从远程仓库克隆了一个副本到本地。

**注意**

- `git clone` 命令会将远程仓库的所有分支都克隆到本地。
- 如果需要只克隆远程仓库的指定分支，可以使用-b选项指定分支名。例如：git clone -b branch_name [url]。
- 克隆完成后，需要进入克隆的目录中执行操作。

### git remote

`git remote` 命令用于管理与远程仓库的连接。

**用法**

列出已配置的远程仓库：

```bash
git remote [-v]
```

**示例**

以下示例演示如何使用 `git remote` 命令列出已配置的远程仓库：

列出已配置的远程仓库：

```bash
$ git remote
origin
```

上面的命令列出了当前仓库配置的远程仓库名。

列出已配置的远程仓库及其URL：

```bash
$ git remote -v
origin  https://github.com/username/repo.git (fetch)
origin  https://github.com/username/repo.git (push)
```

上面的命令列出了当前仓库配置的远程仓库名和URL。

**注意**

- `git remote` 命令可以查看当前仓库配置的远程仓库，也可以添加、删除、重命名远程仓库等操作。
- 在执行 `git push` 或 `git pull` 等命令时，需要指定要操作的远程仓库。可以使用 `git remote set-url` 命令修改远程仓库的URL。

### git remote add

`git remote add` 命令用于将一个新的远程仓库添加到当前仓库中。

**用法**

添加一个新的远程仓库：

```bash
git remote add <name> <url>
```

**示例**

以下示例演示如何使用 `git remote add` 命令将一个新的远程仓库添加到当前仓库中：

添加一个名为 `origin` 的远程仓库：

```bash
$ git remote add origin https://github.com/username/repo.git
```
上面的命令将名为 `origin` 的远程仓库添加到当前仓库中，并将其URL设置为https://github.com/username/repo.git。

**注意**

- 添加远程仓库后，需要使用 `git push` 等命令将本地仓库的内容推送到远程仓库中。
- 在执行 `git push` 或 `git pull` 等命令时，需要指定要操作的远程仓库。可以使用 `git remote set-url` 命令修改远程仓库的URL。

### git fetch

`git fetch` 命令用于从远程仓库下载最新的提交，并将其保存到本地仓库中，但不会合并到当前分支。

**用法**

从远程仓库下载最新的提交：

```bash
git fetch <remote>
```

**示例**

以下示例演示如何使用 `git fetch` 命令从远程仓库下载最新的提交：

下载最新的提交：

```bash
$ git fetch origin
```

上面的命令从名为 `origin` 的远程仓库下载最新的提交，并将其保存到本地仓库中。

**注意**

- `git fetch`命令不会自动合并下载的提交到当前分支，需要使用 `git merge` 命令或 `git rebase` 命令手动合并。
- 如果想要下载特定分支的提交，可以使用 `git fetch <remote> <branch>` 命令。
- 在执行 `git push` 或 `git pull` 等命令时，需要指定要操作的远程仓库。可以使用 `git remote set-url` 命令修改远程仓库的URL。

### git tag

`git tag` 命令用于对当前提交或历史提交打标签，标识出重要的里程碑或版本号。

**用法**

创建一个新的标签：

```bash
git tag <tagname>
```

**示例**

以下示例演示如何使用 `git tag` 命令对当前提交创建一个名为v1.0的标签：

创建一个新的标签：

```bash
$ git tag v1.0
```

上面的命令将对当前提交创建一个名为v1.0的标签。

**注意**

- `git tag` 命令只能对当前提交或历史提交打标签，不能对未提交的更改打标签。
- 如果要删除标签，可以使用 `git tag -d <tagname>` 命令。
- 可以使用 `git tag -a <tagname> -m <message>` 命令创建一个带注释的标签。
- 如果要将标签推送到远程仓库，可以使用 `git push --tags` 命令。

### git revert

`git revert` 命令用于撤销指定提交的更改，生成一个新的提交来记录这个操作。

**用法**

撤销指定提交的更改：

```bash
git revert <commit>
```

**示例**

以下示例演示如何使用 `git revert` 命令撤销指定提交的更改：

撤销最新的提交：

```bash
$ git revert HEAD
```

上面的命令将撤销最新的提交，并生成一个新的提交来记录这个操作。

**注意**

- `git revert` 命令会生成一个新的提交来记录撤销操作，因此不会更改历史提交记录。
- `git revert` 命令只能撤销指定提交的更改，而不能删除指定提交。
- 如果要删除指定提交，可以使用 `git rebase -i` 命令来交互式重写历史提交记录。
- 在执行 `git push` 命令推送更改之前，请确保已经正确地撤销了要撤销的提交。

### git stash

`git stash` 命令用于暂时保存当前工作目录的更改，以便在稍后的时间恢复。

**用法**

保存当前工作目录的更改：

```bash
git stash
```

将保存的更改恢复到工作目录：

```bash
git stash apply
```

**示例**

以下示例演示如何使用 `git stash` 命令保存当前工作目录的更改，并稍后将更改恢复到工作目录：

保存更改：

```bash
$ git stash
```

现在可以在不提交更改的情况下切换到其他分支，或者执行其他任务。

恢复更改：

```bash
$ git stash apply
```

**注意**

- `git stash` 命令会将更改保存到一个栈中，并生成一个唯一的名称来标识此次保存。可以使用 `git stash list` 命令查看所有保存的更改。
- `git stash apply` 命令将保存的更改恢复到工作目录，但不会从栈中删除它们。如果要删除保存的更改，请使用 `git stash drop` 命令。
- 如果需要在不同的分支上应用保存的更改，请使用 `git stash branch` 命令。
- 如果在使用 `git stash` 命令时指定了文件或目录，将只保存这些文件或目录的更改。

### git config

`git config` 命令用于设置和查看Git的配置选项。

**用法**

查看当前Git的配置：

```bash
git config --list
```

设置全局Git配置：

```bash
git config --global <key> <value>
```

设置仓库级别的Git配置：

```bash
git config <key> <value>
```

**示例**

以下示例演示如何使用 `git config` 命令设置和查看Git的配置选项：

查看全局Git配置：

```bash
$ git config --global --list
```

设置全局Git配置：

```bash
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```

查看仓库级别的Git配置：

```bash
$ git config --list
```

设置仓库级别的Git配置：

```bash
$ git config core.autocrlf true
```

**注意**

- Git有三个配置级别：系统、全局和仓库级别。如果在仓库中设置了配置，它会覆盖全局和系统级别的配置。
- 在使用git config命令时， `<key>` 是配置选项的名称， `<value>` 是配置选项的值。例如，user.name是用户名称的配置选项，John Doe是其值。
- 如果需要删除配置选项的值，请使用--unset选项，例如：git config --global --unset user.name。

### git rm

`git rm` 命令用于从工作树和版本库中删除文件。

**用法**

从工作树和版本库中删除指定的文件：

```bash
git rm <file>
```

从版本库中删除指定的文件，但在工作树中保留：

```bash
git rm --cached <file>
```

**示例**

以下示例演示如何使用 `git rm` 命令删除文件：

删除指定的文件：

```bash
$ git rm example.txt
```

从版本库中删除指定的文件，但在工作树中保留：

```bash
$ git rm --cached example.txt
```

**注意**

- `git rm` 命令将删除指定的文件，并将其从版本库中移除。如果需要将文件从版本库中移除，但在工作树中保留，请使用 `git rm --cached` 命令。
- 在使用 `git rm` 命令时， `<file>` 是要删除的文件名。

### git show

`git show` 命令用于显示指定的提交或标签对象的详细信息。

**用法**

显示最近的提交：

```bash
git show
```

显示指定提交的详细信息：

```bash
git show <commit>
```

显示指定标签的详细信息：

```bash
git show <tag>
```

**示例**

以下示例演示如何使用 `git show` 命令显示提交的详细信息：

显示最近的提交：

```bash
$ git show
```

显示指定提交的详细信息：

```bash
$ git show f2a3f1b
```

显示指定标签的详细信息：

```bash
$ git show v1.0
```

**注意**

- `git show` 命令将显示指定提交或标签对象的详细信息，包括提交说明、修改的文件以及修改的内容。
- `<commit>` 可以是提交的哈希值、分支名或者HEAD、HEAD^等引用。 `<tag>` 是标签名。

### git reset

`git reset` 命令用于撤销提交并且撤销更改。

**用法**

撤销最近的提交：

```bash
git reset HEAD~1
```

将最近的提交回滚到工作目录：

```bash
git reset --mixed HEAD~1
```

将最近的提交回滚到暂存区：

```bash
git reset --soft HEAD~1
```

将最近的提交完全删除：

```bash
git reset --hard HEAD~1
```

**示例**

以下示例演示如何使用 `git reset` 命令撤销最近的提交：

撤销最近的提交：

```bash
$ git reset HEAD~1
```

将最近的提交回滚到工作目录：

```bash
$ git reset --mixed HEAD~1
```

将最近的提交回滚到暂存区：

```bash
$ git reset --soft HEAD~1
```

将最近的提交完全删除：

```bash
$ git reset --hard HEAD~1
```

**注意**

- `git reset` 命令可以用来撤销提交并且撤销更改，但是注意，撤销更改可能会导致未保存的更改丢失，因此请谨慎使用。
- `git reset` 命令可以将最近的提交回滚到工作目录、暂存区或者完全删除。

### git cherry-pick

`git cherry-pick` 命令用于从其他分支中选择一个或多个提交，然后将其应用到当前分支上。

**用法**

将指定的提交应用到当前分支：

```bash
git cherry-pick <commit-hash>
```

将指定的一系列提交应用到当前分支：

```bash
git cherry-pick <start-commit>..<end-commit>
```

**示例**

以下示例演示如何使用 `git cherry-pick` 命令将其他分支的提交应用到当前分支上：

将一个提交应用到当前分支：

```bash
$ git cherry-pick abc123
```

将一系列提交应用到当前分支：

```bash
$ git cherry-pick def456..ghi789
```

**注意**

- `git cherry-pick` 命令可以从其他分支中选择一个或多个提交，并将其应用到当前分支上。
- 在将提交应用到当前分支之前，请确保您已经将当前分支切换到正确的分支。

### git bisect

`git bisect` 命令用于执行二分查找，快速定位导致问题的提交。

**用法**

启动二分查找，开始找到导致问题的提交：

```bash
git bisect start
```

将当前提交标记为出现问题的提交：

```bash
git bisect bad
```

将一个已知的没有问题的提交标记为好的提交：

```bash
git bisect good <good-commit>
```

告诉Git哪些提交是有问题的，哪些是没有问题的，直到找到导致问题的提交：

```bash
git bisect [good|bad]
```

退出二分查找并返回当前分支：

```bash
git bisect reset
```

**示例**

以下示例演示如何使用 `git bisect` 命令来快速定位导致问题的提交：

启动二分查找：

```bash
$ git bisect start
```

将当前提交标记为出现问题的提交：

```bash
$ git bisect bad
```

将一个已知的没有问题的提交标记为好的提交：

```bash
$ git bisect good v2.0
```

告诉Git哪些提交是有问题的，哪些是没有问题的，直到找到导致问题的提交：

```bash
$ git bisect [good|bad]
```

退出二分查找并返回当前分支：

```bash
$ git bisect reset
```

**注意**

- `git bisect` 命令使用二分查找来快速定位导致问题的提交。
- 在开始二分查找之前，请确保您已经标记了当前提交为出现问题的提交，并且已经标记了一个已知的没有问题的提交。
- 在告诉Git哪些提交是有问题的，哪些是没有问题的时，请确保您已经选择了一组提交，其中至少有一个是有问题的，至少有一个是没有问题的。

## 提交规范

### 提交类型

- feat（新功能）：表示增加了新的功能或特性。
- fix（修复）：表示修复了代码中的错误或缺陷。
- docs（文档）：表示更新了文档或注释。
- style（格式）：表示修改了代码格式，如空格、缩进等，没有修改代码逻辑。
- refactor（重构）：表示重构了代码，既没有新增功能，也没有修复错误。
- test（测试）：表示添加或修改了代码测试。
- chore（杂务）：表示对构建过程或辅助工具和库（如文档生成）的修改。
- 除了上述常见的类型外，还有一些可能根据具体情况使用的类型，比如：

- perf（性能）：表示改进了代码的性能。
- build（构建）：表示改变了构建系统或外部依赖项。
- ci（持续集成）：表示对持续集成（CI）配置的更改。
- revert（撤销）：表示撤销了先前的提交。
- merge（合并）：表示执行了分支合并操作。

## 常见操作

### 项目初始化git
