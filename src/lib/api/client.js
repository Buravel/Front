import axios from "axios";
const client = axios.create();
client.defaults.baseURL = "http://34.64.93.115";
client.defaults.headers.common["Authorization"] = "Bearer";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default client;
