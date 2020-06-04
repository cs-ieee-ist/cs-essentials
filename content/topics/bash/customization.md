# Bash - Customization (.bashrc)

Everytime you create a new terminal the code at the file .bashrc is executed. This allows us to run commands add or change variables and do other types of things.

## PATH

PATH is an environment variable. Used by Unix-like operating systems, DOS, OS/2, and even Microsoft Windows. It is used to specify a set of directories where executable programs are located.

To add a directory to the path you just need to redefine the variable with a new value:
```
PATH=$PATH:<directory_path>
```
or
```
PATH=<directory_path>:$PATH
```

Example, imagine you just downloaded NodeJS and moved it to the "/opt" directory. Then to add NodeJS executables to the PATH, and assuming that those executables are inside the "bin" directory, you just need to add the following line to your .bashrc
```
PATH=/opt/nodejs/bin:$PATH
```

## Aliases

Aliases allows you to create or override commands so you don't need to type a long sequence o characters. This is very useful and allows you to save a lot of time.

For example, if you want to show the directory files (ls) including the files or directories that start with a '.'.
```bash
alias la='ls -a'
```

You can create all kinds of alias, you just need to make sure you don't use a name already in use. Other good example of use is when you have a project directory and you dont want to remember exactly the location. In that case you just create an alias that uses the cd command:
```bash
alias project1='cd ~/projects/project1'
```

### Usefull aliases

| alias | Description |
| ------ | ----------- |
| alias ls="ls -CF" |  Display files in columns and with a file type indicator |
| alias lsl="ls -lhFA | less" | View long directories |
| alias ..="cd .." | 
| alias fhere="find . -name " | find files in current directory |
| alias update="sudo apt update && sudo apt upgrade -y" | |
| alias df="df -Tha --total" | Show disk usage |
| alias free="free -mt" | Free comand with human-readable units |
| alias ps="ps auxf" | Process table |


## Prompt

The Bash prompt is stored in the PS1 variable. So to change how the prompt is presented you need to change this variable. Usually there is more than one assign to the variable, for example:

```bash
if [ "$color_prompt" = yes ]; then
        PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
else
    PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w\$ '
fi
```
Make sure you change the one being executed, in the previous example if the prompt shows up with colors then is the first one (inside the if) you need to change.

Before changing the PS1 variable make sure you create a backup variable with the default value, example: 
```bash
PS1BACKUP='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
```

### Special characters

As you might have seen there is a lot of weird characters in your PS1. So lets start by understanding what each one does.

| Character | Description |
| ------ | ----------- |
|\a |A bell character |
|\d |The date, in "Weekday Month Date" format (e.g., "Tue May 26") |
|\D{format} |The format is passed to strftime(3) and the result is inserted into the prompt string; an empty format results in a locale-specific time representation. The braces are required |
|\e |An escape character |
|\h |The hostname, up to the first '.' |
|\H |The hostname |
|\j |The number of jobs currently managed by the shell |
|\l |The basename of the shell’s terminal device name |
|\n |A newline |
|\s |The name of the shell, the basename of $0 (the portion following the final slash) |
|\t |The time, in 24-hour HH:MM:SS format |
|\A |The time, in 24-hour HH:MM format |
|\u |The username of the current user |
|\v |The version of Bash (e.g., 2.00) |
|\w |The current working directory, with $HOME abbreviated with a tilde (uses the $PROMPT_DIRTRIM variable) |
|\nnn |The character whose ASCII code is the octal value nnn |
|\\ |A backslash |
|\[ |Begin a sequence of non-printing characters. This could be used to embed a terminal control sequence into the prompt |
|\] |End a sequence of non-printing characters 
[**Complete List**](https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html#Controlling-the-Prompt)





