module.exports = {
  base: "/mydairy/",
  title: "zanzan学习日记",
  description: "zanzan学习日记",
  head: [
    ["link", {
      rel: "icon",
      href: `/logo.png`
    }],
    ["link", {
      rel: "manifest",
      href: "/manifest.json"
    }],
    ["meta", {
      name: "theme-color",
      content: "#3eaf7c"
    }],
    ["meta", {
      name: "apple-mobile-web-app-capable",
      content: "yes"
    }],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black"
      }
    ],
    ["meta", {
      name: "msapplication-TileColor",
      content: "#000000"
    }]
  ],
  themeConfig: {
    repo: "zxy7/mydairy",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "编辑此页",
    activeHeaderLinks: false,
    sidebarDepth: 2,
    lastUpdated: "上次更新",
    sidebar: [{
        title: "2019",
        collapsable: false,
        children: ["./todolist"]
      },
      {
        title: "python",
        collapsable: true,
        children: ["/python/pdm表结构转json格式", "/python/python学习--文件压缩备份", "/python/第一个python爬虫"]
      },
      {
        title: "JavaScript",
        collapsable: true,
        children: ["/javascript/Promise", "/javascript/canvas签字板", "/javascript/apply-call-bind区分", "/javascript/input数据绑定", "/javascript/vue-router刷新那点事儿", "/javascript/vue双向绑定", "/javascript/js基础"]
      },
      {
        title: "java",
        collapsable: true,
        children: ["/java/record", "/java/eclipse使用记录"]
      },
      {
        title: "翻译",
        collapsable: true,
        children: ["/翻译/译-如何扩展SQLErrorCodesFactory", "/翻译/译-Javascript性能测试"]
      },
      {
        title: "其他",
        collapsable: true,
        children: ["/other/兼容性"]
      }
    ]
  }
};