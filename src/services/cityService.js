import axios from "axios";

export default class CityService{

    getCitys(){
        return axios.get("http://127.0.0.1:8081/api/citys/getAll");

    }

}