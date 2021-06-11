import axios from "axios";

export default class WorkPlaceService{

    getWorkPlaces(){
        return axios.get("http://127.0.0.1:8081/api/workplaces/getall")
    }
}