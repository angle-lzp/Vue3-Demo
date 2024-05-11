<!--
 * @Author: Angelo
 * @Date: 2024-03-28 16:05:42
 * @version: 
 * @Descripttion: 
-->
<template>
    <div>
        detail
    </div>
</template>
<script setup>
import { inject, onMounted } from "vue"

const show = inject("show")
//使用组合式API使用挂载函数（生命周期）
onMounted(() => {
    show.value = false
})

</script>