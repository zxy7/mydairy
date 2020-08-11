1. position
   - absolute 相对于父级非 static 元素
   - relative 相对于自身
   - fixed 相对于窗口
   - sticky 相对定位和固定定位的混合
   - static
1. bfc 块级格式化上下文，主要解决高度塌陷，清除浮动，相邻元素 margin 重叠
   - postion ： fixed / absolute
   - float 不为 none
   - overflow 不为 visible
   - 根元素
   - display：inline-block/flex/table-cell/table-caption/
1. 响应式布局

   - 媒体查询
   - 百分比
   - rem 根元素 html 的 font-size，默认 1rem=16px，可以设置成 62.5%
   - em 相对于父元素
   - vw、vh 相对于视窗的宽度、高度，1vw=视窗宽度的 1%
   - 图片响应式 srcset/sizes 根据不同分辨率显示最合适的图像
   - flex、grid
   - viewport <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

1. 设置百分比时

   - height 、width 相对于直接父元素宽高
   - top、bottoom 相对非 static 父级高度
   - left、right 相对非 static 父级宽度
   - padding、margin 水平垂直方向都相对于直接父元素宽度
   - border-radius、translate、background-size 相对于自身宽度

1. 图片优化

   - 新图像格式，webp，JPEG-2000，考虑各浏览器兼容，使用
     <picture>
     <source type="image/webp" srcset="pyramid.webp">
     <img src="pyramid.png" alt="">
     </picture>
   - srcset/sizes 切换不同分辨率
   - 压缩
   - url-loader 把小的图标转 base64，缺点是 size 体积变大，优点是不会发请求
   - 图片懒加载，优先加载可视区域的图片，别的先用占位符，监听滚动
   - 减少 http 请求，雪碧图，消除多余的图片，尽量用 css 实现
   - cdn 负载均衡 加速
   - 用缓存
   - 在 HTTP/1.0 和 HTTP/1.1 协议下，由于 Chrome 只支持同域同时发送 6 个并发请求，使用 cdn 域名分片，提升并发的请求数量，或者使用 HTTP/2 协议

1. 输入命令直接新建一个基础项目，包含基础布局、代码规范（使用 Prettier 格式化代码、eslint 代码检查使用 airbnb 规范、commitlint、）、集成 easy-mock、接口请求调用封装了 axios，请求头加鉴权 token 设置 sso 统一登录，统一响应格式 code，data，msg、菜单权限、统一的错误拦截、loading 封装。

   可以快速响应新项目的创建，减少繁琐的配置工作。
   看了 create-react-app 源码，发现 cra 在创建应用时支持自定义 script 和 template，
   通过 react-scripts 定制化自己项目所需要的开发依赖，template 自定义项目的模版，发布到 NPM，--scripts-version。

1. 排序

- 快排 nlog2n n2
- 冒泡 n ～ n2 相邻元素两两比较
- 插入排序

1.  伪类： :hover :focus :first-child 单冒号
    伪元素：::before/:before 、 ::first-letter/:first-letter 双冒号
1.  鉴权：
    - 发送 http 请求，返回 401，输入用户名密码，通过 base64 加密后把秘文放在请求头 Authorization 里，服务端收到后解密返回 200
    - cookie session 第一次请求时服务器会在响应头设置 set-cookie，第二次请求时请求头会自动带上 cookie，登出时服务端删 token 缺点：app 端没有 cookie，非 https 下 CSRF 攻击危险
    - token 用户信息、时间戳和由 hash 算法加密的签名构成，服务端发送，客户端存在 cookie 或者 localstorage 里面，服务端不保存 token，服务端做校验，登出时 localstorage 删除 token
    - 授权第三方登录
1.  websocket 建立链接，可以双向通信
    短轮询，常轮询，sse：服务端主动推送
1.  getDerivedStateFromProps
    getSnapshotBeforeUpdate
    useEffect= componentDidMount 和 componentDidUpdate ，compontUnMount
1.  Render Props 的核心思想是，通过一个函数将 class 组件的 state 作为 props 传递给纯函数组件
    React 的高阶组件主要用于组件之间共享通用功能而不重复代码的模式
