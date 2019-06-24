<template>
  <div>
    <mobile-info :err="err" :info="info" v-if="isMobile"/>
    <pc-info :err="err" :info="info" v-else/>
  </div>
</template>

<script>

  import PcInfo from '~/components/pages/pc/content/ContentInfo.vue'
  import MobileInfo from '~/components/pages/mobile/content/ContentInfo.vue'
  import api from '~/api'
  import util from '~/libs/util'

export default {
  components: {
    PcInfo,MobileInfo
  },
  data(){
    return {
      err:'',
      info:{},
      title:'',
      isMobile:false,
    }
  },

  asyncData ({req,params}) {
    let isMobile = util.isMobile(req);
    return api.request.get({
      url: '/getContentInfo',
      params:{
        id:params.id
      },
      cache:true
    }).then(res => {
      // 返回数据
      if(res.code == 1){
        return {isMobile:isMobile, info: res.data.info }
      }else{
        return {isMobile:isMobile,err: '未获取到'};
      }
    }).catch(error => {
      return { isMobile:isMobile,err: error}
    })
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
