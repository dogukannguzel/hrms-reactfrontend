import { GET_WORK_TYPES } from "../actions/actionTypes";
import { workTypes } from "./../initialValues/workTypeValue";

const initialState = {
  workTypes,
};

export default function workTypeReducer(
  state = initialState.workTypes,
  { type, payload }
) {
  switch (type) {
    case GET_WORK_TYPES:
      return payload;

    default:
      return state;
  }
}
