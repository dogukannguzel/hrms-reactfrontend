import axios from "axios";

export default class CanditateService{

    getCandidates(){
        return axios.get("http://127.0.0.1:8081/api/candidates/getall");
    }

}