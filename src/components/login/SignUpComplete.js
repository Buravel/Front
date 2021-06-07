import React from "react";
import { Link } from "react-router-dom";
import completeImg from "./complete.png";
import "./common.scss";
import "./signupcomplete.scss";

const style = { display: "inline-block" };
const Complete = () => {
  return (
    <div className="complete">
      <img className="completeImg" src={completeImg} alt="" />
      <h3 className="greeting">반갑습니다!</h3>
      <h3 className="greeting">
        <b>버라벨 회원가입</b>이 완료되었습니다.{" "}
      </h3>
      <div className="caution">
        &nbsp;
        <h5 className="black">회원님의 이메일로 인증번호가 발송되었습니다. </h5>
        <h5 className="black">
          이메일 인증을 받지 않으면 아이디, 비밀번호 찾기 서비스를 이용하실 수
          없습니다.
        </h5>
        <h5 className="blue" style={style}>
          이메일 인증
        </h5>
        <h5 className="black" style={style}>
          은 마이페이지에서 완료하실 수 있습니다.
        </h5>
      </div>
      <div className="buttonsection">
        <Link to="/">
          <button className="login-btn">메인으로</button>
        </Link>
      </div>
    </div>
  );
};

export default Complete;
