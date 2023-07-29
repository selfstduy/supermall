<template>
  <div id="app">
    <router-view></router-view>
    <maintabbar></maintabbar>
  </div>
</template>

<script>
  import Maintabbar from 'components/content/Maintabbar'
  export default {
    name: 'App',
    components: {
      Maintabbar
    }
  }
</script>
<style>
  @import "assets/css/base.css";
</style>
