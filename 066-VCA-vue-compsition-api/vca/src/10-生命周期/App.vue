<template>
    <div>
        app-{{ name }}
        <button @click="handleClick">
            click
        </button>
        <Child v-if="isShow"></Child>
        <button @click="destoryChild">销毁Child子组件</button>
    </div>
</template>

<script>
import { nextTick, onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';
import Child from './Child.vue';

export default {
    components: {
        Child
    },
    setup() {
        const name = ref("angelo")
        const isShow = ref(true)
        onBeforeMount(() => {
            console.log("onBeforeMount");
        })
        onMounted(() => {
            console.log("onMounted");
        })

        const handleClick = () => {
            name.value = name.value + "jam"
            //只有当上面这个状态更新后才会执行操作
            nextTick(() => {
                console.log("我更新了：nextTick");
            })
        }

        onBeforeUpdate(() => {
            console.log("onBeforeUpdate");
        })
        onUpdated(() => {
            //每个状态更新都会执行（除非nextTick上面这样格式的，只会执行一次；）
            console.log("onUpdated");
        })

        const destoryChild = () => {
            isShow.value = false
        }
        return {
            name, handleClick,
            isShow, destoryChild
        }
    }
}
</script>