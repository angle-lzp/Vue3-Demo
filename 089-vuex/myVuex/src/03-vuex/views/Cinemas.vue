<!--
 * @Author: Angelo
 * @Date: 2024-03-29 10:03:49
 * @version: 
 * @Descripttion: 
-->
<template>
    <div>
        <select v-model="type">
            <option :value="0">APP订票</option>
            <option :value="1">前台订票</option>
        </select>
        <ul>
            <!-- <li v-for="item in this.$store.state.cinemaList" :key="item.cinemaId"> -->
            <li v-for="item in filterCinemaList(type)" :key="item.cinemaId">
                {{ item.name }}</li>
        </ul>
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex"
export default {
    data() {
        return {
            type: 0
        }
    },
    mounted() {
        if (this.cinemaList.length === 0) {
            // this.$store.dispatch("getCinemaList");
            this.getCinemaList()  
        } else {
            console.log("缓存");
        }
    },
    methods: {
        ...mapActions('CinemasStore', ["getCinemaList"])
    },
    computed: {
        ...mapState('CinemasStore', ["cinemaList"]),
        ...mapGetters('CinemasStore', ["filterCinemaList"])
    }
}
</script>
<style scoped>
li {
    list-style: none;
    padding: 10px;
}
</style>