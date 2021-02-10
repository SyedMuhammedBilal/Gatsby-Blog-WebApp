---
title: "Pressflow (or Drupal) on Ubuntu 10.04 and later .. with nginx, php-fpm and clean-urls"
date: "2010-09-09"
---

For god's sake do not use PHP 5.3 . Custom compile your own [php-fpm 5.2](http://www.ivankuznetsov.com/2010/05/moving-joomla-wordpress-and-other-phpfastcgi-apps-to-nginx.html). Maybe setup nginx with clean URL and the configuration given .

If you use PHP5.3, then any failure in any db connection/query (for me it was postgresql) will result in the php thread being killed ("_child process exited with status 1_"). 5.2 doesnt have this problem.

> ﻿server {
> 
>   listen   8080; ## listen for ipv4
>   listen   \[::\]:8080 default ipv6only=on; ## listen for ipv6
> 
>   server\_name  localhost;
> 
>         root /var/www/1/;
>         large\_client\_header\_buffers 4 8k;
>         access\_log  /var/log/nginx/1.access.log urchin;
> 
>        ## Serve an empty 1x1 gif \_OR\_ an error 204 (No Content) for favicon.ico
>       location ~\* ^.+\\.(ico) {
>        #empty\_gif;
>         return 204;
>         expires max;
>       }
>       location ~\* ^.+\\.(jpg|jpeg|gif|css|png|js)(\\?\[0-9\]+)?$ {
>         root /var/www/1/;
>        access\_log off;
>         expires max;
>         }
> 
>         location / {
>             #root   /var/www/1/;
>             index  index.html index.php;
>             add\_header Last-Modified "";
>             if\_modified\_since off;
>             error\_page 404 = @drupal;
>         }
> 
>         location @drupal {
>                           rewrite ^(.\*)$ /index.php?q=$1 last;
>         }
> 
>         location ~ \\.php$ {
>                 #include /usr/local/nginx/conf/fastcgi\_params;
>                 include /etc/nginx/fastcgi\_params;
>                 fastcgi\_pass  localhost:9000;
>                 fastcgi\_index index.php;
>                 fastcgi\_read\_timeout 500m;
>                 fastcgi\_param  SCRIPT\_FILENAME  /var/www/1$fastcgi\_script\_name;
>  fastcgi\_param  SCRIPT\_NAME      $fastcgi\_script\_name;
>                 fastcgi\_param  QUERY\_STRING     $query\_string;
>                 fastcgi\_param  REQUEST\_METHOD   $request\_method;
>                 fastcgi\_param  CONTENT\_TYPE     $content\_type;
>                 fastcgi\_param  CONTENT\_LENGTH   $content\_length;
>                 fastcgi\_intercept\_errors on;
>         }
> }
> 
>
