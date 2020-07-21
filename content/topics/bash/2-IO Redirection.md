# Bash - IO Redirection

## Standard Output (stdout)

Usually, command-line programs will write the output to the standard output which is the text you see at the terminal after running the command, for example, a Hello World program:

```bash
~ $ echo "Hello World"
Hello World
```

The stdout like everything in Linux is a file. And we can say that we want to write to a different file instead of the default stdout. To do this, we use the ">" character, for example:

```bash
~ $ ls > ls.txt
```

As you might already know, the ls lists directory contents and by default for the stdout. But this time we told to the terminal that the output should be written to the ls.txt file. So if we run the cat command to read what is inside the ls.txt we will see the ls output. 

```bash
~ $ cat ls.txt
```

Each time we run a command with the ">" redirection to the ls.txt, this will be completely overwritten. If you want the new results to be appended to the file instead, you just need to use the ">>", example:

```bash
someDirectory $ ls >> ls.txt
```

The new results are added to the end of the file, making the file longer each time the command is repeated. If the file does not exist it will be created.

## Standard Input (stdin)

Some commands can read the input from the standard input. By default, commands read from the stdin which is written by the keyboard, but like stdout, we can redirect the file. To do this, we use the "<" character, for example:

```bash
~ $ sort < ls.txt
```

In the example above, we used the sort command to process the contents of ls.txt. The results are output on the display since the standard output was not redirected. To make this more interesting we can now redirect both stdin and stdout:

```bash
someDirectory $ sort < ls.txt > sorted_ls.txt
```

The order of the redirection doesn't matter, the only requirement is that the redirection operators ("<", "<<", ">" ">>") must appear after the other options and arguments in the command.