import { GET_JOB_ADVERTİSEMENT_FAVORİTE } from "./actionTypes";
import axios from "axios"
export function getJobAdvertisementFavorites(favorites) {
    return {
        type:GET_JOB_ADVERTİSEMENT_FAVORİTE,
        payload:favorites
    }
}



export function getJobAdvertisementFavoritesById(candidateId,jobAdvertisementId) {
    return function (dispatch) {
        return  axios.get(`http://127.0.0.1:8081/api/favorite/candidate/findByJobAdvertisementId?candidateId=${candidateId}&jobAdvertisementId=${jobAdvertisementId}`).then(result=>dispatch(getJobAdvertisementFavorites(result.data.data)));
    }
}