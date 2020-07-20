[//]: # (TODO: WIP section - still needs improvement)
# Vim - Cheat Sheet

We know that learning all Vim'ss keybinds takes time, so here is a small Cheat Sheet that may help you in this journey of learning Vim.

## Commands

| Command | Description |
| -------------- | ----------- |
| :q  | Quit, fails if unsaved |
| :q! | Quit, even if unsaved |
| :w | Write (Save)|
| :wq | Write (Save) and quit |

## Movement

| Command | Description |
| -------------- | ----------- |
| $| Jump to end of line|
| ^| Jump to the start of line (First non-blank character|
| h| Move left|
| j| Move down|
| k| Move up|
| l| Move right|
| H| Move to the top of screen|
| M| Move to the middle of screen|
| L| Move to the bottom of screen|
| gg| Move to the start of file|
| G| Move to the end of file|
| 20G| Move to line 20|
| w| Jump to the start of the next word|
| b| Jump to the start of the previous word|

## Modes

| Key | Description |
| -------------- | ----------- |
| ESQ| Return to Normal mode|
| i| Insert at cursor position|
| a| Insert after cursor position|
| o| Insert on line below cursor position|
| v| Enter Visual mode|
| Ctr-v| Enter Visual mode (block)|
| V| Enter Visual Line mode|

## Undo/Redo

| Key | Description |
| -------------- | ----------- |
| u| Undo |
| Ctr-r| Redo |

## Search/Replace

| Key | Description |
| -------------- | ----------- |
| /{string}| Search for string|
| n | Jump to next match|
| N | Jump to previous match|
| ~ | switch case |
| /{string}|c| Case insensitive search|
| ?pattern | search backward for pattern |
| :%s/old/new/g | replace all old with new throughout file |
| :%s/old/new/gc | replace all old with new throughout file with confirmations |

## Copy and Pasting

| Key | Description |
| -------------- | ----------- |
| y [in Visual Mode]| Copy highlighted text|
| yy| Copy current line|
| d [in Visual Mode]| Cut highlighted text|
| dd| Cut current line |
| Ctr-Shift-V| Paste from external clipboard|
| P| Paste before the cursor|
| p| Paste after the cursor|


## Split Screen (Working with multiple files)

| Key | Description |
| --- | ----------- |
| :vs {file name} | vertical split, if there is no file name, vim will split the current screen|
| :sp {file name} | horizontal split, if there is no file name, vim will split the current screen|
| :e filename | Edit a file in a new buffer |
| :bn | go to next buffer |
| :bp | go to previous buffer |
| :bd | delete a buffer |
| ctrl+w h | Move to the left window from current window |
| ctrl+w j | Move to the bottom window from current window |
| ctrl+w k | Move to the top window from current window |
| ctrl+w l | Move to the right window from current window |
| ctrl+w r  | Swap bottom/top if split horizontally |
| ctrl+w R  | Swap top/bottom if split horizontally |
| ctrl+w r  | Rotates the windows from left to right - only if the windows are split vertically |
| ctrl+w R  | Rotates the windows from right to left - only if the windows are split vertically |
| ctrl+ws | Split windows |
| ctrl+ww | switch between windows |
| ctrl+wq | Quit a window |
| ctrl+wv | Split windows vertically |

### Modifiers

| Modifiers | Description |
| --------- | ----------- |
| ci{ | change the contents inside the current pair of curly brackets |
| ci[ | change the contents inside the current pair of square brackets |
| ca( | change a single-quoted string, including the surrounding curve brackets |
| da' | delete a single-quoted string, including the surrounding single quotes |

### Increment/Decrement

| Key | Description |
| --- | ----------- |
| ctrl+a | increments the number |
| ctrl+x | decrements the number |

Note: An octal number starts with 0, and a hex number starts with 0x or 0X.

### Marking text (visual mode)

| Marking | Descritpion |
| ------- | ----------- |
| o | move to other end of marked area |
| O | move to other corner of block |
| aw | mark a word |
| ab | a () block (with braces) |
| aB | a {} block (with brackets) |
| ib | inner () block |
| iB | inner {} block |