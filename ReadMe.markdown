abaker86.github.io/WebPortfolio
==============================
My minimal and responsive Jekyll web portfolio and blog.

## Getting Started
1. You will need [Ruby](https://www.ruby-lang.org/en/) and [Bundler](https://bundler.io/) to use [Jekyll](https://jekyllrb.com/). Following [Using Jekyll with Bundler](https://jekyllrb.com/tutorials/using-jekyll-with-bundler/) to fullfill the enviromental requirement.
2. Installed dependencies in the Gemfile:
:  
```$ bundle install ```
:  
3. Serve the website (localhost:4000 by default)
:  
```$ bundle exec jekyll serve  # alternatively, npm start```

### Post FrontMatter

File Name: `2023-09-02-awesome-title.md`
```cs
---
layout: post
title:  "awesome title"
date:   2023-09-20 09:21:53 -0400
categories: update
author: Adam Baker
excerpt_separator: <!--more-->
---

Write some stuff here <!--more-->
the rest of the post here.
```