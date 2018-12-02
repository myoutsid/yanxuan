<template>
<div class="cs_all">

  <div class="cs_logimg">
    <img src="https://yanxuan.nosdn.127.net/cfe8ed06eca142828bacb5e35015770f.jpg">
  </div>

  <div class="cs_list" ref="cs_list">
    <ul class="cs_ul" >
      <li class="cs_li" v-for="item in data" :key="item.id">

        <div class="container_img">
          <img :src="item.listPicUrl">
        </div>
          <span>{{item.name}}</span>
          <span class="cs_retailPrice">￥{{item.retailPrice}}</span>
      </li>

    </ul>
  </div>
</div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    props:{
      data:Array
    },
    data() {
      return {}
    },
    mounted(){
//      this.$nextTick(() => {
//      new BScroll(this.$refs.cs_list, {//滑动的元素需要设置宽高 否则将不会滑动  new swiper里设置标签对象应该是最外层的
//        scrollX: true,
//        click: true
//      })
//    })
    },
    watch:{
      data(){
        this.$nextTick(() => {
          new BScroll(this.$refs.cs_list, {//滑动的元素需要设置宽高 否则将不会滑动  new swiper里设置标签对象应该是最外层的
            scrollX: true,
            click: true
          })
        })
      }
    },
    methods: {},
    computed: {},
    components: {}
  }

</script>

<style  lang="stylus" rel="stylesheet/stylus">
  .cs_all
    position relative
    top 690px
    width 100%
    height 800px

    overflow hidden
  .cs_logimg
    width 100%
    height 400px
    background-color white
    img
      width 100%
      height 100%
  .cs_list
    float left
    /*margin-top 400px*/
    width 100%
    height 400px
    .cs_ul
      width 300%
      height 100%
      .cs_li
        height 100%
        width 220px
        margin-left 25px
        float left

        position relative
        .container_img
          background-color #f4f4f4
          height 220px
          width 100%
          img
            width 100%
            height 100%
        span
          margin-top 10px
          display block
          font-size 23px
        .cs_retailPrice
          color #dc9b9e
          position absolute
          bottom 80px
          left 10px
          display inline-block
</style>
