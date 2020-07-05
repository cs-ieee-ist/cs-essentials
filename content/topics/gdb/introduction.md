# GDB - Introduction

GDB (GNU Debugger) is a debugger that, like many others, allows you to watch in depth what a program is doing while in execution.
According to GDB's documentation, it can do four main kinds of things to help you catch bugs in the act:
* Start your program, specifying anything that might affect its behaviour.
* Make your program stop on specified conditions.
* Examine what has happened, when your program has stopped.
* Change things in your program, so you can experiment with correcting the effects of one bug and go on to learn about another.

Let's start using GDB with a very simple program:

### Program

```c
#include <stdio.h>

int main() {
    int a = 1;
    a = a + 2;  
    printf("a: %d\n", a);
    return 0;
}
```

### Compile and run:

To compile we will use GCC, but to debug using GDB we need to add the flag "-g". This flag enables the use of extra debugging information that only GDB can use. 

```bash
~ $ gcc -g hello.c
~ $ ./a.out
a: 3
```

### GDB

```bash
~ $ gdb ./a.out
(gdb) 
```

**Running the program**

Now that we have GDB open we can start running the program using the "run" command.

```bash
(gdb) run
a: 3
```

**Breakpoints**

Breakpoints are places in code, for example, a line in the code, that you can specify and whenever the computer reaches a breakpoint, it pauses before executing the specified line and shows the debugger prompt. To create a breakpoint we use the "break" command. 

```bash
(gdb) break hello.c:5
```

**Analyse Data**

Now that we have a breakpoint we can run the program again and start analysing the data.

```bash
(gdb) run
Breakpoint 1, main () at hello.c:5
5               a = a + 2;
```

To see the current value stored at the variable "a" we use the "print" command, as follows:

```bash
(gdb) print a
$1 = 1;
```

Remember that the current line has not executed yet. So if we want to execute the current line and stop at the next one we run the "next" command.

```bash
(gdb) next
6    printf("a: %d\n", a);
```

If we print the variable "a" again we should see a different value.

```bash
(gdb) print a
$2 = 3
```

Everything worked as expected, now we can continue the execution using the "continue" command, which will resume the execution of the program until a breakpoint is hit.

```bash
(gdb) continue
Continuing.
a: 3
```