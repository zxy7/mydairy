1. - typeof判断数据类型undefined,number,string,symbol,boolean,object,function,(不能判断null,array)
   - instanceof检测原型（a.__proto__==b.prototype)
   - f.constructor == F
   - Object.prototype.toString.call('')="[object String]"  
1. _proto_指向创建该对象的构造函数的原型（F.prototype），通过_proto_组成的原型链寻找不属于该对象的属性
    prototype是每个函数都有的属性
1. this 指调用函数的对象，构造函数this绑定里他创建的对象，不会改变，call，apply,bind可以改变this指向，箭头函数没有this，他的this取决于外面的函数
1. Child继承Parent
    - 构造函数在Child里面Parent.call(this),相当于拷贝Parent，浪费内存，不会继承Parent.prototype
    - 原型继承Child.prototype=new Parent() ，引用属性会被共享
    - 组合
        - 属性用在Child里面Parent.call(this)，
        - 方法用Child.prototype =Object.create(Parent.prototype);继承Parent方法，（类似写法Child.prototype = new Parent（)和
        Child.prototype = Parent.prototype）
        - Child.prototype.constructor = Child;修复Child的constructor指向
    - ``` 
        class Child extends Parent{

       }
       ```
1. let 不能在声明前使用
1. 非匿名的立即执行函数会把函数名当作该函数的内部只读属性
1. 闭包是函数A return函数B，函数B使用里A的变量，缓存了这个变量
1. for循环中的定时可以用let定义i，或者用闭包（function（i）{})(i),或者setTimeout的第三个参数i
1. 基本类型保存在栈，引用类型保存在堆（通过栈中的内存地址找到堆中的值）
1. - 浅拷贝:Object.assign({},a)    {...a}值解决第一层的拷贝
    - 深拷贝：
         - JSON.parse(JSON.stringify(object))忽略了undefined，函数，循环引用的对象
         - jquery.extend(true,target,object)递归思路
         - new Function（"return "+obj.toString()）拷贝函数，数组中是对象就递归，递归浅拷贝
1. - es6模块化export/import，babel编译成require/exports，异步导入，值引用，实时绑定，导入导出的值都指向同一个内存地址，改变了会有影响，
   - conmmonjs是node中的规范，module.exports暴露， require引入，Browserify 解析，支持动态导入，同步导入，值拷贝，改变了不会影响导入值
1.  
    - 防抖,防二次点击,边输入边搜索
        - button的disabled属性
        - ```debounce(func,wait){
            let timer=0
            return function(...args)=>{
                if(timer) clearTimeout(timer)
                timer=setTimeout(()=>{
                    func.apply(this,args)
                },wait)
            }
            }
            ```
    - 节流 每隔一段时间执行
     - ```
        throttle(fn,wait,time){
            var timer=null;
            var previous=null;
            return function(){
                var now=+new Date()
                if(!previous) previous=now;
                if(now-previous>time){
                    clearTimeout(timer)
                    fn()
                    previous=now
                }
                clearTimeout(timer)
                timer=setTimeout(()=>{
                    fn()
                },wait)

            }
        }
       ```
1. setTimeout 
    - 倒计时
    ```
    function dida(wait){
        wait--;
        console.log(wait)
        t=setTimeout(()=>{
            dida(wait)
        },1000)
        if(wait==0) clearTimeout(t)
    }
    ```
1. - 模拟实现call
    ```
    Function.prototype.mycall=function(context){
        var contenxt=context||window
        context.fn=this
        var args=[...arguments].slice(1)
        context.fn(...args)
        delete context.fn
    }
    ```
    - 模拟实现apply
    ```
    Function.prototype.myapply=function(context){
        var contenxt=context||window
        context.fn=this
        context.fn(...arguments[1])
        delete context.fn
    }
    ```
    - 模拟bind
    ```
    Function.prototype.mybind=function(context){
        var me=this
        var args=[...arguments].slice(1)
        return function F(){
            if(this instanceof F) {
                return new me(...args,...arguments)
            }
            return me.apply(context,args.concat(...arguments))
        }
    }
    ```
1. promise，then/catch/try，all，race，resolve，reject
1. 0.1 + 0.2 != 0.3原因： JS 采用 IEEE 754 双精度版本（64位），0.1的二进制是个二进制无限循环小数，parseFloat((0.1+0.2).toFixed(10))
1. 数组去重
    - es6新数据结构Set，值唯一，set.add（item），[...new Set（arr）]/Array.from(new Set(arr))去重的数组
    - forEach（）/for循环，indexof判断索引
    - 对象属性值唯一
1. 垃圾回收GC算法，将内存（堆）
    - 新生代：存活时间端的对象，新分配的对象存from，满了后，将存活的对象复制到to，from清空，互换
    - 老生代：存活时间长，数量多的对象，标记清除算法和标记压缩算法，to空间超过25%就移到老生代空间
-----------------
1. 事件触发：w3c先捕获，到了目标元素再冒泡，冒泡（默认false），ie只支持冒泡，另外给一个元素同时都加了冒泡和捕获，先冒泡在捕获
    - window.event.cancelBubble = true关闭捕获冒泡
    - event.stopPropagation（）阻止事件冒泡
    - event.preventDefat（）阻止默认行为（超链接跳转）
1. 事件代理/委托：把注册事件加在父节点上，节省内存
1. 跨域：
    - jsonp动态添加script，用get请求，jquery dataType：jsonp
    - cors跨域资源共享 服务器端设置access-control-allow-origin
    - nginx代理跨域
    - document.domain二级域名相同时可用
    - postmessage（data，origin），h5 api
    - websoket ，h5
    - 开发环境设置浏览器： disable-web-security 关闭安全策略
    - vue nodejs中间件设置代理服务器proxy changeorigin：true
1. 事件循环：js在执行过程中产生执行环境，执行环境按顺序加入执行栈，异步的代码会被挂起加入到task队列，执行栈为空会从task任务队列中拿出需要执行的代码放到队列中
    - settimeout有4ms的延时
    - 主线程=>process.nexttick=>promise=>Object.observe(微任务)=>settimeout（宏任务）
1. cookie属性value，http-only（不能通过js获取，减少xss），secure（https才能携带），same-site（跨域不能带，减少csrf）
1. serviceWorker缓存文件
1. 浏览器渲染：
    - 处理html构建dom树
    - cssom树
    - 合并成一个渲染树
    - 布局计算节点位置
    - 绘制
1. load事件是等dom，css，js，图片加载完毕，domcontentloaded是html被加载解析
1. 重绘改变外观不影响布局，回流是布局改变
-------------
1.性能
    - dns预解析<link rel="dns-prefetch" href="//com">
    - 缓存
        - 强制缓存cache-control，expires，返回200
        - 协商缓存last-modified/if-modified-since，etag/if-none-match，返回304
    - http2.0多路复用，header压缩
    - 预加载 link rel="preload"
    - 预渲染 link rel="prerender"
    - 懒执行，懒加载（图片）
    - 图片优化
        - 压缩图片
        - 雪碧图
        - 小图用base64
    - css防head
    - script防body底
    - cdn加载静态资源
    - webpack打包压缩，按路由拆分代码，按需加载const F=（）=>import("")
    - window.onerror报错
1. xss,跨站脚本攻击，转义