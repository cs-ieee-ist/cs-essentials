# GDB - Assembly

Thera are several ocasions where you need to debug at the assembler level. It can be, for example, to understand how the compiler is generating your code and how that code is behaving. 

## Machine Language related commands

Before we start going through an example, we need to introduce some Assembly related commands:

| Command | Short version | Description |
| ------- | ------------- | ----------- |
| info line | | Displays the start and end position in object code for the current line in source. |
| info line number | | Display position in object code for a specified line in source. |
| disassemble *start_address*  *end_address* | | Displays machine code for positions in object code specified (can use start and end hex memory values given by the info line command. |
| stepi | si | step assembly instruction |
| nexti | ni | next assembly instruction |
| x *address* | | Examine the contents of memory |
x/nfu *address* | | Examine the contents of memory with specific format. n: number of display items to print, f: specify the format for the output, u: specify the size of the data unit |

## Debug


