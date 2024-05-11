<!--
 * @Author: Angelo
 * @Date: 2024-04-01 11:46:09
 * @version: 
 * @Descripttion: 
-->
<template>
    <div>
        <router-view></router-view>
        <!-- 使用了模块化如果使用这个写法(this.$store.state.isShow),需要加上模块名称this.$store.Tabbar.state.isShow -->
        <!-- <Tabbar v-show="this.$store.state.isShow"></Tabbar> -->
        <Tabbar v-show="isShow"></Tabbar>
    </div>
</template>
<script>
import Tabbar from "./components/Tabbar.vue"
import { mapState, useStore } from "vuex"
export default {
    // const store = useStore(),
    // // 模块化、语法糖取值的方式（现在还是选项式API）
    // cosnt isShow02 = store.state.TabberStore.isShow; //状态值state
    // cosnt dataList = store.commit("TabberStore/getDataList", true) //进行了模块化需要加上模块的名字dispatch同理
    // cosnt dataList = store.dispatch("TabberStore/getDataListAction", true)
    // store.getters["TabberStore/computedDataList"] //注意getters的访问方式

    components: {
        Tabbar
    },
    // vuex的辅组函数可以注意一下哦：mapState,mapActions,mapMutations,mapGetters

    //state、getters放在计算属性中
    computed: {
        ...mapState('TabberStore', ["isShow"])
    }
}
</script>