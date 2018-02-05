---
layout: post
title:  "Programmatically Configuration NLog"
date:   2018-02-05 07:01:56
categories: Personal
keywords: "C#, NLog, Logging"
comments: true
---

Over the past few weeks I have been looking into various logging methodologies. After a vast analysis of the plethera of logging practices avaialble I can only conclude that although everyone seems to have an idea as to what is needed, noone appears to be able to identify a standard approach to logging.

So I have looked into a few possible solutions for some of the projects that I have been working on over the past few month which include the following based on industry popularity in the .Net world: 
- log4Net
- NLog
- Microsoft.Extensions.Logging

When selecting a solution, the following criteria was needed:
- A Common Framework that is not likely to be unsupported in the next few years
- A means to configure the logging components outside of configuration files.
- Ease of Use

I reviewed each option based on the criteria and came to the conclusion to use the NLog framework for my application logging needs at this time.

Below is and exampl of how the NLog framework can be configured Programmatically.

{% highlight ruby linenos %}
	 protected void sortDropDownList(DropDownList ddl, string orderby, string defaultSelectionText) 
        {
            {% highlight ruby linenos %}
	 protected void sortDropDownList(DropDownList ddl, string orderby, string defaultSelectionText) 
        {

	        const string FILE_FORMAT_KEY = @"${date:format=HH\:mm\:ss}|
			[${pad:padding=-5:inner=${level:uppercase=true}}]|${message}|
			${ exception}|${callsite}|${stacktrace}|${callsite-linenumber}";
            // Step 1. Create configuration object 
            LoggingConfiguration config = new LoggingConfiguration();

            // Step 2. Create targets and add them to the configuration 
            ColoredConsoleTarget consoleTarget = new ColoredConsoleTarget();
            config.AddTarget("console", consoleTarget);

            FileTarget fileTarget = new FileTarget();
            config.AddTarget("file", fileTarget);

            DatabaseTarget databaseTarget = new DatabaseTarget();
            config.AddTarget("database", databaseTarget);

            // Step 3. Set target properties 
            consoleTarget.Layout = FILE_FORMAT_KEY;
            consoleTarget.DetectConsoleAvailable = true;

            fileTarget.FileName = "${basedir}/Logs/${cached:${date:yyyy-MM-dd}}.log";
            fileTarget.Layout = FILE_FORMAT_KEY;
            fileTarget.ArchiveFileName = "${basedir}/Logs/Archive/${date:format=yyyy-MM-dd}.log";
            fileTarget.ArchiveDateFormat = "yyyy-MM-dd";
            fileTarget.ArchiveNumbering = ArchiveNumberingMode.Date;
            fileTarget.ArchiveEvery = FileArchivePeriod.Day;
            fileTarget.MaxArchiveFiles = 30;

            //databaseTarget.ConnectionString = @""
            //databaseTarget.ConnectionStringName = "NLog";
            //databaseTarget.DBProvider = "System.Data.SqlClient";
            //databaseTarget.CommandText = @"insert into dbo.NLog (
            //                               Application, Logged, Level, Username, Message,Logger, Properties, CallSite, Exception
            //                             ) values(
            //                               @application, @logged, @level, @username, @message,@logger, @properties @callsite, @exception
            //                             ); ";


            //databaseTarget.Parameters.Add(
				new DatabaseParameterInfo("@application", @"${ appsetting:name = AppName:default = Unknown\: set AppName in appSettings }"));
            //databaseTarget.Parameters.Add(
				new DatabaseParameterInfo("@logged", "${date}"));
            //databaseTarget.Parameters.Add(
				new DatabaseParameterInfo("@level", "${level}"));
            //databaseTarget.Parameters.Add(
				new DatabaseParameterInfo("@message", "${message}"));
            //databaseTarget.Parameters.Add(
				new DatabaseParameterInfo("@username", "${identity}"));
            //databaseTarget.Parameters.Add(
				new DatabaseParameterInfo("@logger", "${logger}"));
            //databaseTarget.Parameters.Add(
				new DatabaseParameterInfo("@properties", "${all-event-properties:separator=|}"));
            //databaseTarget.Parameters.Add(
				new DatabaseParameterInfo("@callsite", "@{callsite}"));
            //databaseTarget.Parameters.Add(
				new DatabaseParameterInfo("@exception", "${exception:tostring}"));

            // Step 4. Define rules
            LoggingRule colorConsoleRule = new LoggingRule("*", LogLevel.Debug, consoleTarget);
            config.LoggingRules.Add(colorConsoleRule);

            LoggingRule fileRule = new LoggingRule("*", LogLevel.Warn, fileTarget);
            config.LoggingRules.Add(fileRule);

            LoggingRule databaseRule = new LoggingRule("*", LogLevel.Trace, databaseTarget);
            config.LoggingRules.Add(databaseRule);
            // Step 5. Activate the configuration
            LogManager.Configuration = config;

            // Example usage
            logger.Trace("trace log message");
            logger.Debug("debug log message");
            logger.Info("info log message");
            logger.Warn("warn log message");
            logger.Error("error log message");
            logger.Fatal("fatal log message");
        }
{% endhighlight %}
        }
{% endhighlight %}
