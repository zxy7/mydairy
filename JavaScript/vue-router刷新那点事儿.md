通用组件根据路由刷新
1. watch 推荐
```
watch: {
    '$route': function (to, from) {
      // console.log(to)
      // console.log(from)
      // 赋值操作
    }
  },
```

1. 给router-view添加一个动态变化的参数
```
<router-view :key="key"></router-view>
computed: {
    key() {
        return this.$route.name !== undefined? this.$route.name + +new Date(): this.$route + +new Date()
    }
 }
 ```

1. this.$router.go(0)
强刷，整个页面加载，效果不好

1. provide / inject
```
// 父级组件提供 'foo'
var Provider = {
  provide: {
    foo: 'bar'
  },
  // ...
}
// 子组件注入 'foo'
var Child = {
  inject: ['foo'],
  created () {
    console.log(this.foo) // => "bar"
  }
  // ...
}
```