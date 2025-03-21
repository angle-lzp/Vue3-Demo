/*
 * @Author: Angelo
 * @Date: 2024-03-28 13:42:40
 * @version: 
 * @Descripttion: 
 */
import { ref, watch, watchEffect } from "vue";
import axios from "axios";
function useSelectWatch() {
  const selectValue = ref("jam");
  const dataList = ref([]);
  //   1.正常操作
  //   watch(
  //     selectValue,
  //     (newValue, oldValue) => {
  //       axios.get(`http://localhost:3000/news?author=${newValue}`).then((res) => {
  //         console.log("value", res.data);
  //         dataList.value = res.data;
  //       });
  //     },
  //     { immediate: true }
  //   );


  //   2.异步操作
  //   watch(
  //     selectValue,
  //     async (newValue, oldValue) => {
  //       var res = await axios.get(`http://localhost:3000/news?author=${newValue}`).then((res) => {
  //         console.log("value", res.data);
  //         dataList.value = res.data;
  //       });
  //     },
  //     { immediate: true }
  //   );

  
  //3.异步操作2
  //使用watchEffact：第一次都会执行，在请求用到了哪个状态，被更改了都会执行；不会获取旧值；只能获取当前值；也是异步
  watchEffect(async () => {
    var res = await axios
      .get(`http://localhost:3000/news?author=${selectValue.value}`)
      .then((res) => {
        console.log("value", res.data);
        dataList.value = res.data;
      });
  });
  
  return {
    selectValue,
    dataList,
  };
}
export default useSelectWatch;
