import { GET_RESUME_JOBEXPERİENCE_BY_İD} from "../actions/actionTypes";
import { jobExperience } from '../initialValues/jobExperienceValue';

const initialState={
    jobExperience
}

export default function jobExperienceReducer(state=initialState,{type,payload}) {
    switch (type) {
        case GET_RESUME_JOBEXPERİENCE_BY_İD:
            
            return payload;
    
        default:
            return state;
    }
}