import axios from "axios";
import { getToken, setAuthHttpHeaderToAxios, setToken } from "./helpers/token";

axios.defaults.baseURL = 'https://webdev-api.loftschool.com/';

const token = getToken();
if (token) {
  axios.defaults.headers["Authorization"] = `Bearer ${token}`;
}

axios.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if(error.response.status === 401) {
      const response = await axios.post("/refreshToken");
      const token = response.data.token;

      localStorage.setItem("token", token);
      axios.defaults.headers["Authorization"] = `Bearer ${token}`;
      originalRequest.headers["Authorization"] = `Bearer ${token}`;

      return axios(originalRequest);
    }

    return Promise.reject(error);
  }

)

export default axios;