import React from "react";
import { Link } from "react-router-dom";
import logoImg2 from "./img/complete_send.png";
import "./common.scss";
import "./findauth.scss";

const style = { display: "inline-block" };
const FindAuthPW = ({ onSubmit }) => {
  return (
    <div className="findauth">
      <img className="logo-complete" src={logoImg2} alt="" />
      <h3 className="send">이메일이 발송되었습니다.</h3>
      <h5 className="emailQ" style={style}>
        이메일이 도착하지 않았나요?{" "}
        <Link to="/findPW">
          <h3 className="re-send" style={style}>
            이메일 재입력
          </h3>
        </Link>{" "}
      </h5>
      <form onSubmit={onSubmit}>
        <div className="btnsection">
          <button className="login-btn" type="submit" name="btn">
            <Link to="/login">로그인</Link>
          </button>
          <button className="mainpage-btn" type="submit" name="btn">
            <Link to="/">메인 페이지</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default FindAuthPW;
