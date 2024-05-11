<!--
 * @Author: Angelo
 * @Date: 2024-03-28 08:43:27
 * @version: 
 * @Descripttion: 
-->
<template>
    <div>
        <input type="text" v-model="text">
        <button @click="handleAdd">Add</button>
        <ul>
            <li v-for="item, index in obj" :key="item">
                {{ item }}
                <button @click="handleDel(index)">Del</button>
            </li>
        </ul>
    </div>
</template>
<script>
import { reactive, ref } from "vue"
export default {
    setup() {

        const text = ref("")
        const obj = ref(["111", "222"])
        const handleAdd = () => {
            obj.value.push(text.value)
            text.value = ""

        }
        const handleDel = (index) => {
            obj.value.splice(index, 1)
        }
        return {
            text,obj, handleAdd, handleDel
        }
    }
}
</script>