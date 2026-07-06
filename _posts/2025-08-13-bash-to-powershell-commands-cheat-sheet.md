---
title: "Bash to PowerShell: Commands Cheat Sheet"
description: A quick reference guide of common Bash commands and their PowerShell equivalents.
author: faizan
date: 2025-08-13 00:00:00 +0300
categories: [Reference, Scripting]
tags: [bash, cheat-sheet, commands, powershell, reference, scripting]
image:
  path: /assets/img/posts/bash-to-powershell-commands-cheat-sheet/featured-image.png
  thumb: /assets/img/posts/bash-to-powershell-commands-cheat-sheet/featured-image-thumbnail.png
  lqip: /assets/img/posts/bash-to-powershell-commands-cheat-sheet/featured-image-thumbnail.png
---

<!-- markdownlint-disable MD033 MD056 MD060 -->

## File & Directory Navigation

| **Description**                 | **Bash Command**   | **PowerShell Equivalent**                          | **Notes**                                               |
| :------------------------------ | :----------------- | :------------------------------------------------- | :------------------------------------------------------ |
| List files in current directory | `ls`               | `Get-ChildItem` or `ls`                            | `ls` is an alias in PowerShell, but formatting differs. |
| List one item per line          | `ls -1`            | `Get-ChildItem -Name` or `gci -Name`               | Shows only names, one per line.                         |
| Show current directory          | `pwd`              | `Get-Location` or `pwd`                            | `pwd` exists as alias.                                  |
| Change directory                | `cd <destination>` | `Set-Location <destination>` or `cd <destination>` | `cd` is an alias.                                       |
| Go up one directory             | `cd ..`            | `cd ..`                                            | Works the same in both.                                 |

## File Viewing

| **Description**       | **Bash Command**   | **PowerShell Equivalent**                                                | **Notes**                       |
| :-------------------- | :----------------- | :----------------------------------------------------------------------- | :------------------------------ |
| View file contents    | `cat <file>`       | `Get-Content <file>` or `gc <file>` or `cat <file>`                      | `gc` and `cat` are aliases.     |
| View first N lines    | `head -n N <file>` | `Get-Content -TotalCount N <file>`                                       | N = number of lines.            |
| View last N lines     | `tail -n N <file>` | `Get-Content -Tail N <file>`                                             | N = number of lines.            |
| View file with paging | `less <file>`      | `Get-Content <file> | more` or `Get-Content <file> | Out-Host -Paging`   | PowerShell has no native pager. |

## File & Directory Management

| **Description**              | **Bash Command**            | **PowerShell Equivalent**                                         | **Notes**            |
| :--------------------------- | :-------------------------- | :---------------------------------------------------------------- | :------------------- |
| Copy file                    | `cp <source> <destination>` | `Copy-Item <source> <destination>` or `cp <source> <destination>` | `cp` is an alias.    |
| Move/rename file             | `mv <source> <destination>` | `Move-Item <source> <destination>` or `mv <source> <destination>` | `mv` is an alias.    |
| Remove file                  | `rm <file>`                 | `Remove-Item <file>` or `rm <file>`                               | `rm` is an alias.    |
| Create directory             | `mkdir <directory>`         | `New-Item -ItemType Directory <directory>` or `mkdir <directory>` | `mkdir` is an alias. |
| Create empty file            | `touch <file>`              | `New-Item -ItemType File <file>`                                  |                      |
| Delete directory recursively | `rm -r <directory>`         | `Remove-Item -Recurse <directory>`                                |                      |

## Search & Filtering

| **Description**    | **Bash Command**              | **PowerShell Equivalent**                       | **Notes**                  |
| :----------------- | :---------------------------- | :---------------------------------------------- | :------------------------- |
| Find files by name | `find . -name <name/pattern>` | `Get-ChildItem -Recurse -Filter <name/pattern>` |                            |
| Search inside file | `grep <pattern> <file>`       | `Select-String <pattern> <file>`                | Supports regex by default. |
| Search recursively | `grep -r <pattern> .`         | `Select-String -Recurse <pattern> -Path .`      |                            |

## System Info & Environment

| **Description**                  | **Bash Command**                                                | **PowerShell Equivalent**                       | **Notes**                   |
| :------------------------------- | :-------------------------------------------------------------- | :---------------------------------------------- | :-------------------------- |
| Show command path                | `which <command>`                                               | `Get-Command <command> | Select-Object Source`  | Shows full path to command. |
| Show environment variables       | `printenv`                                                      | `Get-ChildItem Env:`                            |                             |
| Set environment variable         | <span className="no-ligatures">`export <name>="<value>"`</span> | `$Env:<name> = "<value>"`                       |                             |
| Show single environment variable | `echo $<name>`                                                  | `$Env:<name>`                                   |                             |

## Help & History

| **Description**       | **Bash Command** | **PowerShell Equivalent**                                             | **Notes**                                                                                                                                         |
| :-------------------- | :--------------- | :-------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| Show command help     | `man <command>`  | `Get-Help <command>`                                                  | Add `-Online` to open in browser.                                                                                                                 |
| Show command history  | `history`        | `Get-History` or `Get-Content (Get-PSReadLineOption).HistorySavePath` | `Get-History` shows current session history while `Get-Content (Get-PSReadLineOption).HistorySavePath` shows the saved history from all sessions. |
| Clear terminal screen | `clear`          | `Clear-Host` or `clear` or `cls`                                      | `clear` and `cls` are aliases.                                                                                                                    |

## Pipes & Redirection

| **Description**                 | **Bash Command**           | **PowerShell Equivalent**              | **Notes**                                           |
| :------------------------------ | :------------------------- | :------------------------------------- | :-------------------------------------------------- |
| Pipe output to file (overwrite) | `<command> > <file>`       | `<command> | Out-File <file>`          |                                                     |
| Pipe output to file (append)    | `<command> >> <file>`      | `<command> | Out-File -Append <file>`  |                                                     |
| Pipe to another command         | `<command1> | <command2>`  | `<command1> | <command2>`              | Works the same, but passes objects instead of text. |

## Process Management

| **Description**          | **Bash Command**        | **PowerShell Equivalent**                | **Notes**           |
| :----------------------- | :---------------------- | :--------------------------------------- | :------------------ |
| Show running processes   | `ps aux`                | `Get-Process`                            |                     |
| Search processes by name | `ps aux | grep <name>`  | `Get-Process -Name <name>`               | Supports wildcards  |
| Kill process by name     | `killall <name>`        | `Stop-Process -Name <name>`              | Supports wildcards  |
| Kill process by PID      | `kill <PID>`            | `Stop-Process -Id <PID>` or `kill <PID>` | `kill` is an alias. |

## Permissions

| **Description**    | **Bash Command**    | **PowerShell Equivalent** | **Notes**                       |
| :----------------- | :------------------ | :------------------------ | :------------------------------ |
| Change permissions | `chmod 644 <file>`  | (No direct equivalent)    | Windows uses ACLs instead.      |
| Change ownership   | `chown user <file>` | (No direct equivalent)    | Requires `icacls` or `Set-Acl`. |
