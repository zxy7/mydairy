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
    sidebar: [
      // {
      //   title: "2019",
      //   collapsable: false,
      //   children: ["./README"]
      // },
      {
        title: "javascript",
        collapsable: true,
        children: ["/javascript/js基础", "/javascript/vue的浏览器兼容问题"]
      },
      {
        title: "翻译",
        collapsable: true,
        children: ["/翻译/译-如何扩展SQLErrorCodesFactory", "/翻译/译-Javascript性能测试"]
      },
      {
        title: "记录",
        collapsable: true,
        children: ["/record/命令集合", "/record/小发现", "/record/发现了git的小秘密", "/record/docker配置服务器", "/record/download", "/record/科学上网之ss"]
      },
      {
        title: "微信小程序",
        collapsable: true,
        children: ["/微信小程序/小程序记录", "/微信小程序/wx-TLS-https", "/微信小程序/微信小程序讲解"]
      },
      {
        title: "python",
        collapsable: true,
        children: ["/python/pdm表结构转json格式", "/python/python学习--文件压缩备份", "/python/第一个python爬虫"]
      },
      {
        title: "java",
        collapsable: true,
        children: ["/java/record", "/java/eclipse使用记录", "/java/maven_iview_project"]
      },
      {
        title: "其他",
        collapsable: true,
        children: ["/other/兼容性", "/other/关于seo"]
      }
    ]
  }
};