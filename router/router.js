let context = require.context('./modules', true, /\.js$/)
let routes = context.keys().map(filePath => context(filePath).default)

//页面未找到的路由需要在路由最后面导入
routes.push({
  path: '*',
  component: () => import('@/components/404.vue'),
})

export default routes
