import React, { useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import SetupPage from "../../components/mypage/SetupPage";
axios.defaults.baseURL = "http://34.64.93.115";
const SetupPageForm = () => {
  const [username, setUsername] = useState(null);
  const [nickname, setNickname] = useState(null);
  const [email, setEmail] = useState(null);
  const [emailVerified, setEmailVerified] = useState(null);
  const [profile, setProfile] = useState(null);
  let token = localStorage.getItem("token");
  if (token) token = token.replace(/\"/gi, "");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const returning = axios.get("/mypage").then((response) => {
    setNickname(response.data.nickname);
    setUsername(response.data.username);
    setEmail(response.data.email);
    setProfile(response.data.profile);
    setEmailVerified(response.data.emailVerified);
  });
  return (
    <SetupPage
      type="setuppage"
      nickname={nickname}
      username={username}
      email={email}
      emailVerified={emailVerified}
      profileImage={profile}
    ></SetupPage>
  );
  //  localStorage.removeItem("token");
};

export default withRouter(SetupPageForm);
