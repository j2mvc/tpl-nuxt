<template>
  <div class="container">
    <div>
      <h2 class="subtitle">
        网站模板
      </h2>
      <div class="error">分类接口错误：{{err}}</div>
      <div class="links">
        <nuxt-link v-for="item in cats" :to="'/content/'+item.id" class="button--grey" :key="item.id">{{item.name}}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import Logo from '~/components/Logo.vue'
import { mapMutations } from 'vuex'

export default {
  components: {
    Logo
  },
  data(){
      return {
        err:'',
        title:'',
        cats:[]
      }
  },

  asyncData ({ query,params }) {
    let url = `/api/getCats?apikey=66bb75d01825f4e06963dd645d901bbe&moduleId=201412290840356913`
    return axios.get(url)
      .then((res) => {
        // 返回数据
        if(res.data.code == 1){
          return {title:'分类列表',cats: res.data.data.list }
        }else{
          return {err: res}
        }
      })
      .catch((e) => {
        return {err: e}
      });
  },
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
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
