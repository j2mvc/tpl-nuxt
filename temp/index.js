// import Vue from 'vue'
// import vuex from 'vuex'

import modules from './modules'
//
// Vue.use(vuex)

export const state = () => ({
  list: []
})
export default  {
  modules
}
// console.log('modules:',JSON.stringify(modules));
//
// new vuex.Store({
//   state:()=> ({
//   }),
//   modules
// })
