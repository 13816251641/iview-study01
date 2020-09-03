import axios from 'axios'
import Cookies from 'js-cookie';


let service = axios.create({
    baseURL: 'http://localhost:8080/vue/',
    withCredentials: true,//允许携带cookie,不加无法传输cookie
    timeout: 5000,
    headers: {
        'content-type': 'application/json',
        'token':'14a1347f412b319b0fef270489f'
    }
});


// request拦截器
service.interceptors.request.use(config => {
    let headers = {};
    let token = Cookies.get('inner-token');
    if (token){
        headers['token'] = token;
    }
    config.headers = headers;//这里会覆盖service中的headers
    return config;
}, error => {
    // Do something with request error
    console.log(error);// for debug
    Promise.reject(error);
});


// respone拦截器
service.interceptors.response.use(
    response => {
        if (process.env.ENV_CONFIG !== 'prod') {
            console.log(response);
        }
        //统一异常处理
        if (response && response.data) {
            const data = response.data;
            //未登录则重定向
            if (data.errorCode === '302'){ //清除session,返回到百度
                window.location.href = 'http://www.baidu.com';
            }
            return Promise.resolve(response.data);//程序ok,将结果返回给前端
        }
        return Promise.reject();

    },
     /*
        后端程序没启动会进这里
      */
    error => {
        console.log('err520' + error);// for debug
        return Promise.reject(error);
    }
);


export default {
    service,
    get(url,data){
        return service({
            method: 'get',
            url: url,
            params: data //get一定要为params
        })
    },
    post(url,dataObj){
        return service({
            method: 'post',
            url: url,
            data: dataObj //post要想传参参数名必须是data
        })
    }
}
