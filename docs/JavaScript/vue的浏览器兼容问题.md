# vue的浏览器兼容问题
![http://ruanyf.github.io/es-checker/](http://ruanyf.github.io/es-checker/)可以检测浏览器支持es6性能的百分比

360浏览器兼容模式打开一片空白，控制台报错[vuex] vuex requires a Promise polyfill in this browser. 

因为Vue使用了ES6 Promise，而IE浏览器不支持，解决方法是: 使用babel-polyfill转换 

```npm install --save-dev babel-polyfill```

webpack.config.js中添加：

```js
require('babel-polyfill');
entry: {
    app: ['babel-polyfill', './src/main.js']
  },
```
现在浏览器上出现页面，但是数据加载不出，控制台报错：URLSearchParams”未定义"，解决办法是：

```npm install url-search-params-polyfill --save```

在index.js中引入：

```import 'url-search-params-polyfill';```

页面完全加载出，页面上日期全部显示：NaN-aN-aN aN:aN:aN 

js中new Date(string)在IE不兼容报错：显示NaN,chrome没问题

在chrome中使用，使用
```new Date("20xx-xx-xx 00:00:00")```
显示正常，但在IE中显示NaN，如果使用
```new Date("20xx/xx/xx 00:00:00")```
则可以解决兼容问题（chrome，IE，firefox，opera均测试正常）。

```js
var str="20xx-xx-xx 00:00:00";
str.replace(/-/g, "/")   
```

IE11完全正常，

IE10部分样式不兼容，部分页面展示不出，报错：
```
[vue-router] Failed to resolve async component default: SyntaxError: 语法错误```
导致因素 import Swiper from 'swiper' 
改成 import Swiper from 'swiper/dist/js/swiper.min.js'即可

IE9绝大部分样式不兼容，浮动
