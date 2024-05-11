<!--
 * @Author: Angelo
 * @Date: 2024-03-27 11:09:33
 * @version: 
 * @Descripttion: 
-->
<template>
  <div>
    <button @click="isShow = !isShow">click</button>
    <!-- 需要在Transition标签上写的上name，然后和style中的class对应就可以了 -->
    <transition name="fade">
      <div v-show="isShow">angelo</div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true
    }
  },
}
</script>
<style>
/* 如果Transition没有name属性的话，那就是v-enter-active */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;/*2秒钟由显示到透明（透明到显示） */
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
