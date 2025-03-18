<!--
 * @Author: Angelo
 * @Date: 2024-03-25 09:01:27
 * @version: 
 * @Descripttion: 
-->
<template>
  <div>
    <Navbar></Navbar>
    <Tabar></Tabar>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Tabar from "./components/Tabar.vue";
export default {
  data() {
    return {
      navtitle: "首页"
    }
  },
  // provide和inject是一对，provide提供数据，inject接收数据
  // navTitle: 是字符串，在其他的组件中进行更改，不会影响到当前的组件中的数据
  // app: 是当前的组件，可以在其他的组件中进行其属性进行更改，那么在其他地方使用app的属性的时候，会发生变化
  provide() {
    return {
      navTitle: this.navtitle,
      app: this
    }
  },
  components: {
    Navbar,
    Tabar
  }
}
</script>