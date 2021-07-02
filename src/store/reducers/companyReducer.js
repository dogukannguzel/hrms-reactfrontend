import { GET_ALL_COMPANYS } from "../actions/actionTypes";
import { companys } from "../initialValues/companyValue";
const initialState = {
  companys,
};

export default function companyReducer(
  state = initialState.companys,
  { type, payload }
) {
  switch (type) {
    case GET_ALL_COMPANYS:
        console.log(payload)
      return payload;

    default:
      return state;
  }
}
