<!--
 * @Author: Angelo
 * @Date: 2024-03-26 11:11:13
 * @version: 
 * @Descripttion: swiper组件封装
-->
<template>
    <div>
        <MySwiper v-if="dataList.length" :slides-per-view="5" :space-between="50" :loop="false"
            @ListenSlideChange="ListenSlideChange">
            <MySwiperItem v-for="item in dataList" :key="item.filmId">
                <img :src="item.poster" :alt="item.name" style="width: 100%;">
            </MySwiperItem>
        </MySwiper>
    </div>
</template>

<script>
import MySwiper from "./components/MySwiper.vue";
import MySwiperItem from "./components/MySwiperItem.vue";
import Axios from "axios";
export default {
    data() {
        return {
            dataList: []
        }
    },
    components: {
        MySwiper,
        MySwiperItem
    },
    mounted() {
        Axios.get('test.json').then(res => {
            this.dataList = res.data.films
            console.log("dataList", res.data.films);
        })
    },
    methods: {
        ListenSlideChange(value) {
            console.log("change slide is ", value);
        }
    }
}
</script>