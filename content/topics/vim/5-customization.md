# Vim - Customization

## Vimrc

### What is vimrc?

The vimrc file contains optional runtime configuration settings to initialize Vim when it starts.
The file is named ```.vimrc```

Lines that begin with " are comments and are not read by vim.

To customize Vim for editing a specific file, or a specific type of file, you can use modelines, or auto commands, or filetype plugins.

### Where is vimrc?

A default Vim installation will feature a file containing Vim’s core global settings called vimrc. This file will be located at either /etc/vim/vimrc or etc/vimrc, depending on your linux distribution.

But you can create a local vimrc file, the configurations in this file will apply only to the active user account. If you don't have a local vimrc file yet, you can simply create one in your home folder. Normally the home folder is designated by ~ so you can simply create ~/.vimrc

Now you have an empty .vimrc file, in the following topic, we will help you create a simple but useful vim configuration.

### Basics configs - Example

```vim
" URL: http://vim.wikia.com/wiki/Example_vimrc
" Authors: http://vim.wikia.com/wiki/Vim_on_Freenode
" Description: A minimal, but feature-rich, example .vimrc. If you are a
"              newbie, basing your first .vimrc on this file is a good choice.
"              If you're a more advanced user, building your own .vimrc based
"              on this file is still a good idea.
 
"------------------------------------------------------------
" Features {{{1
"
" These options and commands enable some very useful features in Vim, that
" no user should have to live without.
 
" Set 'nocompatible' to ward off unexpected things that your distro might
" have made, as well as sanely reset options when re-sourcing .vimrc
set nocompatible
 
" Attempt to determine the type of a file based on its name and possibly its
" contents. Use this to allow intelligent auto-indenting for each filetype,
" and for plugins that are filetype specific.
filetype indent plugin on
 
" Enable syntax highlighting
syntax on
 
 
"------------------------------------------------------------
" Must have options {{{1
"
" These are highly recommended options.
 
" Vim with default settings does not allow easy switching between multiple files
" in the same editor window. Users can use multiple split windows or multiple
" tab pages to edit multiple files, but it is still best to enable an option to
" allow easier switching between files.
"
" One such option is the 'hidden' option, which allows you to re-use the same
" window and switch from an unsaved buffer without saving it first. Also allows
" you to keep an undo history for multiple files when re-using the same window
" in this way. Note that using persistent undo also lets you undo in multiple
" files even in the same window, but is less efficient and is actually designed
" for keeping undo history after closing Vim entirely. Vim will complain if you
" try to quit without saving, and swap files will keep you safe if your computer
" crashes.
set hidden
 
" Note that not everyone likes working this way (with the hidden option).
" Alternatives include using tabs or split windows instead of re-using the same
" window as mentioned above, and/or either of the following options:
" set confirm
" set autowriteall
 
" Better command-line completion
set wildmenu
 
" Show partial commands in the last line of the screen
set showcmd
 
" Highlight searches (use <C-L> to temporarily turn off highlighting; see the
" mapping of <C-L> below)
set hlsearch
 
" Modelines have historically been a source of security vulnerabilities. As
" such, it may be a good idea to disable them and use the securemodelines
" script, <http://www.vim.org/scripts/script.php?script_id=1876>.
" set nomodeline
 
 
"------------------------------------------------------------
" Usability options {{{1
"
" These are options that users frequently set in their .vimrc. Some of them
" change Vim's behaviour in ways which deviate from the true Vi way, but
" which are considered to add usability. Which, if any, of these options to
" use is very much a personal preference, but they are harmless.
 
" Use case insensitive search, except when using capital letters
set ignorecase
set smartcase
 
" Allow backspacing over autoindent, line breaks and start of insert action
set backspace=indent,eol,start
 
" When opening a new line and no filetype-specific indenting is enabled, keep
" the same indent as the line you're currently on. Useful for READMEs, etc.
set autoindent
 
" Stop certain movements from always going to the first character of a line.
" While this behaviour deviates from that of Vi, it does what most users
" coming from other editors would expect.
set nostartofline
 
" Display the cursor position on the last line of the screen or in the status
" line of a window
set ruler
 
" Always display the status line, even if only one window is displayed
set laststatus=2
 
" Instead of failing a command because of unsaved changes, instead raise a
" dialogue asking if you wish to save changed files.
set confirm
 
" Use visual bell instead of beeping when doing something wrong
set visualbell
 
" And reset the terminal code for the visual bell. If visualbell is set, and
" this line is also included, vim will neither flash nor beep. If visualbell
" is unset, this does nothing.
set t_vb=
 
" Enable use of the mouse for all modes
set mouse=a
 
" Set the command window height to 2 lines, to avoid many cases of having to
" "press <Enter> to continue"
set cmdheight=2
 
" Display line numbers on the left
set number
 
" Quickly time out on keycodes, but never time out on mappings
set notimeout ttimeout ttimeoutlen=200
 
" Use <F11> to toggle between 'paste' and 'nopaste'
set pastetoggle=<F11>
 
 
"------------------------------------------------------------
" Indentation options {{{1
"
" Indentation settings according to personal preference.
 
" Indentation settings for using 4 spaces instead of tabs.
" Do not change 'tabstop' from its default value of 8 with this setup.
set shiftwidth=4
set softtabstop=4
set expandtab
 
" Indentation settings for using hard tabs for indent. Display tabs as
" four characters wide.
"set shiftwidth=4
"set tabstop=4
 
 
"------------------------------------------------------------
" Mappings {{{1
"
" Useful mappings
 
" Map Y to act like D and C, i.e. to yank until EOL, rather than act as yy,
" which is the default
map Y y$
 
" Map <C-L> (redraw screen) to also turn off search highlighting until the
" next search
nnoremap <C-L> :nohl<CR><C-L>
 
"------------------------------------------------------------
```

