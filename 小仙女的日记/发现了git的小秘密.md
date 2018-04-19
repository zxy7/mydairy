## 如果你想把你的commit同时push到github和gitlab两个仓库

> **git remote add gitlab git@xxx.xx.xx.xx:username/projectname.git**   
//添加名为gitlab的远程仓库地址

> **git remote -v**  
//查看所有的克隆地址

gitlab  git@xxx.xx.xx.xx:username/projectname.git (fetch)

gitlab  git@xxx.xx.xx.xx:username/projectname.git (push)

origin  https://github.com/username/projectname.git (fetch)

origin  https://github.com/username/projectname.git (push)


> **git push gitlab**    
//push到名为gitlab的远程仓库

gitlab 是给git@xxx.xx.xx.xx:username/projectname.git这个远程仓库取的名字,可随意取

两个创建的projectname要一致


## 关于github,gitlab上提交了commit贡献却不显示绿框框，蓝框框，心情简直前功尽弃

**补救方法**
1. git config user.email 检查出现的邮箱是不是github的邮箱
1. 如果你用的是gitlab邮箱commit and push到github，提交无contributions
1. 去github网站的个人设置里的邮箱，添加上你的gitlab邮箱
1. 此时不管你的git config user.email 设置的是哪个邮箱，都可以commit到github上，以前未出现的contributions就会神奇的点亮。（如果一开始user.email就为空，sorry，救不活了，还是赶紧git config user.email xxx@xx.com设置邮箱）
1. gitlab同理，把github邮箱添加到个人设置里