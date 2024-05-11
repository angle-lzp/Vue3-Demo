<!--
 * @Author: Angelo
 * @Date: 2024-03-28 17:30:48
 * @version: 
 * @Descripttion: 
-->
<template>
    <div>
        app - {{ myname }} - {{ title }} - {{ address }}
        <button @click="handleClick">
            click
        </button>
        {{ computedTitle }}

        <Child myname="angelo" @defineEmitOper="defineEmitOper"></Child>
    </div>
</template>
<script setup>
import { computed, reactive, ref, toRefs } from 'vue';
import Child from './Child.vue';//直接导入直接用

const myname = ref("angelo")
const obj = reactive({
    title: "首页",
    address: "北京"
})
const { title, address } = { ...toRefs(obj) }
const handleClick = () => {
    myname.value = "jam";
    title.value = "我的"
}
const computedTitle = computed(() => myname.value.substring(0, 1).toUpperCase() + myname.value.substring(1))

const defineEmitOper = (value) => {
    console.log("emit", "defineEmitOper", value);
}

</script>