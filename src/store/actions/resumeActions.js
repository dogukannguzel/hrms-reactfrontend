import { GET_CANDİDATE_RESUME } from "./actionTypes";
import axios from "axios"


export function getCandidateResume(resume) {
    return {
      type: GET_CANDİDATE_RESUME,
      payload: resume,
    };
  }


  export function getCandidateResumeApi(id) {
    return function (dispatch) {
      axios
        .get("http://127.0.0.1:8081/api/resumes/getAllByCandidateId/" + id)
        .then((result) => dispatch(getCandidateResume(result.data.data)));
    };
  }

  export function getByResumeIdApi(id) {
    return function (dispatch) {
      axios
        .get("http://127.0.0.1:8081/api/resumes/getById?id=" + id)
        .then((result) => dispatch(getCandidateResume(result.data.data)));
    };
  }

  export function saveResumeApi(resume) {

    return axios
      .post("http://127.0.0.1:8081/api/resumes/add", resume, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => console.log(result));
  }
  export function uptadeResumeApi(resume) {
    console.log(resume);
    return axios
      .put("http://127.0.0.1:8081/api/resumes/uptade", resume, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => console.log(result));
  }
  

  
  
  