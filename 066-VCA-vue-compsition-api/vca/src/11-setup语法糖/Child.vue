<template>
    <div>
        <!-- myname和props.myname这两种方式都是可以的 -->
        Child -- {{ myname }} -- {{ props.myname }}
        <button @click="handleEmit">
            click
        </button>
    </div>
</template>
<script setup>
import { defineProps, defineEmits, inject } from 'vue';
// 如果js总要处理props值，还是得要一个变量来接收得
const props = defineProps({
    myname: {
        type: String,
        default: "00000"
    }

})

// 注意通过inject获取的属性，在进行设置值的时候，需要通过.value来进行设置
const myname02 = inject("myname")
console.log(props.myname);

const emit = defineEmits(["defineEmitOper"])

const handleEmit = () => {
    myname02.value = "我是子组件的值"
    emit("defineEmitOper", "来自子组件emit的操作")
}
</script>