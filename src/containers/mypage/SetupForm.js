import React, { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(false);

  let token = localStorage.getItem("token");
  if (token) token = token.replace(/\"/gi, "");
  axios.defaults.headers.common["Authorization"] = `${token}`;

  useEffect(() => {
    const myInfo = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/mypage");
        setNickname(response.data.nickname);
        setUsername(response.data.username);
        setEmail(response.data.email);
        setProfile(response.data.profileImage);
        setEmailVerified(response.data.emailVerified);
      } catch (e) {
        console.log(e);
        return Promise.reject(e);
      }
      setLoading(false);
    };
    myInfo();
  }, []);

  return (
    <SetupPage
      type="setuppage"
      nickname={nickname}
      username={username}
      email={email}
      emailVerified={emailVerified}
      profile={profile}
    ></SetupPage>
  );
};

export default withRouter(SetupPageForm);
