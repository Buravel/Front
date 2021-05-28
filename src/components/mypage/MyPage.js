import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./mypage.scss";
//import profile from "./profile.png";
import Box from "./Box";
axios.defaults.baseURL = "http://34.64.93.115";
const style = { display: "inline-block" };

const MyPage = ({
  nickname,
  username,
  email,
  emailVerified,
  profile,
  onLogout,
}) => {
  return (
    <>
      <div className="userSection">
        <img className="profileImage" src={profile} alt="" style={style} />
        <div className="userBox" style={style}>
          <div>
            <h1>
              <h1 className="colorH1" style={style}>
                {nickname}
              </h1>
              님 안녕하세요!
            </h1>{" "}
          </div>
          <div>
            {emailVerified ? (
              <div className="email">{email}</div>
            ) : (
              <div className="email">이메일 인증이 필요합니다.</div>
            )}
          </div>
          <div className="buttons">
            <Link to="/setupPage">
              <button className="setup" style={style}>
                설정
              </button>
            </Link>
            <button className="logout" style={style} onClick={onLogout}>
              로그아웃
            </button>
          </div>{" "}
        </div>{" "}
      </div>
      <div className="postSection">
        <div className="open">
          <div className="boxtitle">공개한 여행 </div>
          <Box>박스</Box>
          <Box>박스</Box>
          <Box>박스</Box>
          <Box>박스</Box>
          <Box>박스</Box>
        </div>
        <div className="closed">
          <div className="boxtitle">비공개 여행 </div>
          <Box>박스</Box>
          <Box>박스</Box>
          <Box>박스</Box>
          <Box>박스</Box>
          <Box>박스</Box>
        </div>
      </div>
    </>
  );
};

export default MyPage;
