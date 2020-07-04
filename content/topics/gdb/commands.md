# GDB - List of Commands

## Basic Commands

| Command | Short version | Description |
| ------- | ------------- | ----------- |
| run | r | The run command causes execution of the program to start from the beginning |
| quit | q | Exit GDB debugger |
| breakpoint *location* | b *location* | The breakpoint command sets a breakpoint in certain location. (line, function, etc) |
| print *expression* | p *expression* | This will print the value of the given expression. |
| continue | c | Continues execution following a breakpoint, until the next breakpoint or the termination of the program. |
| step | s | Executes a single line after a breakpoint. |
| next | n | Executes a single line. If this line is a subprogram call, executes and returns from the call. |
| list | l | Lists a few lines around the current source location. |
| backtrace | bt | Displays a backtrace of the call chain. |

## Execution control

| Command | Short version | Description |
| ------- | ------------- | ----------- |	
| run | r | Start program execution |
| run  *command-line-arguments* | r *command-line-arguments* | Start program execution |
| run < *stdin-file* > *stdout-file* | r < *stdin-file* > *stdout-file* | Start program execution  with IO redirection |
| continue | c | Continues program execution until encounters a breakpoint |
| kill | | Kills the current process |
| quit | q | Exit GDB debugger |

## Breakpoint management

| Command | Description |
| ------- | ----------- |
| break funtion-name | Set a breakpoint at specified function |
| break line-number | Set a breakpoint at specified line number |
| break ClassName::functionName | Set a breakpoint at specified class function |
| break +offset | Set a breakpoint specified number of lines forward from the current position |
| break -offset | Set a breakpoint specified number of lines back from the current position |
| break filename:function | Set a breakpoint at specified function inside a file |
| break filename:line-number | Set a breakpoint at specified line number of a file |
| break *address | Set a breakpoint at specified instruction address |
| break line-number if condition | Set a breakpoint if condition is met |
| break line thread thread-number | Set a breakpoinp in thread at specified line number |
| tbreak | Set a temporary break (break once only) |
| watch condition | Suspend execution when condition is met |
| clear | Delete breakpoints |
| clear function | Delete all breakpoints in function |
| clear *line-number* | Delete breakpoints at specified line number |
| delete |	Delete all breakpoints, watchpoints, or catchpoints |
| delete *breakpoint-number* | Delete the breakpoint specified |
| delete *breakpoint-number*-*breakpoint-number* | Delete the breakpoints inside the specified range. ex: delete 1-4 |
| disable *breakpoint-number* |  Disable the breakpoint specified |
| disable *breakpoint-number*-*breakpoint-number* | Disable the breakpoints inside the specified range, ex: disable 1-4 |
| enable *breakpoint-number* | Enable the breakpoint specified |
| enable *breakpoint-number*-*breakpoint-number* | Enable the breakpoints inside the specified range, ex: enable 1-4

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
