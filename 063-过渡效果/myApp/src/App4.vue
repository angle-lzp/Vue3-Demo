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
    <!-- keep-alive：可以时组件里边的数据可以缓存
      include：只缓存谁
      exclude：不缓存谁 用法同上
      上面两个都需要给组件取别名
    -->
    <!-- 使用动画效果用在动态组件上 -->
    <keep-alive include="index,list">
      <Transition enter-active-class="animate__animated animate__backInDown"
        leave-active-class="animate__animated animate__backOutDown" appear mode="in-out">
        <component :is="componentName"></component>
      </Transition>
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

import "animate.css"

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