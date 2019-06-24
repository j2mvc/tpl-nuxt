<template>
  <div class="container">
    <div class="navbar">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="0"> <nuxt-link to="/">首页</nuxt-link></el-menu-item>

      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
    </div>
    <div class="views">
      <div class="error">分类接口错误：{{err}}</div>
      <div class="cats">
        <div v-for="item in list" class="list-item" :key="item.id">
          <div>
            <nuxt-link :to="'/content/info/'+item.id">{{item.title}}</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Menu,Submenu,MenuItem} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue'
import axios from 'axios'
import util from '~/libs/util'

Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)

export default {
  name:'pc-article-list',
  components: {
    Menu,Submenu,MenuItem
  },
  props:[
    'err','title','list'
  ],
  data(){
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /*justify-content: center;*/
  align-items: center;
  text-align: center;
}
.views{
  flex:1 ;
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

</style>
