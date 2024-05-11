<!--
 * @Author: Angelo
 * @Date: 2024-03-29 09:12:10
 * @version: 
 * @Descripttion: 
-->
<template>
    <div>
        <ul>
            <li v-for="item in dataList" :key="item" @click="handleClick">
                {{ item }}</li>
        </ul>
    </div>
</template>
<script setup>
import { inject, ref } from 'vue';

const dataList = ref(["aaa", "ccc", "ddd"])
const which = inject("which")
const handleClick = () => {
    which.value = false

}
</script>