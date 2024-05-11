<template>
  <div>
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in dataList" :key="item">{{ item }}</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div>
  </div>
</template>

<script>
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

export default {
  data() {
    return {
      dataList: []
    }
  },

  updated() {
    //在这边进行dom操作的话，每次状态被更改了都行执行一次，会出现问题
  },
  mounted() {
    setTimeout(() => {
      this.dataList = ["aaa", "bbb", "ccc"]
      this.$nextTick(() => {
        var mySwiper = new Swiper(".swiper", {
          loop: false,
          observer: true,//loop和observer最好不用同时使用
          pagination: {
            el: ".swiper-pagination",
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          on: {
            slideChange: function () {
              console.log("数据改变", this.activeIndex);
            }
          },
          scrollbar: {
            el: ".swiper-scrollbar",
          },
        })
      })

    }, 2000);
  }
}
</script>

<style>
.swiper {
  width: 600px;
  height: 300px;
}
</style>