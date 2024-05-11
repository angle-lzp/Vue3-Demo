// 组合式API的方式
// ref() 就是 state 属性
// computed() 就是 getters
// function() 就是 actions
import { defineStore } from "pinia";
import { ref } from "vue";
const useTabbarStore = defineStore("tabbar", () => {
  const isShow = ref(true);

  // 函数方式一：
  // const change = (value) => {
  //   isShow.value = value;
  // };

  // 函数方式二：
  function change(value) {
    isShow.value = value;
  }

  return {
    isShow,
    change,
  };
});

export default useTabbarStore;
