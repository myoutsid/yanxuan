/**
 * Created by 9413 on 2018/11/30.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  mutations,
  state

})
