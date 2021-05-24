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
        <h5 style={style} className="h505">
          이메일 인증
        </h5>
        <h5 className="h504" style={style}>
          을 하지 않은 경우, 아이디/비밀번호 찾기가 어렵습니다.
        </h5>
      </div>
      <div className="buttonsection">
        <Link to="/login">
          <button className="button03 style01">로그인</button>
        </Link>
        <Link to="/registerAuth">
          <button className="button03 style02">간단하게 이메일 인증</button>
        </Link>
      </div>
    </div>
  );
};

export default Complete;
