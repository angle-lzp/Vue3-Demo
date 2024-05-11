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
import { defineProps, defineEmits } from 'vue';
// 如果js总要处理props值，还是得要一个变量来接收得
const props = defineProps({
    myname: {
        type: String,
        default: "00000"
    }

})
console.log(props.myname);

const emit = defineEmits(["defineEmitOper"])

const handleEmit = () => {
    emit("defineEmitOper", "来自子组件emit的操作")
}
</script>