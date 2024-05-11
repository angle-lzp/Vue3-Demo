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
export default {
    mounted() {
        //这里是route不是router；对比：==》this.$router.push("/detail/" + filmId)
        //params这种传参
        console.log("detail",this.$route.params);

        // query请求的方式
        console.log("detail", this.$route.query);
    },
    methods: {
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
        '$route.query': function () {
            console.log("detail$", this.$route.query);
        }
    },
    //可以用于上面替换watch监听事件
    beforeRouteUpdate(to, from, next) {
        console.log("beforeRouteUpdate", to.query);
    }
}
</script>