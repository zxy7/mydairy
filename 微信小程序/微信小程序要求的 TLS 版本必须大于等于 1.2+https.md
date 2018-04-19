## 1.环境
Ubuntu 16.04 64位

openssl    1.0.2

nginx    1.10.3

## 2.背景
1、请求域名在request合法域名中

2、基于 https 协议

3、TLS 版本 1.2+

## 3.解决方法
配置 nginx.conf文件  ，然后 nginx -s reload重启

贴上部分配置内容：


#https

    server {

        listen 443;

        server_name   101.132.109.211;

        ssl on;

        root    /var/www/html/xyzan/index-wx.html;

        index   index.html;

        ssl_certificate  cert/214445830400499.pem;

        ssl_certificate_key  cert/214445830400499.key;

        ssl_session_timeout 5m;

        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;                                                                                #按照这个协议配置

        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;           #按照这个套件配置

        ssl_prefer_server_ciphers on;

        location / {

            root html;

            index index.html index.htm;

            proxy_pass  http://101.132.109.211:3000;

        }

    }

## 4.检测
访问 https://cloud.tencent.com/product/ssl#userDefined10 ，输入域名，检查ATS 检测是否通过，注意nginx需要重启

我的小程序：胡说8道

