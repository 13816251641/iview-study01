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
            url: url,
            method: 'get',
            data
        })
    }
}

