import axios from 'axios';
import { GET_WORK_PLACES } from './actionTypes';


export function getWorkPlace(workPlace) {
    return{
        type:GET_WORK_PLACES,
        payload:workPlace
    }
}



export function getWorkPlaceApi() {
    return function (dispatch) {
        return  axios.get("http://127.0.0.1:8081/api/workplaces/getall").then(result=>dispatch(getWorkPlace(result.data.data)))
    }
}