# GDB - Assembly

There are several occasions where you need to debug at the assembler level. It can be, for example, to understand how the compiler is generating your code and how that code is behaving. 

## Machine Language related commands

Before we start going through an example, we need to introduce some Assembly related commands:

| Command | Short version | Description |
| ------- | ------------- | ----------- |
| info line | | Displays the start and end position of the compiled code for the current line |
| info line number | | Display position in object code for a specified line |
| disassemble *start_address*  *end_address* | | Displays machine code for positions in object code specified, start and end memory values are optional |
| stepi | si | step assembly instruction |
| nexti | ni | next assembly instruction |
| x *address* | | Examine the contents of memory |
x/nfu *address* | | Examine the contents of memory with a specific format. n: number of display items to print (default is 1), f: specify the format for the output i - instr, s-string, x-hex, d-sdecimal, u-udecimal, o-octal, t-binary, a-addr, c-char ,f-float, u: specify the size of the data unit b-byte, h-halfword, w-word, g-giant (8 bytes)|

## Debug

**Program**

```c
#include <stdio.h>

int main() {
      int a = 1;
      a = a + 2;  
      printf("a: %d\n", a);
    return 0;
}
```

**Compile and open GDB**

```bash
~ $ gcc -g hello.c
~ $ gdb ./a.out
```

**Start execution**

```bash
(gdb) b main
(gdb) r
```

So far everything we have done is just the usual setup. Now we want to start analysing the machine code. You can find the Assembly code specific commands at the table above. To start let's display the start and end memory position of the current line. 

```bash
(gdb) info line
Line 3 of "hello.c" starts at address 0x8001149 <main> and ends at 0x8001155 <main+12>.
```

We can also display the compiled code that corresponds to the "main" function.

```bash
(gdb) disassemble
=> 0x0000000008001149 <+0>:     endbr64
   0x000000000800114d <+4>:     push   %rbp
   0x000000000800114e <+5>:     mov    %rsp,%rbp
   0x0000000008001151 <+8>:     sub    $0x10,%rsp
   0x0000000008001155 <+12>:    movl   $0x1,-0x4(%rbp)
   0x000000000800115c <+19>:    addl   $0x2,-0x4(%rbp)
   0x0000000008001160 <+23>:    mov    -0x4(%rbp),%eax
   0x0000000008001163 <+26>:    mov    %eax,%esi
   0x0000000008001165 <+28>:    lea    0xe98(%rip),%rdi        # 0x8002004
   0x000000000800116c <+35>:    mov    $0x0,%eax
   0x0000000008001171 <+40>:    callq  0x8001050 <printf@plt>
   0x0000000008001176 <+45>:    mov    $0x0,%eax
   0x000000000800117b <+50>:    leaveq
   0x000000000800117c <+51>:    retq
```

Now we can follow the execution one instruction at a time using the "stepi" command.

```bash
(gdb) stepi
(gdb) disassemble
   0x0000000008001149 <+0>:     endbr64
=> 0x000000000800114d <+4>:     push   %rbp
   0x000000000800114e <+5>:     mov    %rsp,%rbp
   0x0000000008001151 <+8>:     sub    $0x10,%rsp
   0x0000000008001155 <+12>:    movl   $0x1,-0x4(%rbp)
   0x000000000800115c <+19>:    addl   $0x2,-0x4(%rbp)
   0x0000000008001160 <+23>:    mov    -0x4(%rbp),%eax
   0x0000000008001163 <+26>:    mov    %eax,%esi
   0x0000000008001165 <+28>:    lea    0xe98(%rip),%rdi        # 0x8002004
   0x000000000800116c <+35>:    mov    $0x0,%eax
   0x0000000008001171 <+40>:    callq  0x8001050 <printf@plt>
   0x0000000008001176 <+45>:    mov    $0x0,%eax
   0x000000000800117b <+50>:    leaveq
   0x000000000800117c <+51>:    retq
```

To finish we can set a new breakpoint at the line where we add plus 2 to the "a" variable and watch the value at the memory address change.

```bash
(gdb) b 5
(gdb) c
(gdb) p &a
$3 = (int *) 0x7ffffffedebc
(gdb) x/1d 0x7ffffffedebc
0x7ffffffedebc: 1
(gdb) x/1d 0x7ffffffedebc
0x7ffffffedebc: 3
```


