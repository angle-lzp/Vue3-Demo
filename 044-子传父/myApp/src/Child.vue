<!--
 * @Author: Angelo
 * @Date: 2024-03-26 16:02:59
 * @version: 
 * @Descripttion: 
-->
<template>
    <div>
        child
        <!-- <button @click="handleClick">click</button> -->
        <button @click="$emit('event',childtitle)">click</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            childtitle:"child-111111"
        }
    },
    methods:{
        handleClick(){
            // console.log(this.childtitle)
            this.$emit("event2",this.childtitle)   
        }
    }
}
</script>

<style scoped>
div{
    background: yellow;
}
</style>