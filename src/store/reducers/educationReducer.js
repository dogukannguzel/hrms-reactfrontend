import { GET_EDUCATİONS, GET_EDUCATİON_GRADUATES } from "../actions/actionTypes";
import { educations } from "../initialValues/educationValues"
const initialState={
    educations
}

export default function educationReducer(state=initialState,{type,payload}) {
    
    switch (type) {
        case GET_EDUCATİONS:
            
        return payload;
  
        default:
            return state;
    }


}