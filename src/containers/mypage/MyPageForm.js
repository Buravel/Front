import React, { useState } from "react";
import axios from "axios";
//import { withRouter } from "react-router-dom";
import MyPage from "../../components/mypage/MyPage";
import Box from "../../components/mypage/Box";
axios.defaults.baseURL = "http://34.64.93.115";
const MyPageForm = () => {
  const [username, setUsername] = useState(null);
  const [nickname, setNickname] = useState(null);
  const [email, setEmail] = useState(null);
  const [emailVerified, setEmailVerified] = useState(null);
  const [profile, setProfile] = useState(null);
  let token = localStorage.getItem("token");
  if (token) token = token.replace(/\"/gi, "");
  axios.defaults.headers.common["Authorization"] = `${token}`;
  const myInfo = axios.get("/mypage").then((response) => {
    setNickname(response.data.nickname);
    setUsername(response.data.username);
    setEmail(response.data.email);
    setProfile(response.data.profile);
    setEmailVerified(response.data.emailVerified);
  });

  const [box, setBox] = useState([]);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [tag, setTag] = useState(null);
  const [period, setPeriod] = useState(null);
  const [top3, setTop3] = useState(null);
  const [totalprice, setTotalprice] = useState(null);
  const [rating, setRating] = useState(null);

  const posting = axios.get("/plans/mine/closed").then((response) => {
    setBox([...response.data._embedded.planResponseDtoList]);
    box.filter((element) => {
      setTitle(element.planTitle);
      setTag(element.planTagResponseDtos.planTagTitle);
      setTop3(element.top3List);
      setTotalprice(element.outputPlanTotalPrice);
      setRating(element.planRating);
    });
  });

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
      <Box type="box" totalprice={totalprice}></Box>
    </>
  );
};

export default MyPageForm;
