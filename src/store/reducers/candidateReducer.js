import { GET_ALL_CANDİDATES } from "../actions/actionTypes";
import { candidates } from "../initialValues/candidateValue";
const initialState = {
  candidates,
};

export default function candidateReducer(
  state = initialState.candidates,
  { type, payload }
) {
  switch (type) {
    case GET_ALL_CANDİDATES:
      return payload;


    default:
      return state;
  }
}
