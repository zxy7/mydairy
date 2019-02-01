# docker配置服务器
## docker下部署Tomcat运行war包
1. 从远程仓库拉取Tomcat镜像到本地   docker pull tomcat
1. 新建一个tomcat目录，并在目录下新建Dockerfile文件 
    ~~~
    mkdir tomcat
    cd tomcat
    touch Dockerfile 
1.  在Dockerfile文件中添加以下语句
    ~~~
    FROM tomcat
    MAINTAINER "问题库 <XX@163.com>"
    ADD QuestionBase.war /usr/local/tomcat/webapps/
    CMD ["catalina.sh", "run"]
    ~~~
1. 根据Dockerfile创建镜像
   ~~~
    docker build -t tomcatname .
1.  运行镜像
    ~~~
    docker run -p 8081:8080 tomcatname 
1. ~~~
   docker run -i -t --name HelloDocker -p 80:8080 tomcat /bin/bash
