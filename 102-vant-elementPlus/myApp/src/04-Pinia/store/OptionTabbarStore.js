/*
 * @Author: Angelo
 * @Date: 2024-04-02 13:52:16
 * @version: 
 * @Descripttion: 选项式API的写法
 */
import { defineStore } from "pinia";
const useTabbarStore = defineStore("tabbar", {
  // state-方式一：
  //   state() {
  //     return {
  //       isShow: true,
  //     };
  //   },

  // state-方式二：
  //   state: () => {
  //     return {
  //       isShow: false,
  //     };
  //   },

  //state-方式三：里边只有一个return，所以可以直接返回
  state: () => ({
    isShow: true,
  }),

  actions: {
    change(value) {
      this.isShow = value;
    },
  },
});

export default useTabbarStore;
