import axios from 'axios'


let service = axios.create({
    baseURL: 'http://localhost:8080/vue/',
    timeout: 5000,
    headers: {
        'content-type': 'application/json',
        'token':'14a1347f412b319b0fef270489f'
    }
});

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

