import axios from "axios";
import { GET_ALL_COMPANYS } from "./actionTypes";

export function getAllCompanys(companys) {
  return {
    type: GET_ALL_COMPANYS,
    payload: companys,
  };
}

export async function getAllCompanysApi() {
  return async function (dispatch) {
    return axios
      .get("http://127.0.0.1:8081/api/companys/getall")
      .then((result) => dispatch(getAllCompanys(result.data.data)));
  };
}

export function getAllCompanyById(id) {
  return function (dispatch) {
    return axios
      .get("http://127.0.0.1:8081/api/companys/getAllById?id=" + id)
      .then((result) => dispatch(getAllCompanys(result.data.data)));
  };
}

export function companyRegisterApi(company) {
  return axios.post(
    "http://127.0.0.1:8081/api/auth/register/company",
    company,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export function companyUptadeApi(company) {
  return axios
    .put("http://127.0.0.1:8081/api/companys/uptade", company, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((result) => console.log(result.data));
}



 
   
