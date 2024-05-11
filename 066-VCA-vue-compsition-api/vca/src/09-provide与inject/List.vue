<template>
    <div>
        <ul>
            <li v-for="item in dataList" :key="item" @click="handleClick">
                {{ item }}</li>
        </ul>
    </div>
</template>
<script>
import { inject, ref } from 'vue';

export default {

    setup() {
        const dataList = ref(["aaa", "ccc", "ddd"])
        const which = inject("which")
        const handleClick = () => {
            which.value="Detail"

        }
        return {
            dataList,
            handleClick
        }
    }
}</script>