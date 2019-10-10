const path =  require('path'); //引入path模块（node）
const resolve = (dir) => path.join(__dirname, dir); //将文件组成绝对路径

module.exports = {
  //部署应用包时的基本 URL
  publicPath: process.env.NODE_ENV === 'production' ? './' : './',
  //当运行 vue-cli-service build 时生成的生产环境构建文件的目录
  outputDir: 'distis',
  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: 'assets',
  // eslint-loader 是否在保存的时候检查 安装@vue/cli-plugin-eslint有效 false 关闭eslint
  lintOnSave: false,
  //是否使用包含运行时编译器的 Vue 构建版本。设置true后你就可以在使用template
  runtimeCompiler: true,
  // 生产环境是否生成 sourceMap 文件 sourceMap的详解请看末尾
  productionSourceMap: false,
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
  },
  devServer: {
    useLocalIp: true,
    port: 3020,
    host: '0.0.0.0',
    open: 'true',
    openPage: 'index.html',
    disableHostCheck: true,
    proxy: {
      '/fudan_retiree': {
        target: 'http://parking.benefitunion.cn',
        changeOrigin: true,
        ws: false
      }
    }
  }
};