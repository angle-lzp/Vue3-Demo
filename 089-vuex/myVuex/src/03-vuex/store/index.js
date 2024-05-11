/*
 * @Author: Angelo
 * @Date: 2024-04-01 11:50:02
 * @version:
 * @Descripttion:
 */
import { createStore } from "vuex";
import TabberStore from "./module/TabbarStore";
import CinemasStore from "./module/CinemasStore";
const store = createStore({
  modules: {
    TabberStore,
    CinemasStore,
  },
});
export default store;
