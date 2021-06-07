import axios from "axios";

export default class JobExperience {

    getJobExperiences(){
        return axios.get("http://127.0.0.1:8081/api/jobexperiences/getall");
    }

}