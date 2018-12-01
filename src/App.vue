<template>
  <div id="app">
    <router-view/>
    <Food_Pub />
  </div>
</template>

<script>
  import food_pub from './components/food_pub'
export default {
  name: 'App',

  components:{
    Food_Pub:food_pub
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
