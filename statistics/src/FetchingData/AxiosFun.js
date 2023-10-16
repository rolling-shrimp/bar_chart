import axios from "axios";
class AxiosFun {
  get(obj) {
    return axios.get("http://localhost:3505/fetchData", { params: obj });
  }
}

export default new AxiosFun();
