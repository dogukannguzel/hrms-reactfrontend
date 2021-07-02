import axios from "axios";
import { GET_JOB_ADVERTİSEMENT, GET_JOB_ADVERTİSEMENT_FİLTER_WORK_TYPES } from "./actionTypes";

export function getJobAdvertisements(jobAdvertisements) {
  return {
    type: GET_JOB_ADVERTİSEMENT,
    payload: jobAdvertisements,
  };
}








export function getJobAdvertisementByCompanyId(id) {
  return function (dispatch) {
    return axios
        .get(
          `http://127.0.0.1:8081/api/jobadvertisement/getByCompanyId/${id}?pageNo=1&pageSize=10`
        )
        .then((result) => dispatch(getJobAdvertisements(result.data.data)));
  }
}




export function getJobAdvertisementByIdApi(id) {
  return function (dispatch) {
  
    return axios
      .get(
        `http://127.0.0.1:8081/api/jobadvertisement/findById?id=${id}`
      )
      .then((result) => dispatch(getJobAdvertisements(result.data.data)));
  };
}



export function getJobAdvertisementsApi(
  pageNo = 1,
  pageSize = 10,
 

) {
  return async function (dispatch) {
  
    return await axios
      .get(
        `http://127.0.0.1:8081/api/jobadvertisement/getByJobAdversitementTableDto?pageNo=${pageNo}&pageSize=${pageSize}`
      )
      .then((result) =>  dispatch(getJobAdvertisements(result.data.data)));
  };
}



export function getJobAdvertisementFilter(workType,workPlace,city,pageNumber=2,pageSize=10) {
  const filter ={
    "workPlaceId": [
      workPlace
    ],
    "workTypeId": [
      workType
    ],
    "cityId": [
      city
     ]
  
   
  }
  return function (dispatch) {
    return axios
    .post(`http://127.0.0.1:8081/api/jobadvertisement/findAllFilter?pageNo=${pageNumber}&pageSize=${pageSize}`, filter, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((result) => dispatch(getJobAdvertisements(result.data.data)));
  }
  }



export function  postJobAdvertisementFavoriteApi(candidateId,jobAdvertisementId) {
  var favorite = {
    "candidateId": candidateId,
    "jobAdvertisementId": jobAdvertisementId
  }
  return function (dispatch) {
    return axios
    .post("http://127.0.0.1:8081/api/favorite/candidate/jobAdvertisement", favorite, {
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then((result) => console.log(result.data));
  }
}

