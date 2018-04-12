# mydairy

A. 可量化成长

＃日记＃     每个工作日

＃读书＃     1本/月

＃运动＃     Keep健身4次/周,瘦10斤

＃英语＃     报名一个课程，能够对话

＃写作＃     1篇公众号原创文章/月，翻译技术文章1篇

＃课程＃     完成3个课程的学习：python,优达学城，拿到驾照，学滑板

＃远行＃     海边/拉萨

＃算法＃     +1+1

# 目录
* 翻译
    * [译：如何扩展SQLErrorCodesFactory]()
* 是时候展现真正的技术了
    * [科学上网之ss](https://github.com/zxy7/mydairy/blob/master/%E6%98%AF%E6%97%B6%E5%80%99%E5%B1%95%E7%8E%B0%E7%9C%9F%E6%AD%A3%E7%9A%84%E6%8A%80%E6%9C%AF%E4%BA%86/%E7%A7%91%E5%AD%A6%E4%B8%8A%E7%BD%91%E4%B9%8Bss.md)
    * [优化图片加载速度]()
    * [maven+iview项目搭建]()
* 微信小程序
    * [微信录音与播放的语音acc文件如何保存]()
    * [微信小程序要求的 TLS 版本必须大于等于 1.2+https]()
    * [小程序集成阿里云语音识别]()
* 小仙女的日记
    * [博客历史遗留问题]()
    * [命令集合]()
    * [无visa卡注册美国appleid]()
* c#
    * [c#项目的发布]()
    * [powerbi报表集成到web项目]()
* java
    * [研究java.util.Date日期输出格式]()
* JavaScript
* python
    * [第一个python爬虫]()
    * [python学习--文件压缩备份]()


## 2018/1/25
1. 抽奖vue管理后台部门管理
1. 需配置图片的springboot虚拟路径  

## 2018/1/24
1.抽奖vue管理后台图片上传功能

## 2018/1/23
1. 一定要用命令行修改hosts文件，不然无效
1. intellij于2018/10/24到期

## 2018/1/18
小程序语音识别功能的实现
1.微信录音与播放的语音acc文件如何保存：录音结束后返回一临时文件地址，调用wx.savefile长存
1. acc语音文件如何转成pcm/wav格式
1. 阿里语音识别api

## 2018/1/16
1. ssl证书下载放至nginx安装目录cert
1. nginx.conf文件配置server
1. nginx -t  检查测试下配置无误
1. reload nginx服务，检查443端口是否在监听netstat -lan | grep 443
1. nginx域名转向，http更换https配置完成
1. 准备域名备案
1. http2.0+gzip加速网页加载，待研究


## 2018/1/15
1. http转https:申请ssl证书，正在审核中


## 2018/1/12周报
1. 管理后台添加申请撤销功能
1. 研究微信授权问题
1. 完成文件整理


## 2018/1/12
1. 破解微信浏览器打开的限制，使用fiddler抓包，扩展程序editthiscookie和user-agent switcher
1. 小程序待配置服务器

## 2018/1/11
1. 管理后台添加申请撤销功能

## 2018/1/10
1. 小程序写了一个页面

## 2018/1/9
1. 一个想法：唱歌红包的小程序

## 2018/1/8
1. 完成文件整理

## 2018/1/5周报
1. 取消订单存储过程调试完成
1. 抽奖ext后台完善
1. 整理雀巢水后台代码

## 2018/1/5
1. dir D:\weixin\src\main\java\com\drools /S > temp.xls  显示指定目录和所有子目录中的文件到指定文件夹
1. excel 数据排序和分列，fx，开始>查找>定位删空行
1. 列出所有文件
1. 新建文本文档，写入命令，文件名改成xx.bat，双击执行

## 2018/1/3
1. mysql语句：
	if exists()  end if;                         判断是够存在,（）中可以写select语句
	select a into @a from table where *=*;       从表中某条数据中取出某字段
	select count(*) into @allcnt from table;     取出表中数据的个数
	call function(a,b,c);                        执行函数
	select date_format(NOW(),'TR%Y%m%d%H%i%s');  日期转字符串，注意赋值的时侯（）包起来
        set a=now();                                 赋值语句
1. 取消订单存储过程调试完成

## 2018/1/2
1. 修改取消订单存储过程
1. 抽奖完善
1. select count(*) into x

## 12.29周报
1. 添加雀巢水后台管理订单取消功能
1. 完成ext后台抽奖

## 12.28
1. 添加后台管理订单取消
1. nginx地址转向

## 12.27
1. lsof -i 显示符合条件的进程情况
  lsof -i:端口号
  netstat -tunlp
1. nginx常用命令（要进入到nginx的目录）：
  开启：start nginx
  重启：nginx -s reload


## 12.25
1. 完成ext后台抽奖

## 12.19
1. 短信防范：加图形验证码，时间限制


## 12.18
1. 抽奖ext后台
1. mysql登陆失败原因，要开启mysql服务


## 12.13
1. 京东接口调试


## 12.12
1. 京东获取订单调试
1. 抽奖活动ext


## 12.11
1. 熟悉ext
1. chmod 777 XXX   赋予文件权限
1. MySQL Cluster


## 12.8周报
1. 研究搭建mysql集群
1. 研究vmware虚拟机的使用
1. 研究学习ubuntu操作系统
　　address 192.168.127.0
　　netmask 255.255.255.0
　　gateway 192.168.127.2

## 12.8
1. vi filename    编辑xxx文件
   i             插入
 esc + :q！      退出不保存
 esc + :wq！     退出保存
 cat filename    查看有没有成功

## 12.7
1. i tell you下载操作系统
1. 无法连接msk去计算机管理里开启vmware服务
1. vmware序列号：5A02H-AU243-TZJ49-GTC7K-3C61N
		VF5XA-FNDDJ-085GZ-4NXZ9-N20E6
		UC5MR-8NE16-H81WY-R7QGV-QG2D8
		ZG1WH-ATY96-H80QP-X7PEX-Y30V4
		AA3E0-0VDE1-0893Z-KGZ59-QGAVF



## 12.6
1. 研究目标:系统架构设计， 缓存、性能、高可用性、分布式、安全、备份等
1. 《黑客与画家》
1. 研究虚拟机,没装好，万万没想到，操作系统是盗版的。。。。


## 12.5
1. task的使用
1. 研究搭建mysql集群
1. bat批处理文件的使用
1. 研究脚本


## 12.2
1. 算法题+1


## 12.2周报
1. wx跳转问题
1. 添加重复提交校验
1. JD供应商接口调整
1. 双十二活动限制调整

## 11.30
1. 双十二活动放开限制


## 11.29
1. 调京东供应商api，雀巢方尚未准备好
1. 算法题+1
1. 改bug日常


## 11.28
1. 完成重复订单校验
1. 修改bug

