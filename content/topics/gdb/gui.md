# GDB - GUI

There are plenty of Front Ends you can use to debug your code. Here we will only talk about TUI which is built-in GDB. To see more options you can check out this [website](https://sourceware.org/gdb/wiki/GDB%20Front%20Ends).

## TUI

The GDB Text User Interface (TUI) is a terminal interface which can be used to show the source file, the assembly output, the program registers and GDB commands in separate text windows. The TUI mode is enabled by default when you invoke GDB as `gdb -tui`. You can also switch in and out of TUI mode using `tui enable` or the keyboard shortcuts `CTRL+x CTRL+a`. 

TUI behaves the same way as the normal mode. Although it has some specific commands that can be useful

## TUI specific commands

| Command | Description |
| ------- | ---------- |
| layout next | Display the next layout. |
|layout prev | Display the previous layout. |
|layout src |Display the source window only. |
|layout asm |Display the assembly window only. |
|layout split |Display the source and assembly window. |
|layout regs |Display the register window together with the source or assembly window. |
|focus next, prev, src, asm, regs, split | Set the focus to the named window. This command allows changing the active window so that scrolling keys can be affected by another window. |
|refresh |Refresh the screen. This is similar to using C-L key. |
|update |Update the source window and the current execution point. |
|winheight name +count | Increase the height of the window name by count lines. |
| winheight name -count | Decrease the height of the window name by count lines. |

## Example

Hello World program:

```c
#include <stdio.h>

int main() {
    int a = 0;
    a = 2;  
    printf("%s\n", "Hello World");
    return 0;
}
```

Compile and run:

```bash
~ $ gcc -g hello.c
~ $ ./a.out
Hello World
```

Start GDB:

```bash
~ $ gdb -tui ./a.out
```

You will see that you have the same GDB layout with the prompt but now you also have a big rectangle at the top. This is where all the information will be shown, for example, the source code or the executable disassembled. To show the source code you can run the following command:

```bash
(gdb) layout src
```

Let's create a breakpoint at lines 4, 5 and 6:

```bash
(gdb) b hello.c:4
(gdb) b hello.c:5
(gdb) b hello.c:6
```

Now at the source code will appear b+ in lines 4, 5 and 6.

Run:

```bash
(gdb) run
(gdb) p a
(gdb) c
(gdb) p a
(gdb) c
```

Everything works as expected, and now we have a graphical interface that helps us making the debug more visual. Let's continue the execution:

```bash
(gdb) layout next
```

This will show the assembly code of our example from the current breakpoint. This can be a little bit overwhelming, but if you look carefully to the line after the current you will see that the program will call the "puts" function `callq  0x8001050 <puts@plt>x,1)`. Which makes sense since our current breakpoint is supposed to be the "printf" and if we run `layout src` we can confirm that.

