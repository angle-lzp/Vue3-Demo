<!--
 * @Author: Angelo
 * @Date: 2024-03-27 16:24:30
 * @version: 
 * @Descripttion: 
-->
<template>
    <div>
        <input type="text" v-model="obj.text">
        <button @click="handleAdd">Add</button>
        <ul>
            <li v-for="item, index in obj.dataList" :key="item">
                {{ item }}
                <button @click="handleDel(index)">Del</button>
            </li>
        </ul>
    </div>
</template>
<script>
import { reactive } from "vue"
export default {
    setup() {
        //reactive:响应式
        const obj = reactive({
            dataList: ["111", "222"],
            text: ""
        })
        const handleAdd = () => {
            obj.dataList.push(obj.text)
            obj.text = ""

        }
        const handleDel = (index) => {
            obj.dataList.splice(index, 1)
        }
        return {
            obj, handleAdd, handleDel
        }
    }
}
</script>