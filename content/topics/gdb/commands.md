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