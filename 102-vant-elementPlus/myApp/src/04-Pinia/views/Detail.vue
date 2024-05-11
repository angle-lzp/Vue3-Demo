<!--
 * @Author: Angelo
 * @Date: 2024-03-29 16:10:16
 * @version: 
 * @Descripttion: 
-->
<template>
    <div>
        <button @click="clickBack">返回</button>
        Detail
        <div>
            猜你喜欢
            <div @click="clickFavourite">
                喜欢的电影
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, onUnmounted, watch, reactive } from "vue"
import { onBeforeRouteUpdate, useRouter, useRoute } from "vue-router"
import useTabbarStore from "../store/TabbarStore";

const router = useRouter()
const route = useRoute()
const tabbarStore = useTabbarStore()

onMounted(() => {
    //使用actions中的方法
    tabbarStore.change(false)

    // tabbarStore.isShow = false

    // 补丁式调用
    // tabbarStore.$patch({
    //     isShow: false
    // })

})
onUnmounted(() => {
    // tabbarStore.isShow = true

    // 补丁式调用
    // tabbarStore.$patch({
    //     isShow: true
    // })

    //重置上一个值
    //tabbarStore.$reset() //false

    //使用actions中的方法
    tabbarStore.change(true)
})
const clickBack = () => {
    //后退一步
    router.back()
    // this.$router.go(-1)

    //前进一步
    // this.$router.forward()
    // this.$router.go(1)
}

//点击之后页面重新加载，没有执行mounted，因为没有销毁嘛，但是可以使用监听的方式来处理
const clickFavourite = () => {
    router.push({
        path: "/detail", //给路由取的名字
        query: {
            myId: 8763 //myId和动态路由上的名字一致
        }
    })
}

//可以用于上面替换watch监听事件
onBeforeRouteUpdate((to, from, next) => {
    console.log("beforeRouteUpdate", to.query);
})

</script>