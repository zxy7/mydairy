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
    sidebar: [
      {
        title: "2019",
        collapsable: false,
        children: ["/"]
      },
      {
        title: "python",
        collapsable: true,
        children: ["/python/aa"]
      },
      {
        title: "java",
        collapsable: true,
        children: ["/java/record"]
      }
    ]
  }
};
