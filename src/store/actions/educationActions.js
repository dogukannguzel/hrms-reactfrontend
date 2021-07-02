import { GET_EDUCATİONS, GET_EDUCATİON_GRADUATES } from "./actionTypes";
import  axios  from 'axios';

export function getEducation(educations) {
    return {
        type:GET_EDUCATİONS,
        payload:educations
    }
}





export function getEducationByResumeId(id){

    return function (dispatch) {
        return axios.get("http://127.0.0.1:8081/api/educations/findAllByResumeId?resumId="+id).then(result=>dispatch(getEducation(result.data.data)))
    }


}


export function getEducationByİd(id){

    return function (dispatch) {
        return axios.get("http://127.0.0.1:8081/api/educations/findById?id="+id).then(result=>dispatch(getEducation(result.data.data)))
    }


}

export function saveResumeEducationApi(education) {
    return axios
    .post("http://127.0.0.1:8081/api/educations/add", education, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .catch((result) => console.log(result.response));
  }
  
  export function uptadeResumeEducationApi(education) {
    return axios
    .put("http://127.0.0.1:8081/api/educations/uptade", education, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .catch((result) => console.log(result.response));
  }
  
  