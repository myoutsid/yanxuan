import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

import Home from '../pages/Home'
import Classify from '../pages/Classify'
import Discern from '../pages/Discern'
import Shopcart from '../pages/Shopcart'
import Nom from '../pages/Nom'


export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path:'/classify',
      component:Classify
    },
    {
      path:'/discern',
      component:Discern
    },
    {
      path:'/shopcart',
      component:Shopcart
    },
    {
      path:'/nom',
      component:Nom
    }
  ]
})

