# js基础
1. - `typeof` 判断数据类型`undefined`,`number`,`string`,`symbol`,`boolean`,`object`,`function`,(不能判断`null`,`array`)
   - `instanceof` 检测原型（`a.__proto__==b.prototype`)
   - `f.constructor == F`
   - `Object.prototype.toString.call('')="[object String]" ` 
1. `_proto_`指向创建该对象的构造函数的原型（`F.prototype`），通过`_proto_`组成的原型链寻找不属于该对象的属性
    `prototype`是每个函数都有的属性
1. `this` 指调用函数的对象，构造函数`this`绑定里他创建的对象，不会改变，`call`，`apply`,`bind`可以改变`this`指向，箭头函数没有`this`，他的`this`取决于外面的函数
1. `Child`继承`Parent`
    - 构造函数在`Child`里面`Parent.call(this)`,相当于拷贝`Parent`，浪费内存，不会继承`Parent.prototype`
    - 原型继承`Child.prototype=new Parent()` ，引用属性会被共享
    - 组合
        - 属性用在`Child`里面`Parent.call(this)`，
        - 方法用`Child.prototype =Object.create(Parent.prototype)`;继承`Parent`方法，（类似写法`Child.prototype = new Parent（)`和 `Child.prototype = Parent.prototype）`
        - `Child.prototype.constructor = Child`;修复`Child`的`constructor` 指向
    - ``` js
        class Child extends Parent{

       }
       ```
1. `let` 不能在声明前使用
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
        - ```js
           debounce(func,wait){
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
     - ```js
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
    ```js
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
    ```js
    Function.prototype.mycall=function(context){
        var contenxt=context||window
        context.fn=this
        var args=[...arguments].slice(1)
        context.fn(...args)
        delete context.fn
    }
    ```
    - 模拟实现apply
    ```js
    Function.prototype.myapply=function(context){
        var contenxt=context||window
        context.fn=this
        context.fn(...arguments[1])
        delete context.fn
    }
    ```
    - 模拟bind
    ```js
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
1. jquery对象转dom对象 $("#a").get(0),反之，$(dom对象)
-------------
1. 性能
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
        - 懒加载
            - src里用一个占位图
            - window.onscroll+节流/防抖函数
            - 根据document.body.scrolltop||document.documentElement.scrolltop
            - 给所有的图片加class，函数里面for循环遍历img，判断图片的offsettop是否小于scrolltop，小于则替换src，该class删除
    - css放head
    - script放body底
    - cdn加载静态资源
    - webpack打包压缩，按路由拆分代码，按需加载const F=（）=>import("")
    - window.onerror报错
