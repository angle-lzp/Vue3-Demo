import { computed, ref } from "vue";

function UseSearch(obj) {
  const mytext = ref("");
  const dataListComputed = computed(() => {
    return obj.dataList.filter((res) => res.includes(mytext.value));
  });
  return {
    mytext,
    dataListComputed,
  };
}

export default UseSearch;
