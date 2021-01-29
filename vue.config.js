module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 2414,
    disableHostCheck: true,
    open: true,
    proxy: 'http://simbajs.com:7890',
  },
  chainWebpack: config => {
    config.plugin('html').tap(rag => {
      // 也可以在public的index.html中直接修改title
      rag[0].title = 'Tian'
      return rag
    })
  },
}
