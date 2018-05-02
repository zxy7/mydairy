复制粘贴实在是累手，一切为了偷懒，琢磨着把如下pdm的表结构直接一键生成想要的json数据

![原始数据](/img/pdm1.png)

![目标数据](/img/pdm2.png)

1. 点击左上角选中整个表
1. 导出到excel保存
![操作步骤](/img/pdm3.png)
1. 打开excel，使用fx函数 =CONCAT("{title: '",A2,"',"," key:'",LOWER(B2),"'}")
![操作步骤](/img/pdm4.png)
1. ok

用python写个脚本最好不过了

1. 