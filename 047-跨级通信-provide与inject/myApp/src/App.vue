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
  provide() {
    return {
      navTitle: this.navTitle,
      app: this
    }
  },
  components: {
    Navbar,
    Tabar
  }
}
</script>