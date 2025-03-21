<!--
 * @Author: Angelo
 * @Date: 2024-03-27 10:24:22
 * @version: 
 * @Descripttion: 
-->
<template>
  <div>
    <!-- 如果是字符串需加上单引号，不然会被当成变量 -->
    <div v-angelo="color">angelo</div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      color: "yellow"
    }
  },
  directives: {
    // angelo: {
    //   //mounted:就是一个钩子函数
    //   mounted(el, binding) {
    //     console.log("directive", el);
    //     el.style.background = binding.value;
    //   },
    //   //updated:就是一个钩子函数
    //   updated(el, binding) {
    //     console.log("directive", el);
    //     el.style.background = binding.value;
    //     this.$nextTick
    //   }
    // },

    //mounted和updated都是重复代码，可以进行抽取
    angelo(el, binding) {
      console.log("directive", el);
      console.log("directive",binding);
      el.style.background = binding.value;
    }
  }
}
</script>
<style></style>
