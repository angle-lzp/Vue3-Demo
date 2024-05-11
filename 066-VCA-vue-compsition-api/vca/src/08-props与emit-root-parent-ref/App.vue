<template>
    <div>
        <Navbar title="首页" :left="true" :right="right" @handleEmit="handleEmitMethod" ref="myname"></Navbar>
    </div>
</template>

<script>
import { ref } from "vue";
import Navbar from "./Navbar.vue"
export default {

    components: {
        Navbar
    },

    setup() {
        //通过ref拿到整个组件对象
        const right = ref(false)
        const myname = ref(null)
        const handleEmitMethod = (value) => {
            console.log("Navbar的值：", value);
            //获取得是整个Navbar组件对象
            console.log(myname.value);
        }
        return {
            right, handleEmitMethod, myname
        }
    }

}
</script>