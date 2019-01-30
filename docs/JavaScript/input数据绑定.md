## 小程序

### wxml
<input id='orderid' placeholder="请输入编号"  value='' bindinput="bindinputvalue"/>

### js
```
Page({
  data: {
    submitData:{
      orderid:''
    }
  },
  bindinputvalue:function(e){
    console.log(e)
    this.data.submitData[e.currentTarget.id]=e.detail.value
  }
})
```