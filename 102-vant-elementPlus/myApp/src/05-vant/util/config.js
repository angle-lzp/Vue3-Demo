/*
 * @Author: Angelo
 * @Date: 2024-04-02 15:37:30
 * @version:
 * @Descripttion:所有的axios在发请求之前都会走一遍这个拦截请求
 */
// 引入axios
import axios from "axios";
import { closeToast, showLoadingToast } from "vant";

// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    showLoadingToast({
      message: "loading...",
      forbidClick: true,
    });
    return config;
  },
  function (error) {
    closeToast();
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    closeToast();
    return response;
  },
  function (error) {
    closeToast();
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
