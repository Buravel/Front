import axios from 'axios';
const client = axios.create();
// client.defaults.baseURL = "http://localhost:4000";
// client.defaults.headers.common["Authorization"] = "Bearer";

client.defaults.baseURL = 'http://34.64.93.115';
client.defaults.headers.common['Authorization'] =
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0MSIsImlkIjoxOTgsImV4cCI6MTYyMTk1MTM3NCwidXNlcm5hbWUiOiJ0ZXN0MSJ9.10YUV91VIAXGB0e7siYF3PO_xs17AT_YM-tUeAoAZos';
// axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
export default client;
