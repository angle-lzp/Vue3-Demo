<!--
 * @Author: Angelo
 * @Date: 2024-03-29 10:03:49
 * @version: 
 * @Descripttion: 
-->
<template>
    <div>
        Center
    </div>
</template>
<script>
export default {
    // 构建之前执行
    async beforeRouteEnter(to, from, next) {
        let isAuthenticated = await localStorage.getItem("token");
        if (isAuthenticated) {
            next()
        } else {
            next({ name: "Login" })
        }
    },

    //没有参数的写法（有参数的写法需要写next）
    beforeRouteLeave() {
        const answer = window.confirm("你确定要离开吗？")
        console.log(answer);
        return answer
    }
}
</script>