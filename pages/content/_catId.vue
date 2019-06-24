<template>
  <div>
      <mobile-list :err="err" :list="list" v-if="isMobile"/>
      <pc-list :err="err" :list="list" v-else/>
  </div>
</template>

<script>
import axios from 'axios'
import PcList from '~/components/pages/pc/content/ArticleList.vue'
import MobileList from '~/components/pages/mobile/content/ArticleList.vue'
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

  asyncData ({ req,router,query,route,params }) {
    let isMobile = util.isMobile(req);
    let url = `/api/getContentList?apikey=66bb75d01825f4e06963dd645d901bbe&catId=${params.catId}`
    return axios.get(url)
      .then((res) => {
        // 返回数据
        if(res.data.code == 1){
          return {isMobile:isMobile, title:res.data.data.list[0].title,list: res.data.data.list }
        }else{
          return {isMobile:isMobile, err: res}
        }
      })
      .catch((e) => {
        return {isMobile:isMobile, err: e}
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
