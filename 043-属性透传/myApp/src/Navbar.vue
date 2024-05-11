<!--
 * @Author: Angelo
 * @Date: 2024-03-26 15:37:37
 * @version: 
 * @Descripttion: 
-->
<template>
    <!-- <NavbarChild/> -->
    <!-- 在允许属性透传的情况下：数据会传到第一层的div，就是下面这层div -->
    <div>
        navbar
        <!-- 通过v-bind="$attrs",将属性设置到button上 -->
        <button v-bind="$attrs">test</button>
    </div>
</template>
<script>
import NavbarChild from './NavbarChild.vue';


export default {
    inheritAttrs: false, //false:禁止透传 div上不会出现父组件传过来的属性;ture:可以透传 div上会出现父组件传过来的属性
    components: {
        NavbarChild
    }
}
</script>