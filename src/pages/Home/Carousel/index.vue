<template>
  <div class="swiper-container">
    <div class="swiper-wrapper" ref="swiper-wrapper">
      <div class="swiper-slide" v-for="item in data" :key="item.id">
        <a href="javascript:;">
          <img :src="item.picUrl" style="width:100%"/>
        </a>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>

</template>

<script>
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  export default {
    props:{
      data:Array
    },
    data() {
      return {

      }
    },
//    mounted(){
////          new Swiper('.swiper-container',{
////            loop: true,
////            pagination: {
////              el: '.swiper-pagination',
////            },
////        })
//    },
    watch:{
      data(){
        this.$nextTick( () => {
          new Swiper('.swiper-container',{
            loop: true,
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      }
  },
    methods: {},
    computed: {
//        swpier () {
//          return this.$refs.swiper-wrapper
//        },
      ...mapState(['homeData'])
    },
    components: {}
  }

</script>

<style  lang='stylus' rel='stylesheet/stylus'>


</style>
