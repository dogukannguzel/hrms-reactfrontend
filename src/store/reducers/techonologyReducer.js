import { GET_RESUME_TECHONOLOGY_BY_İD } from "../actions/actionTypes";
import { techonology } from '../initialValues/techonlogyValue';

const initialState={
    techonology
}

export default function techolongyReducer(state=initialState,{type,payload}) {
    switch (type) {
        case GET_RESUME_TECHONOLOGY_BY_İD:
            
            return payload;
    
        default:
            return state;
    }
}