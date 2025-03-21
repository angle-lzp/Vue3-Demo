<!--
 * @Author: Angelo
 * @Date: 2024-03-28 16:05:09
 * @version: 
 * @Descripttion: 
-->
<template>
    <div>
        <button @click="handleBackClick">返回</button>
        <span>{{ title }}</span>
        <button>我的</button>
    </div>
</template>
<script>
import { inject } from "vue"
export default {
    props: ["title"],
    setup() {
        // 注意通过inject获取的属性，在进行设置值的时候，需要通过.value来进行设置
        const which = inject("which")
        const handleBackClick = () => {
            which.value = "List"
        }
        return {
            handleBackClick
        }
    }

}
</script>
