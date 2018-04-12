以前每次看到做程序员一定要用google这句话，都是不以为然，百度不是一样用嘛，直到用上了google，才会发现，定位bug的能力弱绝不仅是我的问题，也再也没有烦人的垃圾广告。。。。

在此分享我的科学上网经历，望周知

----

##方案一：花钱买vpn
推荐我用的一款vpn：[加速度](http://jia.36fy.com/)  ，Windows/Mac/Android/iOS/Linux全平台通用，还不限制登录数量，里面有详细教程！！！！这里不多说，不放心的可以先买个2元试用，800M流量。（这个网址随时会被停用，自行搜索加速度官网）

举个栗子，我在windows电脑上下载了**shadowsocks**软件（纸飞机形状），配置好了服务器，然后启用代理服务器，ok了
![pc端shadowsocks软件](/img/ss1.png "pc端shadowsocks软件")

再举个栗子，在苹果手机上，用加速度提供的美国共享apple id帐号登录app store（现在没了），可自行淘宝，或者自己注册一个美版appleid（此前提是你已经有了vpn），下载好APP： **Shadowrocket**（国内账号下载不了，也搜不到），哈哈，我又偷偷用这个账号下载了好多app，干坏事。
![Shadowrocket](/img/ss2.png "Shadowrocket")

##方案二：自行搭建shadowsocks
首先，你得有一个国外的服务器，还是得花钱买。
此处我买了[vultr](https://www.vultr.com/?ref=7392026)，因为最近有活动（2018/4/12），新用户注册充值10美元 赠送$25，支付宝充值不参加，所以特地办了paypal，绑定储值卡，美滋滋，非常愉快的用65块钱买了可以用一年的vps。

下面选一个服务器配置部署：
1. Miami （这个还能选2.5美元一个月的）
1. Ubuntu 17.10 x64
1. $2.50/mo


服务器running后，用Xshell客户端登录，接下来傻瓜式VPS安装ShadowSocks

>`wget --no-check-certificate -O shadowsocks-all.sh https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks-all.sh`
`chmod +x shadowsocks-all.sh`
`./shadowsocks-all.sh 2>&1 | tee shadowsocks-all.log`

选择脚本（Python、R、Go、libev），任选一个：
>Which Shadowsocks server you'd select:
1.Shadowsocks-Python
2.ShadowsocksR
3.Shadowsocks-Go
4.Shadowsocks-libev
Please enter a number (default 1):

然后，输入密码和端口，直接回车用默认
>You choose = Shadowsocks-Go
Please enter password for Shadowsocks-Go
(default password: teddysun.com):
password = teddysun.com
Please enter a port for Shadowsocks-Go [1-65535]
(default port: 8989):
port = 8989
Press any key to start...or Press Ctrl+C to cancel

等待几分钟安装成功。

谷歌能上了，如果网速太慢安装bbr加速
同样xshell登录终端，执行后重启vps
>`wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh`
`chmod +x bbr.sh`
`./bbr.sh`


参考:[https://www.diycode.cc/topics/738]