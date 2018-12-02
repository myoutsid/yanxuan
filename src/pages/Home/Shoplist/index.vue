<template>
<div class="sp_all">

  <div class="sp_list">
    <div class="sp_head">
      <span class="head_one">品牌制造商直供</span>
      <span class="head_two">
        更多
        <i></i>
      </span>
    </div>
    <div class="one">
      <span>海外制造商</span>
      <img src="http://yanxuan.nosdn.127.net/802ff06dd3ef161db046eeb8db6cb4be.jpg" style="height: 100%;width: 100%">
    </div >
    <div class="two">
      <span>CK制造商</span>
      <img src="http://yanxuan.nosdn.127.net/c1e97be1b9730360c9c228b6a6448bca.png"  style="height: 100%;width: 100%">
    </div>
    <div class="three">
      <span>新秀丽制造商</span>
      <img src="http://yanxuan.nosdn.127.net/e550a44d2a7a68ed38e6cfd380e514aa.png"  style="height: 100%;width: 100%" alt="">
    </div>
    <div class="four">
      <span> MUJI制造商</span>
      <img src="http://yanxuan.nosdn.127.net/053ecfefd033a9acd2cb95483e14fcb6.jpg"  style="height: 100%;width: 100%" alt="">
    </div>
  </div>
</div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {},
    computed: {},
    components: {}
  }
//750*682
</script>

<style  lang="stylus" rel="stylesheet/stylus">
  .sp_all
    width 100%
    height 680px
    margin-top 20px
    background-color white
    position absolute
    .sp_list
      position relative
      .one
        width 360px
        height 280px
        background-color #fdfcf8
        position absolute
        left 10px
        top 85px
        span
          position absolute
          left 100px
          top:30px
          z-index 1
      .two
        width 360px
        height 280px
        background-color palegreen
        position absolute
        top 85px
        right 10px
        span
          position absolute
          left 100px
          top:30px
          z-index 1
      .three
        width 360px
        height 280px
        top 370px
        left 10px
        background-color white
        position: absolute;
        span
          position absolute
          left 100px
          top:30px
          z-index 1
      .four
        width 360px
        height 280px
        top 370px
        right 10px
        background-color peachpuff
        position absolute
        span
          position absolute
          left 100px
          top:30px
          z-index 1
      .sp_head
        position relative
        height 85px
        background-color white
        .head_one
          top 22px
          left 30px
          position absolute
        .head_two
          top 22px
          right 20px
          position absolute
</style>
