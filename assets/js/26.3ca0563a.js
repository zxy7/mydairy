(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{171:function(t,i,e){"use strict";e.r(i);var a=e(0),s=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"发现了git的小秘密"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发现了git的小秘密","aria-hidden":"true"}},[t._v("#")]),t._v(" 发现了git的小秘密")]),t._v(" "),e("h3",{attrs:{id:"如果你想把你的commit同时push到github和gitlab两个仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如果你想把你的commit同时push到github和gitlab两个仓库","aria-hidden":"true"}},[t._v("#")]),t._v(" 如果你想把你的commit同时push到github和gitlab两个仓库")]),t._v(" "),e("blockquote",[e("p",[e("strong",[e("code",[t._v("git remote add gitlab git@xxx.xx.xx.xx:username/projectname.git")])]),e("br"),t._v("\n//添加名为gitlab的远程仓库地址")])]),t._v(" "),e("blockquote",[e("p",[e("strong",[e("code",[t._v("git remote -v")])]),e("br"),t._v("\n//查看所有的克隆地址")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("gitlab  git@xxx.xx.xx.xx:username/projectname.git (fetch)\ngitlab  git@xxx.xx.xx.xx:username/projectname.git (push)\norigin  https://github.com/username/projectname.git (fetch)\norigin  https://github.com/username/projectname.git (push)\n")])])]),e("blockquote",[e("p",[e("strong",[e("code",[t._v("git push gitla")]),t._v("b")]),e("br"),t._v("\n//push到名为gitlab的远程仓库")])]),t._v(" "),e("p",[t._v("gitlab 是给"),e("code",[t._v("git@xxx.xx.xx.xx:username/projectname.git")]),t._v("这个远程仓库取的名字,可随意取")]),t._v(" "),e("p",[t._v("两个创建的projectname要一致")]),t._v(" "),e("h3",{attrs:{id:"关于github-gitlab上提交了commit贡献却不显示绿框框，蓝框框，心情简直前功尽弃"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于github-gitlab上提交了commit贡献却不显示绿框框，蓝框框，心情简直前功尽弃","aria-hidden":"true"}},[t._v("#")]),t._v(" 关于github,gitlab上提交了commit贡献却不显示绿框框，蓝框框，心情简直前功尽弃")]),t._v(" "),e("p",[e("strong",[t._v("补救方法")])]),t._v(" "),e("ol",[e("li",[e("code",[t._v("git config user.email")]),t._v(" 检查出现的邮箱是不是github的邮箱")]),t._v(" "),e("li",[t._v("如果你用的是gitlab邮箱commit and push到github，提交无contributions")]),t._v(" "),e("li",[t._v("去github网站的个人设置里的邮箱，添加上你的gitlab邮箱")]),t._v(" "),e("li",[t._v("此时不管你的"),e("code",[t._v("git config user.email")]),t._v(" 设置的是哪个邮箱，都可以commit到github上，以前未出现的contributions就会神奇的点亮。（如果一开始user.email就为空，sorry，救不活了，还是赶紧"),e("code",[t._v("git config user.email xxx@xx.com")]),t._v("设置邮箱）")]),t._v(" "),e("li",[t._v("gitlab同理，把github邮箱添加到个人设置里")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('ssh-keygen -t rsa -C "zxygl7@163.com"\ncat a.html\ngit diff HEAD -- a.html\ngit log --graph\n')])])])])}],!1,null,null,null);i.default=s.exports}}]);