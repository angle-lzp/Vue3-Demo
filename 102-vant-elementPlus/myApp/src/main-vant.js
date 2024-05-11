/*
 * @Author: Angelo
 * @Date: 2024-04-02 14:29:31
 * @version:
 * @Descripttion:
 */
import { createApp } from "vue";
import App from "./05-vant/App.vue";
import router from "./05-vant/router";
import { createPinia } from "pinia";

//方式一：全局注册组件:
// 1. 引入你需要的组件 -- 不太建议在全局中定义组件
// import { Button } from "vant";
// 2. 引入组件样式 -- 央视可以在全局中定义
import "vant/lib/index.css";


//导入配置相关
import "./05-vant/util/config"

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
// app.use(Button);
app.mount("#app");
