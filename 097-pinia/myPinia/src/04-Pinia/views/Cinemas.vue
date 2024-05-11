<template>
    <div>
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
const type = ref(0)
const store = useCinemasStore()
onMounted(() => {
    if (store.cinemaList.length === 0) {
        store.getCinemaList()
    } else {
        console.log("缓存");
    }
})

</script>
<style scoped>
li {
    list-style: none;
    padding: 10px;
}
</style>