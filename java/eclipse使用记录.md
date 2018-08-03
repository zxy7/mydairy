1. 快速生成注释：alt+shift+j，将光标放在方法名上
1. 设置Tomcat字符集为utf-8,在server.xml中添加URIEncoding="UTF-8"，彻底解决中文乱码问题
    <Connector connectionTimeout="20000" port="8080" protocol="HTTP/1.1" redirectPort="8443" URIEncoding="UTF-8"/>

