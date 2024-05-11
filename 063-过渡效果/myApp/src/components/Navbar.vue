<template>
    <div>
        <button>返回</button>
        <span>{{ title }}</span>
        <button>首页</button>
    </div>
</template>

<script>
import store from "./store.js"
export default {
    // 生命周期-mounted()
    data() {
        return {
            title: "首页"
        }
    },
    mounted() {
        store.subscribe((value) => {
            console.log("触发了", value);
            this.title = value;
        })
    }

}
</script>

<style scoped>
div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    background: gray;
}
</style>