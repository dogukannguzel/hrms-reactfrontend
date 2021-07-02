import { GET_EDUCATİON_GRADUATES } from "./actionTypes"
import  axios  from 'axios';

export function getGraduates(graduate){
    return {
        type:GET_EDUCATİON_GRADUATES,
        payload:graduate
    }
}




export function getGraduatesApi() {
    return function (dispatch) {
        return axios.get("http://127.0.0.1:8081/api/graduates/getall").then(result=>dispatch(getGraduates(result.data.data)))
    }
}


