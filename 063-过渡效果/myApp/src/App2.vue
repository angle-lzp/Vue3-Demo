<template>
  <div>
    <button @click="isShow = !isShow">click</button>
    <!-- 使用Animate.css框架 -->
    <!-- appear：表示第一次使用的也会使用动画 -->
    <transition enter-active-class="animate__animated animate__backInDown"
      leave-active-class="animate__animated animate__backOutDown" appear>
      <div v-show="isShow">angelo</div>
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
