import { createApp } from 'vue'
import MyApp from './App.vue'   //这里的MyApp是一个文件组件，是一个对象；可以理解为是App.vue文件的导出对象，名字可以随便取，没有要求

createApp(MyApp).mount('#app')
