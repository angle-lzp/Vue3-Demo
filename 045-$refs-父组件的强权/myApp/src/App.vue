<!--
 * @Author: Angelo
 * @Date: 2024-03-26 16:29:00
 * @version: 
 * @Descripttion:   ref如果绑定在dom节点上，拿到的就是 原生dom节点
                    ref如果绑定在组件上，拿到的就是 组件对象，可以实现通信功能
-->
<template>
    <div>
        <!-- app-<button @click="handleClick()">click</button>
        <input ref="myinput"/>
        <div ref="mydiv">aaa</div>

        <Child ref="mychild"/> -->

        <!-- 拿到的时整个Field组件对象，所以可以操作里边的属性 -->
        <Field label="用户名" type="text" ref="username"></Field>
        <Field label="密码" type="password" ref="password"></Field>
        <Field label="年龄" type="number" ref="age"></Field>

        <div>
            <button @click="handleRegister">注册</button>
            <button @click="handleReset">重置</button>
        </div>
    </div>
</template>

<script>
import Child from './Child.vue';
import Field from './Field.vue';

export default {
    components: {
        Child,
        Field
    },
    methods: {
        handleClick() {
            console.log(this.$refs.mychild.childtitle)
            // this.$refs.mydiv.style.background="red";

            //直接通过ref拿到子组件的属性值，然后修改它的值
            this.$refs.mychild.childtitle = "22222"
        },

        handleRegister() {
            console.log(this.$refs.username.myvalue, this.$refs.password.myvalue, this.$refs.age.myvalue)
        },
        handleReset() {
            // console.log(this.$refs.username.myvalue,this.$refs.password.myvalue,this.$refs.age.myvalue)

            this.$refs.username.myvalue = ""
            this.$refs.password.myvalue = ""
            this.$refs.age.myvalue = ""
        }
    }
}
</script>
