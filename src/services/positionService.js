import axios from "axios";

export default class PositionsService{

    getJobPositions(){
        return axios.get("http://127.0.0.1:8081/api/jobposition/getall");
    }

}