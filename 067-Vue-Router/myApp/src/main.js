/*
 * @Author: Angelo
 * @Date: 2024-03-29 09:47:12
 * @version:
 * @Descripttion:
 */
import { createApp } from "vue";
import router from "./02-VueRouter/router/index";
import App from "./02-VueRouter/App.vue";

const app = createApp(App);
// 挂载之前进行使用
app.use(router);
app.mount("#app");
