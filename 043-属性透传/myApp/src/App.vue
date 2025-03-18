<!-- 使用：inheritAttrs: false结合v-bind="$attr"来将属性绑定在某个标签上(将属性绑定在标签上知道给那个标签使用) 来禁止属性透传；（必须一起使用才有效）见Navbar.vue
 如下，调用Navbar,上面出现的属性会出出现在组件里边root的div上，可以通过属性进行属性透传； -->
<template>
  <div>
    <Navbar class="navbar" id="navbarid" style="background-color: yellow;" @click="handleClick()"></Navbar>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';

export default {
  data() {
    return {

    }
  },
  components: {
    Navbar
  },
  methods: {
    handleClick() {
      console.log("app-11111")
    }
  }

}
</script>