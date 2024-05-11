<!--
 * @Author: Angelo
 * @Date: 2024-03-28 09:33:17
 * @version: 
 * @Descripttion: 
-->
<template>
    <div>
        {{ obj.myname }}
        {{ myNameComputed }}
        <button @click="hadnleClick">click</button>
    </div>
</template>
<script>
import { computed, reactive } from 'vue';

export default {
    setup() {

        const obj = reactive({
            myname: "angelo"
        })
        const myNameComputed = computed(() => {
            return obj.myname.substring(0, 1).toUpperCase() + obj.myname.substring(1);
        })
        const hadnleClick = () => {
            obj.myname = "android"
        }

        return {
            obj, myNameComputed, hadnleClick
        }

    }
}
</script>