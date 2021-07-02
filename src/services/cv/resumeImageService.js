import axios from "axios";

export default class ImageService {
  resumeImageAdd(ımage) {
    const formData = new FormData();
    formData.append("file", ımage);

    return axios.put(
      "http://127.0.0.1:8081/api/resumes/saveImage?resumeId=" + 49,
      formData
    );
  }
}
