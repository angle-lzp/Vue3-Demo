<!--
 * @Author: Angelo
 * @Date: 2024-03-26 16:14:55
 * @version: 
 * @Descripttion: 
-->
<template>
    <div class="navbar" >
        <button @click="handleClick">展开/折叠侧边栏</button>
        <div>vue3的单文件navbar</div>
    </div>
</template>
<script>
export default{
    inheritAttrs:false,
    methods:{
        handleClick(){
            console.log("navbar-click")
            this.$emit("isShowChange")
        }
    }
}
</script>
<style scoped>
  div{
    background: gray;
  }
</style>
