# 译-如何扩展SQLErrorCodesFactory
> 原文[https://pietrowski.info/2008/09/how-to-extend-sqlerrorcodesfactory/](https://pietrowski.info/2008/09/how-to-extend-sqlerrorcodesfactory/)

我在spring框架中发现了一些有趣的功能。Spring为你提供了将sql错误代码映射到异常类型的功能。默认情况下，spring框架分发文件中有一个名为sql-error-codes.xml的文件，它为常用数据库（DB2，Derby，H2，HSQL，Informix，MS-SQL，MySQL，Oracle，PostgreSQL，Sybase）定义。

此键采取[java.sql.DatabaseMetaData](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html) [databaseProductName](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDatabaseProductName())属性。每个驱动都应提供适当的实施。本文将为您提供如何添加其他数据库或扩展定义到更多SQL代码的方式。

在我们阅读java文档时，默认文件捆绑在spring.jar中，位于“ org/springframework/jdbc/support/sql-error-codes.xml" 。所以第一个解决方案是简单地提取这个文件，添加我们想要的，然后放回去。这个解决方案有很多缺点，例如当我们升级时，我们必须再次重复我们的步骤。如果我们继续阅读java文档，当读到——

如果未被类路径根目录中的文件覆盖（例如在“/ WEB-INF / classes”目录中），则读取此包中的默认文件。

第二种选择是在根路径中提供名为'sql-error-codes.xml'的文件。让我们开始编码。

我们的App.java非常简单。

    public class App { 

        public static void main（String [] args）{ 

            SQLErrorCodesFactory errorCodes = SQLErrorCodesFactory.getInstance（）; 

            SQLErrorCodes errorCode = errorCodes.getErrorCodes（“MySQL”）; 

        } 

    }


![](/img/fy1.png)


如果我们在调试模式下运行，我们可以看到类似这样的东西。这是MySQL数据库默认的SQL错误代码定义。现在我们添加'sql-error-codes.xml'文件。我刚刚从默认文件中复制了MySQL bean，并向badSqlGrammarCodes添加了一些代码。这次结果如下所示：

![](/img/fy2.png)

这里是执行日志，有趣的加粗行：
```
Sep 2, 2008 9:54:46 PM 

org.springframework.beans.factory.xml.XmlBeanDefinitionReader loadBeanDefinitions

INFO: Loading XML bean definitions from class path resource [org/springframework/jdbc/support/sql-error-codes.xml]

Sep 2, 2008 9:54:46 PM 

org.springframework.beans.factory.xml.XmlBeanDefinitionReader loadBeanDefinitions

**INFO: Loading XML bean definitions from class path resource [sql-error-codes.xml]**

**Sep 2, 2008 9:54:46 PM**

**org.springframework.beans.factory.support.DefaultListableBeanFactory registerBeanDefinition**

**INFO: Overriding bean definition for bean 'MySQL': replacing [Generic bean: ... defined in class path resource [org/springframework/jdbc/support/sql-error-codes.xml]] with [Generic bean: ... defined in class path resource [sql-error-codes.xml]]**

**Sep 2, 2008 9:54:46 PM org.springframework.jdbc.support.SQLErrorCodesFactory**

**INFO: Found custom sql-error-codes.xml file at the root of the classpath**

Sep 2, 2008 9:54:46 PM org.springframework.jdbc.support.SQLErrorCodesFactory 

INFO: SQLErrorCodes loaded: [DB2, Derby, H2, HSQL, Informix, MS-SQL, MySQL, Oracle, PostgreSQL, Sybase]
```
要记住的一点是，我们的定义并没有覆盖所有的定义，而只覆盖了具有相同bean id的定义。这在[SQLErrorCodesFactory javadoc](https://docs.spring.io/spring/docs/2.5.x/javadoc-api/org/springframework/jdbc/support/SQLErrorCodesFactory.html)中并不明显, 它意味我们覆盖了所有的bean。

如果我们有不同的数据库，或者我们想要扩展或更改SQL代码映射为异常，我们可以使用这种机制。该应用程序非常简单，但你可以[下载它，并自己尝试](http://pietrowski.info/wp-content/uploads/2008/09/sqlerrorcode.tgz)。

第一次翻译，读顺不容易~

