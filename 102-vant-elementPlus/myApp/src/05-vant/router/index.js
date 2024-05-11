// 路由配置
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

import Films from "../views/Films.vue";
// 在下面使用路由懒加载的方式（按需加载，相当于动态组件）
// import Center from "../views/Center.vue";
// import Cinemas from "../views/Cinemas.vue";
import NotFound from "../views/NotFound.vue";
import NowPlaying from "../views/films/nowPlaying.vue";
import ComingSoon from "../views/films/comingSoon.vue";
import Detail from "../views/Detail.vue";
import Login from "../views/Login.vue";
import Location from "../views/Location.vue";

const routes = [
  {
    path: "/films",
    name: "myfilms", //路由名称，配合方式三使用
    component: Films,
    // 二级路由（嵌套路由）
    children: [
      {
        // 这两种path的写法是一致的，但是最好还是使用/films/nowPlaying，嵌套关系明了
        // path: "nowPlaying",
        path: "/films/nowPlaying",
        component: NowPlaying,
      },
      {
        path: "/films/comingSoon",
        component: ComingSoon,
      },
      {
        path: "/films",
        redirect: "/films/nowPlaying",
      },
    ],
  },
  {
    path: "/cinemas",
    alias: "/wode", //别名：作用同path
    component: () => import("../views/Cinemas.vue"), //路由懒加载的方式（按需加载，相当于动态组件）
  },
  {
    path: "/center",
    component: () => import("../views/Center.vue"), //路由懒加载的方式（按需加载，相当于动态组件）
    meta: {
      //配合全局拦截使用
      requiredAuth: true,
    },
  },
  {
    path: "/cinemas/location",
    component: Location,
  },
  // {
  //   //:myId表示动态路由接收参数的；适用：detail/:myId/:myName 的方式
  //   path: "/detail/:myId",
  //   name: "Detail",
  //   component: Detail,
  // },

  {
    //适用：/detail?name=angelo&password=123 的方式
    path: "/detail",
    component: Detail,
  },

  // 方式一：请求根节点的时候，跳转到/films这个地址(直接请求都组件)
  // {
  //   path: "/",
  //   component: Films,
  // },

  // 方式二：重定向到对应的路由
  // {
  //   path: "/",
  //   redirect: "/films",
  // },

  //方式三：通过路由的名称进行重定向
  {
    path: "/",
    redirect: "/films",
    //使用下面的方式，如果涉及到跳转到默认的二级地址，无效，无法跳转
    // redirect: {
    //   name: "myfilms",
    // },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
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
