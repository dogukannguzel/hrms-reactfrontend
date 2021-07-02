import { GET_JOB_POSİTİONS } from "./actionTypes";
import axios from "axios";

export function getJobPosition(jobPosition) {
  return {
    type: GET_JOB_POSİTİONS,
    payload: jobPosition,
  };
}

export function getJobPositionApi(params) {
  return function (dispatch) {
    return axios
      .get("http://127.0.0.1:8081/api/jobposition/getall")
      .then((result) => dispatch(getJobPosition(result.data.data)));
  };
}
