<!--
 * @Author: Angelo
 * @Date: 2024-03-26 16:36:55
 * @version: 
 * @Descripttion: 
-->
<template>
    <div>
        child-<button @click="handeClick">click</button>
    </div>
</template>
<script>
export default {
    methods:{
        //parent:父组件
        //root：根组件不一定是爷爷组件
        handeClick(){
            console.log(this.$parent.title) //Bparent-11111
            console.log(this.$parent.$parent.title) //Aparent-11111
            console.log(this.$parent.$parent.$parent.title)   //app-11111
            console.log(this.$root.title)   //app-11111
        }
    }
}
</script>
