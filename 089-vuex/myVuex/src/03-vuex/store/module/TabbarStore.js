/*
 * @Author: Angelo
 * @Date: 2024-04-01 17:43:08
 * @version:
 * @Descripttion:
 */
import { CHANGE_TABBAR } from "../type";
const TabberStore = {
  namespaced:true,//开启命名空间
  state() {
    return {
      isShow: true,
    };
  },
  //状态唯一修改的地方（可以记录状态被更改的记录）== 同步
  mutations: {
    [CHANGE_TABBAR](state, payLoad) {
      state.isShow = payLoad;
    },
  },
};
export default TabberStore;
