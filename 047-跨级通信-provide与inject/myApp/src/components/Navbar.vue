<!--
 * @Author: Angelo
 * @Date: 2024-03-25 09:10:41
 * @version: 
 * @Descripttion: 
-->
<template>
    <div>
        <button>返回</button>
        <span>{{ app.navtitle }}</span>
        <button>首页</button>
    </div>
</template>

<script>
export default {
    inject: ["navTitle", "app"]

}
</script>

<style scoped>
div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    background: gray;
}
</style>