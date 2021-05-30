import React, { useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import MyPage from "../../components/mypage/MyPage";
import Box from "../../components/mypage/Box";
axios.defaults.baseURL = "http://34.64.93.115";
const MyPageForm = () => {
  const [username, setUsername] = useState(null);
  const [nickname, setNickname] = useState(null);
  const [email, setEmail] = useState(null);
  const [emailVerified, setEmailVerified] = useState(null);
  const [profile, setProfile] = useState(null);
  const [box, setBox] = useState(null);
  let token = localStorage.getItem("token");
  if (token) token = token.replace(/\"/gi, "");
  axios.defaults.headers.common["Authorization"] = `${token}`;
  const returning = axios.get("/mypage").then((response) => {
    setNickname(response.data.nickname);
    setUsername(response.data.username);
    setEmail(response.data.email);
    setProfile(response.data.profile);
    setEmailVerified(response.data.emailVerified);
    console.log(response);
  });
  axios.defaults.headers.common["Authorization"] = `${token}`;
  const posting = axios.get("/plans/mine/closed").then((response) => {
    console.log(response.data);
    //    setBox(response._embedded);
  });
  console.log(box);
  const onLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <>
      <MyPage
        type="mypage"
        nickname={nickname}
        username={username}
        email={email}
        emailVerified={emailVerified}
        profileImage={profile}
        onLogout={onLogout}
      ></MyPage>
      <Box type="box" box={box}></Box>
    </>
  );
};

export default withRouter(MyPageForm);
