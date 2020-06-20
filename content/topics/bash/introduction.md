# Bash - Introduction

A command line is a text interface to your computer, you may find it in multiple occasions referred to as the shell, terminal, console, prompt. When looking for the first time it can look complex and confusing. Yet it is a fundamental tool the user to be more productiva and even perform actions that the GUI don't offer.

Bash is a POSIX-compliant shell that that allows the user to perform a set of action in is system. Bash is like all other Unix shells, and it supports filename globbing (wildcard matching), piping, here documents, command substitution, variables, and control structures for condition-testing and iteration. Bash is also command language, but that is a whole different topic.

In this introduction we will touch in some basic topics that allow you to perform essential tasks like: changing directory (folder), creating directories and manipulate files.

## Basics

First thing first, we need to open a terminal, most Linux systems use the same default keyboard shortcut: Ctrl-Alt-T.

Now that we have our terminal open lets understand what you are seeing.
You should have something like this:

```bash
username@computer:~ $
```

Before the ":" we have the computer name and username. After the ":" we have two symbols the "~" and "$". The "~" is your current directory (folder), the tilde is a special character that corresponds to your HOME directory, more about that soon. Finally, the "$" indicates the beginning of the prompt where you can write the commands


### Print current directory

Lets write our first command. Write `pwd` and press ENTER.

```bash
~ $ pwd
/home/YOUR_USERNAME
```

The pwd prints the name of current/working directory. This should comply with what is in your prompt. Although, as you might have seen you have ~ and not /home/YOUR_USERNAME well thats because they are the same thing. The ~ is a symbol for the user home directory which is /home/YOUR_USERNAME.

### Understand a command

One very usefull command is the "man" is the system's manual pager. Which is very usefull to understand what a program, utility or function can do. Whenever you want to know more about a certain command just write "man THE_COMMAND", for example:

```bash
~ $ man pwd
```

Wich will give a page with some information about the "pwd" and what it can do. To leave the page just press the key "q".

### What a directory has inside

```bash
~ $ ls
```


### Change directory


```bash
~ $ cd /
/ $ ls
/ $ cd ~
~ $
```

### Create Folders

```bash
~ $ mkdir /tmp/cs-essentials
~ $ cd /tmp/cs-essentials
/tmp/cs-essentials $
```

### Create File

```bash
/tmp/cs-essentials $ echo > file1.txt
```

### Read file

```bash
/tmp/cs-essentials $ cat file1.txt
```

### Move file

```bash
/tmp/cs-essentials $ mv file1.txt /tmp/file1.txt
/tmp/cs-essentials $ cd /tmp
/tmp $ ls
/tmp $ cat file1.txt
```

### Delete file/directory

Before we introduce the "rm" command we would like to give a warning. Unlike GUI (graphical user interfaces), the "rm" command doesn't move files to a folder called "Trash". It will delete the files/directories completly from your system. Be very careful using this command. Always make sure that the parameters you use with "rm" command are correct. With some practice it will become easier to use it but at the beginning we recomend that you use the flag '-i' which will prompt you to confirm the action, example:

```bash
/tmp $ rm -i file1.txt
```



```bash
/tmp $ rm file1.txt
```

```bash
/tmp $ rm -r cs-essentials
```
