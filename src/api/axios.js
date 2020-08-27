import axios from 'axios';
import qs from 'qs';

axios.defaults.baseURL = 'http://api.myvue.com/admin';
axios.default.timeout = 50000;
axios.defaults.headers["Content-Type"] =  "application/x-www-form-urlencoded;charset=UTF-8";


// 添加请求拦截器
axios.interceptors.request.use(config => { 
    if (config.method == 'post') {
        if (!config.data) {
            config.data = {};
        }

        config.data = qs.stringify(config.data);
    } else if (config.method == 'get') { 

    }

    return config;
}, error => { 
    return Promise.reject(error);
});

// 添加响应拦截器 在请求或响应被 then 或 catch 处理前拦截它们。
axios.interceptors.response.use(res => { 
    if (typeof res.data == 'string') {
        console.log(res.data);
        return false;
    }

    switch (res.data.ret) {
        case 200:
            return res.data.data;
        case 300:
            // 重定向
            break;
        default:
            console.log(res.data.msg);
            return false;
    }
}, error => { 
    return Promise.reject(error);
});

export default axios;






