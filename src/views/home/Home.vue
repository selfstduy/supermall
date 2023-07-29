<template>
  <div id="home">
    <nav-bar class="homenav"><div slot="center">购物街</div></nav-bar>
    <swiper :swipeList="banners"></swiper>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Swiper from 'components/common/swiper/Swiper'
  import {getHomeMultidata} from 'network/home'
  export default {
    name: "Home",
    components: {
      NavBar,
      Swiper
    },
    data() {
      return {
          banners: [],
          recommends: []
      }
    },
    created() {
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
        // console.log(banners);
      })
    }
  }
</script>

<style scoped>
  .homenav {
    background-color: #ff2940;
    color: white;
  }
</style>
