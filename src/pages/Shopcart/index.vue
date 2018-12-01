<template>
  <div class="all">
    <!--头部-->
    <header class="head">
      <span class="logo">购物车</span>
      <a href="javascript:;" class="shopcart_nav">
        <span>领券</span>
      </a>
    </header>
    <div class="nav_list">
      <ui>
        <li>
          <i class="iconfont icon-yuanquan"></i>
          30天无忧退货</li>
        <li>
          <i class="iconfont icon-yuanquan"></i>
          48小时快速退款</li>
        <li>
          <i class="iconfont icon-yuanquan"></i>
          满88元免邮费</li>
      </ui>
    </div>
    <!--内容区-->
    <div class="coutent">
      <div class="ct_icon">
        <i class="iconfont icon-gouwuchekong"></i>
        <span class="ct_text">去添加点什么吧~~~</span>
        <button class="ct_bt">登陆</button>
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

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
.all
  overflow hidden
  background-color #ccc
  /*头部*/
  .head
    position fixed
    top 0
    left 0
    right 0
    z-index 100
    height 80px
    background-color white
    /*text-align center*/
    .logo
      position absolute
      left 43%
      line-height 80px
      font-size 40px
    .shopcart_nav
      position absolute
      line-height 80px
      right 60px
      span
        color #B4282D
      &:after
        content
        position: absolute;
        background-color: #d9d9d9;
        left: 0;
        width: 100%;
        height: 1px;
        -webkit-transform-origin: 50% 100% 0;
        transform-origin: 50% 100% 0;
        bottom: 0;
  .nav_list
    z-index 1
    width 100%
    height 60px
    position absolute
    top 80px
    font-size 25px
    li
      i
        font-size 5px
      float left
      margin-left 45px
      margin-top 30px
  /*内容区*/
  .coutent
    position absolute
    width 100%
    height 100%
    background-color #f4f4f4
    .ct_icon
      position absolute
      top 50%
      left 50%
      transform translate(-50%,-50%)
      display flex
      flex-direction column
      i
        font-size 250px
        text-align center
        color #ccc
      .ct_text
        color #ccc
        text-align center
      button
        margin-top 60px
        width 500px
        height 90px
        color white
        font-size 35px
        background-color #b4282d
        border: 0;
        outline: none
</style>
