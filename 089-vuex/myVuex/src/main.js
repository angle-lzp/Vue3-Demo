/*
 * @Author: Angelo
 * @Date: 2024-04-01 11:45:47
 * @version:
 * @Descripttion:
 */
import { createApp } from "vue";
import App from "./03-vuex/App.vue";
import vueRouter from "./03-vuex/router/index";
import vuex from "./03-vuex/store/index";

const app = createApp(App);
app.use(vueRouter);
app.use(vuex);
app.mount("#app");
