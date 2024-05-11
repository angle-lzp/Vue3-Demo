<template>
    <div class="swiper">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

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

        }
    },
    props: {
        loop: {
            type: Boolean,
            default: true
        },
        "slides-per-view": {
            type: Number,
            default: 1
        },
        "space-between": {
            type: Number,
            default: 0
        }
    },
    mounted() {
        var mySwiper = new Swiper(".swiper", {
            loop: this.loop,//循环模式
            //observer: true,//loop和observer最好不用同时使用
            slidesPerView: this.slidesPerView, //一面有几张轮播图
            spaceBetween: this.spaceBetween,//每张轮播图间隔距离
            pagination: {
                el: ".swiper-pagination",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            on: {
                //使用箭头的方式，才表示这个this和mounted的this时同一个this，不然表示的时new Swiper()这个this
                slideChange: () => {
                    console.log("数据改变", mySwiper.activeIndex);
                    this.$emit("ListenSlideChange", mySwiper.activeIndex);
                }
            },
            scrollbar: {
                el: ".swiper-scrollbar",
            },
        })
    }
}
</script>

<style>
.swiper {
    width: 600px;
    height: 300px;
}
</style>