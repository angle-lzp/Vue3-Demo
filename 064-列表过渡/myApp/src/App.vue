<template>
  <div>
    <input type="text" v-model="mytext" @input="handleInput" />
    <button @click="handleAdd">add</button>
    <!-- tag="ul"表示ul是容器元素用来渲染 -->
    <TransitionGroup tag="ul" name="angelo">
      <li v-for="item, index in dataList" :key="index">
        {{ item }}
        <button @click="handleDelete(index)">del</button>
      </li>
    </TransitionGroup>
    <div v-if="dataList.length === 0">暂无数据！</div>
  </div>
</template>

<script>
import 'animate.css';
export default {
  data() {
    return {
      mytext: "",
      dataList: ["111", "222"],
    };
  },
  methods: {
    // 在进行监听的时候会把原生的事件给传过来
    handleInput(evt) {
      console.log("Luo", evt);
      console.log("Luo", evt.target.value);
    },
    handleAdd() {
      if (!(this.mytext.length === 0)) {
        this.dataList.push(this.mytext);
        this.mytext = "";
      }
    },
    handleDelete(index) {
      this.dataList.splice(index, 1);
    },
  },
}
</script>
<style>
.angelo-enter-active {
  animation: kerwianimate 1s;
}

.angelo-leave-active {
  animation: kerwianimate 1s reverse;
}

@keyframes kerwianimate {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

html,
body {
  overflow-x: hidden;
}

/* 对移动中的元素应用的过渡 */
.angelo-move {
  transition: all 1.5s ease;

}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.angelo-leave-active {
  position: absolute;
}

</style>