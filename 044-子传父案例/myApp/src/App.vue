<!--
 * @Author: Angelo
 * @Date: 2024-03-26 15:51:43
 * @version: 
 * @Descripttion: 
-->
<template>
  <div class="root">
    <Navbar @isShowChange="isShowChange"></Navbar>
    <Layout class="layout" :myshow="isShow"></Layout>
  </div>
</template>
<script>
 import Navbar from './components/Navbar.vue'
 import Layout from './components/Layout.vue'
 export default {
    data(){
      return {
        isShow:true
      }
    },
    methods:{
      isShowChange(){
        console.log("app")
        this.isShow = !this.isShow
      }
    },
    components:{
      Navbar,
      Layout
    }
 }
</script>

<style>
  *{
    margin:0;
    padding: 0;
  }

  .root{
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .navbar{
    height: 50px;
  }

  .layout{
    flex:1;
    display: flex;
  }
</style>