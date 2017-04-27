---
layout: work01
title: "Genfor"
permalink: /genfor/
pageType: project
---

Genfor is a skeleton character generator written in PHP. Two separate files are used to supply a list of potential first and last names. The first name list is delimited by commas whereas the last name text file is delimited by the new line character:\n.

The project was built with Eclips, and XAMPP (PHP & Apache).

Eventually the PHP explode fucntion used to allocate the first and last names may be replaced with SQL database.

$firstName = explode(",", file_get_contents('FirstName.txt')); $lastName = explode("\n", file_get_contents('LastName.txt'));

[Genfor GitHub Repo](https://github.com/ABaker86/Genfor)
