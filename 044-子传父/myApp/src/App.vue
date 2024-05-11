<!--
 * @Author: Angelo
 * @Date: 2024-03-26 16:01:57
 * @version: 
 * @Descripttion: 
-->
<template>
  <div>
    app
    <!-- once:事件修饰符,这个事件只执行一次 -->
    <Child @event.once="handleEvent($event)" @event2="handleEvent2" />
  </div>
</template>
<script>
import Child from './Child.vue'
export default {
  components: {
    Child
  },
  methods: {
    handleEvent(data) {
      console.log("app-event", data)
    },
    handleEvent2(data) {
      console.log("app-evevt2", data)
    }
  }
}
</script>
