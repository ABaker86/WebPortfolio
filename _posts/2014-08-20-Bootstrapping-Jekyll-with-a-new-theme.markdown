---
layout : post
title : Bootstrapping Jekyll with a new theme
date : 2014-08-20 01:08:01
category : Design
keywords: "BootStrap Jekyll, Bootstrap, Jekyll theme"
---

Last Tuesday I made the decision to make my little piece of the Internet slightly more visually appealing. 

I added a few colors to the header, footer, and navigation. However, I thought that it looked a little bland even for me. Hey, if I am going to have to look at this site every time I write a new post or decide to a feature it should probably look a little less dull. So, yesterday I leafed though a few bootstrap themes and came across one that I though would be perfect for this site. I fond the theme on [BlackTie](http://www.blacktie.co/?s=stanley), a website created by a very skilled Web designer by the name of Carlos Alvarez who creates Free Web Themes using Bootstrap. The theme is called 'Stanley'. It looked like a really simple and clean theme that I could tie into Jekyll without too much hassle.  So, if you are looking for a really nice bootstrap theme for you website, I recommend leafing though BlackTie.co.

Regardless, after a few hours of hacking away I was able to produce a functional implementation of the bootstrap theme tied into Jekyll. What do you think of it? One of the hiccups that I came across, involved trying to figure out how to implement a multi-page layout within the liquid blogging platform.   However, I was able to workaround the issue by simply creating static navigation links in the  header. I then added front-matter each of the projects pages so that the in future updates I will be able to generate page listings with liquid templating rather than static elements. 
