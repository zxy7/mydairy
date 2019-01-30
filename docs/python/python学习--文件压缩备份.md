# python学习--文件压缩备份
学习[简明python教程](http://www.kuqin.com/abyteofpython_cn/ch10.html) 时，在编写一个python脚本，解决文件备份压缩的问题上花的时间最长，原因在于zip命令无法执行，其二，源代码文件中 %s 多加了引号

![备份脚本](/img/py1.png )


源代码，圈出来的命令应为zip -qr %s %s
解决方法：因为是windows环境，首先下载安装winrar，安装路径添加至环境变量，在cmd中执行zip，不再显示‘zip不是内部或外部命令’则表示安装成功

见如下代码，windows电脑上有效，[github代码](https://github.com/zxy7/py/blob/master/cope.py)

![备份脚本](/img/py2.png )

**注意**：

  1. 文件路径可以写成    r'C:\Documents'  或   'C:\\Documents'       
  2. rar命令也可以压缩，但是会隐藏文件也压缩进去，zip 命令不会压缩隐藏文件