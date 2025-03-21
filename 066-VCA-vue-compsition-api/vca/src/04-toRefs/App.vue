<!--
 * @Author: Angelo
 * @Date: 2024-03-28 09:09:11
 * @version: 
 * @Descripttion: 
-->
<!-- 下面使用obj.text的方式太麻烦了，需要点一下；可以使用toRef()或者toRefs()进行转换 -->
<template>
    <div>
        <!-- <input type="text" v-model="obj.text"> -->
        <input type="text" v-model="text">
        <button @click="handleAdd">Add</button>
        <ul>
            <li v-for="item, index in dataList" :key="item">
                {{ item }}
                <button @click="handleDel(index)">Del</button>
            </li>
        </ul>
    </div>
</template>
<script>
import { reactive, toRef,toRefs } from "vue"
export default {
    setup() {
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
            //text: toRef(obj, "text"),//obj：对象名；text：属性名称；但是这样太麻烦了，如果有很多属性呢
            ...toRefs(obj),//将obj中所有的属性转成ref格式，并且进行展开；{a:"1",b:"2"},去掉大括号，进行展开；
            handleAdd,
            handleDel
        }
    }
}
</script>