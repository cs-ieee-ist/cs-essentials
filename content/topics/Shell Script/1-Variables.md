# Shell Script - Variables

## Define a variable

You can define a variable as follows:

```bash
x="Hello"
z="World"

# Print variables
echo ${x} ${z}!${a}
``` 

**Notice:**

* There must be no spaces around the attribution operator `=`
* To read the value inside the variable we need to use the symbol `$` before the variable's 
* To avoid any possible ambiguities is good practice to use braces `{}` around the variable's name
* Variables are typeless, and the shell by default treats them as strings
* The default value of an variable is an empty string `""`, for example, the variable `a` above

## Arithmetic

As noticed above the shell treats the variables, by default, as strings. But we can change that, for example, to do some arithmetic. To do that we use the following format

```bash
$((expression))
```

For example:

```bash
echo $((2 + 3))
```

## Scope

In many cases it might be usefull to define the variable outside the `.sh` file. Let's consider the following program (add.sh):

```bash
#!/bin/sh
echo $ONE + $TWO = $(($ONE + $TWO))
```

These program will read two variables called `ONE`, and `TWO` and  will print the addition between the two. To define the two variables outside the program we use the command `export`.

```shell
$ ONE=4
$ TWO=6
$ export ONE
$ export TWO
$ ./add.sh
4 + 6 = 10
```

## Special Variables

The shell has a set of variables with its own purpose and some of them you cant reassign. They contain useful information, that you can use to know more about environment in which the script is running.

| Variable | Description |
| ------- | ----------- |
| $0  | Basename of the program |
| $1 .. $9 | Arguments with which a script was invoked |
| $* | All the arguments with which a script was invoked |
| $@ | All the arguments with which a script was invoked, but each argument is single quoted |
| $# | Number of arguments supplied to a script |
| $? | The exit status of the last command executed |
| $$ | The process number of the current shell |
| $! | The process number of the last background command |


**Useful links:**

* [Arithmetic Operations](https://bash.cyberciti.biz/guide/Perform_arithmetic_operations)
* [Variables](https://www.shellscript.sh/variables1.html)