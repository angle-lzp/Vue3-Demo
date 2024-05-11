<!--
 * @Author: Angelo
 * @Date: 2024-03-26 17:34:18
 * @version: 
 * @Descripttion: 
-->
<template>
    <div>
        {{ myvalue }}
        <!-- <input type="text" v-model="myvalue"> -->
        <!-- 上面代码的源码 -->
        <!-- <input type="text" :value="myvalue" @input="myvalue=$event.target.value"> -->


        <!-- <Field label="用户名" :value="myvalue" @myevent="handleEvent"/> -->
        <Field label="用户名" v-model:kerwin="myvalue" />
        <!-- 上面这行代码的源码如下： 在组件Field中props中：kerwin，emit中：update:kerwin-->
        <!-- <Field label=".." :kerwin="myvalue" @update:kerwin=""/> -->

        <!-- <Field label="用户名" v-model="myvalue" /> -->
        <!-- 上面代码源码如下： 在组件Field中props中：modelValue，emit中：update:modelValue-->
        <!-- <Field :modelValue="myvalue" @update:modelValue=""></Field> -->

        <button @click="handleRegister">注册</button>
        <button @click="handleReset">重置</button>
    </div>
</template>

<script>
import Field from './Field.vue';
export default {
    data() {
        return {
            myvalue: "aaaa"
        }
    },
    components: {
        Field
    },
    methods: {
        handleEvent(value) {
            // console.log(value)
            this.myvalue = value
        },
        // handleInput(evt){
        //     console.log(evt.target.value)
        //     this.myvalue = evt.target.value
        // }
        handleRegister() {
            console.log("register", this.myvalue)
        },
        handleReset() {
            console.log("reset")
            this.myvalue = ""
        }
    }
}
</script>
