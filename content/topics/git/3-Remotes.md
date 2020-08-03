# Git - Remotes

Remote repositories are versions of your project that are hosted in a server connected to the Internet or elsewhere. Project collaboration usually involves managing these remote repositories and pushing and pulling data to and from them when you need to share work. 

## List Remotes

To see which remote servers you have configured, we run the `git remote` command. If your repository was cloned then you should at least see `origin`, which is the default name Git gives to the server you cloned from:

```shell
$ git clone https://github.com/cs-ieee-ist/cs-essentials.git
Cloning into 'cs-essentials'...
remote: Enumerating objects: 18, done.
remote: Counting objects: 100% (18/18), done.
remote: Compressing objects: 100% (14/14), done.
remote: Total 1661 (delta 7), reused 14 (delta 3), pack-reused 1643
Receiving objects: 100% (1661/1661), 3.35 MiB | 3.42 MiB/s, done.
Resolving deltas: 100% (862/862), done.
$ cd cs-essentials
$ git remote
origin
```

To show the URLs, for reading and writing, that Git has stored for the shortname we add the flag `-v`:

```shell
$ git remote -v
origin  https://github.com/cs-ieee-ist/cs-essentials.git (fetch)
origin  https://github.com/cs-ieee-ist/cs-essentials.git (push)
```

## Add Remote

To add a new remote repository we run `git remote add <shortname> <url>`:

```shell
$ git remote add new-remote https://github.com/cs-ieee-ist/cs-essentials.git
$ git remote -v
new-remote      https://github.com/cs-ieee-ist/cs-essentials.git (fetch)
new-remote      https://github.com/cs-ieee-ist/cs-essentials.git (push)
origin  https://github.com/cs-ieee-ist/cs-essentials.git (fetch)
origin  https://github.com/cs-ieee-ist/cs-essentials.git (push)
```

## Fetch and Pull from a Remote

To fetch all the information in a remote we use the `git fetch new-remote` command:

```shell
From https://github.com/cs-ieee-ist/cs-essentials
 * [new branch]      bash       -> new-remote/bash
 * [new branch]      gdb        -> new-remote/gdb
 * [new branch]      gh-pages   -> new-remote/gh-pages
 * [new branch]      git        -> new-remote/git
 * [new branch]      master     -> new-remote/master
 * [new branch]      valgrind   -> new-remote/valgrind
 * [new branch]      vim        -> new-remote/vim
```

This command will pull down all the data from the remote, after running the command we will have references to all the branches from that remote. After fetching the data we can now modify our project to do that we use the `git merge <shortname>/<branch>` command:

```shell
$ git merge new-remote/master
```

If the remote branch, you want to fetch and merge, is the one the current branch is set up to track, you can simply use the `git pull` command. This will automatically fetch and then merge the remote branch into your current branch. For example, by default, the git clone command automatically sets up your local master branch to track the remote master branch on the server you cloned from.

```
$ git pull
```

## Push to a Remote

To push the changes upstream to a remote we use the `git push <remote> <branch>` command. If you want to push your master branch to your origin server,  (again, cloning generally sets up both of those names for you automatically), then you can run this to push any commits you've done back up to the server:

```shell
$ git push origin master
```

Just like the `git pull` if you want to push to a remote branch that is the one that the current branch is set up to track, you just need to use the `git push` command:

```shell
$ git push
```

**Attention**

This commands only work when you have write or read permissions.


## Remove Remote

To a remove a remote we can either use the `git remote remove` command:

```shell
$ git remote remove new-remote
$ git remote
origin
``` 

You can read the [Book](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes) for more in-depth information
