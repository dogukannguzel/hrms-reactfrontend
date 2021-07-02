import { GET_JOB_ADVERTİSEMENT_FAVORİTE } from "../actions/actionTypes";
import { jobAdvertisementFavorite } from "../initialValues/jobAdvertisementValue"
const initialState={
    jobAdvertisementFavorite
}

export default function jobAdvertisementFavoriteReducer(state=initialState,{type,payload}) {
    switch (type) {
        case GET_JOB_ADVERTİSEMENT_FAVORİTE:
            
            return payload;
    
        default:
            return state;
    }
}