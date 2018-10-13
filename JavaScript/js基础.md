1. - typeof判断数据类型undefined,number,string,symbol,boolean,object,function,(不能判断null)
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

