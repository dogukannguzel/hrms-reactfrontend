import { GET_EMPLOYEE_COMPANY_UPTADE_PROFİLE, GET_EMPLOYEE_CONFİRM_JOB_ADVERTİSEMENT_FALSE } from "./actionTypes";
import axios from "axios";
export function getAllEmployeeConfirmCompanyProfile(confirmedFalseCompanys) {
    return {
    type:GET_EMPLOYEE_COMPANY_UPTADE_PROFİLE,
    payload:confirmedFalseCompanys
    }
}


export function getAllEmployeeConfirmJobAdvertisement(confirmedFalseJobAdvertisement) {
    return {
        type:GET_EMPLOYEE_CONFİRM_JOB_ADVERTİSEMENT_FALSE,
        payload:confirmedFalseJobAdvertisement
    }
}



export function getAllEmployeeConfirmCompanyProfileApi() {
    return async function (dispatch) {
        return axios
          .get("http://127.0.0.1:8081/api/employee/company/findAllByEnableFalse" )
          .then((result) => dispatch(getAllEmployeeConfirmCompanyProfile(result.data.data))).then(result=>console.log(result));
      };
}




export function getAllEmployeeConfirmJobAdvertisementFalseApi() {
    return async function (dispatch) {
        return axios
          .get("http://127.0.0.1:8081/api/employee/jobadvertisement/findAllByEnableFalse" )
          .then((result) => dispatch(getAllEmployeeConfirmJobAdvertisement(result.data.data))).then(result=>console.log(result));
      };
}
  


export function setJobAdvertisementConfirmTrueApi(id) {
    return async function (dispatch) {
        return axios
          .put("http://127.0.0.1:8081/api/employee/jobadvertisement/confirmJobAdvertisement?jobAdvertisementId="+id )
          .then(result=>console.log(result));
      };
}

export  function companyUptadeSuccessApi(id,company) {
    return function (dispatch) {
       return  axios
      .put(`http://127.0.0.1:8081/api/employee/company/confirmed?id=${id}` ,company,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
      )
    
    }
}