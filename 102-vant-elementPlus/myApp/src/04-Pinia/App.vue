<template>
    <div>
        <router-view></router-view>
        <Tabbar v-show="tabbarStore.isShow"></Tabbar>
    </div>
</template>
<script setup>
import Tabbar from "./components/Tabbar.vue"
import useTabbarStore from "./store/TabbarStore"

const tabbarStore = useTabbarStore()
</script>