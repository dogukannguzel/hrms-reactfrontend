import axios from "axios";

export default class ResumeService{

    getResumes(){
        return axios.get("http://127.0.0.1:8081/api/resumes/getall")
    }
    

    getResumeCandidateId(id){
        return axios.get("http://127.0.0.1:8081/api/resumes/getAllByCandidateIdAndActiveTrue?candidateId="+id)
    }   


    createResume(obj){
        return axios.post('http://127.0.0.1:8081/api/resumes/add',obj, {
            headers: {
                'Content-Type': 'application/json',
                
            }
        })
    }

}