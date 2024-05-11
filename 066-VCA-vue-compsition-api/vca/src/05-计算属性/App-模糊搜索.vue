<template>
    <div>
        <input v-model="mytext">
        <ul>
            <li v-for="item of dataListComputed" :key="item">
                {{ item }}
            </li>
        </ul>
    </div>
</template>
<script>
import { computed, reactive, toRefs } from 'vue';

export default {
    setup() {
        const obj = reactive({
            mytext: "",
            dataList: ["aaa", "ccc", "abcse", "dswsc", "dlwqa"]
        })
        // 计算属性中不能进行其他的异步操作，如果需要可以使用watch
        const dataListComputed = computed(() => {
            return obj.dataList.filter(res => res.includes(obj.mytext))
        })
        return {
            ...toRefs(obj),
            dataListComputed
        }
    }
}
</script>