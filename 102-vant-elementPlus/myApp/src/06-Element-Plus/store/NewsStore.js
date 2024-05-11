import { defineStore } from "pinia";
import { ref } from "vue";
const useNewsStore = defineStore("tabbar", () => {
  const newsList = ref([]);

  function add(value) {
    //防止表单没有刷新，重复提交（push(value)这种是保存的引用，重新提交这个数据都i是指向同一个引用，数据重复）
    newsList.value.push({ ...value });
  }

  return {
    newsList,
    add,
  };
});

export default useNewsStore;
