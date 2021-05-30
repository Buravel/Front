import React from "react";
import { Link } from "react-router-dom";
import completeImg from "./complete.png";
import "./common.scss";
import "./signupcomplete.scss";

const style = { display: "inline-block" };
const Complete = () => {
  return (
    <div className="complete">
      <img className="logo2" src={completeImg} alt="" />
      <h3 className="h301">반갑습니다!</h3>
      <h3 className="h301">
        <b>버라벨 회원가입</b>이 완료되었습니다.
      </h3>
      <div className="caution">
        &nbsp;
        <h5 className="h504">회원님의 이메일로 인증번호가 발송되었습니다.</h5>
        <h5 className="h505" style={style}>
          이메일 인증
        </h5>
        <h5 className="h504" style={style}>
          은 마이페이지에서 완료하실 수 있습니다.
        </h5>
      </div>
      <div className="buttonsection">
        <Link to="/login">
          <button className="loginButton">로그인</button>
        </Link>
      </div>
    </div>
  );
};

export default Complete;
