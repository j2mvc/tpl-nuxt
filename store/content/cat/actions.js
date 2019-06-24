import axios from 'axios/index'
import api from '~/api'

export default {
    fetchList: ({commit}, {moduleId}) => {
      console.log('on Fetch Cats moduleId:' ,moduleId)
        let url = `/api/getCats?apikey=66bb75d01825f4e06963dd645d901bbe&moduleId=${moduleId}`
        return axios.get(url)
            .then((res) => {
                // 返回数据
                if(res.data.code == 1){
                    commit('setList', {list:res.data.data.list} );
                }else{
                    commit('setError', {code:-1,message:'未获取到'} );
                }
            })
            .catch((e) => {
                commit('setError', {e} );
            });
    }
}
