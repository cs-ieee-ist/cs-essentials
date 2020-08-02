# Detecting Memory Leaks

Memcheck keeps track of all heap blocks issued in response to calls to `malloc`/`new` (for C/C++, respectively) et al. Thus, when the program exits, Memcheck knows which blocks have not been freed.

### Basic memory leak example

Let's consider the following code:
```c
#include <stdlib.h>

int main(void)
{
	char *my_str = malloc(42 * sizeof(char));

	return 0;
}
```

Let's compile it with:
`gcc -g -o my-prog main.c`
By omission, this is how we're going to compile our files going forward.

Running the program:

`valgrind ./my-prog`

We get the following output:
```
...
==6283== HEAP SUMMARY:
==6283==     in use at exit: 42 bytes in 1 blocks
==6283==   total heap usage: 1 allocs, 0 frees, 42 bytes allocated
==6283== 
==6283== LEAK SUMMARY:
==6283==    definitely lost: 42 bytes in 1 blocks
==6283==    indirectly lost: 0 bytes in 0 blocks
==6283==      possibly lost: 0 bytes in 0 blocks
==6283==    still reachable: 0 bytes in 0 blocks
==6283==         suppressed: 0 bytes in 0 blocks
==6283== Rerun with --leak-check=full to see details of leaked memory
==6283== 
==6283== For counts of detected and suppressed errors, rerun with: -v
==6283== ERROR SUMMARY: 0 errors from 0 contexts (suppressed: 0 from 0)
...
```
Memcheck lets us know about the obvious memory leak: we allocated 42 bytes, since `sizeof(char) == 1` (section 6.5.3.5 of the specification), which we didn't free.
Valgrind recommends the use of the `--leak-check=full`. By using that option we'll get useful information that'll help us solve memory leaks.

Let's then rerun the program with `--leak-check=full`:

`valgrind --leak-check=full ./my-prog`

This is the output:
```
...
==6303== HEAP SUMMARY:
==6303==     in use at exit: 42 bytes in 1 blocks
==6303==   total heap usage: 1 allocs, 0 frees, 42 bytes allocated
==6303== 
==6303== 42 bytes in 1 blocks are definitely lost in loss record 1 of 1
==6303==    at 0x4C2FB0F: malloc (in /usr/lib/valgrind/vgpreload_memcheck-amd64-linux.so)
==6303==    by 0x10865B: main (main.c:5)
==6303== 
==6303== LEAK SUMMARY:
==6303==    definitely lost: 42 bytes in 1 blocks
==6303==    indirectly lost: 0 bytes in 0 blocks
==6303==      possibly lost: 0 bytes in 0 blocks
==6303==    still reachable: 0 bytes in 0 blocks
==6303==         suppressed: 0 bytes in 0 blocks
==6303== 
==6303== For counts of detected and suppressed errors, rerun with: -v
==6303== ERROR SUMMARY: 1 errors from 1 contexts (suppressed: 0 from 0)
...
```
How cool is this? Valgrind was able to tell us exactly where the un`free`d memory was! Now, this is obviously a very simple program and you can tell where the leak is right away, but that won't always be the case. I **assure** you.

Let's correct our program then!
```c
#include <stdlib.h>

int main(void)
{
	char * my_str = malloc(42 * sizeof(char));

	free(my_str);

	return 0;
}
```

The output will now look like this:
```
...
==7101== HEAP SUMMARY:
==7101==     in use at exit: 0 bytes in 0 blocks
==7101==   total heap usage: 1 allocs, 1 frees, 42 bytes allocated
==7101== 
==7101== All heap blocks were freed -- no leaks are possible
==7101== 
==7101== For counts of detected and suppressed errors, rerun with: -v
==7101== ERROR SUMMARY: 0 errors from 0 contexts (suppressed: 0 from 0)
...
```
Great, now we know how to look for memory leaks!

### Kinds of memory leaks

Let's take a look at an excerpt from the above example:
```
==6303== LEAK SUMMARY:
==6303==    definitely lost: 42 bytes in 1 blocks
==6303==    indirectly lost: 0 bytes in 0 blocks
==6303==      possibly lost: 0 bytes in 0 blocks
==6303==    still reachable: 0 bytes in 0 blocks
```
This little snippet includes the four types of leaks than may occur in your programs:
* "Still reachable" - The block is still pointed at, so the programmer, in principle, could have freed it before program exit. They're very common, so by default won't report such blocks individually.
* "Definitely lost" - No pointer to the block can be found. The block is classified as "lost" because the programmer could not possibly have freed it at program exit, since no pointer to it exists. This is a symptom of the pointer being lost at some earlier point in the program. Such cases should be fixed by the programmer.
* "Indirectly lost" - The block is lost, not because there are no pointers to it, but rather because all the blocks that point to it are themselves lost. For example, if you have a binary tree and the root node is lost, all is children nodes will be indirectly lost.
* "Possibly lost" - This means that one or more pointers to the block have been found, but at least one of them is an interior-pointer (i.e. a pointer to the middle of the block).

In the example at the start of this section, the 42 bytes we allocated were "definitely lost" because, after returning from `main`, the lifetime of `my_str` ends. As a result, there is no longer a reference to the pointer to the 42 bytes of allocated memory.

### "Definitely lost" memory

The previous example demonstrated a case of "definitely lost" memory, but let's take a look at another example:
```c
#include <stdlib.h>

int main(void)
{
	char *my_str = malloc(42);
	my_str = malloc(100);

	free(my_str);

	return 0;
}
```
In this case, those first 42 bytes are "definitely lost" because the pointer value is overwritten to the newly allocated 100 bytes; and so, there is no longer any reference to the first block of memory we allocated.

