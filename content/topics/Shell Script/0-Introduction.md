# Shell Script - Introduction

## What is a Shell Script

A shell script is a file containing a series of commands. When we execute the file the shell will run the commands specified in the file which allows us to automate a lot of task, simple or complex. Over the years many shells have been develop, like: Bourne shell (sh), Bourne Again shell
(bash), Korn shell (ksh), and C shell (csh) each with it's own scripting language.  The shell we are going to use is the Bourne Again shell or Bash.

## Basic Script file

Create a file named `hello.sh` (the .sh extension is just convention and therefore optional), in this example we are going to use Vim but you can the text editor you like.

```shell
$ vim hello.sh
```

Copy the following text to your new file:

```bash
#!/bin/bash

echo "Hello World"
```

The first line of the file is a very important one, because it will tell the shell what program it should use to interpret the script. In this case it will use bash, located at `/bin/bash`.

The last line will run the `echo` command which will print `Hello World` in the terminal.

**Run script**

To run the script we need to give us permission the execute the file. To do that we have to run the following command:

```shell
$ chmod +x hello.sh
```

Now we can run the script:

```shell
./hello.sh
Hello World
```

