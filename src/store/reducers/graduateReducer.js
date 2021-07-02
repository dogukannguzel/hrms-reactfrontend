import { GET_EDUCATİON_GRADUATES } from "../actions/actionTypes";
import { graduates } from "../initialValues/educationValues";
const initialState = {
  graduates,
};

export default function graduateReducer(
  state = initialState.graduates,
  { type, payload }
) 
{
  switch (type) {
    case GET_EDUCATİON_GRADUATES:
      console.log(payload)
      return payload;

    default:
      return state;
  }
}
