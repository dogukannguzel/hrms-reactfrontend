import axios from "axios";

export default class TechonlogyService {

    getTechonology(){
        return axios.get("http://127.0.0.1:8081/api/techonologys/getall")
    }

    postTech(obj){
        return axios.post('http://127.0.0.1:8081/api/techonologys/add',obj, {
            headers: {
                'Content-Type': 'application/json',
                
            }
        })
    }
}