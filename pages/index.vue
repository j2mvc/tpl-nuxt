<template>
  <div class="container">
    <div>
      <h2 class="subtitle">
        网站模板
      </h2>
      <div class="error">{{testState}}分类接口错误：{{err}}</div>
      <div class="links">
        <nuxt-link v-for="item in cats" :to="'/content/'+item.id" class="button--grey" :key="item.id">{{item.name}}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>

import Logo from '~/components/Logo.vue'
import api from '~/api'
// import {mapState,mapGetters, mapActions,mapMutations } from 'vuex'

export default {
  components: {
    Logo
  },
  data(){
      return {
        title:'',
        err:'',
        cats:[]
      }
  },
  asyncData ({router, store }) {
    return api.request.get({
      url: '/getCats',
      params:{
        moduleId:'201412290840356913'
      },
      cache:true
    }).then(res => {
      // 返回数据
      if(res.code == 1){
        return { title:res.data.list[0].name,cats: res.data.list }
      }else{
        return {code:-1,message:'未获取到'};
      }
    }).catch(error => {
      return { err: error}
    })
  },
  head () {
    return {
      title: '首页',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
  computed:{
     testState(){
       return this.$store.state.content.cat.test
     }
    // cats () {
    //   console.log('store,',JSON.stringify(this.$store.modules));
    //   return []
    // },
    // ...mapGetters({
      // err:"content/cat/getError"//,
      // cats:'content/cat/getList'
    // })
  },
  mounted(){
  },
  methods:{
    // ...mapActions({
    //   getCats:'content/cat/getList'
    // })
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
