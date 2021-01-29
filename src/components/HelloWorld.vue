<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">{{item.moneytype}}---{{item.money}}元</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'IndexPage',
    data () {
      return {
        list: [],
      }
    },
    created () {
      this.$get('/list').then(res => {
        this.list = res.data
      })
    },
  }
</script>

<style scoped>
  ul {
    list-style: none;
  }
</style>
