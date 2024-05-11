/*
 * @Author: Angelo
 * @Date: 2024-04-08 09:17:55
 * @version:
 * @Descripttion:
 */
// 路由配置
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

import NotFound from "../views/NotFound.vue";
import Home from "../views/Home.vue";
import NewAdd from "../views/NewsAdd.vue";
import NewList from "../views/NewsList.vue";

const routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/news/newsAdd",
    component: NewAdd,
  },
  {
    path: "/news/newsList",
    component: NewList,
  },
  {
    path: "/",
    redirect: "/home",
  },

  // 如果访问的路径不存在，跳转到一个提示页面;优先级最低，在上面没有找到的i情况下调用这个页面
  //  放在数组的任何位置都可以
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

// 1.路由模式（带#号不带#号）
const router = createRouter({
  // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(), //hash模式：#/film   #/center
  // history: createWebHistory(),//非hash模式，不带#号
  routes, // `routes: routes` 的缩写;key和value相等，那么直接写key就可以，可以省略
});

// 全局拦截(前置钩子)
// to：需要跳转的路径对象
// from：从哪个路径来的
// next：不调用就不会继续执行
// 也可以使用异步

// router.beforeEach(async (to, from, next) => { //注释一下：方便后面使用布局钩子
//   // console.log("to", to);
//   // console.log("from", from);
//   //模拟登录的情况
//   let isAuthenticated = await localStorage.getItem("token");
//   //to.mate.requiredAuth表示只有在添加了这个属性（to.mate.requiredAuth）的页面没有登入的情况下才进行登入
//   if (to.name !== "Login" && !isAuthenticated && to.meta.requiredAuth)
//     next({ name: "Login" });
//   else next();
// });

//全局后置钩子
//作用：对于分析、更改页面标题、申明页面等辅助功能以及许多其他事情都很有用
// router.afterEach((to, from) => {
//   console.log("提交后端用户行为的分析");
// });

export default router;
