/*
 * @Author: Angelo
 * @Date: 2024-04-02 11:44:48
 * @version:
 * @Descripttion:选项式API的写法
 */
import axios from "axios";
import { defineStore } from "pinia";
const useCinemasStore = defineStore("useCinemasStore", {
  state: () => ({
    cinemaList: [],
  }),

  actions: {
    async getCinemaList() {
      const res = await axios.get(
        "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=1760808",
        {
          headers: {
            "X-Client-Info":
              '{"a":"3000","ch":"1002","v":"5.2.1","e":"1710755480749750966026241"}',
            "X-Host": "mall.film-ticket.cinema.list",
          },
        }
      );
      console.log("cinemList", res.data);
      this.cinemaList = res.data.data.cinemas;
    },
  },

  //getters store的计算属性 （相当于computed ）(在Cinemas.vue中使用)
  getters: {
    filterCinemaList(store) {
      //返回一个函数，这个函数可以接收入参数据
      return (type) => {
        return store.cinemaList.filter((item) => {
          return item.eTicketFlag === type;
        });
      };
    },
  },
});
export default useCinemasStore;
