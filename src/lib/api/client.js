/*import axios from "axios";
const client = axios.create();
client.defaults.baseURL = "http://34.64.93.115";
let token;
axios.interceptors.response.use(
  (response) => {
    token = JSON.stringify(response.headers.authorization);
    if (token) token = token.replace(/\"/gi, "");
    localStorage.setItem("token", token);
    //    console.log(response);
    return response;
  },
  (error) => {
    console.log("error");
    console.log(error);
    return Promise.reject(error);
  }
);
export default client;
*/
