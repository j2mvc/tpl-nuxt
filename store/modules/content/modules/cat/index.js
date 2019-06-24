
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export default {
    namespaced:true,
    state:()=>({
        error:{},
        data:{
            list:[]
        }
    }),
    getters,
    mutations,
    actions
}
