<!--1. 首先引入文件的依赖 -->
npm install sass-loader node-sass --save-dev
<!-- 2. 找到node_modules/react-scripts/config/webpack.config.dev.js文件和webpack.config.prod.js文件（两个文件都要改） -->
<!-- module 的最后一项添加配置： -->
{
    test: /\.scss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"]
}

