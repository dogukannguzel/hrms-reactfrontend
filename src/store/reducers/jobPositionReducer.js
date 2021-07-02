import { GET_JOB_POSİTİONS } from "../actions/actionTypes";
import { jobPositions } from "./../initialValues/jobPositionValue";
const initialState = {
  jobPositions,
};

export default function jobPositionReducer(
  state = initialState.jobPositions,
  { type, payload }
) 
{
  switch (type) {
    case GET_JOB_POSİTİONS:
      return payload;

    default:
      return state;
  }
}
