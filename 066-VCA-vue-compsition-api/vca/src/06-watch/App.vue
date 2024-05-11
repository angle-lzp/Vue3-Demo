<!--
 * @Author: Angelo
 * @Date: 2024-03-28 10:48:23
 * @version: 
 * @Descripttion: 
-->
<template>
    <div>
        <input type="text" v-model="mytext">
        <select v-model="selectV">
            <option value="111">111</option>
            <option value="222">222</option>
            <option value="333">333</option>
        </select>
    </div>
</template>
<script>
import { reactive, ref, watch } from 'vue';

export default {
    setup() {
        const mytext = ref("")
        const selectV = ref("222")

        // 写法一
        // watch(mytext, (newValue, oldValue) => {
        //     console.log("watch1", oldValue, newValue)
        // })

        // //写法二（直接写mytext.value）函数写法
        // watch(() => mytext.value, (newValue, oldValue) => {
        //     console.log("watch2", oldValue, newValue)
        // })

        //写法三：监听多个
        // watch([mytext, selectV], (newValue, oldValue) => {
        //     console.log("watch3", oldValue, newValue)
        // })

        // 一进来就请求一次immediate(立刻的): true
        watch([mytext, selectV], (newValue, oldValue) => {
            console.log("watch3", oldValue, newValue)
        }, { immediate: true })//deep:true深度监听需要小心了


        //reactive的监听，需要写成函数的方式（）=>xxxx
        // const obj = reactive({
        //     myName: ""
        // })
        // watch(() => obj.myName, (newValue, oldValue) => {
        //     console.log("watch3", oldValue, newValue)
        // })

        //wathcEffect:
        // 1.立即執行，沒有惰性，頁面首次加載就會執行 
        // 2.自动检测内部代码，代码中有依赖就会执行
        // 3.不需要传递任何参数，只需要一个回调函数
        // 4.不能获取旧值，只有小值
        // 5.异步操作在这执行很好
        watchEffect(async () => {
            //每当mytext的值被改变都会执行这个监听
            const res = await fetch(`https://localhost:8080/service/getItem/${mytext.value}`)
            //todo
        })


        return {
            mytext, selectV
        }
    }
}
</script>