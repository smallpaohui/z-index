import installMixin from './mixin'

const plugin = {
  install (Vue, { clear } = {}) {

    //复制出旧的console.log方法
    let oldConsole = console.log
    //修改并覆盖console.log方法。使其在生产环境中隐藏console
    console.log = (...str) => {
      if (!clear) {
        oldConsole(...str)
      }
    }

    //全局混入(可拎出去单独写文件。也可以像下面一样丢在这里一起)
    installMixin(Vue)

    //自定义指令(ex:v-xxx)
    Vue.directive('flex', (el) => {
      el.style.display = 'flex'
    })

    //全局过滤器(ex:{{xxx|fmtGender}})
    Vue.filter('fmtGender', val => ['男', '女'][val] || '未知')

    //全局组件(写一个vue文件，然后引入，然后注册为全局组件)
    // Vue.component('z-xxx', xxx)
    //自动化引入文件=>require.context('文件夹名称',true(是否遍历整个文件夹),/\.vue$/(正则筛选文件))

    //Vue实例扩展(项目中可以使用this.$axios来调用axios)
    // Vue.prototype.$axios = axios
  },
}
export default plugin
