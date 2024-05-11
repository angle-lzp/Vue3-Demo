<template>
  <div>
    <Child :myTitle="myTitle" left="返回" right="首页" :isShow="true" :number="10"></Child>

    <Child v-bind="propObj"></Child>

    <button @click="handleClick">change</button>
  </div>
</template>

<script>
import Child from "./Child.vue";
export default {
  data() {
    return {
      myTitle: "电影",
      propObj: {
        myTitle: "衣服",
        left: "左边",
        right: "右边"
      }
    }

  },
  methods: {
    handleClick() {
      this.myTitle = this.myTitle + "xxxx"
    }
  },

  components: {
    Child
  }
}
</script>