<!--
 * @Author: Angelo
 * @Date: 2024-03-25 09:10:49
 * @version: 
 * @Descripttion: 
-->
<template>
    <div>
        <ul>
            <!-- <li v-for="item of dataList" :key="item">{{ item }}</li> -->
            <TabarItem v-for="item of dataList" :key="item" :item="item"></TabarItem>
        </ul>

    </div>
</template>

<script>
import TabarItem from "./TabarItem.vue";
export default {

    data() {
        return {
            dataList: ["首页", "列表", "我的"]
        }
    },
    components: {
        TabarItem
    }
}
</script>

<style scoped>
ul {
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    list-style-type: none
}

li {
    flex: 1;
    text-align: center;
}
</style>