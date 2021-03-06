import Vue from 'vue'
import routes from './router'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
})
//路由跳转前
router.beforeEach((to, from, next) => {
  NProgress.start()//开启进度条
  next()
})

router.afterEach(() => {
  NProgress.done()//关闭进度条
})

export default router
