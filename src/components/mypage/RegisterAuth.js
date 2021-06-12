import React from "react";
import { Link } from "react-router-dom";
import logoImg2 from "../login/img/complete_send.png";
import "../login/common.scss";
import "./registerauth.scss";

const style = { display: "inline-block" };
const RegisterAuth = ({ form, onChange, onSubmit, reSubmit, error }) => {
  return (
    <div className="registerauth">
      <img className="logo-complete" src={logoImg2} alt="" />
      <h3 className="send">이메일 인증 코드가 발송되었습니다.</h3>
      <h5 className="emailQ">
        이메일이 도착하지 않았나요?{" "}
        <h5 className="re-send" style={style}>
          <Link to="/registerAuth" onClick={reSubmit}>
            재전송
          </Link>
        </h5>
      </h5>
      <form onSubmit={onSubmit}>
        <div className="authNumForm">
          <div className="inputBox-RA">
            <h1 className="numtext">인증번호</h1>
            <input
              className="inputCell"
              name="number"
              onChange={onChange}
              value={form.number}
              placeholder="인증번호를 입력해주세요."
            ></input>
          </div>
        </div>
        <div className="error-msg">
          {error ? <div>{error}</div> : <div></div>}
        </div>
        <div className="btnsection">
          <button className="ok-btn" type="submit">
            확인
          </button>
          <Link to="/mypage">
            <button className="cancel-btn">취소 </button>
          </Link>{" "}
        </div>
      </form>
    </div>
  );
};

export default RegisterAuth;
