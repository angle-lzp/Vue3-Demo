<!--
 * @Author: Angelo
 * @Date: 2024-03-25 15:49:11
 * @version: 
 * @Descripttion: 
-->
<template>
  <div>
    app
    <Child>
      <template v-slot:one>
        <div>我是在Child里边的111</div>
      </template>
      <!-- 简写 -->
      <!-- <template #second></template> -->
      <template v-slot:second>
        <div>我是在Child里边的222</div>
      </template>
    </Child>

    <div>------------------------------------------</div>
    <NavBar>
      <template #left>
        <div>left</div>
      </template>
      <!-- 没有名字的进入没有名字的slot中，如果在slot中都是有名字的，那么这个div不显示 -->
      <div>center</div>
      <template #right>
        <div>right</div>
      </template>
    </NavBar>
  </div>
</template>

<script>
// 如果在Child中没有slot插槽的话，Child中的div内容是不会展示出来的 
// 这个div只是应用在slot中，没有slot插槽就不会显示这个div
import Child from "./components/Child.vue"
import NavBar from "./components/Navbar.vue"

export default {
  components: {
    Child, NavBar
  }
}
</script>