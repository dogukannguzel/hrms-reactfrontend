import {
  GET_JOB_ADVERTİSEMENT,
  GET_JOB_ADVERTİSEMENT_FİLTER_WORK_PLACES,
  GET_JOB_ADVERTİSEMENT_FİLTER_WORK_TYPES,
} from "../actions/actionTypes";
import { jobAdvertisements } from "../initialValues/jobAdvertisementValue";

const initialState = {
  jobAdvertisements,
};

export default function jobAdvertisementReducer(
  state = initialState.jobAdvertisements,
  { type, payload }
) {
  switch (type) {
    case GET_JOB_ADVERTİSEMENT:
      return payload;

    default:
      return state;
  }
}
