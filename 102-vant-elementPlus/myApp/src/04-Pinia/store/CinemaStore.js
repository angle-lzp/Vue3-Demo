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
const useCinemasStore = defineStore("useCinemasStore", () => {
  const cinemaList = ref([]);

  async function getCinemaList() {
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
    cinemaList.value = res.data.data.cinemas;
  }

  const filterCinemaList = computed(
    () => (type) => cinemaList.value.filter((item) => item.eTicketFlag === type)
  );

  return {
    cinemaList,
    getCinemaList,
    filterCinemaList,
  };
});
export default useCinemasStore;
