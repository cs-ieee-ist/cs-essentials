# Git - Basics

In this page we are going to initialize a repository.

## Start Repository

Typically to start a repository you can do two things:

* Turn a local directory into a Git repository
* Clone an existing Git repository (Github for example).

### Create a Repository from a Directory

First we need to go to the project's directory.

```bash
$ cd /home/user/my_project
```

To create a repository we just need to type the following:

```bash
$ git init
```

This created a new subdirectory named `.git`, this contains all of necessary files for the Git repository. See [Git Internals](https://git-scm.com/book/en/v2/Git-Internals-Plumbing-and-Porcelain#ch10-git-internals) for more information about exactly what files are contained in the .git directory you just created.

**Track a file**

Let's create a file just as an example

```bash
$ echo "Hello World" > hello.txt
```

To start version-controlling (track) the `hello.txt` file we use the `git add` command, followed by the `git commit` command:

```bash
$ git add hello.txt
$ git commit -m 'First commit'
```

Congrats you just created your first repository.

### Cloning an Existing Repository
If you want to get a copy of an existing Git repository, for example, [CS Essentials](https://github.com/cs-ieee-ist/cs-essentials), the command you need is `git clone <url>`. 

```bash
$ git clone https://github.com/cs-ieee-ist/cs-essentials.git
```

This creates a directory named `cs-essentials`, with a .git directory already inside, and all the files from the current version of the repository.

## Record Changes

Now that we have a new repository we can start making changes. Each file in the your working directory can be in one of two states:

* **Tracked** - files that were in the last snapshot
* **Untracked** - files in your working directory that were not in your last snapshot and are not in your staging area

As you edit files, Git sees them as modified, because you’ve changed them since your last commit. As you work, you selectively stage these modified files and then commit all those staged changes, and the cycle repeats.

### Current Status

To check to repository current status we use the `git status` command, for example:

```
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
nothing to commit, working directory clean
```

Imagine that you just added two new files to the project, for example a `README.md` and a `CONTRIBUTING.md`, and you run the status command after that:

```bash
$ echo 'My Project' > README.md
$ echo 'Contribute' > CONTRIBUTING.md
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Untracked files:
  (use "git add <file>..." to include in what will be committed)
		CONTRIBUTING.md
    README.md

nothing added to commit but untracked files present (use "git add" to track)
```

Note that the current state of our new file `README` is **Untracked** 

### Track File

In order to begin tracking a new file, we use the command `git add`, for example:

```bash
$ git add README.md
$ git add CONTRIBUTING.md
```

Now if we run the status command again the result will be different:

```bash
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   CONTRIBUTING.md
        new file:   README.md
```

Both files are now staged. But what happens when we modify one of them and run the status command after, for example the `CONTRIBUTING.md`:

```bash
 echo "- Introduction" >> CONTRIBUTING.md
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   CONTRIBUTING.md
        new file:   README.md

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   CONTRIBUTING.md
```

Now the `CONTRIBUTING.md` is staged and unstaged. This means that if we commit (more about that later) now, the version of CONTRIBUTING.md as it was when you last ran the git add command is how it will go into the commit, not the version of the file as it looks in your working directory now. So we just need to run `git add` again to stage the latest version of the file:

```bash
$ git add CONTRIBUTING.md
```

### Commit

Now that we have made all the changes we wanted and they are all staged, we can make our fist commit. To commit we use the `git commit` command, for example:

```bash
$ git commit -m "first commit"
```

The `-m` flag allows us to type the commit message inline, otherwise an Editor would show up.


You can read the [Book](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository) for more in depth information

