import React from "react";
import { Link } from "react-router-dom";
import logoImg2 from "./logo2.png";
import "./common.scss";
import "./findauth.scss";

const style = { display: "inline-block" };
const FindAuth = ({ form, onChange, onSubmit }) => {
  return (
    <div className="findauth">
      <img className="logo3" src={logoImg2} alt="" />
      <h3 className="h302">이메일이 발송되었습니다.</h3>
      <h5>
        이메일이 도착하지 않았나요?{" "}
        <Link to="/">
          <h5 className="h508" style={style}>
            재전송
          </h5>
        </Link>
      </h5>
      <form onSubmit={onSubmit}>
        <div className="buttonsection">
          <button className="button03 style01" type="submit" name="btn">
            <Link to="/login">로그인</Link>
          </button>
          <button className="button03 style02" type="submit" name="btn">
            <Link to="/">메인 페이지</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default FindAuth;
