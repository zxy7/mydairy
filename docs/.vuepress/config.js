module.exports = {
  base: "/mydairy/",
  title: "zanzan学习日记",
  description: "zanzan学习日记",
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
        children: ["/python/c#项目的发布", "/python/powerbi报表集成到web项目"]
      },
      {
        title: "JavaScript",
        collapsable: true,
        children: ["/JavaScript/Promise", "/JavaScript/canvas签字板", "/JavaScript/apply,call,bind区分", "/JavaScript/input数据绑定", "/JavaScript/vue-router刷新那点事儿", "/JavaScript/vue双向绑定", "/JavaScript/js基础"]
      },
      {
        title: "java",
        collapsable: true,
        children: ["/java/record", "/java/eclipse使用记录"]
      },
      {
        title: "其他",
        collapsable: true,
        children: ["/other/兼容性"]
      }
    ]
  }
};