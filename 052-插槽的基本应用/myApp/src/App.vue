<!--
 * @Author: Angelo
 * @Date: 2024-03-25 15:14:37
 * @version: 
 * @Descripttion: 
-->
<template>
  <div>
    app
    <!-- 1.如果在Child中的代码中使用了slot插槽标签，那么在每个slot中都会插入下面的代码 -->
    <Child>
      <!-- 1.里边写的代码会被Child template中的代码替换掉 -->
      <div>我是在Child里边的</div>
    </Child>
  </div>
</template>

<script>
import Child from "./components/Child.vue"

export default {
  components: {
    Child
  }

}
</script>