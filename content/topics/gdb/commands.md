# GDB - List of Commands

## Basic Commands

| Command | Short version | Description |
| ------- | ------------- | ----------- |
| set args *arguments* | | The arguments set args arguments |
| run | r | The run command causes execution of the program to start from the beginning |
| breakpoint *location* | b *location* | The breakpoint command sets a breakpoint. |
| breakpoint exception *name* |  | A special form of the breakpoint command which breakpoints whenever exception name is raised. |
| print *expression* | p *expression* | This will print the value of the given expression. |
| continue | c | Continues execution following a breakpoint, until the next breakpoint or the termination of the program. |
| step | s | Executes a single line after a breakpoint. |
| next | n | Executes a single line. If this line is a subprogram call, executes and returns from the call. |
| list | l | Lists a few lines around the current source location. |
| backtrace | bt | Displays a backtrace of the call chain. |
| up | | At a breakpoint, GDB can display the values of variables local to the current frame. |
| down | | Moves the focus of GDB down from the frame currently being examined to the frame of its callee (the reverse of the previous command) |
|frame *n* | f *n* | Inspect the frame with the given number. |


## Analyse stack

| Command | Short version | Description |
| ------- | ------------- | ----------- |
| backtrace | bt | Print stack backtrace |
| backtrace full | | Print values of local variables |
| frame | f | Show current stack frame
| frame number | f number | Show the specified frame number |
| up | | Move up a single frame |
| down | | Move down a single frame |
| up number | | Move up the specified number of frames in the stack |
| down number | | Move down the specified number of frames in the stack |
| info frame | | List address, language, address of arguments/local variables and which registers were saved in frame.
| info args | | Info arguments of the selected frame |
| info locals | | Info arguments of the selected local variables |
| info catch | | Info arguments of the selected exception handlers |
