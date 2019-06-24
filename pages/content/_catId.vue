<template>
  <div>
      <mobile-list :err="err" :list="list" v-if="isMobile"/>
      <pc-list :err="err" :list="list" v-else/>
  </div>
</template>

<script>
import api from '~/api'
import PcList from '~/components/pages/pc/content/ContentList.vue'
import MobileList from '~/components/pages/mobile/content/ContentList.vue'
import util from '~/libs/util'

export default {
  components: {
    PcList,MobileList
  },
  data(){
    return {
      err:'',
      title:'',
      isMobile:false,
      list:[]
    }
  },

  asyncData ({ req,params }) {
    let isMobile = util.isMobile(req);
    return api.request.get({
      url: '/getContentList',
      params:{
        catId:params.catId
      },
      cache:true
    }).then(res => {
      // 返回数据
      if(res.code == 1){
        return {isMobile:isMobile,title:res.data.list[0].title,list: res.data.list }
      }else{
        return {isMobile:isMobile,code:-1,err:'未获取到'};
      }
    }).catch(error => {
      return { isMobile:isMobile,err: error}
    })
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
