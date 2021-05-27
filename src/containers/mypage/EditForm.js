import axios from "axios";
import EditPage from "../../components/mypage/EditPage";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
axios.defaults.baseURL = "http://34.64.93.115";

const EditPageForm = () => {
  const [nickname, setNickname] = useState(null);
  const [password, setPassword] = useState(null);
  const [profile, setProfile] = useState(null);
  let token = localStorage.getItem("token");
  token = token.replace(/"/g, "");
  const nickname_Change = async ({ nickname }) =>
    await axios({
      method: "PATCH",
      url: "/mypage/nickname",
      data: {
        nickname: nickname,
      },
    })
      .then((response) => {
        setNickname(response.data.nickname);
      })
      .catch((error) => {
        return Promise.reject(error);
      });

  const image_Change = async ({ profileImage }) =>
    await axios({
      method: "PATCH",
      url: "/mypage/picture",
      data: {
        profileImage: profileImage,
      },
    })
      .then((response) => {
        setProfile(response.data.profile);
      })
      .catch((error) => {
        return Promise.reject(error);
      });

  const password_Change = async ({ password }) =>
    await axios({
      method: "PATCH",
      url: "/mypage/password",
      data: {
        nickname: password,
      },
    })
      .then((response) => {
        setPassword(response.data.password);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  return (
    <EditPage
      type="edit"
      nickname_Change={nickname_Change}
      password_Change={password_Change}
    ></EditPage>
  );
};
export default withRouter(EditPageForm);
