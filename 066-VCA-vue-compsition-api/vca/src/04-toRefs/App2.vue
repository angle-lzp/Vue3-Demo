<!--
 * @Author: Angelo
 * @Date: 2024-03-28 08:50:25
 * @version: 
 * @Descripttion: ref在reactive中的使用；ref转换成reactive
-->
<template>
    <div>
        {{ statu }}
        {{ obj.statu }}
        <button @click="statuClick">statu++</button>
        <button @click="objClick">obj.statu++</button>
    </div>
</template>
<script>
import { reactive, ref } from 'vue';
export default {
    setup() {
        // statu或obj.statu的更改都会互相影响；
        const statu = ref(1);
        const obj = reactive({
            //这个方式只是把statu的value赋值给了ojb.statu，是值赋值；
            // statu:statu.value

            // 等于statu:statu;这个就相当于是对象赋值，指向的是同一个引用
            statu
        });
        const statuClick = () => {
            statu.value++;
        }
        const objClick = () => {
            obj.statu++;
        }
        return {
            statu, obj, statuClick, objClick
        }
    }
}
</script>