### "Still reachable" memory

Sometimes, this kind of leak is confused with "definitely lost" memory because one might think that (considering the first example in this section) `my_str`, the pointer to the allocated memory, could have been used to free it.

However, the program doesn't end with `main` returning. After `main` returning, both global and static variables still live on, thus allowing cleanup routines (such as [`atexit`](https://www.man7.org/linux/man-pages/man3/atexit.3.html)) to clean up memory pointed to by those variables. Let's take a look at an example:
```c
#include <stdlib.h>

char *my_str;

int main(void)
{
	my_str = malloc(42);

	return 0;
}
```
Valgrind tells us this:
```
...
==25767== HEAP SUMMARY:
==25767==     in use at exit: 42 bytes in 1 blocks
==25767==   total heap usage: 1 allocs, 0 frees, 42 bytes allocated
==25767== 
==25767== LEAK SUMMARY:
==25767==    definitely lost: 0 bytes in 0 blocks
==25767==    indirectly lost: 0 bytes in 0 blocks
==25767==      possibly lost: 0 bytes in 0 blocks
==25767==    still reachable: 42 bytes in 1 blocks
==25767==         suppressed: 0 bytes in 0 blocks
...
```
Since `my_str` is a global variable, it is still "alive" after `main` returning, so we still have a reference to the allocated 42 bytes. We can free that memory after returning from `main` by using a method such as the aforementioned `atexit`:
```c
#include <stdlib.h>

char *my_str;

void cleanup() {
	free(my_str);
}

int main(void)
{
	atexit(cleanup);

	my_str = malloc(42);

	return 0;
}
```

### "Possibly lost" memory

As stated before, what causes Valgrind to tell us about "possibly lost" memory is the existance of an interior-pointer to an allocated block.

That can be the result of libraries which have their own allocators and for which the pointer to the allocated memory is not the pointer returned by the OS itself (via the `malloc` library function or the `sbrk` system call) but a pointer with some offset.

An example of a program that produces such a warning from Valgrind is as such:
```c
#include <stdlib.h>

char *my_str;

int main(void)
{
	my_str = malloc(42);
	/* At this point, the pointer points to the start
	of the allocated memory. */

	my_str += 20;
	/* At this point, no pointer points to the start of
	the allocated memory. However, it is still accessible. */

	return 0;
}
```
Valgrind tells us about the "possibly lost" memory:
```
...
==29630== HEAP SUMMARY:
==29630==     in use at exit: 42 bytes in 1 blocks
==29630==   total heap usage: 1 allocs, 0 frees, 42 bytes allocated
==29630== 
==29630== 42 bytes in 1 blocks are possibly lost in loss record 1 of 1
==29630==    at 0x4C2FB0F: malloc (in /usr/lib/valgrind/vgpreload_memcheck-amd64-linux.so)
==29630==    by 0x108657: main (main.c:7)
==29630== 
==29630== LEAK SUMMARY:
==29630==    definitely lost: 0 bytes in 0 blocks
==29630==    indirectly lost: 0 bytes in 0 blocks
==29630==      possibly lost: 42 bytes in 1 blocks
==29630==    still reachable: 0 bytes in 0 blocks
==29630==         suppressed: 0 bytes in 0 blocks
...
```
To free a memory block we need the address of that memory block. So in this case, all we have to do is take into the pointer offset and get to the start of the allocated block:
```c
#include <stdlib.h>

char *my_str;

int main(void)
{
	my_str = malloc(42);
	/* At this point, the pointer points to the start
	of the allocated memory. */

	my_str += 20;
	/* At this point, no pointer points to the start of
	the allocated memory. However, it is still accessible. */

	free(my_str - 20);

	return 0;
}
```
And now the leak is gone!

### "Indirectly lost"

Reiterating on what was said up there, "indirectly lost" memory doesn't mean that there are no pointers to it, but rather because all the blocks that point to it are themselves lost.

Here is a simple example:
```c
#include <stdlib.h>

int ***arr;

int main(void)
{
	arr = malloc(5 * sizeof(int**));

	arr[2] = malloc(5 * sizeof(int*));

	arr[2][2] = malloc(100 * sizeof(int));

	free(arr);

	return 0;
}
```
Which produces the following output in Valgrind:
```
...
==30154== HEAP SUMMARY:
==30154==     in use at exit: 440 bytes in 2 blocks
==30154==   total heap usage: 3 allocs, 1 frees, 480 bytes allocated
==30154== 
==30154== 440 (40 direct, 400 indirect) bytes in 1 blocks are definitely lost in loss record 2 of 2
==30154==    at 0x4C2FB0F: malloc (in /usr/lib/valgrind/vgpreload_memcheck-amd64-linux.so)
==30154==    by 0x1086B8: main (main.c:9)
==30154== 
==30154== LEAK SUMMARY:
==30154==    definitely lost: 40 bytes in 1 blocks
==30154==    indirectly lost: 400 bytes in 1 blocks
==30154==      possibly lost: 0 bytes in 0 blocks
==30154==    still reachable: 0 bytes in 0 blocks
==30154==         suppressed: 0 bytes in 0 blocks
...
```
We can fix this by appropriately freeing the allocated blocks:
```c
#include <stdlib.h>

int ***arr;

int main(void)
{
	arr = malloc(5 * sizeof(int**));

	arr[2] = malloc(5 * sizeof(int*));

	arr[2][2] = malloc(100 * sizeof(int));

	free(arr[2][2]);
	free(arr[2]);
	free(arr);

	return 0;
}
```

There you go, now you should have the tools to check your programs for memory leaks!