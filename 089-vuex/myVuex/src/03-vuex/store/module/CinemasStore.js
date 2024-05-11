/*
 * @Author: Angelo
 * @Date: 2024-04-01 17:43:08
 * @version:
 * @Descripttion:
 */
import axios from "axios";
const CinemasStore = {
  namespaced:true,//开启命名空间
  state() {
    return {
      cinemaList: [],
    };
  },
  //状态唯一修改的地方（可以记录状态被更改的记录）== 同步
  mutations: {
    changeCinem(state, payLoad) {
      state.cinemaList = payLoad;
    },
  },

  //同步+异步
  actions: {
    async getCinemaList(store) {
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
      store.commit("changeCinem", res.data.data.cinemas);
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
};
export default CinemasStore;
