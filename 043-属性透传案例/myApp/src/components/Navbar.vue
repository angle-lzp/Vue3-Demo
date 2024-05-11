<template>
    <div class="navbar" >
        <!-- 在button上通过$attrs传递属性，父子组件都有点击事件都会执行，先执行子组件再执行父组件 -->
        <button @click="handleClick" v-bind="$attrs">展开/折叠侧边栏</button>
        <div>vue3的单文件navbar</div>
    </div>
</template>
<script>
export default{
    inheritAttrs:false,
    methods:{
        handleClick(){
            console.log("navbar-click")
        }
    }
}
</script>
<style scoped>
  div{
    background: gray;
  }
</style>
