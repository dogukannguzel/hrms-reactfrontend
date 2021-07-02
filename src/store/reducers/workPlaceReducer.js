import { workPlaces } from "./../initialValues/workPlaceValue";
import { GET_WORK_PLACES } from "./../actions/actionTypes";

const initialState = {
  workPlaces,
};

export default function workPlaceReducer(
  state = initialState.workPlaces,
  { type, payload }
) 
{
  switch (type) {
    case GET_WORK_PLACES:
      return payload;

    default:
      return state;
  }
}
