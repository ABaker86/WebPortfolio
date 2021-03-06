---
layout: post
title:  "Working my way around a new framework with keyboard shortcuts"
date:   2015-02-28 12:51:56
categories: Development
keywords: "ASP.Net"
comments: true
---
Using keyboard shortcuts to get the job done can save you a whole lot of time and headaches. 

When working on my latest project I have come to realize the significant benefits behind knowing a few simple keyboard shortcuts. Currently, I have been using a framework for developing ASP.NET applications. Although creating custom controls and developing the logic required behind them are somewhat easy to grasp. However, there are some instances when I have wanted to do something one way just to find out that the framework prevented me from accomplishing my intended goal. This is where knowing a few simple keyboard shortcuts comes into play. The shortcut I keep finding myself using the most is the find (ctrl/cmd + f )  and Go to Definition (V.S. - F12) shortcuts. 

For instance if I want to determining how the framework handles a particular method I can simply search (ctrl/cmd + f ) for what I am trying to do such as “Response.Redirect” or “Server.Transfer”. If I am searching the entire project solution this process will allow me to determine which method is used and how the parameters are formatted for each method before writing my own.

On the other hand if I find myself getting errors or am interested in how to genericize a method that is already in the framework to accommodate an edge case scenario I simply highlight the method and press F12. This will direct V.S. to the source page and method within the project. After reviewing methods in this way I can make a determination on how to go about refactoring the method to accommodate my particular situations needs. 
