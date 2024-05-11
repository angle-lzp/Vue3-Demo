<!--
 * @Author: Angelo
 * @Date: 2024-03-29 16:10:16
 * @version: 
 * @Descripttion: 
-->
<template>
    <div>
        <button @click="clickBack">返回</button>
        Detail
        <div>
            猜你喜欢
            <div @click="clickFavourite">
                喜欢的电影
            </div>
        </div>
    </div>
</template>
<script>
import { CHANGE_TABBAR } from "../store/type"
import {mapMutations} from "vuex"
export default {
    mounted() {
        //这里是route不是router；对比：==》this.$router.push("/detail/" + filmId)
        // console.log("detail",this.$route.params);

        // query请求的方式
        console.log("detail", this.$route.query);
        //详情页构建之后tab页隐藏
        // this.$store.state.isShow = false;    方式一：直接改
        // this.$store.commit("hideTabbar")     方式二：通过mutations
        // this.$store.commit("changeTabbar", false) //方式三：通过名字抽取
        this.changeTabbar(false)
    },
    unmounted() {
        //详情页销毁之后tab页显示
        // this.$store.state.isShow = true;
        // this.$store.commit("showTabbar")
        // this.$store.commit("changeTabbar", true)
        // this.$store.commit(CHANGE_TABBAR, true)
        this.changeTabbar(true)
    },
    methods: {
        ...mapMutations('TabberStore', [CHANGE_TABBAR]),
        clickBack() {
            //后退一步
            this.$router.back()
            // this.$router.go(-1)

            //前进一步
            // this.$router.forward()
            // this.$router.go(1)
        },

        //点击之后页面重新加载，没有执行mounted，因为没有销毁嘛，但是可以使用监听的方式来处理
        clickFavourite() {
            this.$router.push({
                path: "/detail", //给路由取的名字
                query: {
                    myId: 8763 //myId和动态路由上的名字一致
                }
            })
        }
    },
    watch: {
        "$route.query": function () {
            console.log("detail", this.$route.query);
        }
    },
    //可以用于上面替换watch监听事件
    beforeRouteUpdate(to, from, next) {
        console.log("beforeRouteUpdate", to.query);
    }
}
</script>