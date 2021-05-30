import React from "react";
import { Link } from "react-router-dom";
import completeImg from "./complete.png";
import "./common.scss";
import "./authComplete.scss";

const style = { display: "inline-block" };
const AuthComplete = () => {
  return (
    <div className="complete">
      <img className="logo2" src={completeImg} alt="" />
      <h3 className="h301">
        <b>이메일 인증</b>이 완료되었습니다.
      </h3>
      <div className="msg">
        이제부터 버라벨의 모든 서비스를 이용하실 수 있습니다!
      </div>
      <div className="buttonsection">
        <Link to="/mypage">
          <button className="check">확인</button>
        </Link>
      </div>
    </div>
  );
};

export default AuthComplete;
