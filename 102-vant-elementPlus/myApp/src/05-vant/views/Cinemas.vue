<template>
    <div>
        <van-nav-bar title="标题">
            <template #right>
                <van-icon name="search" size="18" />
            </template>
            <template #left>
                <span @click="gotoLocation">{{ store.location.name }}</span>
            </template>
        </van-nav-bar>
        <select v-model="type">
            <option :value="0">APP订票</option>
            <option :value="1">前台订票</option>
        </select>
        <ul>
            <li v-for="item in store.filterCinemaList(type)" :key="item.cinemaId">
                {{ item.name }}</li>
        </ul>
    </div>
</template>
<script setup>
import { ref, onMounted } from "vue"
import useCinemasStore from "../store/CinemaStore"
import { useRouter } from "vue-router"
import { NavBar as vanNavBar, Icon as vanIcon } from "vant"
const type = ref(0)
const store = useCinemasStore()
const router = useRouter()
onMounted(() => {
    if (store.cinemaList.length === 0) {
        store.getCinemaList()
    } else {
        console.log("缓存");
    }
})
const gotoLocation = () => {
    router.push("/cinemas/location")
}

</script>
<style scoped>
li {
    list-style: none;
    padding: 10px;
}
</style>