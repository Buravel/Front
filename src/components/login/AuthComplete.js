import React from "react";
import { Link } from "react-router-dom";
import completeImg from "./complete.png";
import "./common.scss";
import "./authComplete.scss";

const AuthComplete = () => {
  return (
    <div className="authComplete">
      <img className="logo2" src={completeImg} alt="" />
      <h3 className="msg1">
        <b>이메일 인증</b>이 완료되었습니다.
      </h3>
      <h3 className="msg2">
        이제부터 <b className="msg2 blue">버라벨</b>의 모든 서비스를 이용하실 수
        있습니다!
      </h3>{" "}
      <div className="buttonsection">
        <Link to="/mypage">
          <button className="check">확인</button>
        </Link>
      </div>
    </div>
  );
};

export default AuthComplete;
