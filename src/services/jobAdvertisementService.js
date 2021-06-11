import axios from "axios";
import { object } from "yup";

export default class JobAdvertisementService{

    getJobAdvertisements(){
      return  axios.get("http://127.0.0.1:8081/api/jobadvertisement/getByJobAdversitementTrueDto");
    }

    getJobAdvertisementById(id){
      return axios.get(`http://127.0.0.1:8081/api/jobadvertisement/findAllById?id=${id}`)
    }


    postJobAdvertisement(obj){
      return axios.post('http://127.0.0.1:8081/api/jobadvertisement/add',obj, {
        headers: {
            'Content-Type': 'application/json',
            
        }
    })
    }

}