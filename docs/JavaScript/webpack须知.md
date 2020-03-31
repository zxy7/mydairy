loader

- postcss-loader webpack 处理 css，检查 CSS，支持变量和 mixin，补全，加前缀 Autoprefixer，pixel-to-vw
- style-loader 通过注入 style 标签把 css 加入 dom 中
- css-loader 解释@import
- url-loader 小的图片被转换成 base64 嵌入到 js 或 CSS
- ExtractTextWebpackPlugin 从 bundle 中提取 css 到单独的文件

plugin

- OptimizeCSSAssetsPlugin 优化，最小化 css
- SplitChunks 抽取公有代码
- HtmlWebpackPlugin 生成添加了 script 的 html
- DefinePlugin 创建编译时可配置的全局变量
- code spliting 按需加载

页面分屏 chrome 插件
vscode 插件 mdlint
