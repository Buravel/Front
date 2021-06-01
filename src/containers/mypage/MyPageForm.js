import React, { useEffect, useState } from "react";
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
  let token = localStorage.getItem("token");
  if (token) token = token.replace(/\"/gi, "");
  axios.defaults.headers.common["Authorization"] = `${token}`;
  const myInfo = axios.get("/mypage").then((response) => {
    setNickname(response.data.nickname);
    setUsername(response.data.username);
    setEmail(response.data.email);
    setProfile(response.data.profileImage);
    setEmailVerified(response.data.emailVerified);
  });
  //  console.log(profile);

  useEffect(() => {
    return;
  }, []);

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [period, setPeriod] = useState("");
  const [top3, setTop3] = useState("");
  const [totalprice, setTotalprice] = useState(0);
  const [rating, setRating] = useState("");
  const [box, setBox] = useState([]);

  const posting = axios.get("/plans/mine/closed").then((response) => {
    //    console.log(response);
    //    setBox([...response]);
    //    setBox([response.data._embedded.planResponseDtoList]);
    setBox([response]);
    //    console.log(box);
    /*box.filter((element) => {

      setTitle(element.planTitle);
      setTag(element.planTagResponseDtos.planTagTitle);
      setTop3(element.top3List);
      setTotalprice(element.outputPlanTotalPrice);
      setRating(element.planRating);
    });*/
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
        profile={profile}
        onLogout={onLogout}
      ></MyPage>
      <Box type="box" totalprice={totalprice}></Box>
    </>
  );
};

export default withRouter(MyPageForm);
