import axios from "axios";

export default class GraduateService{

    getGraduates(){
        return axios.get("http://127.0.0.1:8081/api/graduates/getall");
    }

}