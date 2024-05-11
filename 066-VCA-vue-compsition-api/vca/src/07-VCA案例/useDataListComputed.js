import { computed, ref } from "vue";

function useDataListComputed(dataList) {
  const mytext = ref("");
  const computedDataList = computed(() => {
    console.log("mytext", mytext.value);
    return dataList.value.filter((res) => res.content.includes(mytext.value));
  });
  return {
    mytext,
    computedDataList,
  };
}

export default useDataListComputed;
