<template>
    <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
            <h3 text="2xl" justify="center">{{ item }}</h3>
        </el-carousel-item>
    </el-carousel>
    <el-row :gutter="20">
        <el-col :span="6">
            <div class="grid-content ep-bg-purple"> 公司介绍</div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content ep-bg-purple">产品介绍</div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content ep-bg-purple">股东中心</div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content ep-bg-purple">个人中心</div>
        </el-col>
    </el-row>
</template>

<style scoped>
.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}

.el-row {
    margin-bottom: 20px;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
    background: lightblue;
    text-align: center
}
</style>