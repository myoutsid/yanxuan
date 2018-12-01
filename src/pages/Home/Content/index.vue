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
          <!--<img :src="data['0'].listPicUrl">-->
        </div>
        <div class="ct_bottom"></div>
        <div class="ct_top"></div>
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
        height 515px
        width 360px
        margin-left 20px
        background-color #F9E9CF
        float left
      .ct_top
        background-color papayawhip
        float left
        margin-left 10px
        width 350px
        height 255px
      .ct_bottom
        position absolute
        background-color palegreen
        height 255px
        width 350px
        right 10px
        bottom 0px

</style>
