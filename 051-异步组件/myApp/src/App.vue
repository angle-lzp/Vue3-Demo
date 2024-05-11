<!--
 * @Author: Angelo
 * @Date: 2024-03-25 14:31:05
 * @version: 
 * @Descripttion: 
-->
<template>
  <div>
    <Navbar></Navbar>
    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
    <Tabar></Tabar>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Tabar from "./components/Tabar.vue";
import store from "./components/store.js";

import LoadingComponent from "./components/LoadingComponent.vue";
import ErrorComponentz from "./components/ErrorComponentz.vue";

// 必须的
import { defineAsyncComponent } from "vue"

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
    // 使用下面的方式可以进行异步组件的加载，需要加载组件的时候进行加载，不需要的时候就不加载
    // Center: defineAsyncComponent(() => import('./components/views/Center.vue')),
    List: defineAsyncComponent(() => import('./components/views/List.vue')),
    Index: defineAsyncComponent(() => import('./components/views/Index.vue')),
    Center: defineAsyncComponent({
      //加载函数
      loader: () => import('./components/views/Center.vue'),
      //加载异步组件时使用的组件
      loadingComponent: LoadingComponent,
      //展示加载组件前的延迟时间，默认为200ms（其实就是在组件出来之前显示这个组件，给你200ms你没有出来，就显示加载组件；但是在timeout 1000ms之后还没有出来，就显示Error的组件）
      delay: 200,
      //加载失败后展示的组件
      errorComponent: ErrorComponentz,
      //如果提供了一个timeout时间限制，并超时了，
      //也会显示这里配置的报错组件，默认值是Infinity
      timeout: 1000
    }),
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