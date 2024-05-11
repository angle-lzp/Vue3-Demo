<!--
 * @Author: Angelo
 * @Date: 2024-03-28 16:05:09
 * @version: 
 * @Descripttion: 
-->
<template>
    <div>
        <button @click="handleBackClick">返回</button>
        <span>{{ props.title }}</span>
        <button>我的</button>
    </div>
</template>
<script setup>
import { defineProps, inject } from "vue"

const props = defineProps(["title"])

</script>
