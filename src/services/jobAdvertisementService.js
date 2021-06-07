import axios from "axios";

export default class JobAdvertisementService{

    getJobAdvertisements(){
      return  axios.get("http://127.0.0.1:8081/api/jobadvertisement/getByJobAdversitementTrueDto");
    }


}