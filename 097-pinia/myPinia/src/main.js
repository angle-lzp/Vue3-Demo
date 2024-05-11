import { createApp } from "vue";
import App from "./04-Pinia/App.vue";
import router from "./04-Pinia/router";
import { createPinia } from "pinia";
const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");
