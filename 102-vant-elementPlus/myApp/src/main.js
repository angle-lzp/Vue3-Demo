/*
 * @Author: Angelo
 * @Date: 2024-04-02 14:29:31
 * @version:
 * @Descripttion:
 */
import { createApp } from "vue";
import App from "./06-Element-Plus/App.vue";
import router from "./06-Element-Plus/router";
import { createPinia } from "pinia";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(ElementPlus);
app.mount("#app");
