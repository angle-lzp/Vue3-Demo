<!--
 * @Author: Angelo
 * @Date: 2024-03-27 11:51:30
 * @version: 
 * @Descripttion: 
-->
<template>
  <div>
    <button @click="isShow = !isShow">click</button>
    <!-- transition：直接子节点只能有一个，不然会报错 -->
    <!-- mode:out-in,in-out先进后出 -->
    <transition enter-active-class="animate__animated animate__backInDown"
      leave-active-class="animate__animated animate__backOutDown" appear mode="in-out">
      <!-- <div v-show="isShow">angelo</div> -->
      <!-- 再加一个div就不行了 -->
      <!-- <div v-show="isShow">angelo2</div> -->

      <!-- 但是通过这个v-if的方式又可以 -->
      <div v-if="isShow">angelo</div>
      <div v-else>angelo222</div>
    </transition>
  </div>
</template>

<script>
import "animate.css"
export default {
  data() {
    return {
      isShow: true
    }
  },
}
</script>
<style></style>
