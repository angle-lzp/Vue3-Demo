<template>
    <div>
        <button v-show="left" @click="handleClick">返回</button>
        <span>{{ computedTitle }}</span>
        <button v-if="right">我的</button>
    </div>
</template>

<script>
import { getCurrentInstance, computed } from "vue"
export default {
    props: {
        title: {
            type: String,
            default: "首页"
        },
        left: {
            type: Boolean,
            default: true
        },
        right: {
            type: Boolean,
            default: true
        }
    },
    // 第一个属性：props；第二个属性：attrs,emit,expose,slots
    //可以通过解构的方式进行获取值
    setup({ title }, { emit }) {
        console.log(title);
        console.log(emit);
        // 获取当前组件的对象（this）-- 可以使用parent和root
        const _this = getCurrentInstance()

        const computedTitle = computed(() => title + "-1111")

        const handleClick = () => {
            emit("handleEmit", "我来通知你了！")

            // 使用parent和root（一般不用这个）
            // console.log(_this);
            // console.log(_this.parent);
            // console.log(_this.root);
        }
        return {
            computedTitle, handleClick
        }
    }
}
</script>