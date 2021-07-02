import axios from "axios";

export default class LanguageService {

    getLanguage(){
        return axios.get("http://127.0.0.1:8081/api/languages/getall");
    }


    postLanguage(obj){
        return axios.post('http://127.0.0.1:8081/api/languages/add',obj, {
            headers: {
                'Content-Type': 'application/json',
                
            }
        })
    }

 

}