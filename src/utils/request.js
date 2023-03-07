// 导入axios
import axios from "axios";
// 创建一个新的axios实例
const instance = axios.create({
    baseURL: "/api", // 基础URL
    timeout: 5000 // 超时时间
});
// 请求拦截器
instance.interceptors.request.use(
    config => {
        // 在发送请求前做些什么，比如添加token，设置请求头等
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    error => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);
// 响应拦截器
instance.interceptors.response.use(
    response => {
        // 对响应数据做点什么，比如剥离无效数据，处理token失效等
        const { data } = response;
        console.log(data);
        if (data.code == 200) {
            console.log(111);
            return data.data; // 返回有效数据
        } else if (data.code == 401) {
            // 处理token失效的逻辑，比如跳转到登录页等
            return Promise.reject(data.message); // 返回错误信息
        } else {
            return Promise.reject(data.message); // 返回错误信息
        }
    },
    error => {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);
// 导出一个函数，调用axios发请求
// export default function request(options) {
//     return instance(options); // 返回一个promise对象
// }
export default instance