<!--
 * @Author: Angelo
 * @Date: 2024-03-28 16:01:05
 * @version: 
 * @Descripttion: 
-->
<template>
    <div>
        <Navbar :title="title" v-show="show"></Navbar>
        <component :is="which"></component>
    </div>
</template>
<script>
import Navbar from "./Navbar.vue"
import List from "./List.vue"
import Detail from "./Detail.vue"
import { provide, ref } from "vue"

export default {
    components: {
        Navbar, List, Detail
    },
    setup() {
        const which = ref("List")
        const title = ref("angelo")
        const show = ref(true)

        provide("which", which)
        provide("show", show)
        return {
            which,
            title,
            show
        }
    }
}
</script>