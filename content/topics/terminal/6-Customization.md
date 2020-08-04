# Terminal (Bash) - Customization (.bashrc)

Every time you create a new terminal the code at the file .bashrc is executed. This allows us to run commands add or change variables and do other types of things.

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

Aliases allow you to create or override commands so you don't need to type a long sequence of characters. This is very useful and allows you to save a lot of time.

For example, if you want to show the directory files (ls) including the files or directories that start with a '.'.
```bash
alias la='ls -a'
```

You can create all kinds of alias, you just need to make sure you don't use a name already in use. Another good example of use is when you have a project directory and you don't want to remember exactly the location. In that case, you just create an alias that uses the cd command:
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
Make sure you change the one being executed, in the previous example if the prompt shows up with colours then is the first one (inside the if) you need to change.

Before changing the PS1 variable make sure you create a backup variable with the default value, example: 
```bash
PS1BACKUP='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
```

### Special characters

As you might have seen there is a lot of weird characters in the PS1. So let's start by understanding what each one does.

| Character | Description |
| ------ | ----------- |
|\a |A bell character |
|\d |The date, in "Weekday Month Date" format (e.g., "Tue May 26") |
|\D{format} |The format is passed to strftime(3) and the result is inserted into the prompt string; an empty format results in locale-specific time representation. The braces are required |
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

### Text appearence

You can also change the text format, colour and background. The way it works is simple but it makes the string very confusing for anyone that doesn't know what is happening. For example, the previous example:

```bash
${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ 
```

It's easier to read if we split it into blocks, like this:

```bash
${debian_chroot:+($debian_chroot)}
\[\033[01;32m\]\u@\h
\[\033[00m\]:
\[\033[01;34m\]\w
\[\033[00m\]\$ 
```

Let's take a look at the second line. What is happening is that we are defining the text "\u@\h" to be bold and green.
The text format is specified between the \\[ and \\] characters. Inside, we must have either \033[ or \e[ to indicate that the values refer to colour information. Now we can have values for the text format, colour and background colour if none is given the default value is used. At the end of the tag, we must have an m to indicate the end of the colour information.

Structure example:
```bash
\[\033[TEXT_FORMAT;COLOR;BACK_COLORm\]
```

Example:
```bash
\[\033[01;33m\]
```

### Tables with values

| Value | Text Format |
| ------ | ----------- |
| 0 | Normal Text | 
| 1 | Bold or Light Text |
| 2 | Dim Text |
| 4 | Underlined Text |
| 5 | Blinking Text |
| 7 | Reversed Text |
| 8 | Hidden Text |

| Value | Color |
| ------ | ----------- |
| 30 | Black |
| 31 | Red |
| 32 | Green |
| 33 | Yellow |
| 34 | Blue |
| 35 | Purple |
| 36 | Cyan |
| 37 | White |

| Value | Background Color |
| ------ | ----------- |
| 40 | Black background |
| 41 | Red background |
| 42 | Green background |
| 43 | Yellow background |
| 44 | Blue background |
| 45 | Purple background |
| 46 | Cyan background |
| 47 | White background |

