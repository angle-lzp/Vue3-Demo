<template>
  <div>
    <input type="text" v-model="text" />
    <Child>
      <!-- props:表示在slot中的属性 -->
      <!-- slot加上名字，下面可修改成 -->
      <!-- 直接通过解构的方式获取到myValue的值 ，因为props是一个对象的形式，通过解构的方式，里边是对象的名称就可以获取这个对象的值了-->
      <!-- <template v-slot:movie="{myValue}"></template> -->
       <!-- 首次加载使用的是Child中的布局，当在input中进行操作的时候才会变成在App的<li><div></div></li>布局 -->
      <template v-slot:movie="props">
        <ul>
          <li>{{ props.a }}</li> <!-- 读取a值 -->
          <li>{{ props.b }}</li> <!-- 读取b值 -->
          <li>{{ props.name }}</li> <!-- name不是自定义的属性，读取不了 -->
          <li v-for="item in props.myValue" :key="item.id">
            <div v-if="item.name.includes(text) && text != ''"
              style="background: red;font-weight: 300; font-size: 100px;">
              {{ item.name }}
            </div>
            <div v-else>
              {{ item.name }}
            </div>
          </li>

        </ul>
      </template>
    </Child>
  </div>
</template>

<script>
import Child from './components/Child.vue';
export default {
  data() {
    return {
      text: ""
    }
  },
  components: {
    Child
  }
}
</script>