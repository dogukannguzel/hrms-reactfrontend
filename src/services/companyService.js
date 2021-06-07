import axios from "axios";

export default class CompanyService{

    getCompanys(){
        return axios.get("http://127.0.0.1:8081/api/employers/getall");
    }


}