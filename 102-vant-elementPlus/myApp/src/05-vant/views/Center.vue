<!--
 * @Author: Angelo
 * @Date: 2024-03-29 10:03:49
 * @version: 
 * @Descripttion: 
-->
<template>
    <div>
        Center
        <van-button type="primary">主要按钮</van-button>
        <van-button type="primary" size="mini">主要按钮</van-button>
        <van-button type="primary" :loading="true" loading-text="加载中" loading-type="spinner">主要按钮</van-button>
        <van-button type="primary" :loading="false" loading-text="加载中" loading-type="spinner">主要按钮</van-button>
    </div>
</template>
<script>
import { Button } from "vant"
console.log(Button.name);
export default {
    // Button.name = van-button
    // 方式二：
    // components: {
    //     [Button.name]: Button//相当于给他起别名
    // },


    // 构建之前执行
    async beforeRouteEnter(to, from, next) {
        let isAuthenticated = await localStorage.getItem("token");
        if (isAuthenticated) {
            next()
        } else {
            next({ name: "Login" })
        }
    },

    //没有参数的写法（有参数的写法需要写next）
    beforeRouteLeave() {
        const answer = window.confirm("你确定要离开吗？")
        console.log(answer);
        return answer
    }
} 
</script>

<script setup>
//方式三：vanButton驼峰表示法（标签中：van-button）
import { Button as vanButton } from "vant"
</script>