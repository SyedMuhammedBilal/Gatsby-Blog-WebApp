---
title: "What did you say?.. uh.. DJVU"
date: "2008-02-09"
categories: 
  - "linux"
  - "personal"
  - "software"
  - "technology"
---

Well actually what it is is an [archival format](http://www.google.co.in/url?sa=t&ct=res&cd=1&url=http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FDjVu&ei=xBetR6GhIZus6wOhwom3Cw&usg=AFQjCNF_B6rLrJVpV-wLi-RwmblR8UNlkQ&sig2=pNfx_hmDX3qQHSmBahq_mQ) which is much better than PDF or even JPEG to archive colored high resolution images. It was was developed by AT&T and then a company, Lizardtech, decided to market it in an extremely clueless manner.

As it currently exists today, there is an open-source [reference version](http://www.google.co.in/url?sa=t&ct=res&cd=1&url=http%3A%2F%2Fdjvu.sourceforge.net%2F&ei=GxitR_D5PImk6gP2ic3PCw&usg=AFQjCNEbDgdpTJfpYoU2IQuO7JbR4tdEFw&sig2=Nd71GPCZQrsnuZ3cXTpcbg) of it  which contains the standalone viewer [DJView](http://sourceforge.net/project/showfiles.php?group_id=32953&package_id=78509).  However the only half decent free converter is an old retired commercial converter - [DJVU Solo 3.1](http://djvu.org/resources/) . On Linux, it is an entirely different matter altogether, you simply compile DJVU Libre library and use a Perl script.

Why I fell into this whole circus is because I had to convert a few jpeg files into a bound, collated, cross-platform format. DJVU was much better than that (check out the books at the million-book-library [ULib](http://www.ulib.org/) for that using DJView). And apparently..uh.. comic books shared online are being increasingly done in this format for compression and resolution.

Well, using DJVU Solo 3.1 on windows is intuitive enough - if someone tells you what to do.

To convert a whole lot of images (jpeg, gif, etc) to DJVU on windows all you do is open **one** file in DJVU Solo -> then on the sidebar pane, you right-click on the **thumbnail**  (of the image you just opened) and select "Insert Pages After". At this point select **all** the other images in order and thats it. You are ready to convert.

Its a pretty sweet format , what with ULib choosing it to archive its books - oh and Playboy choosing it to publish 50 years on one DVD! But I think Lizardtech's business plan is pretty dorky - rather than to help drive acceptance of its format, it is in danger of never gaining acceptance despite its superiority. At the very least they could have made a half-decent reader (like Adobe did with its Reader) and make a free personal-use scanner (which may insert watermarks to show its non-free status).

One Linux, several people have come up with different scripts to batch convert:

> #!/usr/bin/perl
> 
> use File::Basename; require "syscall.ph"; $archname = shift @ARGV; $| = 1;
> 
> for (@ARGV) { ($name,$path,$suffix) = fileparse($\_,qr{\\..\*}); @stat = stat($name.$suffix); $size = $stat\[7\]; $totalsize += $size; print "$name$suffix: ".$stat\[7\]." b "; system('c44', $name.$suffix, "$name.djvu"); # this is your main converter

>     @stat = stat("$name.djvu"); $saved = 100 - (($stat\[7\] / $size) \* 100); push @files, "$name.djvu"; push @dels, $\_; print " -> " . $stat\[7\] . " b (saved " . (int $saved) . "%)\\n"; }
> 
> print "$archname: "; system('djvm', '-c', $archname, @files);                    # multi-page binding system('djvused', '-f', '~/.djvused', $archname);   #this is the optimization program. It reads from ~/.djvused

> print "done\\n"; @stat = stat($archname); print "Original images = $totalsize bytes\\n"; print "New archive size = " . $stat\[7\] . " bytes\\n"; print "  (saved " . (int (100 - (($stat\[7\] / $totalsize) \* 100))) . "%)\\n"; print "Removing original image files: "; system('rm', @dels, @files); print "done\\n";

> \## The ~/.djvused optimization preferences that I use:

> remove-thumbnails set-thumbnails 96 remove-ant remove-meta remove-txt save

Someone has also figured a direct scanning script (pipe from a scanner using "scanimage") I havent personally tried this one:

> #!/bin/sh if \[ $# < 2 \] then echo Give Width and Height as parameters exit fi WD=$1 HT=$2 # This directory should not exist! if \[ -d /tmp/paperscan \] then echo Someone has already created /tmp/paperscan echo Edit the script and change the directory name exit fi mkdir /tmp/paperscan cd /tmp/paperscan i=1;ans=y while \[ "$ans" = "y" \] do echo Feed the next page into the scanner or Ctrl-C to exit scanimage --auto-threshold --mode lineart --resolution 300 \\ -l 0 -t 0 -x $WD -y $HT | \\ cjb2 -dpi 300 -clean -loose - page$i.djvu pagelist="$pagelist page$i.djvu" i=\`expr $i + 1\` echo -n "Another page?(Y/n)"; read ans done # Now convert the pages into a bundled document djvm -c bundle.djvu $pagelist # We could stop here but it is probably a good # idea to create an unbundled document as well djvused -e 'save-indirect index.djvu' bundle.djvu
