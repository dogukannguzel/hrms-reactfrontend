import {GET_RESUME_TECHONOLOGY_BY_İD } from "./actionTypes";
import  axios  from 'axios';

export function getTechonlogy(techonlogy) {
    return {
        type:GET_RESUME_TECHONOLOGY_BY_İD,
        payload:techonlogy
    }
}





export function getTecholongyByResumeId(id){

    return function (dispatch) {
        return axios.get("http://127.0.0.1:8081/api/techonologys/findById?id="+id).then(result=>dispatch(getTechonlogy(result.data.data)))
    }


}

export function saveResumeTechonologyApi(techonology) {
    return axios
    .post("http://127.0.0.1:8081/api/techonologys/add", techonology, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .catch((result) => console.log(result.response));
  }

  export function uptadeResumeTechonologyApi(techonology) {
    return axios
    .put("http://127.0.0.1:8081/api/techonologys/uptade", techonology, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .catch((result) => console.log(result.response));
  }

