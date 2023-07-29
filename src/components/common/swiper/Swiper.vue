<template>
  <!-- 轮播图 -->
  <div class="swiper" @mouseleave="mouseleave"  @mouseenter='mouseenter'>
    <div class="img" >
      <img @click="linkTo(item.linkUrl)" v-for="(item ,index) in  swipeList" :key ='item.id' :src="item.image" alt=""  v-show="index==currentIndex">
    </div>

    <!--底部小圈圈 -->
    <div class="circle" >
      <span v-for="(item,index) in  swipeList.length" :key='index' :class="{'current':index==currentIndex}"  @click="swithToCurrent(index)"></span>
    </div>
    <!-- 上一张 下一张按钮 -->
    <span  class="pre" @click='preEvent'>   </span>
    <span  class="next" @click="nextEvent">  </span>
  </div>
</template>

<script>
  export default {
    name: "Swiper",
    props:{
      swipeList:Array,
      default:[]
    },

  mounted(){
    const _this = this;
    this.timer= setInterval(function(){
      _this.nextEvent();
    },5000)
  },
  data(){
    return  {
      currentIndex:0,
      timer:null,
    }
  },
  methods: {
    // 下一张
    nextEvent(){
      this.currentIndex+=1;
      if(this.currentIndex>=this.swipeList.length){
        this.currentIndex=0;
      }
    },

    // 上一张
    preEvent(){
      this.currentIndex-=1;
      if(this.currentIndex<0){
        this.currentIndex= this.swipeList.length-1;
      }
    },
    //  小圈圈事件
    swithToCurrent(index){
      this.currentIndex= index;
    },
    //  鼠标离开开启定时器
    mouseleave(){
      const _this= this
      this.timer= setInterval(function(){
        _this.nextEvent();
      },5000)
    },
    mouseenter(){
      const _this= this
      this.timer &&clearInterval(_this.timer)
    },
    //  点击图片跳转
    linkTo(url){
      window.location.href= url
    }
  },

}
</script>

<style>
  .swiper{
    width:100%;
    height :160px;
    background-color: blanchedalmond;
    position: relative;
  }
  .swiper .img {
    width:100%;
    position: relative;
    height: 400px;
    transition: width 2s ;
  }
  .swiper .img  img {
    width:100%;
    height: 100%;
    position: absolute;
    left:0;
    top:0
  }
  .circle {
    position: absolute;
    bottom :5px;
    left:30%;
  }
  .circle span {
    width:15px;
    height: 15px;
    background:rgb(158, 158, 157);
    opacity: 0.7;
    display: inline-block;
    margin-left:15px;
    border-radius: 50%;
  }
  .circle .current {
    background-color: orange;

  }
  .pre{
    position: absolute;
    width:30px;
    height:30px;
    border-radius: 50%;
    background-color: orange;
    left:0;
    top:48%;
  }
  .next {
    position: absolute;
    width:30px;
    height:30px;
    border-radius: 50%;
    background-color: orange;
    top:48%;
    right:0;
  }
</style>



