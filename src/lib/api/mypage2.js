/*import axios from "axios";
axios.defaults.baseURL = "http://34.64.93.115";
let token;
export const edit = () => {
  const nicknameChange = async ({ nickname }) => {
    token = localStorage.getItem("token");
    if (token) token = token.replace(/\"/gi, "");
    axios.defaults.headers.common["Authorization"] = `${token}`;
    await axios
      .patch("/mypage/nickname", { nickname: nickname })
      .then((response) => {
        console.log(response.data.nickname);
        return response.data.nickname;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  };

  const imageChange = async ({ profileImage }) => {
    token = localStorage.getItem("token");
    if (token) token = token.replace(/\"/gi, "");
    axios.defaults.headers.common["Authorization"] = `${token}`;
    await axios
      .patch("/mypage/picture", { profileImage: profileImage })
      .then((response) => {
        return response.data.profileImage;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  };

  const passwordChange = async ({ password }) => {
    token = localStorage.getItem("token");
    if (token) token = token.replace(/\"/gi, "");
    axios.defaults.headers.common["Authorization"] = `${token}`;
    await axios
      .patch("/mypage/password", { password: password })
      .then((response) => {
        console.log(response);
        return response.data.password;
      })
      .catch((error) => {
        console.log(error);
        return Promise.reject(error);
      });
  };
};
*/
