<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isactive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabbarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'aqua'
    }
  },
  data() {
    return {
      // isactive: false
    }
  },
  computed: {
    isactive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isactive ? {color:this.activeColor} : {}
    }
  },
  methods:{
    itemClick () {
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    align-content: center;
    height: 49px;
    cursor: pointer;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    font-size: 14px;
    margin-top: 3px;
    vertical-align: middle;
  }
  /*.tab-bar-item .active{*/
  /*  color: aqua;*/
  /*}*/
</style>
