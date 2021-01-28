<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'App',
    created () {
      console.log('22222')
    }
  }
</script>

<style>
  #app {
    padding: 0;
    margin: 0;
  }
</style>
