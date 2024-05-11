<template>
    <div>
        <button @click="handleClick">展开/折叠侧边栏</button>
        <div>vue3的单文件navbar</div>
    </div>
</template>
<script>
export default {
    methods: {
        handleClick() {
            console.log("click", this.$parent.$refs.layout)
            // isShow：是存在Layout.vue中的，Navbar和Layout是兄弟组件
            //下面代码的意思通过当前组件获取到父组件，然后再通过refs强权获取另外一个组件对象，然后这个组件对象进行属性的修改    
            this.$parent.$refs.layout.isShow = !this.$parent.$refs.layout.isShow
        }
    }
}
</script>
<style scoped>
div {
    background: gray;
}
</style>
