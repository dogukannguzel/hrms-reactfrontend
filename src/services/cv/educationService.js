import axios from "axios";

export default class Education{

    getEducations(){
        return axios.get("http://127.0.0.1:8081/api/educations/getall");
    }

    postEducation(obj){
        return axios.post('http://127.0.0.1:8081/api/educations/add',obj, {
            headers: {
                'Content-Type': 'application/json',
                
            }
        })
    }
    getLEducationByResumId(id){
        return axios.get("http://127.0.0.1:8081/api/educations/findAllByResumeId?resumId="+id)
    }


    deleteEducation(id){
        return axios.delete("http://127.0.0.1:8081/api/educations/delete?id="+id)
    }



    getEducationGraduates(){
        return axios.get("http://127.0.0.1:8081/api/graduates/getall")
    }


}