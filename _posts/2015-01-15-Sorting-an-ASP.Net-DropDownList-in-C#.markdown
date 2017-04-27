---
layout: post
title:  "Sorting an ASP.Net DropDownList in C#"
date:   2015-01-15 11:18:56
categories: Development
keywords: "ASP.Net, C#, Sort DropDownList"
comments: true
---

After working on a few applications in ASP.NET I came to realize-as I am sure others have-that this seems to be no simple method sorting a DropDownList in C#. 

I took a little time to write a custom method that would allow developers to sort ASP.NET DropDownLists based in their list item 'Text' or 'Value'.
Thinking that developers may wish to add a default selection to their DropDownList, I went ahead and accommodated this scenario as well.
In Addition I also realized that some developers may add default selection list itmes with an index of "-1" from other sources such as a Database or flat file. 
Therefore, the method will first search for a default list item selection. If a default item exists (list item with value of "-1"), that Item will be added back to the top of the list and override any default selection parameter entered into the method.
However, if a default list item is not found in the DropDownList, a default selection item based on the defaultSelectionText parameter passed to the method will be created.
In the case that no default value is found and an empty string is passed to the defaultSelectionText parameter no default selection will be used. 

Below is the ASP.NET code snippet that can be used to sort a DropDownList in C#

{% highlight ruby linenos %}
	 protected void sortDropDownList(DropDownList ddl, string orderby, string defaultSelectionText) 
        {
            ListItem defautListItem = new ListItem();

            List<ListItem> listCopy = new List<ListItem>();
            foreach(ListItem item in ddl.Items)
                listCopy.Add(item);
                ddl.Items.Clear();

                foreach (ListItem li in listCopy)
                    if (li.Value.Equals("-1"))
                        defautListItem = li;
                        listCopy.Remove(defautListItem);

                if (orderby.ToLower().Equals("text"))
                    foreach (ListItem item in listCopy.OrderBy(item => item.Text))
                        ddl.Items.Add(item);
                else 
                    foreach (ListItem item in listCopy.OrderBy(item => item.Value))
                        ddl.Items.Add(item);

                if (!(defaultSelectionText.Equals("")) && (defautListItem.Text.Equals("")))
                    ddl.Items.Insert(0, new ListItem(defaultSelectionText, "-1"));
                else if (defautListItem.Text != "")
                    ddl.Items.Insert(0, defautListItem);
        }
{% endhighlight %}
