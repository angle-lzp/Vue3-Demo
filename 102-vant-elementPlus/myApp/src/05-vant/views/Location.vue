<!--
 * @Author: Angelo
 * @Date: 2024-04-07 16:25:15
 * @version: 
 * @Descripttion: 
-->
<template>
    <div>
        <van-index-bar :index-list="firstLetterArr">
            <div v-for="firstLetter in firstLetterArr" :key="firstLetter">
                <van-index-anchor :index="firstLetter" />
                <van-cell :title="data.name" v-for="data in locationGroupDataList[firstLetter]" :key="data.cityId"
                    @click="selectLocationClick(data)" />
            </div>
        </van-index-bar>
    </div>
</template>
<script setup>
import { IndexBar as vanIndexBar, IndexAnchor as vanIndexAnchor, Cell as vanCell } from "vant"
import { onMounted, ref } from "vue"
import axios from "axios"
import useCinemasStore from "../store/CinemaStore"
import { useRouter } from "vue-router"

const locationDataList = ref([])
const locationGroupDataList = ref({})
const firstLetterArr = ref([])
const store = useCinemasStore()
const router = useRouter()


onMounted(async () => {
    // 使用异步的方式
    const res = await axios.get("https://m.maizuo.com/gateway?k=8755092", {
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1710755480749750966026241"}',
            'X-Host': 'mall.film-ticket.city.list'
        }
    })

    console.log("locationDataList", res.data);
    console.log("locationDataList", res.data.data.cities);
    locationDataList.value = res.data.data.cities;
    dealWithGroupData(locationDataList.value)
})

const dealWithGroupData = (dataList) => {
    dataList.forEach((item) => {
        const firstLetter = item.pinyin.charAt(0).toUpperCase();
        if (!locationGroupDataList.value[firstLetter]) {
            locationGroupDataList.value[firstLetter] = []
            firstLetterArr.value.push(firstLetter)
        }
        locationGroupDataList.value[firstLetter].push(item)
    });
    firstLetterArr.value.sort((item1, item2) => item1.charCodeAt() - item2.charCodeAt())
    firstLetterArr.value.forEach((item) => {
        locationGroupDataList.value[item].sort((a, b) => a.cityId - b.cityId)
    })
    console.log("Group", locationGroupDataList.value);
    console.log("firstLetterArr", firstLetterArr.value);
}

const selectLocationClick = (data) => {
    store.location = data
    store.cinemaList = []
    router.back()
}

</script>