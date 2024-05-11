<!--
 * @Author: Angelo
 * @Date: 2024-03-29 14:29:51
 * @version: 
 * @Descripttion: 
-->
<template>
    <div>
        <!-- 声明式编程 -->
        <!-- <router-link custom :to="'/detail/' + item.filmId" v-slot="{ navigate }" v-for="item in dataList"
            :key="item.filmId">
            <li @click="navigate">
                {{ item.name }}
            </li>
        </router-link> -->


        <!-- 编程式编程 -->
        <li v-for="item in dataList" :key="item.filmId" @click="navigateHandler(item.filmId)">
            {{ item.name }}
        </li>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data() {
        return {
            dataList: []
        }
    },
    async mounted() {
        // 使用异步的方式
        const res = await axios.get("https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=4144633", {
            headers: {
                'X-Client-Info': '{ "a": "3000", "ch": "1002", "v": "5.2.1", "e": "17116912502046590571249665" }',
                'X-Host': 'mall.film-ticket.film.list'
            }
        })
        this.dataList = res.data.data.films
        console.log(res.data.data.films)
    },
    methods: {
        navigateHandler(filmId) {
            //第一种和第二种写法对应下面这种；
            //:myId表示动态路由接收参数的；适用：detail/:myId/:myName 的方式
            // {    path: "/detail/:myId",
            //     name: "Detail",
            //     component: Detail,
            // }

            // 第一种写法：路径+路由参数(拼接的方式)
            // this.$router.push("/detail/" + filmId)

            // 第二种写法：路径+路由参数(携带对象的方式)（同第一种，只是书写的方式不一样）
            // this.$router.push({
            //     name: "Detail", //给路由取的名字（路由的别名）
            //     params: {
            //         myId: filmId //myId和动态路由上的名字一致
            //     }
            // })


            //第三种对应这种
            // {
            //     //适用：/detail?name=angelo&password=123 的方式
            //     path: "/detail",
            //     component: Detail,
            // },
            // 第三种写法：query的方式，就是我们get请求的方式；?name=angelo&password=123
            this.$router.push({
                path: "/detail", //给路由取的请求路径名称
                query: {
                    myId: filmId //myId和动态路由上的名字一致
                }
            })
        }
    }

}
</script>
<style scoped>
li {
    list-style: none;
    line-height: 50px;
}
</style>