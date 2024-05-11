<!--
 * @Author: Angelo
 * @Date: 2024-04-08 09:19:11
 * @version: 
 * @Descripttion: 
-->
<template>
    <el-table :data="store.newsList" style="width: 100%">
        <el-table-column label="标题" width="180">
            <template #default="scope">
                <div style="display: flex; align-items: center">
                    <el-icon>
                        <timer />
                    </el-icon>
                    <b>{{ scope.row.title }}</b>
                </div>
            </template>
        </el-table-column>
        <el-table-column prop="type" label="类型" width="180" />
        <el-table-column prop="content" label="内容" width="180" />
        <el-table-column label="操作" width="180">
            <template #default="scope">
                <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script setup>
import useNewsStore from "../store/NewsStore.js"
import { Timer } from "@element-plus/icons-vue"
const store = useNewsStore()
const handleEdit = (index, row) => {
    console.log(index, row)
}
const handleDelete = (index, row) => {
    console.log(index, row)
}
</script>