<template>
    <div>
        Child
    </div>
</template>
<script>
import { onBeforeUnmount, onMounted, onUnmounted } from 'vue';

export default {
    setup() {
        var clearId;
        onMounted(() => {
            clearId = setInterval(() => {
                console.log("Child - 111");
            }, 1000)
        })
        onBeforeUnmount(() => {

        })
        onUnmounted(() => {
            //必须在卸载之后停止定时任务，不然的话定时任务会一直执行
            clearInterval(clearId)
        })
    }
}
</script>