/**
 * Created by 9413 on 2018/11/30.
 */
  import {
    RECEIVE_HOMEDATA
  } from './mutation-types'

  import {
    reqHomeData
  } from '../api'

export default {
  async getHomeData({commit},callback){
    const result = await reqHomeData()
    if(result.code === 0){
      const homeData = result.data
      commit(RECEIVE_HOMEDATA,{homeData})
      callback && callback()
    }
  },
}
