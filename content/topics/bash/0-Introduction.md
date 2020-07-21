# Bash - Introduction

A command line is a text interface to your computer, you may find it on multiple occasions referred to as the shell, terminal, console, prompt. When looking for the first time it can look complex and confusing. Yet it is a fundamental tool the user to be more productive and even perform actions that the GUI don't offer.

Bash is a POSIX-compliant shell that allows the user to perform a set of actions in his system. Bash is like all other Unix shells, and it supports filename globbing (wildcard matching), piping, here documents, command substitution, variables, and control structures for condition-testing and iteration. Bash is also command language, but that is a whole different topic.

In this introduction we will touch in some basic topics that allow you to perform essential tasks like changing directory (folder), creating directories and manipulate files.

## Basics

First thing first, we need to open a terminal, most Linux systems use the same default keyboard shortcut: Ctrl-Alt-T.

Now that you have the terminal open we can start understanding what we are seeing.
You should have something like this:

```bash
username@computer:~ $
```

Before the ":" we have the computer name and username. After the ":" we have two symbols the "~" and "$". The "~" is your current directory (folder), the tilde is a special character that corresponds to your HOME directory, more about that soon. Finally, the "$" indicates the beginning of the prompt where you can write the commands


### Print current directory

Let's write our first command. Write `pwd` and press ENTER.

```bash
~ $ pwd
/home/YOUR_USERNAME
```

The pwd prints the name of current/working directory. This should comply with what is in your prompt. Although, as you might have seen you have ~ and not /home/YOUR_USERNAME, that's because they are the same thing. The ~ is a symbol for the user home directory which is /home/YOUR_USERNAME.

### Understand a command

One very useful command is the "man" command which is the system's manual pager. This is very useful to understand what a program, utility or function can do. Whenever you want to know more about a certain command just write "man THE_COMMAND", for example:

```bash
~ $ man pwd
```

The result will be a page with some information about the "pwd" and what it can do. To leave the page just press the key "q".

### What a directory has inside

To list the content inside a directory we use the "ls" command. To use it we just need to write the directory path as an argument. But, when we just want to list the content inside the current directory we can omit the path and write just the command name ls, example: 

```bash
~ $ ls
~ $ ls /home
```

If we add the flag "-a" to the command, example:

```bash
~ $ ls -a
```

Know we can see files that start with ".", and that usually are ignored. Including two special directories "." and "..", the "." corresponds always to the current directory, and the ".." is the parent of the current directory, i.e. if the current directory is "/home/user" then ".." is the "/home" directory.

### Change directory

To change the current directory (folder) we use the "cd" command. To use it we pass as an argument the path of the directory we want to go. If we don't give any path it will go to the HOME directory. 

```bash
~ $ cd /
/ $ ls
/ $ cd ~
~ $
```

We can also use the special folder "." and "..", although the "." will not do anything:

```bash
~ $ cd .
~ $ cd ..
/home $
```

### Create Folders

To create a new directory (folder) we use the "mkdir" command. 

```bash
~ $ mkdir /tmp/cs-essentials
~ $ cd /tmp/cs-essentials
/tmp/cs-essentials $
```

### Create File

To create a new file we can use a lot of commands. We will show only two ways of doing it. The first is redirecting the output of a command to a file. To know more about how this works you can read the IO Redirection page. 

```bash
/tmp/cs-essentials $ echo "Hello" > file1.txt
/tmp/cs-essentials $ ls > file2.txt
```

The echo command usually would display "Hello" on the terminal, and the ls would print the content inside the current directory. But, we indicated with the ">" symbol that we wanted the result to be written at "file1.txt" and "file2.txt".

Another way to create a file is by using the "touch" command. This command basically updates the access and modification times of each FILE to the current time. Although if the FILE argument does not exist it is created empty, example:

```bash
/tmp/cs-essentials $ touch file3.txt
```

### Read file

To read a file with the terminal we use the "cat" command. This command will concatenate all the files given as arguments and print them on the terminal.

```bash
/tmp/cs-essentials $ cat file1.txt
```

### Move file

To move a file from a directory to another we use the "mv" command. This command receives two arguments, the source file path and the destination file path, the path can be relative or absolute, example: 

```bash
/tmp/cs-essentials $ mv file1.txt /tmp/file1.txt
/tmp/cs-essentials $ cd /tmp
/tmp $ ls
/tmp $ cat file1.txt
```

### Rename file

To rename a file we also use the "mv" command.

```bash
/tmp $ mv file1.txt file111.txt
/tmp $ ls
/tmp $ cat file111.txt
```

### Delete file/directory

Before we introduce the "rm" command we would like to give a warning. Unlike GUI (graphical user interfaces), the "rm" command doesn't move files to a folder called "Trash". It will delete the files/directories completely from your system. Be very careful using this command. Always make sure that the parameters you use with "rm" command are correct. With some practice, it will become easier to use it but at the beginning, we recommend that you use the flag '-i' which will prompt you to confirm the action, example:

```bash
/tmp $ rm -i file1.txt
```

To delete a file we use the "rm" command. This command receives the path, absolute or relative, of the file we want to delete.

```bash
/tmp $ rm -i file1.txt
```

To delete a directory we need to add the flag "-r", which stands for *recursive*. With this flag, the "rm" command will remove directories and their contents recursively.

```bash
/tmp $ rm -ri cs-essentials
```