1.  静态方法，不能由类创建的实例调用，直接在类上调用
    实例方法
1.  HTTP 是一个在计算机世界里专门在「两点」之间「传输」文字、图片、音频、视频等「超文本」数据的「约定和规范」。
    204 响应头无 body
    402 错误是要求付款，你请求的内容不能免费获取
    301 永久重定向，需要新的 url
    get 是从服务端请求资源，安全且幂等，只读 ，长度 2-8k
    post 是传资源到服务端，不安全不幂等，新增、提交修改资源，20M
    http1.0 短链接
    http1.1 默认持久链接 keep alive，允许同时发请求，但是响应是按顺序处理，会队头阻塞
    HTTPS 在 HTTP 与 TCP 层之间增加了 SSL/TLS 安全传输层，HTTP/3 把 TCPP 层换成了基于 UDP 的 QUIC。
    HTTP 协议 无状态 明文传输，被抓包的话账号密码没了 80
    https
    - 在 tcp 三次握手之后，还需进行 SSL/TLS 的握手过程，才可进入加密报文传输。
    - CA 证书保证服务端是可信的
    - 端口:443
    - 采用对称加密和非对称加密结合的混合加密，公钥加密，私钥解密
1.  捕获异常
    - try catch 不可捕获异步错误
    - window.onError 可捕获异步
1.  兼容
    - 样式兼容
      - Normalize.css 抹平
      - 加前缀 webpack postcss-loader autoprefixer
      - ie9 以下 opacity
    - 交互兼容
      - addEventListener attachEvent
      - removeEventListener detachEvent
      - 日期 '2018-07-05' '2018/07/05'
    - 浏览器 hack
1.  webpack Scope Hoisting 变量提升
    tree shaking 怎么判断引入
1.  proxy vue2 object.definproperty
    vue3 proxy
1.  造轮子
1.  兼容方面
1.  沉淀技术方案，
    技术选型，
    前端工程化，持续发布、webpack、git、代码质量管理 lint/sonar、自动化测试
    性能优化，seo、fcp、性能调试、ssr、服务器端、
    容器、docker
1.  移动端 1 像素问题

    - 伪类 + transform
      ```css
      li {
        position: relative;
      }
      li:after {
        position: absolute;
        bottom: 0;
        left: 0;
        content: "";
        width: 100%;
        height: 1px;
        border-top: 1px solid black;
        transform: scaleY(0.5); //注意兼容性
      }
      ```
    - viewport + rem(ios)
      判断像素比 devicePixelRatio
    - box-shadow

    ```css
    .box-1px {
      box-shadow: inset 0px -1px 1px -1px black;
    }
    ```

1.  选择器

1.可疑区域增加 Try-Catch
2.全局监控 JS 异常 window.onerror
3.全局监控静态资源异常 window.addEventListener
4.捕获没有 Catch 的 Promise 异常：unhandledrejection
5.VUE errorHandler 和 React componentDidCatch
6.监控网页崩溃：window 对象的 load 和 beforeunload
7.跨域 crossOrigin 解决


// fps检测
let fpsObj = {};
let lastRecord = +new Date();
(function crt(t) {
  const fps = t - crt.t;
  crt.t = t;
  requestAnimationFrame(crt);
  if (fps > 20) {
    const now = +new Date();
    if (now - lastRecord > 1000) {
      lastRecord = now;
      // fps小于50帧/秒记录时间和fps
      fpsObj[+new Date()] = fps;
    }
  }
})();

/**
 * 计时器
 * @param {Funciton} fn 执行函数
 * @param {Number} delay  延迟时间ms
 */
export const animationTimer = (fn, delay) => {
  let timer = requestAnimationFrame(fnLoop);
  let sTime = null;
  async function fnLoop(timeStamp) {
    let ret = true; // 是否继续
    if (!sTime || timeStamp - sTime > delay) {
      sTime = timeStamp;
      ret = await fn();
    }
    // 取消之前的timer对象 避免内存泄露
    cancelAnimationFrame(timer);
    if (ret) {
      timer = requestAnimationFrame(fnLoop);
    }
  }
  return () => timer;
};