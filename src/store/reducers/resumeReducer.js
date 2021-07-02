import { GET_CANDİDATE_RESUME } from "../actions/actionTypes";
import { resume } from "../initialValues/candidateValue"
const initialState={
    resume
}


export default function resumeReducer(state=initialState.resume,{type,payload}) {
    switch (type) {
        case GET_CANDİDATE_RESUME:
            
           return payload;
    
        default:
            return state;
    }
}