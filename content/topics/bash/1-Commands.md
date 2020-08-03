# Bash - Commands


What is a command

1. **An executable program** like all those files we saw in /usr/bin. Within this category, programs can be compiled binaries such as programs written in C and C++, or programs written in scripting languages such as the shell, Perl, Python, Ruby, etc.
2. **A command built into the shell itself.** bash provides many commands internally called shell builtins. The cd command, for example, is a shell builtin.
3. **A shell function.** These are miniature shell scripts incorporated into the environment. We will cover configuring the environment and writing shell functions in later lessons, but for now, just be aware that they exist.
4. **An alias.** Commands that you can define yourselves, built from other commands. This will be covered in a later lesson.

## Identifying Commands

### type

The type command is a shell builtin that displays the kind of command the shell will execute, given a particular command name, example:
```shell
$ type ls
```

where "command" is the name of the command you want to examine.

```shell
$ type type
type is a shell builtin

$ type ls
ls is aliased to 'ls --color=tty'

$ type cp
cp is /bin/cp
```

### which

Sometimes there is more than one version of an executable program installed on a system. While this is not very common on desktop systems, it's not unusual on large servers. To determine the exact location of a given executable, the which command is used:

```shell
$ which ls
/bin/ls
```

## Understanding Commands

### help

bash has a built-in help facility available for each of the shell builtins. To use it, type “help” followed by the name of the shell builtin. Optionally, you may add the -m option to change the format of the output. For example:

### man

Most executable programs intended for command-line use provide a formal piece of documentation called a manual or man page. A special paging program called man is used to view them, for example:

```shell
$ man ls
```

where "program" is the name of the command to view. Man pages vary somewhat in format but generally contain a title, a synopsis of the command's syntax, a description of the command's purpose, and a listing and description of each of the command's options. Man pages, however, do not usually include examples and are intended as a reference, not a tutorial. As an example, let's try viewing the man page for the ls command:

## List of useful commands

| Command | Description |
| ------- | ----------- |
|  |  |