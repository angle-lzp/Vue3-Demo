<!--
 * @Author: Angelo
 * @Date: 2024-03-25 16:53:27
 * @version: 
 * @Descripttion: 
-->
<template>
    <div>
        <slot :myValue="dataList" a="aaa" b="bbb" name="movie">
            <ul>
                <li v-for="item in dataList" :key="item.id">
                    {{ item.name }}
                </li>
            </ul>
        </slot>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dataList: []
        }
    },
    mounted() {
        fetch("test.json")
            .then(res => res.json())
            .then(res => {
                console.log("dataList", res.data)
                this.dataList = res.data;
            })
    }
}
</script>