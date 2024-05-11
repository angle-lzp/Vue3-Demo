<!--
 * @Author: Angelo
 * @Date: 2024-03-28 11:45:58
 * @version: 
 * @Descripttion: 
-->
<template>
    <div>
        <select v-model="selectValue">
            <option value="angelo">angelo</option>
            <option value="jam">jam</option>
            <option value="making">making</option>
        </select>
        <input type="text" v-model="mytext" />
        <ul>
            <li v-for="item in computedDataList" :key="item.id">
                {{ item.content }}
            </li>
        </ul>
    </div>
</template>
<script>
// import { watch,ref,computed } from 'vue';
// import axios from 'axios'

import useDataListComputed from "./useDataListComputed"
import useSelectWatch from "./useSelectWatch"

export default {
    setup() {

        // const selectValue = ref("jam")
        // const mytext = ref("")
        // const dataList = ref([])

        // watch(selectValue, (newValue, oldValue) => {
        //     axios.get(`http://localhost:3000/news?author=${newValue}`).then(res => {
        //         console.log("value", res.data)
        //         dataList.value = res.data
        //     })
        // }, { immediate: true })

        // const computedDataList = computed(() => {
        //     console.log("mytext",mytext.value);
        //     return dataList.value.filter(res => res.content.includes(mytext.value))
        // })

        // return {
        //     selectValue,
        //     mytext,
        //     computedDataList
        // }

        // 复用逻辑

        const { selectValue,
            dataList, } = useSelectWatch()
        const { mytext,
            computedDataList, } = useDataListComputed(dataList)

        return {
            //两个方法没有依赖的时候可以直接写成下面的写法
            // ...useSelectWatch(),
            // ...useDataListComputed()

            // ...useDataListComputed(dataList),
            // ...useSelectWatch(),
            selectValue,
            dataList,
            mytext,
            computedDataList,
        }

    }
}
</script>