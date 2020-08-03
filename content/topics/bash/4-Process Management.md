# Bash - Process Management and Conditional execution

## Process Management

### Run command in background

Imagine that you want to execute a command, but you want to keep using the prompt. To do that you need to execute the command like this:

```shell
$ command1 &
[1] 1234

$ 
```
The command1 will run in the background and the process id (PID) is 1234.

### List processes

To list the processes running at your machine we can use the "ps" command.

```shell
$ ps
  PID TTY          TIME CMD
    8 tty1     00:00:00 bash
 1383 tty1     00:00:00 ps
```

### Kill processes

To kill a process currently running we can use the "kill" command

```shell
$ kill 1234
[2]+ Terminated command1
``` 

The "kill" command sends signals to processes. And there is a variety of signals that the the "kill" command can send to processes.

| Signal Number | Name | Description |
| ------------- | ---- | ----------- |
| 1 |	SIGHUP | Hang up signal |
| 2 |	SIGINT | Interrupt signal |
| 9 |	SIGKILL |	Kill signal |
| 15 | SIGTERM | Termination signal |


## Conditional Execution

Run command1 and if succeeds, then, run command2 

```shell
command1 && command2
```

Run command2 if, and only if, command1 fails
```shell
command1 || command2
```
