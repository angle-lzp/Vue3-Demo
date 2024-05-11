<!--
 * @Author: Angelo
 * @Date: 2024-03-29 10:03:49
 * @version: 
 * @Descripttion: 
-->
<template>
    <div>
        <div>Films</div>
        <div class="swiper">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="item in loopList" :key="item.id">
                    <img :src="item.poster" :alt="item.title" style="width: 100%;" />
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="tabbar">
            <ul>
                <router-link custom to="/films/nowPlaying" v-slot="{ isActive, navigate }">
                    <li :class="isActive ? 'angeloClass' : ''" @click="navigate"><span>正在热映</span></li>
                </router-link>
                <router-link custom to="/films/comingSoon" v-slot="{ isActive, navigate }">
                    <li :class="isActive ? 'angeloClass' : ''" @click="navigate"><span>即将上映</span></li>
                </router-link>
            </ul>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup>
import { Swipe as vanSwipe, SwipeItem as vanSwipeItem } from 'vant';
import { ref } from 'vue';
const loopList = ref([
    {
        id: 1,
        poster: "https://pic.maizuo.com/usr/movie/be17f0784f8a83fbe6be79df1ce1914b.jpg",
        title: "哥斯拉大战金刚2：帝国崛起"
    },
    {
        id: 2,
        poster: "https://pic.maizuo.com/usr/movie/57116f984c95f7e0abe768550bd78ef9.jpg",
        title: "你想活出怎样的人生"
    },
    {
        id: 3,
        poster: "https://pic.maizuo.com/usr/movie/7a4e3daddbe3a35aa4247cb4ae6273cd.jpg",
        title: "草木人间"
    }
])
</script>

<style>
.swiper{
    z-index: 100;
}
.tabbar {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    z-index: 100;
}

.tabbar ul {
    display: flex;
}

.tabbar ul li {
    flex: 1;
    list-style: none;
}

.angeloClass span {
    color: red;
    border-bottom: 3px solid red;
}
</style>