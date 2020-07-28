# Git - Introduction

Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows.

## What is a version control?

Version control is a system that records changes made to a file or set of files over time. Which allows you to track the changes made over time and revert them. For the example, you find that a feature in your app stopped working and you don't know why, you can use a Version Control System (VCS) to help you find the change that might have caused the problem. A VCS is not only useful to prpgrammers, anyone that deals with a lots of changes to files might benefit from it.

### Centralized Version Control Systems

With the need from developers to collaborate in project, the Centralized Version Control Systems (CVCSs) were developed. A Centralized Version Control Systems (CVS, Subversion, and Perforce) have a single server that contains all the versioned files, and a number of clients that check out files from that central place. And these systems were for many years the standard, but downsides, like, single point of failure created the need for a new type of system. 

### Distributed Version Control Systems

In a Distributed Version Control Systems (DVCSs), like Git, Mercurial,
Bazaar or Darcs, clients don't just check out the latest snapshot of the files, rather, they fully mirror the repository, including its full history. If any server crashes any of the client repositories can be used as a back up to restore the server.

### Book

Everything we write in here you can learn more in depth in the book [Pro Git - Scott Chacon and Ben Straub](https://git-scm.com/book/en/v2)




