# Valgrind - Introduction

Valgrind is a framework for building dynamic analysis tools. It comes with a set of tools each of which performs some kind of debugging, profiling or similar task that helps you improve your programs.

A number of tools are supplied as standard; we will go over two of them as they will likely the most important in your CS journey:
* **Memcheck**, a memory error detector. It helps make programs, particularly those written in C and C++, more correct.
* **Massif**, a heap profiler. It helps profiling the memory usage of programs, thus helping the programmer use less memory.

In these Valgrind guides, we will use C for demonstration purposes.

### Explanation

When using Valgrind, your program is run on a synthetic CPU provided by the Valgrind core. The selected tool will add its own instrumentation code to your program and hand the result back to the core.
Since Valgrind simulates every single instruction a program executes, running it with these tools makes it a lot slower (i.e. 10-50 times slower with Memcheck, which adds code to check every memory access and value computed).

### Installation

All major Linux distributions include Valgrind in their repositories.
For most Debian-based distributions (such as Debian, Ubuntu, Lubuntu, Xubuntu, Pop OS, Linux Mint, Kali Linux and Deepin), the `apt` package manager is the easiest way to install Valgrind. Just run the following command in your terminal:
```bash
sudo apt-get install valgrind
```

For Manjaro (the `-S` flag also installs dependencies for valgrind):
```bash
sudo pacman -S valgrind
```

For Mac, the following should work:
```bash
brew install valgrind
```
If the above command doesn't work for some reason, [this post](https://stackoverflow.com/questions/8102143/how-to-build-and-install-valgrind-on-mac) should contain all the information for your particular needs.

### Usage:

You invoke Valgrind like this:
`valgrind [valgrind-arguments] your-program [your-program-arguments]`

The most important Valgrind option is `--tool`, which dictates which of the tools to use.
However, Memcheck is the default tool, so if you want to use it you can omit the `--tool` option.