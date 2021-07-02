import axios from "axios";
import { GET_ALL_CANDİDATES, GET_CANDİDATE_RESUME } from "./actionTypes";



export function getAllCandidates(candidates) {
  return {
    type: GET_ALL_CANDİDATES,
    payload: candidates,
  };
}

export function getAllCandidatesApi() {
  return  function (dispatch) {
    return  axios
      .get("http://127.0.0.1:8081/api/candidates/getall")
      .then(  ( result) => dispatch(   getAllCandidates(result.data.data)));
  };
}






export function candidateRegisterApi(candidate) {
  return async  function (dispatch) {
   return axios.post(
    "http://127.0.0.1:8081/api/auth/register/candidate",
    candidate,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  };
 
}

