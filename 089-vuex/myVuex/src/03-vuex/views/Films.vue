<!--
 * @Author: Angelo
 * @Date: 2024-03-29 10:03:49
 * @version: 
 * @Descripttion: 
-->
<template>
    <div>
        <div>Films</div>
        <div class="swiper">轮播图</div>
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
        <router-view></router-view>
    </div>
</template>

<style>
.swiper {
    width: 100%;
    height: 100px;
    line-height: 100px;
    text-align: center;
}

.tabbar {

    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
}

.tabbar ul {
    display: flex;
}

.tabbar ul li {
    flex: 1;
    list-style: none;
}

.angeloClass span{
    color: red;
    border-bottom: 3px solid red; 
}
</style>