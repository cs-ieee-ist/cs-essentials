# GDB - Debug with core files

A Core dump is a file containing a process's address space (memory) when the process terminates unexpectedly. This file is very usefull for debugging, for example, segmentation faults.

## Generate a Core Dump file

Most systems, by default, have the core dump file generation disable. We can check by running the following command:

```bash
~ $ ulimit -c
0
```

To enable the creation we need to run the following commands:

```bash
~ $ ulimit -c unlimited
```

## The program

To examplify how you can use the Core Dump and the GDB to debug we will use this program:

```c
int main() {
        char* s = NULL;
        char c = s[0];
        return 0;
}
```

Now we can compile and run the program.

```bash
~ $ gcc example.c
~ $ ./a.out
Segmentation fault (core dumped)
```

Make sure that the Core Dump file was created, you can use the "ls" command.

## Debug

Now that we have the core file we can start trying to understand the problem.

### Open GDB

```bash
~ $ gdb ./a.out core
```
