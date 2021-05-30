import React from "react";
import { Link } from "react-router-dom";
import logoImg2 from "./logo2.png";
import "./common.scss";
import "./findauth.scss";

const style = { display: "inline-block" };
const RegisterAuth = ({ form, onChange, onSubmit, reSubmit, error }) => {
  return (
    <div className="findauth">
      <img className="logo3" src={logoImg2} alt="" />
      <h3 className="h302">이메일 인증 코드가 발송되었습니다.</h3>
      <h5>
        이메일이 도착하지 않았나요?{" "}
        <h5 className="h508" style={style}>
          <Link to="/registerAuth" onClick={reSubmit}>
            재전송
          </Link>
        </h5>
      </h5>
      <form onSubmit={onSubmit}>
        <div className="authNumForm">
          <div className="inputBox">
            <h5 className="h509">인증번호</h5>
            <input
              className="inputCell"
              name="number"
              onChange={onChange}
              value={form.number}
            ></input>
          </div>
        </div>
        <div className="error-msg">
          {error ? <div>{error}</div> : <div></div>}
        </div>
        <div className="buttonsection02">
          <button className="button02 style01" type="submit">
            확인
          </button>
          <Link to="/mypage">
            <button className="button02 style02">취소 </button>
          </Link>{" "}
        </div>
      </form>
    </div>
  );
};

export default RegisterAuth;
