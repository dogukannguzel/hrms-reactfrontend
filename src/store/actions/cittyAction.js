import { GET_CİTİES } from "./actionTypes";
import  axios  from 'axios';

export function getCity(city) {
    return{
        type:GET_CİTİES,
        payload:city
    }
}


export function getCityApi() {
    return function (dispatch) {
        return  axios.get("http://127.0.0.1:8081/api/citys/getAll").then(result=>dispatch(getCity(result.data.data)));
    }
}