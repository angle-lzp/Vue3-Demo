<!--
 * @Author: Angelo
 * @Date: 2024-03-27 16:59:52
 * @version: 
 * @Descripttion: 
-->
<template>
    <dv>
        <button @click="handleClick">click</button>
        <!-- 使用ref标签，只要在setup中定义了属性就可以了，例如：userName -->
        <input type="text" ref="userName">
        <!-- 模板中可以不使用.value来获取值，但是在js中需要通过value来进行读取 -->
        {{ obj }}
    </dv>
</template>
<script>
import { ref } from "vue"
export default {
    setup() {
        // 只有ref("")这种方式在js中进行取值赋值的时候才需要.value
        // reactive是不需要的，直接取值就可以
        // 可以包装普通属性
        const obj = ref("angelo") //等价于：new Proxy({value:"angelo"})=>obj.value才是实际的值
        const userName = ref(null)
        const handleClick = () => {
            obj.value = "steven"
            // 因为userName是使用的ref="userName"
            // userName.value存储的是这个dom对象(input节点对象)，userName.value.value获取的是这个节点的输入值
            console.log("ref", userName.value.value)
        }
        return {
            userName, obj, handleClick
        }
    }
}
</script>