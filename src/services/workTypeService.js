import axios from "axios";

export default class WorkTypeService{

    getWorkType(){
        return axios.get("http://127.0.0.1:8081/api/worktypes/getall")
    }


}