1. xss,跨站脚本攻击，评论里一个带恶意script，转义，内容安全策略 (CSP），设置 Header 中的 Content-Security-Policy
1. csrf，验证referer
-----------
1. mvvm：model和view独立，由viewmodel作为桥梁只关心数据和业务的处理，不关心view如何处理数据
    - vue数据劫持：vue遍历data中所有的属性，Object.defineProperty(obj,key,{})实现数据绑定，监听数据的set和get事件，给{{属性}}添加发布订阅，get中添加订阅，set中发布，手动触发一次属性的 getter 来实现发布订阅的添加
1. 路由：监听url的变化，匹配路由规则，显示页面，无须刷新，由hash模式和history模式
1. virtual dom：操作dom费时，用js对象模拟dom对象，操作js对象比操作dom省时， diff算法之比对同层节点，O(n)复杂度，局部更新dom
    - tags字符串，document.createElement(tag)
    - props对象，el.setAttribute(key, props[key])
    - children数组，
    - key唯一表示标识，el.setAttribute('key', key)
--------------
1. nextTick是在下次 DOM 更新循环结束之后执行延迟回调
1. vue生命周期：new vue实例，beforecreate：data，props还没有
1. 组件
    - 组件的data必须是函数，每个实例都可以维护return的对象的独立的拷贝，不会影响其他实例
    - 组件注册：Vue.component全局注册(在根 Vue 实例创建之前发生)，局部注册components：{ComponentA}
    - 每个组件只有一个根元素
    - emit方法传入事件名，向父组件触发监听的事件，以修改子组件的prop
    - v-model是v-bind：value=“x”  v-on：input=“x=$event.target.value”，默认名为value 的prop和input事件
    - 原生事件v-on：事件名.native修饰符
    - 动态组件加keep-live缓存
1. 计算属性computed:{xx:{get:function(){},set:function(){}}，基于它们的依赖进行缓存的，
    侦听属性watch:{xx:function(){}}
1. 冒泡排序
    ```js
    function maopao(arr){
        var item;
        for(var i=0;i<arr.length;i++ ){
            for(var j=i;j<arr.length;j++){
                if(arr[j]>arr[j+1]){
                    item=arr[j]
                    arr[j]=arr[j+1]
                    arr[j+1]=item
                }
            }
        }
    }
    ```
1. 全排列
    ```js
    function swap(array,i,j){
        var t;
        t = array[i];
        array[i] = array[j]; 
        array[j] = t;
    }
    function permutation(ls) {
        return ls.length ? ls.reduce((acc, x) => acc.concat(permutation(ls.filter(e => e != x)).map(a => [x].concat(a))), []) : [[]];
    }
    console.log(permutation([1, 2, 3]));
    ```
1. json转树形结构
    ```js
    var nodes = [
        {"id":2,"cname":"第一级1","ipid":0},
        {"id":3,"cname":"第一级1","ipid":2},
        {"id":4,"cname":"第一级1","ipid":2},
        {"id":5,"cname":"第一级1","ipid":4},
        {"id":6,"cname":"第一级1","ipid":3},
        {"id":7,"cname":"第一级1","ipid":0}
    ]		
    function transDate(list,idstr,pidstr){
        var result = [],temp = {};
        for(i = 0; i < list.length; i++){
            temp[list[i][idstr]]=list[i];//将nodes数组转成对象类型
        }
        for(j=0; j<list.length; j++){
            tempVp = temp[list[j][pidstr]]; //获取每一个子对象的父对象
            if(tempVp){//判断父对象是否存在，如果不存在直接将对象放到第一层
                if(!tempVp["nodes"]) tempVp["nodes"] = [];//如果父元素的nodes对象不存在，则创建数组
                tempVp["nodes"].push(list[j]);//将本对象压入父对象的nodes数组
            }else{
                result.push(list[j]);//将不存在父对象的对象直接放入一级目录
            }
        }
        return result;
    }
    console.log(transDate(nodes,"id","ipid")); 
    ```
1. ajax，axios，fetch
    -  ajax异步 async：true默认，对原生XHR的封装，还增添了对JSONP的支持
        ```js
        ajax({
            method: 'GET',
            url: '/',
            success: function(responseText){}
        })
        function ajax(options){
            let xhr = new XMLHttpRequest()
            xhr.open(method, url)
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4){
                if(xhr.status>=200 && xhr.status < 400){
                    success && success.call(null, xhr.responseText, xhr)
                }else if(xhr.status >= 400){
                    error && error.call(null, xhr.status, xhr)
                }
                }
            }
            xhr.send()
        }
        ```
    - promise实现Axios本质上也是对原生XHR的封装，提供了一些并发请求的接口，客户端支持防止CSRF
        ```js
        axios({method: 'GET', url: '/x'}).then(SuccessFn1, commonErrorFn)
        function ajax(options){
            return new Promise(function(resolve, reject){ 
                let xhr = new XMLHttpRequest()
                xhr.open(method, url)
                xhr.onreadystatechange = function(){
                    if(xhr.readyState === 4){
                        if(xhr.status>=200 && xhr.status < 400){
                            resolve(xhr.responseText) 
                        }else if(xhr.status >= 400){
                            reject(xhr) 
                        }
                    }
                }
                xhr.send()
            })
        }
        ```
    - fetch 
    ```js
    try {
        let response = await fetch(url);
        let data = response.json();
        console.log(data);
    } catch(e) {
    console.log("Oops, error", e);
    }
    ```


1. hash和history
    - hash原理window.onhashchange事件
    - history原理history api （pushState、replaceState、go、back、forward),在window对象上监听popState()事件
        ```js
        history.go(-2);//后退两次
        history.go(2);//前进两次
        history.back(); //后退
        hsitory.forward(); //前进
        ```
1. computed和watch
    - computed根据一个变量计算得到另一个属性，计算属性具有缓存，多次访问不必重新执行那个函数，一个数据依赖于其他数据时使用
    - watch是监听一个值的变化，执行对应函数，在数据变化是做些事情
1. 异步编程
    - 回调函数(f2写成f1的回调函数)不利于阅读维护，每个任务只能制定一个回调函数
        ```js
            function f1(callback){
                setTimeout(function(){
                    //f1的代码
                    callback();
                },1000);
            }
        ```
    - 事件监听
        事件驱动模式，取决于某个事件是否发生
        ```js
         function f1(){
             setTimeout(function(){
                 //f1的代码
                 f1.trigger('done');
             },1000);
         }
         f1.on('done',f2)
        ```
    - 发布/订阅
        ```js
        jQuery.subscribe("done",f2)
        function f1(){
            setTimeout(function(){
                //f1的代码
                jQuery.publish('done');
            },1000);
        }
        jQuery.unsubscribe("done", f2);
        ```
    - promise对象,为异步编程提供统一接口,回调函数变成链式写法，流程很清楚
    ```js
        f1().then(f2)//then（成功回调函数，失败毁掉函数）
        f1().then(f2).then(f3);//链式写法是在回调函数执行完后return返回结果作为下一个then的回调函数的参数
        f1().then(f2).fail(f3);
    ```



