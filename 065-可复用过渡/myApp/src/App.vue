<!--
 * @Author: Angelo
 * @Date: 2024-03-27 15:07:05
 * @version: 
 * @Descripttion: 
-->
<template>
    <div>
        <button @click="isShow = !isShow">click</button>
        <MyAnimate>
            <div v-if="isShow">111</div>
        </MyAnimate>
    </div>
</template>

<script>
import MyAnimate from "./MyAnimate.vue"
export default {
    data() {
        return {
            isShow: true
        }
    },
    components: {
        MyAnimate
    }
}
</script>