/*
 * @Author: Angelo
 * @Date: 2024-03-27 10:24:22
 * @version:
 * @Descripttion:
 */
import { createApp } from "vue";
import App from "./App.vue";
var app = createApp(App);

// app.directive("angelo", {
//   mounted(el, binding) {
//     console.log("directive", el);
//     el.style.background = binding.value;
//   },
// });
app.mount("#app");
