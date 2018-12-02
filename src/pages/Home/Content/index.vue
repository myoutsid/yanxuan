<template>
<section class="ct_all">
  <div class="ct_content">
    <div class="ct_slogon" >
      <span>
        -&nbsp新人专享礼&nbsp-
      </span>
    </div>

    <div class="ct_newvip">
        <div class="ct_left">
          <span>新人专享礼包</span>
          <img src="http://yanxuan.nosdn.127.net/d074d02fb86bff9bfbf4fa3010d1e1e6.png"  style="height: 150px">
        </div>
        <div class="ct_bottom">
            <span>新人拼团</span>
          <img src="http://yanxuan.nosdn.127.net/589f0990b8ba1d354a698731afacd2d4.png" style="height: 100px">
        </div>
        <div class="ct_top">
          <span>福利社</span>
          <img src="http://yanxuan.nosdn.127.net/d50517d5b6d49c2d571cde37fdb54841.png" style="height: 110px">
        </div>
    </div>
  </div>

</section>
</template>

<script>
  import BScroll from 'better-scroll'
  import Vuex from 'vuex'
  import {mapState} from 'vuex'

  export default {
    props:{
      data:Array
    },
    data() {
      return {}
    },
    mounted (){
//      this.$store.dispatch('getHomeData')

    },
    methods: {

    },
    computed: {
      ...mapState(['homeData']),

    },
    components: {


    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .ct_all
    position relative
    width 100%
    height 600px
    .ct_content
      position absolute
      width 100%
      height 600px
      background-color white
      .ct_slogon
        background-color white
        width 100%
        height 85px
        span
          display block
          line-height 85px
          text-align center
      .ct_newvip
        .ct_left
          position relative
          height 515px
          width 360px
          margin-left 20px
          background-color #F9E9CF
          float left
          span
            position absolute
            top 30px
            left 30px
          img
            float left
            margin-left 33px
            margin-top 130px
        .ct_top

          background-color papayawhip
          float left
          margin-left 10px
          width 350px
          height 255px
          position relative
          span
            position absolute
            left 30px
            top 30px
          img
            float right
            margin-top 30px
        .ct_bottom
          position absolute
          background-color #ffecc2
          height 255px
          width 350px
          right 10px
          bottom 0px
          span
            position absolute
            left 30px
            top 30px
          img
            margin-top 28px
            margin-right 15px
            float right

</style>
