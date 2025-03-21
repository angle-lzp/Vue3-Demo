<!--
 * @Author: Angelo
 * @Date: 2024-03-29 13:51:34
 * @version: 
 * @Descripttion: 
-->
<template>
    <div class="tabbar">
        <!-- 路由方式一： -->
        <!-- 这种方式把href写死了，现在是hash路由的方式可以，但是换成其他的方式就不可以了； -->
        <!-- <ul>
        <li><a href="#/films">电影</a></li>
            <li><a href="#/cinemas">影院</a></li>
            <li><a href="#/center">我的</a></li>
        </ul> -->

        <!-- 路由方式二： router-link的方式；其实底层也是使用的a标签来操作的-->
        <!-- <ul>
            <li>
                <router-link to=/films active-class="angeloClass">电影</router-link>
            </li>
            <li>
                <router-link to=/cinemas active-class="angeloClass">影院</router-link>
            </li>
            <li>
                <router-link to=/center active-class="angeloClass">我的</router-link>
            </li>
        </ul> -->

        <!-- 路由方式三：router-link插槽的方式，可以个性化 定制 isAvtive:是否选中；Navigate：导航位置-->
        <ul>
            <router-link custom to="/films" v-slot="{ isActive, navigate }">
                <li :class="isActive ? 'angeloClass' : ''" @click="navigate">电影</li>
            </router-link>
            <router-link custom to="/cinemas" v-slot="{ isActive, navigate }">
                <li :class="isActive ? 'angeloClass' : ''" @click="navigate">影院</li>
            </router-link>
            <router-link custom to="/center" v-slot="{ isActive, navigate }">
                <li :class="isActive ? 'angeloClass' : ''" @click="navigate">我的</li>
            </router-link>
        </ul>
    </div>
</template>
<style scoped>
.tabbar {
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: aliceblue;
    z-index: 100;
}

.tabbar ul {
    display: flex;
}

.tabbar ul li {
    flex: 1;
    list-style: none;

}

.tabbar ul li a {
    text-decoration: none;

}

.angeloClass {
    color: red;
    border-bottom: 3px solid red;
}
</style>