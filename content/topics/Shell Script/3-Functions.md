# Functions - Shell Script

What is called a function in shell might be called in some languages procedures, and functions.

## Simple Function

```bash
#!/bin/sh

# Definition
hello () { 
  echo "Hello World!"
}

# Invokation
hello
```

**Run file:**

```shell
$ ./example.sh
Hello World!
```

## Function with parameters

We can also define a function with parameters. The parameters work like the parameters of the shell file, $1, $2 and so on.

```bash 
#!/bin/sh

add () {
   echo $1 + $2 = $(($1 + $2))
}

add 2 4
```

**Run file:**

```shell
$ ./example.sh
2 + 4 = 6
```

# Function with Returning Values

Functions can return a value in one of four different ways:

* Change the value of variables
* Use the exit command to end the shell script
* Use the return command to end the function, and return the value
* echo output to stdout, which will be caught by the caller

### Change Variables

Like in Javascript (non strict mode) there is no scope of variables, with the exception of the parameters ($1, $2, $@, etc). This allow us to change and define variables inside the function wich can be usefull sometimes.

```bash
#!/bin/bash

hello () {
	msg='Hello World!'
}

hello
echo $msg
```

**Run file:**

```shell
$ ./example.sh
Hello World
```

### Return command

The return command can return a code (number)

```bash
#!/bin/bash

hello() {
  if [ $1 == "world" ]
  then
    return 1
  elif [ $1 == "there" ]
  then
    return 2
  fi
  return 0
}

hello there
HELLO_RETURN=$?
if [ $HELLO_RETURN == 1 ]
then
  echo hi
elif [ $HELLO_RETURN == 2 ]
then
  echo General Kenoby
else
  echo ...
fi
```

**Run file:**

```shell
$ ./example.sh
General Kenoby
```

**Useful Links:**

* [Functions - shellscript.sh](https://www.shellscript.sh/functions.html)
* [Functions - tutorialspoint.com](https://www.tutorialspoint.com/unix/unix-shell-functions.htm)