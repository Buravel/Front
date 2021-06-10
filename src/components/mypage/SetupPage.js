import axios from "axios";
import React from "react";
import "./setuppage.scss";
import basicProfile from "./img/profile.png";
axios.defaults.baseURL = "http://34.64.93.115";

const style = { display: "inline-block" };
const SetupPage = ({ nickname, username, email, emailVerified, profile }) => {
  return (
    <div className="setup">
      <div className="prof_img">
        {profile ? (
          <img
            className="profileImage"
            src={`data:image/png;base64,${profile}`}
            alt=""
            style={style}
          />
        ) : (
          <img src={basicProfile} alt="" className="profileImage" />
        )}
      </div>
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
        </div>
        <div className="edit">
          <a href="/checkPW" style={style}>
            회원정보 수정 |
          </a>
          <a href="/quit"> 회원 탈퇴</a>
        </div>
      </div>
    </div>
  );
};

export default SetupPage;
