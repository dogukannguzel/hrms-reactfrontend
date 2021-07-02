import { GET_WORK_TYPES } from "./actionTypes";
import  axios  from 'axios';

export function getWorkTypes(workType){
    return {
        type:GET_WORK_TYPES,
        payload:workType
    }
}




export function getWorkTypesApi() {
    return function (dispatch) {
        return axios.get("http://127.0.0.1:8081/api/worktypes/getall").then(result=>dispatch(getWorkTypes(result.data.data)))
    }
}


