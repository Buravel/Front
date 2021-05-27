import React, { useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import MyPage from "../../components/mypage/MyPage";
axios.defaults.baseURL = "http://34.64.93.115";
const MyPageForm = () => {
  const [username, setUsername] = useState(null);
  const [nickname, setNickname] = useState(null);
  const [email, setEmail] = useState(null);
  const [emailVerified, setEmailVerified] = useState(null);
  const [profile, setProfile] = useState(null);
  let token = localStorage.getItem("token");
  token = token.replace(/"/g, "");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const returning = axios.get("/mypage").then((response) => {
    setNickname(response.data.nickname);
    setUsername(response.data.username);
    setEmail(response.data.email);
    setProfile(response.data.profile);
    setEmailVerified(response.data.emailVerified);
  });
  console.log(nickname);
  console.log(username);
  console.log(email);
  console.log(emailVerified);
  console.log(profile);

  const onLogout = async () =>
    await axios({
      method: "POST",
      url: "/logout",
    })
      .then((response) => {
        localStorage.removeItem("token");
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  return (
    <MyPage
      type="mypage"
      nickname={nickname}
      username={username}
      email={email}
      emailVerified={emailVerified}
      profileImage={profile}
      onLogout={onLogout}
    ></MyPage>
  );
  //  localStorage.removeItem("token");
};

export default withRouter(MyPageForm);
