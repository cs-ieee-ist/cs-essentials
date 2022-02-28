# Vim - Interface

" The most important idea in Vim is that Vim’s interface itself is a programming language. Keystrokes (with mnemonic names) are commands, and these commands compose. This enables efficient movement and edits, especially once the commands become muscle memory. " - [The Missing Semester of Your CS Education](https://missing.csail.mit.edu/2020/editors/)

## Text Entry Commands

| Text Entry Command | Description |
| ------------------ | ----------- | 
| a | Append text following current cursor position |
| A | Append text to the end of current line |
| i | Insert text before the current cursor position |
| I | Insert text at the beginning of the cursor line |
| o | Open up a new line following the current line and add text there |
| O | Open up a new line in front of the current line and add text there |

## Movement

If you want to be more productive using Vim you should spend most of your time in Normal mod, using movement commands to navigate the file. 

Movements in Vim are also called “nouns” because they refer to chunks of text.

#### Basic Movement

| Movement | Key | Description |
| -------- | --- | ----------- |
| Basic Movement | h j k l| Moves the cursor one character to the left, down, up, right |

Regarding the basic movement keys, ***h j k l***, your right index, and middle fingers move you up and down lines, and your index and ring fingers move you left and right by one character. Also, the hands are in the middle row of the keyboard which makes it more efficient, to reach any other keys.

#### You can also move by word:

You should try to use these type of movements instead os mashing ***h*** and ***l***, to navigate between a paragraph is much more efficient since you can navigate between whole words, and later you will find that you can combine these movements with counts, which make this much more efficient.

| Key | Description |
| --- | ----------- |
| w e b| Next word, End of the word, Backward one word|

#### Moving within the line:

No, imagine you quickly want to go and change the beginning or end of the line you are currently in, you can using the following nouns: 

| Key | Description |
| --- | ----------- |
| 0 ^ $| Beginning of line, First non-blank character, End of line|

#### Moving within the file:

| Key | Description |
| --- | ----------- |
| H M L| Top of the screen, Middle of the screen, Bottom of screen|
| Ctr-u Ctr-d| Scroll up, Scroll Down |
| gg | go to the top of the file |
| G | go to the bottom of the file |
| :{nro} or {nro}G | Go to line nro|

When you are in normal mode you can navigate in within the file very quickly using these commands.

#### Searching


| Key | Description |
| --- | ----------- |
| /{regex}|  Searches for text that matches regex |

Once you've done your search, you can press ***n*** to go to the next instance of the result, or ***N*** to go to the previous one.

#### Jumps:

 Jump forward and land on the < character

 ```
 f<
 ```
 You can think of this as ***find*** which lands right on it.

Jump forward and land right before the < character
```
t<
```
You can think of this as ***to*** which lands right before it.

### Counts

You can combine nouns with a count, which will perform a given action a number of times. Examples:

| Combination | Description |
| ----------- | ----------- |
| 3w | move 3 words forward |
| 5j | move 5 lines down |