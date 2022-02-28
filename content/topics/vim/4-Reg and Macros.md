# Vim - Registers and Macros

## Registers

### What is a register?

Vim's registers are spaces in memory that vim uses to store some text.
Each one of these registers has an identifier, so they can be accessed later.

It like when you copy some text to your clipboard, except in this case you have more than one clipboard.

### Basic uses of registers

Every register is accessed using a double quote before its name, we can access the content in register **a** using **"a**.

You could add the selected text to the register **a** by doing **"ay**.
By doing y you are yanking the selected text, and then adding it to the register **"a**.
To paste the content of this register, the logic is the same: **"ap**. You are pasting the data that is in this register.

You can use the **:reg** command to see all the registers and their content, or filter just the ones that you are interested with **:reg a b c**.

### The Default Register

When you **delete**, **change** or **yank** text, the text under the operation is store in a **register**
By default, the text is stored in a default register, when you **paste**, the text is pasted from the **default register**.

### Numbered Registers

When we yank some text, then delete some other, and try to paste the yanked text, it doesn't work, because vim replaced it with the text you deleted, so you need to go and yank the text again? 

Vim will always replace the default register, but **no** we did not lose the yanked text!!

Vim populates what is called numbered registers, there are register **"0** to **"9**. **"0** will have the lasted yanked, changed, deleted text, **"1** the second latest, and **"9** the oldest.

So if you deleted, yanked some text you can always paste using **"4g**.

### Read-Only Registers

There are 4 read-only registers **". "% ": "#**

| Read-Only Reg | Description |
| ------------- | ----------- |
| ". | last inserted text |
| "% | current file path, starting from the directory where vim was first opened |
| ": | most recently executed command |
| "# | name of the last edited file  |

## Macros

Some of these sub-topics are is so well documented in [Vim Tips Wiki](https://vim.fandom.com/wiki/Macros), that we will just gather, organize and comment on the information that the wiki published.

### What is a macro in vim?

Recording a macro is a great way to perform a one-time task, or to get things done quickly when you don't want to mess with Vim script or mappings, or if you do not yet know how to do it more elegantly.

In Vim, the word "macro" may refer to:

- A sequence of commands recorded to a register.
- A mapping to expand a sequence of typed keys to a longer sequence.
- A script is written in the Vim script language.

### How to record a macro?

Each register is identified by a letter a to z.

To enter a macro, type:
```
q<letter><commands>q
```
To execute the macro <number> times (once by default), type:

```
<number>@<letter>
```

So, the complete process looks like:

| Macro Table | Description |
| ----------- | ----------- |
| qd    | start recording to register d |
| ...   | your complex series of commands |
| q | stop recording |
| @d    | execute your macro |
| @@    | execute your macro again |

### Usefull example with macros

- Given some data like the following:

```xml
one first example
two second example
three   third example
four    fourth example
```

- suppose you want to change the data to make a dictionary for a Python program, with this result:

```python
data = {
    'one': 'first example',
    'two': 'second example',
    'three': 'third example',
    'four': 'fourth example',
}
```

To do this, record a macro while changing the first line. Then, playback the macro to change each other line. When finished, manually insert the initial **data = {** line, and the final **}** line.

The following shows one way to record a suitable macro.

1. Put the cursor on the first line.
2. Type qd (the q starts recording; the d is the register where keys will be recorded).
3. Type the following command to change the first sequence of whitespace to **': '**:
    - :s/\s\+/': ' (then press Enter)
4. Type the following to insert four spaces followed by **'** at the start of the line:
    - I    ' (then press Escape)
5. Type the following to append **',** to the line:
    - A', (then press Escape)
6. Type the following to move the cursor to the start of the line, then down to the next line:
    - 0j (or press Enter)
7. Type q to stop recording the macro.

The cursor should now be on the second line. Type @d to playback the macro once. That should change the second line, with the cursor finishing on the third line.
Remember counts? Type 2@@ to finish. The 2 means that what follows is performed twice, and the @@ plays back the last used macro.

### Viewing a macro

You can use the **:reg** command to view the current contents of any or all register values in Vim. 

For example, use :reg to view all registers, or **:reg a** to view only what you have recorded into register **a**. Typing **:reg abx** will show the contents of registers **a**, **b**, and **x**.

### Saving a macro

After recording the macro. This just goes into one of the registers so you can paste it as normal with the "xp commands in normal mode.

To save it you open up .vimrc and paste the contents, then the register will be around the next time you start vim.
The format of the vimrc line should be:

```
let @q = 'macro contents'
```

Be careful of quotes!!!!

Here's a small guide to saving a macro permanently:

1. From normal mode: qq
2. enter whatever commands
3. From normal mode: q
4. open .vimrc
5. **"qp** to insert the macro into your **let @q = '...'**


### Editing a macro

Imagine that you just wrote a vim macro and stopped recording.
Then you realize that you forgot to add a ^ to the beginning of it, instead of recording the re-record the macro there are simple ways to edit an existing macro.

1. Type **"ap** to paste the contents of the register.
2. Enter insert mode and edit the text as required.
3. Press Esc to return to normal mode.
4. Type **"ayy** to yank the modified macro into the register.