/**
 * Created by 9413 on 2018/11/30.
 */
import {
  RECEIVE_HOMEDATA,
} from './mutation-types'

export default{

  [RECEIVE_HOMEDATA](state,{homeData}){
    state.homeData = homeData
  },

}
