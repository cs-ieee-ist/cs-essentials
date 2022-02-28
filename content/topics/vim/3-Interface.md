
# Vim - Vim's Interface: Selection, Changes, Deleting, Formatting

### Selection

Visual modes can use movement keys to make selections.
In Vim you have the following Visual modes:
- Visual
- Visual Line
- Visual Block

Everything that you used to do with the mouse, you now do with the keyboard using editing commands that compose with movement commands.
Vim’s editing commands are also called “verbs” because verbs act on nouns.

When you are in a Visual mode you can select any part of text using the movements that you have learned.
This mode will be helpful to change, delete, yank text.

### Changing and Deleting text

You can quickly change and deleting text in vim.

| Key| Description |
| ----------- | ----------- |
| cw | change word |
| dw | delete word |

When you use to delete, you just delete the word. When you change you delete the word and vim puts you in insert mode so you can start typing and in fact change the word.

| Key| Description |
| ----------- | ----------- |
| C | change line |
| D | delete line |


### Formatting text

It's sometimes helpful to format text quickly, such as paragraphs, and this can easily be done with the following command:

Formatting the current paragraph
```
gq ap
```

***gq*** works based on your text width setting.

### Other ways of deleting text

Now you know some ways of deleting and changing text, let's see some more ways of deleting text:

| Key| Description |
| ----------- | ----------- |
| x | delete the character under the cursor|
| X | delete the character before the cursor|

You can memorize ***x** as exterminate. Let´s see some more useful verbs:

| Key| Description |
| ----------- | ----------- |
| dd | delete the current line|
| dt. | delete from where you are to the period|
| J | join the current line with the next one (delete what's between) |

### Counts

You can also combine verbs with a count, which will perform a given action a number of times. Examples:

| Combination | Description |
| ----------- | ----------- |
| 7dw | delete 7 words |
| c5w| change 5 words |
| 4dd | delete the next 4 lines |
| 3yy | yank the next 4 lines |

Note that you can use counts with almost every command, ex: 1000ctrl-a will increment the number in 1000

### Modifiers

You can use modifiers to change the meaning of a noun. Some modifiers are **i**, which means “inner” or “inside”, and **a**, which means “around”.

| Modifiers | Description |
| --------- | ----------- |
| ci{ | change the contents inside the current pair of curly brackets |
| ci[ | change the contents inside the current pair of square brackets |
| ca( | change a single-quoted string, including the surrounding curve brackets |
| da' | delete a single-quoted string, including the surrounding single quotes |


### Undo / Redo

Now you want to know how to undo and redo things in vim, let's see how!

| Key | Description |
| -------------- | ----------- |
| u| Undo |
| Ctr-r| Redo |

### Copy and pasting

#### Copying text
The command isn't ***c***, as one might expect. If you'll remember, ***c*** is already taken for ***change***.
Vim instead uses ***y*** for ***yank***.

| Key | Description |
| -------------- | ----------- |
|y | yank (copy) whatever's selected|
|yy| yank the current line|

#### Pasting text
Pasting is fairly intuitive—it uses the ***p*** verb. So, if you delete a line using dd, you can paste it back using p.

One thing to remember about pasting is that it generally starts right after your cursor, and either pastes characters/words or lines or columns—based on what you copied (yanked). Also, remember that you can undo any paste with the universal undo command "u".

| Key | Description |
| -------------- | ----------- |
|p| paste the copied (or deleted) text after the current cursor position|
|P| paste the copied (or deleted) text before the current cursor position|


### Repeating actions

One of the most powerful verbs in all vim is period ***.***
Period allows you to repeat whatever it is that you just did.

Let's see an example.

First, we delete a word
```
dw
```

Delete seven more words
```
7.
```

Another example

```
cw
```
Then you type the change the word that you want, and you can use period to make that exact change to any other word.

You can use period with anything in vim!


## Split Screen

Like many other editors in Vim you can split-screen horizontal or vertical.

| Key | Description |
| --- | ----------- |
| :vs {file name} | vertical split, if there is no file name, vim will split the current screen|
| :sp {file name} | horizontal split, if there is no file name, vim will split the current screen|
| ctrl+w h | Move to the left window from current window |
| ctrl+w j | Move to the bottom window from current window |
| ctrl+w k | Move to the top window from current window |
| ctrl+w l | Move to the right window from current window |
| ctrl+w r  | Swap bottom/top if split horizontally |
| ctrl+w R  | Swap top/bottom if split horizontally |
| ctrl+w r  | Rotates the windows from left to right - only if the windows are split vertically |
| ctrl+w R  | Rotates the windows from right to left - only if the windows are split vertically |
