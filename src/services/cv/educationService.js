import axios from "axios";

export default class Education{

    getEducations(){
        return axios.get("http://127.0.0.1:8081/api/educations/getall");
    }

}