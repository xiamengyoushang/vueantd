import request from "axios"
import {message} from "ant-design-vue";
import router from "../router";

// 测试域名
const BaseUrl = 'http://127.0.0.1:8118';

const service = request.create({
    baseURL: BaseUrl,
    timeout: 50000,
});

// 前置拦截
service.interceptors.request.use(config=>{
    console.log("========req========");
    config.headers.Authorization = localStorage.getItem('token');
    console.log(config);
    console.log("========req========");
    return config;
});

// 后置拦截
service.interceptors.response.use(
    response => {
        const res = response.data;
        console.log("========res========");
        console.log(res);
        console.log("========res========");
        return res
    }, error => {
        message.error(error)
        router.push('/500')
        return Promise.reject(error)
    }
);

export default service
