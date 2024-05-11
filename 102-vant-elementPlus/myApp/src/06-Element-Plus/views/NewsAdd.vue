<template>
    <el-form :model="form" label-width="auto" style="max-width: 600px">
        <el-form-item label="新闻标题">
            <el-input v-model="form.title" />
        </el-form-item>
        <el-form-item label="新闻类型">
            <el-select v-model="form.type" placeholder="please select your zone">
                <el-option label="经济" value="经济" />
                <el-option label="科技" value="科技" />
                <el-option label="体育" value="体育" />
            </el-select>
        </el-form-item>
        <el-form-item label="新闻内容">
            <el-input v-model="form.content" type="textarea" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">新增</el-button>
            <el-button>返回</el-button>
        </el-form-item>
    </el-form>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from "vue-router"
import useNewsStore from "../store/NewsStore.js"

const store = useNewsStore()
const router = useRouter()
//这里是reactive，所以不需要form.value
const form = reactive({
    title: "",
    type: "",
    content: ""
})

const onSubmit = () => {
    console.log(form)
    store.add(form)
    router.push("/news/newsList")
}
</script>