## Plugins and Plugin Manager

### Plugins

#### Install plugins manually (Vim 8 and above)

A Vim package is a directory containing one or more plugins. By default, your Vim settings are contained in ~/.vim, so that's where Vim looks for plugins when you launch it.

When you start Vim, it first processes your .vimrc file, and then it scans all directories in ~/.vim for plugins contained in pack/*/start.

By default, your ~/.vim directory (if you even have one) has no such file structure, so set that up with:

```shell
$ mkdir -p ~/.vim/pack/vendor/start
```
For example, try installing [NERDTree](https://github.com/preservim/nerdtree), a text-based file manager for Vim. First, use Git to clone a snapshot of the NERDTree repository:

```shell
$ git clone https://github.com/preservim/nerdtree.git ~/.vim/pack/vendor/start/nerdtree
vim -u NONE -c "helptags ~/.vim/pack/vendor/start/nerdtree/doc" -c q
```

Launch Vim, and type this command:

```vim
:NERDTree
```

#### Some Usefull Plugins

Here are some Vim plugins that may be useful:

1. [NERDTree](https://github.com/preservim/nerdtree) is a file system explorer for the Vim editor.
2. [gitgutter](https://github.com/airblade/vim-gitgutter) is a Vim plugin that shows a git diff in the sign column. It shows which lines have been added, modified, or removed.
3. [TagList](https://github.com/vim-scripts/taglist.vim) is a source code browser plugin for Vim and provides an overview of the structure of the source code files and allows you to efficiently browse through source code files for different programming languages.
4. [Lightline](https://github.com/itchyny/lightline.vim) a light and configurable statusline/tabline plugin for Vim.
5. [Auto-Pairs](https://github.com/jiangmiao/auto-pairs) insert or delete brackets, parens, quotes in pairs.
6. [ack](https://github.com/mileszs/ack.vim) run your favorite search tool from Vim, with an enhanced results list.

### Plugin Manager

#### Do I really need a plugin manager?

No. Plugin managers have always been and will always be optional.

#### What is the benefits of using a plugin manager?

A plugin manager may be useful if:
- you use too many plugins,
- you like to try new plugins,
- you absolutely want your plugins to be always up-to-date.

If you use too many plugins, the usual installation scheme will likely become too messy very quickly.
Plugin managers usually keep track of what is installed and where in order to make the whole thing easier for the user.

If you like to try new plugins, plugin managers usually make it easier to install/remove individual plugins.

If you absolutely want your plugins to be always up-to-date, plugin managers usually give you commands for updating or even auto-updating individual plugins.

#### Some Plugins Managers

There are several plugin managers, a plugin manager is the cleanest way to install plugins in vim, such as:

- [Pathogen](https://github.com/tpope/vim-pathogen)
- [Vundle](https://github.com/VundleVim/Vundle.vim)
- [VimPlug](https://github.com/junegunn/vim-plug)
- [NeoBundle](https://github.com/Shougo/neobundle.vim)

## How to Do 90% of What Plugins Do With Just Vim?

This section will be heavily inspired on a lecture sponsored by [thoughtbot](https://www.youtube.com/watch?v=XA2WjJbmmoM&vl=en). In this sub-topic we will talk about fuzzy file search, tag jumping and autocomplete, if you want to see file browsing and snippets, you might consider watching the lecture.

Note that this section is not to discourage you to use plugins, the objective of this section is to show you that vim is a lot powerful.

### Fuzzy File Search

If you want a fuzzy file search vim has git your back without a plugin!

Add this to you .vimrc file
```vim
path +=**
```
This will allow vim so search for files in sub-directories and so on of a root directory.

With this trick, you do not need a Fuzzy File Search in Vim, because now your vim is capable of accessing a file deep in a file tree.
Let's consider the following directory tree

```shell
topics
|
|-- bash
|   |- introdution1.md
|   |- permissions.md
|
|-- vim
|   |- introdution2.md
|   |- movement.md
|
|-- git
|   |- introdution3.md
|   |- blobs
|   |   |- firstBlob.md
|   |   |- secontBlob.md
|   |   |- cBlob.c
```

For this, to work you have to start vim in the root directory (topics).
Now you want to work in vim's movement.md file, you just type in vim the command:

```vim
:find movement.md
```
You can also tab so vim will know what file you are talking about and complete.

If you tab and there is more than one match vim will present you with the various matches and you choose

```vim
:find intro
```
and then you tab, vim will present you the three possibilities introdution1.md, introdution2.md, introdution3.md. You can navigate in the choices that vims gives you with tabs.

Back to our example, so we use **:find movement.md** and we are in /topics/vim/movement.md, now we want to work on secondBlob.md, but that file is in another directory it is in /topics/git/blobs/secondBlob.md, we can!!! That is why we started vim in the root directory topics. You just need to do 

```vim
:find secontBlob.md
```
This is a lot more powerful, like a normal fuzzy finder you can search using file types

```vim
:find *.c
```

It will open the cBlob.c

### Tag jumping

You can use Tags, and jump between Tags without using a plugin, here's how!

Using tags makes it easier to jump to certain parts of your programs. First run ctags from the UNIX command line on your source files ( to generate a ***tags*** file, then use these while editing your source files:

 | Tags Command | Description |
 | ------------ | ----------- |
 | :tag TAB     | list the known tags |
 | :tag function_name | jump to that function |
 | ctrl-t   | goes to the previous spot where you called :tag |
 | ctrl-]   | calls :tag on the word under the cursor |
 | :ptag    | open tag in preview window (also ctrl-w }) |
 | :pclose  | close preview window |

### Autocomplete

You have several auto-complete plugins such as AouCompleteMe.
But Vim has Autocomplete built-in if you just hit Ctrl + n while in insert mode, and you'll get a list of word suggestions.
To make the list cycle backward, hit Ctrl + p. You can also use the arrow keys to move up and down the list.

| Autocomplete Keys | Description |
| ----------------- | ----------- |
| ctrl-x + ctrl-n | for just this file |
| ctrl-x + ctrl-f | for filenames (works with our path trick!) |
| ctrl-x + ctrl-J | for tags only |
| ctrl-n | for anything specified by the 'complete' option and next on the list |
| ctrl-p | previous on the list |