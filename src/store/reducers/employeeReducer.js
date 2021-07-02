import { GET_EMPLOYEE_COMPANY_UPTADE_PROFİLE, GET_EMPLOYEE_CONFİRM_JOB_ADVERTİSEMENT_FALSE } from '../actions/actionTypes';
import { confirmedFalseCompanys,confirmedFalseJobAdvertisement } from './../initialValues/employeeValue';
const initialState = {
    confirmedFalseCompanys,
    confirmedFalseJobAdvertisement

}

export default function employeeReducer(state=initialState,{type,payload}) {
    switch (type) {
        case GET_EMPLOYEE_COMPANY_UPTADE_PROFİLE:
            
            return {confirmedFalseCompanys:payload} ;
        case GET_EMPLOYEE_CONFİRM_JOB_ADVERTİSEMENT_FALSE:
            
            return{ confirmedFalseJobAdvertisement:payload};
        
        default:
            return state;
    }
}