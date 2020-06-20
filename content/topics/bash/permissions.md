# Bash - Permissions

The Unix based operating systems, offer a multi-user capability. This means that more than one user can use the same computer at the same time. To proctect the users from each was created a permission method to to only allow certain users to read, write or execute certain file.

## File Permissions

On Linux, each file and directory has assigned access rights. These rights are categorized in three groups:

- The file owner
- Users in the owners group
- Others Users

And each group has the same three privilege definitions:

- read (r)
- write (w)
- execute (x)

To see the permissions assigned to a file we can use the ls command with the -l flag. Example:

```bash
someDirectory $ ls -l /bin/bash
-rwxr-xr-x 1 root root 1183448 Feb 25 12:03 /bin/bash
```

The output follows this pattern:
```bash
-rwxr-xr-x 1 root root 1183448 Feb 25 12:03 /bin/bash
^+-+   +-+ ^   ^    ^     ^    +----------+ +-------+
| | +-+ |  |   |    |     |         |           |
| |  |  |  |   |    |     |         |           File name
| |  |  |  |   |    |     |         Modification Date
| |  |  |  |   |    |     File Size
| |  |  |  |   |    Owner group
| |  |  |  |   User owner
| |  |  |  Number Hard Links
| |  |  Others Permissions     
| |  Group Permissions  
| Owner Permissions
Type of file: d for directory, - otherwise
```
Here we can see:

* The owner, in this case the superuser root, can read, write, and execute the file;
* Members of the group "root" can only read and execute the file;
* Everyone else can only read and execute the file;
* The file owner is "root";
* The file is owned by the group "root";


## Change files permissions

To change the files permissions we can use the 'chmod' command which stands for 'change mode'. This command allows us to set the permissions (read, write, execute) of a file for the owner, group and the everyone else.

```bash
chmod permissions filename
```

We can use this command in two ways the absolute mode and symbolic mode.

### Absolute Mode

In this mode, file permissions are not represented as characters but as three digit octal number, one digit for each group. The first digit is the owner's permissions, the second is the group's permissions, and the third is the other's permissions. 


| Number | Symbol | Permission |
| ------ | ------ | ---------- |
| 0 |	--- | 	No Permission |
| 1 | --x | Execute |
| 2 | -w- | Write |
| 3 | -wx | Execute + Write |
| 4 | r-- | Read |
| 5 | r-x | Read + Execute |
| 6 | rw- | Read + Write	 |
| 7 | rwx | Read + Write + Execute |

Now imagine that you want to set the permissions of a file so that only you can read, write , and execute and the members of the group can read it. To do that you will need to run the following command:

```bash
chmod 740 someFile
```

### Symbolic Mode

In this mode, you can modify permissions of a specific owner using three operators.

| Operator | Description |
| -------- | ----------- |
| + | Adds a permission |
| - | Removes a permission |
| = | Sets a permission |

| Symbol | Type of user |
| -----| --------- |
| u | user/owner |
| g | group |
| o | other |
| a | all |

Examples:

* Setting permissions to all users

```bash
chmod a=rwx someFile
```
* Adding permissions to owner

```bash
chmod u+x someFile
```
* Removing permissions to group

```bash
chmod g-rw someFile
```