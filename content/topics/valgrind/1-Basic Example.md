# Valgrind - Basic Example

In this section we'll take a look at a basic use case of Valgrind so that we get a grasp of how this works before we dive into the cool stuff.

Let's say you have a file `main.c` which contains the following code:
```c
#include <stdio.h>

int main(int argc, char *argv[])
{
	printf("Hi there, %s!\n", argv[1]);

	return 0;
}
```

Let's compile it like this:
```bash
gcc -g -o my-prog main.c
```
We're passing the `-g` flag so that the application is compiled with debugging info enabled, and the `-o` flag so that we can specify the output executable name (we'll call it "my-prog" because we're very creative).

To execute the compiled program with Valgrind, we just need to:
```bash
valgrind ./my-prog Bob
```

This will output something like the following:
```
==29723== Memcheck, a memory error detector
==29723== Copyright (C) 2002-2017, and GNU GPL'd, by Julian Seward et al.
==29723== Using Valgrind-3.13.0 and LibVEX; rerun with -h for copyright info
==29723== Command: ./my-prog Bob
==29723== 
Hi there, Bob!
==29723== 
==29723== HEAP SUMMARY:
==29723==     in use at exit: 0 bytes in 0 blocks
==29723==   total heap usage: 1 allocs, 1 frees, 4,096 bytes allocated
==29723== 
==29723== All heap blocks were freed -- no leaks are possible
==29723== 
==29723== For counts of detected and suppressed errors, rerun with: -v
==29723== ERROR SUMMARY: 0 errors from 0 contexts (suppressed: 0 from 0)
```
Now, there's a few things to note:
* Valgrind tools' output has the form `==12345== <some-message-from-Valgrind>`. The `12345` is the process ID.
* You can see the output of the program before the heap summary: `Hi there, Bob!`
* The heap usage mentions an allocation - we didn't do that. It was actually `printf` that did that internally.

Try to run a basic example such as this one yourself, and then keep reading the tutorial to learn about how Valgrind can make your life a lot easier!