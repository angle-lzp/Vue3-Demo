<!--
 * @Author: Angelo
 * @Date: 2024-03-25 11:01:49
 * @version: 
 * @Descripttion: 
-->
<template>
  <div>
    <Navbar></Navbar>
    <!-- <Center v-if="checked === '我的'"></Center>
    <List v-else-if="checked === '列表'"></List>
    <Index v-else="首页"></Index> -->


    <!-- 使用动态组件 :is -->
    <!-- keep-alive：可以使组件里边的数据可以缓存
      include：只缓存谁
      exclude：不缓存谁 用法同上
      上面两个都需要给组件取别名:需要再各自的组件中name:list取别名，不然缓存数据无效（缓存的是这个组件里边的数据，比如你输入了什么数据切换之后数据还在）
    -->
    <keep-alive include="index,list">
      <component :is="componentName"></component>
    </keep-alive>


    <Tabar></Tabar>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Tabar from "./components/Tabar.vue";
import store from "./components/store.js";
import Center from "./components/views/Center.vue";
import Index from "./components/views/Index.vue";
import List from "./components/views/List.vue";

export default {

  data() {
    return {
      checked: "首页",
      componentName: "Index"
    }
  },

  components: {
    Navbar,
    Tabar,
    Center,
    List,
    Index
  },
  mounted() {
    var obj = {
      "首页": "Index",
      "列表": "List",
      "我的": "Center"
    }
    store.subscribe((value) => {
      this.checked = value;
      this.componentName = obj[value]
    })
  }
}
</script>