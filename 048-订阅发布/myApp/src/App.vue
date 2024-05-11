<!--
 * @Author: Angelo
 * @Date: 2024-03-25 10:32:39
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

  components: {
    Navbar,
    Tabar
  }
}
</script>