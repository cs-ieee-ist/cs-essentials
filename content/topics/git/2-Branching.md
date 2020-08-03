# Git - Branching

A branch is a line of development which you can use to do some work without messing with the mainline, for example, the master branch. You can think of a branch as a new working directory that diverges from the original directory when you create it. Or, if you like it better, you can think of a branch as a pointer for a commit.

You can read the [Book](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) for more in-depth information


## Start project

Let's create a new project 

```shell
$ git init
$ echo "New Project" > README.md
$ git add *
$ git commit -m "first commit"
```

## Create a Branch

To create a branch we user the `git branch <branch-name>` command:

```shell
$ git branch contribute
```

Well done, you just created your first branch. If we run the `git branch` command the new branch will appear:

```shell
$ git branch
* master
  contribute
```

But, we are still at the `master` branch. To switch to the new branch we need to use the `git checkout <branch-name>`:

```shell
$ git checkout contribute
$ git branch
  master
* contribute
```

Now new commits made to the `contribute` won't be in the `master` branch, at least for now.

### Make a new commit

Let's add a new `CONTRIBUTING.md` file.

```shell
$ echo "Contribute" > CONTRIBUTING.md
$ git add *
$ git commit -m "add Contributing.md"
```

## Merge

So, we have made all the changes we wanted without interfering with the work being made at the `master`. But now we want to merge these new changes. To do that we use the `git merge <branch-name>` command, this command will merge the histories of the current branch and the branch specified at the command and save it in the current branch's history. So, we are going to switch to the `master` and then merge the `contribute`.

```shell
$ git checkout master
$ git merge contribute
```

You can read the [Book](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) for more in-depth information