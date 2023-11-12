import axios, { AxiosResponse } from "axios";
import { ElMessage } from "element-plus";
//import router from "@/router";
import { useUserStoreWithOut } from "@/store/modules/user";
//import { Aws } from "@/network/aws/aws";

const showStatus = (status: number) => {
  let message = "";
  switch (status) {
    case 400:
      message = "请求错误(400)";
      break;
    case 401:
      message = "未授权，请重新登录(401)";
      break;
    case 403:
      message = "拒绝访问(403)";
      break;
    case 404:
      message = "请求出错(404)";
      break;
    case 408:
      message = "请求超时(408)";
      break;
    case 500:
      message = "服务器错误(500)";
      break;
    case 501:
      message = "服务未实现(501)";
      break;
    case 502:
      message = "网络错误(502)";
      break;
    case 503:
      message = "服务不可用(503)";
      break;
    case 504:
      message = "网络超时(504)";
      break;
    case 505:
      message = "HTTP版本不受支持(505)";
      break;
    default:
      message = `连接出错(${status})!`;
  }
  return `${message}，请检查网络或联系管理员！`;
};

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
});

//var token = useUserStoreWithOut().getToken;
//service.defaults.headers.common['Authorization'] = tt;

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 获取token，并将其添加至请求头中
    const token = useUserStoreWithOut().getToken;
    if (token) {
      if (config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
        // config.headers.Authorization = `111111`;
      }
    }
    return config;
  },
  (error) => {
    // 错误抛到业务代码
    error.data.msg = error.data.message || "服务器异常，请联系管理员！";
    return Promise.resolve(error);
  }
);

export default service;
