import { GET_RESUME_LANGUAGE_BY_İD } from "./actionTypes"
import axios from "axios"
export function getLanguage(language) {
    return {
        type:GET_RESUME_LANGUAGE_BY_İD,
        payload:language
    }
}





export function getResumeLanguageByİd(id){

    return async function (dispatch) {
        return await axios.get("http://127.0.0.1:8081/api/languages/findById?id="+id).then(result=>dispatch(getLanguage(result.data.data)))
    }


}

export function saveResumeLanguageApi(language) {
    return axios
    .post("http://127.0.0.1:8081/api/languages/add", language, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .catch((result) => console.log(result.response));
  }

  export function uptadeResumeLanguageApi(language) {
    return axios
    .put("http://127.0.0.1:8081/api/languages/uptade", language, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .catch((result) => console.log(result.response));
  }