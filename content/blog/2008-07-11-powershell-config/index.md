---
title: "Powershell Config"
date: "2008-07-11"
---

\[sourcecode lang="powershell"\]

\# this file is at C:\\Documents and Settings\\&lt;username&gt;\\My Documents\\WindowsPowerShell\\profile.ps1

$Host.Ui.RawUi.BackGroundColor = "Black" cls set-location d:\\ $oldPath = get-content Env:\\Path; $env:INCLUDE="C:\\Program Files\\Microsoft Platform SDK for Windows Server 2003 R2\\Include\\crt;"+ "C:\\Program Files\\Microsoft Platform SDK for Windows Server 2003 R2\\Include;" $env:LIB="C:\\Program Files\\Microsoft Visual Studio 9.0\\VC\\lib;" + "C:\\Program Files\\Microsoft Platform SDK for Windows Server 2003 R2\\Lib" $newPath = "C:\\Program Files\\Microsoft Visual Studio 9.0\\VC\\bin;" +$oldPath + ";"+ "C:\\Program Files\\Microsoft Platform SDK for Windows Server 2003 R2\\Bin" + ";"+ "C:\\Program Files\\Microsoft Platform SDK for Windows Server 2003 R2\\Bin\\win64" + ";" + "C:\\Program Files\\Microsoft Visual Studio 9.0\\Common7\\Tools\\Bin" + ";" + ";" + "C:\\Program Files\\Vim\\vim71";

$env:LS\_OPTIONS = "-bhAC --more --color=auto --recent --streams" set-alias ls "C:\\WINDOWS\\system32\\ls.exe" -option allscope set-content Env:\\Path $newPath;

\[/sourcecode\]
