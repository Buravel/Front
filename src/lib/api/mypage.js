/*import React, { useState } from "react";
import axios from "axios";
import EditPage from "../../components/mypage/EditPage";
axios.defaults.baseURL = "http://34.64.93.115";
let token;
export const Edit = (e) => {
  e.preventDeafult();
  console.log("hi");
  const NicknameChange = async ({ nickname }) => {
    const [nick, setNick] = useState(null);
    token = localStorage.getItem("token");
    if (token) token = token.replace(/\"/gi, "");
    axios.defaults.headers.common["Authorization"] = `${token}`;
    await axios
      .patch("/mypage/nickname", { nickname: nickname })
      .then((response) => {
        console.log(response.data.nickname);
        //        setNick
        return response.data.nickname;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  };

  const ImageChange = async ({ profileImage }) => {
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
  const PasswordChange = async ({ password }) => {
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
  return (
    <EditPage
      nChange={NicknameChange}
      pChange={PasswordChange}
      iChange={ImageChange}
    ></EditPage>
  );
};
*/
