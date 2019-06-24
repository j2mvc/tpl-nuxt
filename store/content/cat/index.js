
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export default {
    namespaced:true,
    state:()=>({
        error:{},
        test:'这是用于测试的',
        data:{
            list:[]
        }
    }),
    getters,
    mutations,
    actions
}
