<template>
  <div class="container">
    <div>
      <h2 class="subtitle">
       详情页
      </h2>
      <div>some:{{some}}</div>
      <nuxt-link to="/">首页</nuxt-link>
      <div class="error">分类接口错误：{{err}}</div>
        <div>
          <h3>{{info.title}}</h3>
          <div v-html="info.content">


          </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  components: {
  },
  data(){
    return {
      err:'',
      some:'',
      info:{}
    }
  },

  asyncData ({params}) {
    let some = JSON.stringify(params);

    let url = `/api/getContentInfo?apikey=66bb75d01825f4e06963dd645d901bbe&id=${params.id}`
    return axios.get(url)
      .then((res) => {
        // 返回数据
        if(res.data.code == 1){
          return {some:some, info: res.data.data.info }
        }else{
          return {some:some,err: res}
        }
      })
      .catch((e) => {
        return {err: e}
      });
  },
  head () {
    return {
      title: this.info.title,
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
