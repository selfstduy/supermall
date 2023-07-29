<template>
  <tab-bar>
    <tabbar-item path="/home" activeColor="blue">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/active_home.svg" alt="">
      <div slot="item-text">首页</div>
    </tabbar-item>
    <tabbar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/management.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/active-application.svg" alt="">
      <div slot="item-text">分类</div>
    </tabbar-item>
    <tabbar-item path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/shopping.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/active_commodity.svg" alt="">
      <div slot="item-text">购物车</div>
    </tabbar-item>
    <tabbar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/user.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/active_avatar.svg" alt="">
      <div slot="item-text">我的</div>
    </tabbar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabbarItem from 'components/common/tabbar/TabbarItem'
export default {
  name: "Maintabbar",
  components: {
    TabBar,
    TabbarItem
  }
}
</script>

<style scoped>

</style>
