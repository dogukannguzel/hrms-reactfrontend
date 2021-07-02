import { GET_RESUME_JOBEXPERİENCE_BY_İD } from "./actionTypes";
import axios from "axios"
export function getAllJobExperience(jobExperience) {
    return {
      type: GET_RESUME_JOBEXPERİENCE_BY_İD,
      payload: jobExperience,
    };
  }
  
  export function getResumeJobExperienceByİd(id) {
    return  function (dispatch) {
      return  axios
        .get("http://127.0.0.1:8081/api/jobexperiences/findById?id="+id)
        .then(  ( result) => dispatch(   getAllJobExperience(result.data.data)));
    };
  }
  

  export function saveResumeJobExperienceApi(JobExperience) {
    return axios
    .post("http://127.0.0.1:8081/api/jobexperiences/add", JobExperience, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .catch((result) => console.log(result.response));
  }

  export function uptadeResumeJobExperienceApi(JobExperience) {
    return axios
    .put("http://127.0.0.1:8081/api/jobexperiences/uptade", JobExperience, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .catch((result) => console.log(result.response));
  }