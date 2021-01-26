module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 2414,
    disableHostCheck: true,
    open: true,
    // proxy: 'http://192.168.1.77:5009',
  },
  chainWebpack: config => {
    config.plugin('html').tap(rag => {
      // 也可以在public的index.html中直接修改title
      rag[0].title = 'Tian'
      return rag
    })
  },
}
