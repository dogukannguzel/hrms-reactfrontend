import { GET_CİTİES } from "../actions/actionTypes";
import { cities } from "./../initialValues/cityValue";
const initialState = {
  cities,
};

export default function cityReducer(
  state = initialState.cities,
  { type, payload }
)
 {
  switch (type) {
    case GET_CİTİES:
      return payload;

    default:
      return state;
  }
}
