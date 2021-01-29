import { $get, $post } from './axios'

export default Vue => {
  Vue.mixin({
    data () {
      return {}
    },
    methods: {
      $get,
      $post,
    },
  })
}
