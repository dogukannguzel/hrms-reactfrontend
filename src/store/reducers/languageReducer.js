import { GET_RESUME_LANGUAGE_BY_İD } from "../actions/actionTypes";
import { language } from "./../initialValues/languageValue";
const initialState = {
  language,
};

export default function languageReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case GET_RESUME_LANGUAGE_BY_İD:
      return payload;

    default:
      return state;
  }
}
