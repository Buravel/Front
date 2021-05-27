import axios from "axios";
import React from "react";
import "./setuppage.scss";
//import profile from "./profile.png";
axios.defaults.baseURL = "http://34.64.93.115";

const SetupPage = ({ nickname, username, email, emailVerified, profile }) => {
  return (
    <div className="setup">
      <img className="profileImage" src={profile} alt="" />
      <div className="info">
        <div className="infoBox">
          <div className="name">닉네임</div>
          <div className="box">{nickname}</div>
        </div>
        <div className="infoBox">
          <div className="name">아이디</div>
          <div className="box">{username}</div>
        </div>
        <div className="infoBox">
          <div className="name">이메일 주소</div>{" "}
          <div className="box">{email}</div>
          <div className="edit">
            <a href="/editPage">회원정보 수정</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetupPage;