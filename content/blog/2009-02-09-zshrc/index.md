---
title: ".zshrc"
date: "2009-02-09"
---

\[sourcecode lang="bash"\] # history HISTFILE=~/.zsh\_history HISTSIZE=10000 SAVEHIST=100000 setopt appendhistory autocd extendedglob setopt EXTENDED\_HISTORY # puts timestamps in the history

BLACK="%{"$'\\033\[01;30m'"%}" GREEN="%{"$'\\033\[01;32m'"%}" RED="%{"$'\\033\[01;31m'"%}" YELLOW="%{"$'\\033\[01;33m'"%}" BLUE="%{"$'\\033\[01;34m'"%}" BOLD="%{"$'\\033\[01;39m'"%}" NORM="%{"$'\\033\[00m'"%}"

autoload -Uz vcs\_info

\# prompt (if running screen, show window #) if \[ x$WINDOW != x \]; then export PS1="$WINDOW:%~%# " else export PS1=" <${YELLOW}%~${NORM}> ${RED}%n${YELLOW}@${BLUE}%U%m%u$%(!.#.$) " #export PS1="\[${RED}%n${YELLOW}@${BLUE}%U%m%u$:${GREEN}%2c${NORM}\]%(!.#.$) " #right prompt - time/date stamp #export RPS1="${GREEN}(%D{%m-%d %H:%M})${NORM}" # this right prompt is for any kind of repository info - svn, git, mercurial ,etc. courtesy of vcs\_info export RPS1="${YELLOW}%1v${NORM}" fi

\# format titles for screen and rxvt function title() { # escape '%' chars in $1, make nonprintables visible a=${(V)1//\\%/\\%\\%}

\# Truncate command, and join lines. a=$(print -Pn "%40>...>$a" | tr -d "\\n")

case $TERM in screen) print -Pn "\\ek$a:$3\\e\\\\" # screen title (in ^A") ;; xterm\*|rxvt) print -Pn "\\e\]2;$2 | $a:$3\\a" # plain xterm title ;; esac }

\# precmd is called just before the prompt is printed function precmd() { title "zsh" "$USER@%m" "%55<...<%~" psvar=() vcs\_info \[\[ -n $vcs\_info\_msg\_0\_ \]\] && psvar\[1\]="$vcs\_info\_msg\_0\_" }

\# preexec is called just before any command line is executed function preexec() { title "$1" "$USER@%m" "%35<...<%~" }

\# this is ubuntu specific - in case you execute a command # that is not installed, zsh automatically calls this handler # so that you get a nice recommendation message (similar to bash) function command\_not\_found\_handler() { /usr/bin/python /usr/lib/command-not-found -- $1 }

\# vi editing # this prevents me from deleting a word using ESC-Backspace #bindkey -v

\# colorful listings zmodload -i zsh/complist zstyle ':completion:\*' list-colors ${(s.:.)LS\_COLORS}

autoload -U compinit compinit

\# aliases alias mv='nocorrect mv' # no spelling correction on mv alias cp='nocorrect cp' alias mkdir='nocorrect mkdir' alias j=jobs if ls -F --color=auto >&/dev/null; then alias ls="ls --color=auto -F" else alias ls="ls -F" fi alias ll="ls -l" alias ..='cd ..' alias .='pwd' alias grep='grep -E --color=always' alias vim='gvim'

export SCALA\_HOME=/usr # for webcam export XLIB\_SKIP\_ARGB\_VISUALS=1 alias sbcl='/home/user/research/lisp/sbcl-1.0.29/release/bin/sbcl' export SBCL\_HOME=/home/user/research/lisp/sbcl-1.0.29/release/lib/sbcl/ alias sbcl='/home/user/research/lisp/sbcl-1.0.29/release/bin/sbcl'

#copy with progress bar alias cp='rsync -aP' alias netstat='netstat -ap'

#exports #path=(/home/user/clearsenses/ruby-1.9.1-p243/release/bin $path) #path=(/home/user/clearsenses/ruby-1.8.6-p383/release/bin $path) path=(/home/user/clearsenses/ruby-enterprise-1.8.7-20090928/release/bin $path) export PATH export RUBYLIB=/home/user/clearsenses/ruby-1.8.6-p383/release/lib #export GEM\_HOME=/home/user/research/doublecheq/GEMS export GEM\_HOME=/home/user/clearsenses/JAMBOOL\_GEMS #export GEM\_HOME=/home/user/clearsenses/GEMS-1.8 export GEM\_PATH=$GEM\_HOME export RUBY\_SOURCE\_DIR=/home/user/clearsenses/ruby-enterprise-1.8.7-20090928/source/ path=($GEM\_PATH/bin $path)

#variables that need to be set for intellij - Ubuntu export JDK\_HOME=/usr/lib/jvm/java-6-sun-1.6.0.15/ export M2\_HOME=/usr/share/maven2/

\# functions setenv() { export $1=$2 } # csh compatibility

#bash style ctrl-a (beginning of line) and ctrl-e (end of line) bindkey '^a' beginning-of-line bindkey '^e' end-of-line # key bindings

\# Emulate tcsh's backward-delete-word tcsh-backward-delete-word () { #local WORDCHARS="${WORDCHARS:s#/#}" #local WORDCHARS='\*?\_\[\]~\\/!#$%^<>|\`@#$%^\*()+?' local WORDCHARS="${WORDCHARS:s#/#}" zle backward-delete-word }

tcsh-backward-word () { local WORDCHARS="${WORDCHARS:s#/#}" zle emacs-backward-word }

tcsh-forward-word () { local WORDCHARS="${WORDCHARS:s#/#}" zle emacs-forward-word }

zle -N tcsh-backward-delete-word zle -N tcsh-backward-word zle -N tcsh-forward-word

\# for escape backspace (delete a word) behavior similar to tcsh bindkey '\\e^?' tcsh-backward-delete-word #for ctrl leftarrow and rightarrow navigation bindkey ';5D' tcsh-backward-word bindkey ';5C' tcsh-forward-word

#if this is uncommented, it will ignore the stop-at-special-chars #bindkey '\\e^H' backward-delete-word

#uncomment this to have a nice update script that will cause ur zshrc to update from a central location

#selfupdate(){ # URL="http://stuff.mit.edu/~jdong/misc/zshrc" # echo "Updating zshrc from $URL..." # echo "Press Ctrl+C within 5 seconds to abort..." # sleep 5 # cp ~/.zshrc ~/.zshrc.old # wget $URL -O ~/.zshrc # echo "Done; existing .zshrc saved as .zshrc.old" #} # #rsync -tzhhP rsync://cdimage.ubuntu.com/cdimage/daily/20090420.1/jaunty-alternate-i386.iso .

\[/sourcecode\]
