<!-- 把原来的setup模式改成语法糖模式 -->
<template>
    <div>
        <Navbar title="angelo" v-show="show" v-angelo-dir></Navbar>
        <component :is="which?List:Detail"></component>
    </div>
</template>
<script setup>
import Navbar from "./Navbar.vue"
import List from "./List.vue"
import Detail from "./Detail.vue"
import { provide, ref } from "vue"

const which = ref(true)
const show = ref(true)

provide("which", which)
provide("show", show)

// 自定义组件
const vAngeloDir = (el) => {
    el.style.background = "yellow"
}

</script>