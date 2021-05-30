import React, { useEffect, useState } from "react";
import "./setuppage.scss";
import profile from "./profile.png";
import axios from "axios";
import { withRouter } from "react-router-dom";
axios.defaults.baseURL = "http://34.64.93.115";
let token;
const style = { display: "inline-block" };
const EditPage = () => {
  const [nick, setNick] = useState(null);
  const [pass, setPassword] = useState(null);

  const nickChange = (e) => {
    setNick(e.target.value);
    console.log(nick);
  };

  const passChange = (e) => {
    setPassword(e.target.value);
    console.log(pass);
  };

  const NicknameSubmit = async (e, history) => {
    e.preventDefault();
    token = localStorage.getItem("token");
    if (token) token = token.replace(/\"/gi, "");
    axios.defaults.headers.common["Authorization"] = `${token}`;
    await axios
      .patch("/mypage/nickname", { nickname: nick })
      .then((response) => {
        //        if (history !== null && history !== undefined)
        //        history.push("/setupPage");
        //        if (response.status === 200) history.push("/setupPage");
        return response.data.nickname;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  };

  const ImageSubmit = async ({ profileImage }) => {
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

  const PasswordSubmit = async (e, history) => {
    e.preventDefault();
    token = localStorage.getItem("token");
    if (token) token = token.replace(/\"/gi, "");
    axios.defaults.headers.common["Authorization"] = `${token}`;
    await axios
      .patch("/mypage/password", { password: pass })
      .then((response) => {
        //        if (history !== null && history !== undefined)
        //        history.push("/setupPage");
        //        if (response.status === 200) history.push("/setupPage");
        return response.data.password;
      })
      .catch((error) => {
        console.log(error);
        return Promise.reject(error);
      });
  };

  return (
    <div className="setup">
      <img className="profileImage" src={profile} alt="" />
      <div className="info">
        <div className="profileBox">
          <button className="profile-btn" type="submit" onClick={ImageSubmit}>
            프로필 사진 변경
          </button>
        </div>
        <div className="infoBox">
          <div className="name">닉네임</div>
          <input
            className="box"
            name="nickname"
            style={style}
            onChange={nickChange}
          ></input>
          <button className="change-btn" type="submit" onClick={NicknameSubmit}>
            변경
          </button>
        </div>
        <div className="infoBox">
          <div className="name">비밀번호</div>
          <input
            className="box"
            name="password"
            style={style}
            onChange={passChange}
          ></input>
          <button className="change-btn" onClick={PasswordSubmit}>
            변경
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(EditPage);
