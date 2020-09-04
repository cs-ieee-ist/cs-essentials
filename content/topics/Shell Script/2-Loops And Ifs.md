# Loops and Ifs - Shell Script

## Loops

Bash supports several types of loops, e.g., for, while e until.

### `for` loop

The for loops will iterate until through a set of values in a list.

```bash
for i in $( ls )
do
  echo item: $i
done
```

In this case, the list is the result of executing the command `ls`, which returns the list of files and directories in the current directory. And the for loop iterates over all results printing each step using `echo`. 

### `while` loop

The while loop runs until the expression is false

```bash
#!/bin/bash 
I=0
while [ $I -lt 10 ]
do
  echo The counter is $I
  let I=I+1 
done
```

In this case, we have a variable `I` that starts with the value 0 and a while loop that runs until the expression `I < 10` is false. 

## Case

```bash
do
  case $VAR in
  val1)
    echo "case val1"
    ;;
  val2)
    echo "case val2"
    ;;
  *)
  echo "Ups default result"
  ;;
esac
```

## Ifs

```bash
if [ $VAR == "hello" ]
then
  echo hi
elif [ $VAR == "hello there" ]
then
  echo General Kenobi
else
  echo ...
fi
```

**Useful Links:**

* [Loops](https://www.shellscript.sh/loops.html)
* [Case](https://www.shellscript.sh/case.html)
* [Ifs](https://ryanstutorials.net/bash-scripting-tutorial/bash-if-statements.php)