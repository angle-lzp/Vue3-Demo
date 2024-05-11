<!--
 * @Author: Angelo
 * @Date: 2024-03-25 10:33:48
 * @version: 
 * @Descripttion: 
-->
<template>
    <li @click="handleClick">
        {{ item }}
    </li>
</template>

<script>
import store from "./store.js"
export default {
    props: ["item"],
    methods: {
        handleClick() {
            store.publish(this.item)
        }
    }
}
</script>