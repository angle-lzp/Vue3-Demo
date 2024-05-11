<template>
    <div>
        <button @click="handleClick">click</button>
        {{ obj.userName }}
        {{ obj.password }}
    </div>
</template>
<script>
import { reactive } from "vue";
export default {
    setup() {
        const obj = reactive({
            userName: "angelo",
            password: "123456"
        })
        const handleClick = () => {
            obj.userName = "steven"
            obj.password = "没有密码"
        }
        return {
            obj, handleClick
        }
    }
}
</script>