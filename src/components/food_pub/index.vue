<template>

<footer class="thefooter">
  <a href="javascript:;" class="foot_nav"  :class="{on: $route.path==='/home'}" @click="goto('/home')">
    <span>
      <i class="iconfont icon-shouye2"></i>
    </span>
    <span>首页</span>
  </a>
  <a href="javascript:;" class="foot_nav" :class="{on: $route.path==='/classify'}" @click="goto('/classify')">
    <span>
      <i class="iconfont icon-fenlei"></i>
    </span>
    <span>分类</span>
  </a>
  <a href="javascript:;" class="foot_nav" :class="{on: $route.path==='/discern'}" @click="goto('/discern')">
    <span>
      <i class="iconfont icon-fangkuai"></i>
    </span>
    <span>识物</span>
  </a>
  <a href="javascript:;" class="foot_nav" :class="{on: $route.path==='/shopcart'}" @click="goto('/shopcart')">
    <span >
      <i class="iconfont icon-gouwuchekong"></i>
    </span>
    <span>购物车</span>
  </a>
  <a href="javascript:;" class="foot_nav" :class="{on: $route.path==='/nom'}" @click="goto('/nom')">
    <span>
      <i class="iconfont icon-icon-"></i>
    </span>
    <span>个人</span>
  </a>

</footer>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      goto(path){
        this.$router.replace(path)
      }
    },
    computed: {},
    components: {}
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
.thefooter
  position fixed
  z-index 100
  left 0
  right 0
  bottom 0
  background-color #fff
  width 100%
  height 80px
  display flex
  .foot_nav
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    margin 5px
    color #999999
    &.on
      /*background-color #b4282d*/
      color #b4282d !important
    .iconfont
      font-size 35px
    span
      font-size 24px
      margin-top 2px
      margin-bottom 2px
</style>
