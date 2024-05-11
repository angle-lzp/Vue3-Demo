/*
 * @Author: Angelo
 * @Date: 2024-04-02 11:44:48
 * @version:
 * @Descripttion:组合式API的方式
 *   ref() 就是 state 属性
 *   computed() 就是 getters
 *   function() 就是 actions
 */
import axios from "axios";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
// import { closeToast, showLoadingToast } from "vant";
const useCinemasStore = defineStore("useCinemasStore", () => {
  const cinemaList = ref([]);
  const location = ref({
    cityId: 130600,
    name: "保定",
    pinyin: "baoding",
    isHot: 0,
  });

  async function getCinemaList() {
    //异步请求开始前显示图标 -- 一般不放在这里，放在axios的配置拦截器中，提出来一个配置文件config.js
    // showLoadingToast({
    //   message: "Loading...",
    //   forbidClick: true, //禁止背景被点击
    // });
    const res = await axios.get(
      `https://m.maizuo.com/gateway?cityId=${location.value.cityId}&ticketFlag=1&k=1760808`,
      {
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.2.1","e":"1710755480749750966026241"}',
          "X-Host": "mall.film-ticket.cinema.list",
        },
      }
    );
    console.log("cinemList", res.data);
    cinemaList.value = res.data.data.cinemas;
    //关闭提示
    // closeToast();
  }

  const filterCinemaList = computed(
    () => (type) => cinemaList.value.filter((item) => item.eTicketFlag === type)
  );

  //计算属性，计算地址

  return {
    cinemaList,
    location,
    getCinemaList,
    filterCinemaList,
  };
});
export default useCinemasStore;
