
#  seo是什么？
SEO（Search Engine Optimization）:汉译为搜索引擎优化。 

搜索引擎优化是一种利用搜索引擎的搜索规则来提高目前网站在有关搜索引擎内的自然排名的方式。

#  seo是根据什么排名？
* 外链总数
* 域名权威度
* 深度主题内容（原创性，时效性和易用性）
* 篇幅长的页面
* https
* 关键词布局
* 网站服务器的稳定速度快
* 流量点击

#  为何vue项目的不利于seo？
互联网上的信息存储在无数个服务器上，任何搜索引擎要想回答用户的搜索，首先要把网页存在自己本地的服务器上，这靠的就是网络爬虫。它不停的向各种网站发送请求，将所得到的网页存储起来。那么它怎么知道往哪发送请求呢？通常的做法是利用网页之间的链接从一个网页出发，提取出指向其他页面的链接，把它们当成将下次要请求的对象，不停重复这个过程。

seo 本质是一个服务器向另一个服务器发起请求，解析请求内容。但一般来说搜索引擎是不会去执行请求到的js的，而vue的页面是由js渲染出来的


#  如何优化vue项目的seo？
## 1. 页面预渲染prerender（解决SEO,首屏问题）
由于页面较少，且预渲染相对于SSR比较简单，预渲染可以极大的提高网页访问速度。而且配合一些meat插件，完全可以满足SEO需求。

Prerender服务需要有NodeJs环境支持，如果之前服务器环境没有NodeJs需要先进行安装。

在webpack的配置如下：
    
    var PrerenderSpaPlugin = require('prerender-spa-plugin')

    var webpackConfig = merge(baseWebpackConfig, {
    plugins: [
        //这段代码意思是拷贝static文件至根目录使得渲染的文件可以找到js、css
        new CopyWebpackPlugin([{
        from: 'static'
        }]),
        new PrerenderSpaPlugin(
        //将渲染的文件放到dist目录下
        path.join(__dirname, '../dist'),   
        //需要预渲染的路由信息
        [ '/','/introduct','/culture','/Chairman','/president','/fund','/news','/honor' ],
        {
        //在一定时间后再捕获页面信息，使得页面数据信息加载完成
            captureAfterTime: 50000,
            //忽略打包错误
            ignoreJSErrors: true,
            phantomOptions: '--web-security=false',
            maxAttempts: 10,
        }
        ),
另：Prerender需要路由使用history模式，使用hash模式会导致失效。

通俗的说：预渲染的本质就是在打包的时候通过插件将js提前执行一遍，然后再将有内容的html放到服务器上，这样爬虫自然可以抓到，首屏的问题也可以得到解决。
## 2. 服务端渲染（后端渲染SSR） 
浏览器直接收到经过服务器计算之后的呈现给用户的最终的HTML字符串，浏览器只进行了HTML的解析，以及通过操作系统提供的操纵显示器显示内容的系统调用在显示器上把HTML所代表的图像显示给用户。

好处：前端耗时少（前端只负责将html进行展示），利于SEO

坏处：网络传输数据量大，占用（部分、少部分）服务器运算资源，response 出的数据量会（稍）大点，模板改了前端的交互和样式什么的一样得跟着联动修改

vue2.0提供了[服务端渲染](https://cn.vuejs.org/v2/guide/ssr.html)

**SSR 完全指南**

在 2.3 发布后我们发布了一份完整的构建 Vue 服务端渲染应用的指南。这份指南非常深入，适合已经熟悉 Vue, webpack 和 Node.js 开发的开发者阅读。请移步 [ssr.vuejs.org](https://ssr.vuejs.org/zh/)。

**Nuxt.js**

从头搭建一个服务端渲染的应用是相当复杂的。幸运的是，我们有一个优秀的社区项目 [Nuxt.js](https://nuxtjs.org/) 让这一切变得非常简单。Nuxt 是一个基于 Vue 生态的更高层的框架，为开发服务端渲染的 Vue 应用提供了极其便利的开发体验。更酷的是，你甚至可以用它来做为静态站生成器。推荐尝试。



## 3. [路由采用html5 history模式](https://router.vuejs.org/zh-cn/essentials/history-mode.html)
vue-router 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。

路由的 history 模式可以充分利用 history.pushState API 来完成 URL 跳转而无须重新加载页面。