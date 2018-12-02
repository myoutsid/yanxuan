<template>
<section class="home_all" style="height: 100%">
  <div class="hm_parcel">
      <div class="hm_hd">
          <div class="hd_top">
            <img src="./image/logo.png">
            <input type="text"/>
            <button>登陆</button>
          </div>
          <div class="hd_dm">
            <div class="hd_wapper" ref="hd_wapper">
              <ul class="hd_nav">
                <li>推荐</li>
                <li>居家</li>
                <li>鞋包配饰</li>
                <li>服装</li>
                <li>电器</li>
                <li>洗护</li>
                <li>饮食</li>
                <li>餐厨</li>
                <li>婴童</li>
                <li>文体</li>
                <li>特色区</li>
              </ul>
            </div>
            <i class="iconfont icon-down"></i>
            <div class="hide_count">
              <ul class="hide_nav">
                <li>推荐</li>
                <li>居家</li>
                <li>鞋包配饰</li>
                <li>服装</li>
                <li>电器</li>
                <li>洗护</li>
                <li>饮食</li>
                <li>餐厨</li>
                <li>婴童</li>
                <li>文体</li>
                <li>特色区</li>
              </ul>
            </div>
          </div>
      </div>

      <Carousel :data="homeData.focusList"/>
      <!--<div class="swiper-container">-->
      <!--<div class="swiper-wrapper">-->
        <!--<div class="swiper-slide">-->
          <!--<a>-->
              <!--<img src=""/>-->
          <!--</a>-->
        <!--</div>-->
        <!--<div class="swiper-pagination"></div>-->
      <!--</div>-->
    <!--</div>-->
    <!---->
      <div class="hm_slogan">
        <span> <i class="iconfont icon-duihao"></i> 网易自营品牌</span>
        <span> <i class="iconfont icon-duihao"></i> 30天无忧退货</span>
        <span> <i class="iconfont icon-duihao"></i> 48小时快速退款</span>
      </div>
      <div class="hm_show">
        <span></span>
        <img src="">
        <img src="">
        <img src="">
      </div>
      <Content :data="homeData.popularItemList"/>
      <Shoplist />
      <Cross :data="homeData.popularItemNewUserList"/>
      <Bottom />
  </div>

</section>

</template>

<script>
  import Carousel from './Carousel'
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import Content from './Content'
  import Shoplist from './Shoplist'
  import Bottom from './Bottom'
  import Cross from './Cross'
  import Vuex from 'vuex'
  import {mapState} from 'vuex'
  export default {
    data() {
      return {

      }
    },
    components:{
      Content,
      Carousel,
      Shoplist,
      Bottom,
      Cross
    },
    mounted() {
//      分发获取home数据
      this.$store.dispatch('getHomeData').popularItemList

      this.$nextTick(() => {
        new BScroll(this.$refs.hd_wapper, {//滑动的元素需要设置宽高 否则将不会滑动  new swiper里设置标签对象应该是最外层的
          scrollX: true,
          click: true
        })
      })
//        new Swiper('.swiper-container',{
//          loop: true,
//          pagination: {
//            el: '.swiper-pagination',
//          },
//        })

    },
    computed:{
      ...mapState(['homeData']),

    },

//  watch:{
//      carousel(){
//        this.$nextTick( () => {
//          new Swiper('.swiper-container',{
//            loop: true,
//            pagination: {
//              el: '.swiper-pagination',
//            },
//          })
//
//        })
//
//      }
//  }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../node_modules/swiper/dist/css/swiper.css"
  @import "../../common/stylus/mixins.styl"
  .home_all
    /*position relative*/
    width 100%
    height 100%
    .hm_parcel

      position absolute
      height 100%
      width 100%
      background-color #f4f4f4
      .swiper-container
        width 100%
        height 400px
      .hm_hd
        background-color white
        .hd_top
          overflow hidden
          width 100%
          height 88px
          /*background-color pink*/
          img
            margin-top 25px
            height 40px
            float left
            margin-left 30px
            line-height 88px
          input
            margin-top 22px
            height 50px
            float left
            margin-left 28px
            background-color #f4f4f4
            outline none
          button
            margin-top 25px
            float right
            margin-right 35px
            outline none
            border 1px solid #b4282d
            background-color white
            color #b4282d
            border-radius 6px
            width 80px
            height 40px
            font-size 25px
        .hd_dm
          width 100%
          /*height 66px*/
          position relative
          .hd_wapper
            width 85%
            height 66px
            overflow hidden
            text-align center
            .hd_nav
              width 200%
              display block
              white-space nowrap

              li
                margin-top 17px
                margin-left 35px
                display inline-block


          i
            position absolute
            right 30px
            top 20px
          .hide_count
            display none
            width 100%
            height 330px
            /*background-color pink*/
            .hide_nav
              background-color white
              height 100%
              li
                line-height 50px
                text-align center
                font-size 23px
                margin-left 18px
                margin-top 20px
                margin-bottom 25px
                border-radius 6px
                border 1px solid #CCC
                background-color #FAFAFA
                width 160px
                height 56px
                float left

      .hm_slogan
        width 100%
        height 70px
        background-color white
        font-size 25px
        span
          margin-top 17px
          float left
          margin-left 35px
          .iconfont
            color #B4282D
</style>
