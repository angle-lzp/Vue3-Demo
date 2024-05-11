<!--
 * @Author: Angelo
 * @Date: 2024-03-28 10:33:19
 * @version: 
 * @Descripttion: 
-->
<template>
    <div>
        <input v-model="mytext">
        <ul>
            <li v-for="item of dataListComputed" :key="item">
                {{ item }}
            </li>
        </ul>
    </div>
</template>
<script>
import { computed, reactive, ref, toRefs } from 'vue';

// 可以将这个计算属性提出来作为一个方法
// 不成文的规定：方法名称使用Use开头
// function UseSearch(obj) {
//     const mytext = ref("")
//     const dataListComputed = computed(() => {
//         return obj.dataList.filter(res => res.includes(mytext.value))
//     })
//     return {
//         mytext, dataListComputed
//     }
// }

//不成文规定：首字母小写
import useSearch from "./search"

export default {
    setup() {
        const obj = reactive({
            dataList: []
        })

        setTimeout(() => {
            obj.dataList = ["aaa", "ccc", "abcse", "dswsc", "dlwqa"];
        }, 2000);

        return {
            ...useSearch(obj)
        }
    }
}
</script>