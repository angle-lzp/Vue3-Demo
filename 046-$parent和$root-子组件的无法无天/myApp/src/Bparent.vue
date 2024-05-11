<!--
 * @Author: Angelo
 * @Date: 2024-03-26 16:54:54
 * @version: 
 * @Descripttion: 
-->
<template>
    <div>
        Bparent
        <BChild/>
    </div>
</template>

<script>
import BChild from './BChild.vue';


export default {
    data(){
        return {
            title:"Bparent-11111"
        }
    },
    components:{
        BChild
    }
}
</script>

