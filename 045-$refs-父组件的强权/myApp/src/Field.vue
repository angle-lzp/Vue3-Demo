<!--
 * @作者: kerwin
-->
<template>
    <div style="background-color: yellow;">
      
        <label>{{label}}</label>:
        <input :type="type" v-model="myvalue">
    </div>
</template>
<script>
export default {
    inheritAttrs:true,
    data(){
        return {
            myvalue:""
        }
    },
    //如果下面两个字段没有父子相传，不在props中，正常情况下是在属性透传中出现在div中；字段存在props中，就不会属性透传到div中
    props:{
        label:{
            type:String,
            default:""
        },
        type:{
            type:String,
            default:"text"
        }
    }
}
</script>
