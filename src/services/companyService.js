import axios from "axios";

export default class CompanyService{

    getCompanys(){
        return axios.get("http://127.0.0.1:8081/api/companys/getall");
    }

    getByCompanyId(id){
        return axios.get(`http://127.0.0.1:8081/api/companys/getAllById?id=${id}`)
    }
    
    getAllCreatedDate(){
        return axios.get("http://127.0.0.1:8081/api/companys/getAllCreatedDate")
    }

}