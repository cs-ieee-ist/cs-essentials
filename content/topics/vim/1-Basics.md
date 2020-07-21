
# Vim - Basics of Vim

### Modal Editing

Vim is not your regular text editor, that you open a file and start writing.
Vim is a modal text editor, which means that it has various modes, each one with its purpose. When you open Vim for example you are presented with normal mode. There are a few other modes.

| Mode  | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| Normal   | for moving around a file and making edits. |
| Insert | for inserting text. |
| Visual    |  for selecting blocks of text. |
| Replace    | for replacing text |
| Comand line    | for running a command.          |

Keystrokes have different meanings in different modes. For example, the letter x in Insert mode will just insert a literal character ‘x’, but in Normal mode, it will delete the character under the cursor, and in Visual mode, it will delete the selection.

| Mode | Previous mode | Key |
|------|--| ---|
| Normal | From any mode  |  **ESC** |
| Insert | From Normal mode | **i**|
| Visual | From Normal mode | **v** |
| Visual Line | From Normal mode | **V** |
| Replace |  From Normal mode | **R** |
| Command-line | From Normal mode | **:**      |

Note that you have to be in Normal mode to change to another mode, so if you want to go do Visual mode and you are in Insert mode, you have first go to Normal mode, then to Visual mode, this applies to any mode.

You use the <ESC> key a lot when using Vim: consider remapping Caps Lock to Escape.

### How to insert text

When you open Vim you are presented with Normal mode, so if you want to write something in the file, you have to change from Normal mode to Insert mode.

From Normal mode, enter Insert mode with **i**, now Vim behaves like any other text editor, but if you press **ESC** Vim returns to Normal mode.

### Command-line basics

Now you are in Vim, and you want close Vim, how do we close Vim? Since the is no obvious way to do that unless we quit the terminal. To close, or save the document and many other actions in Vim you must me in Command-line mode.

From Normal mode, enter Command-line mode with **:**
From here you can tell vim to do different things, like quit, save, opening files, and many other commands.

| Command | Description |
| ------- | ------------|
| :q | quit (closes window) |
| :w | saves files |
| :w {file name} | save file as {file name} |
| :wq | save and quit |
| :help {topic} | open help |

Note that if you type the following command ***:help w and :help :w*** it will generates diferent results, since ***:help w*** opens help for the ***w*** and ***:help :w*** movement will open opens help for the ***:w*** command.