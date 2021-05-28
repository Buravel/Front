/*import React from "react";
import { Link } from "react-router-dom";
import logoImg2 from "./logo2.png";
import "./common.scss";
import "./findauth.scss";

const style = { display: "inline-block" };
const RegisterAuth = ({ form, onChange, onSubmit }) => {
  return (
    <div className="findauth">
      <img className="logo3" src={logoImg2} alt="" />
      <h3 className="h302">이메일 인증 코드가 발송되었습니다.</h3>
      <h5>
        이메일이 도착하지 않았나요?{" "}
        <h5 className="h508" style={style}>
          <Link to="/registerAuth" onClick={window.location.reload}>
            재전송
          </Link>
        </h5>
      </h5>
      <div className="authNumForm">
        <form onSubmit={onSubmit}>
          <div className="inputBox">
            <h5 className="h509">인증번호</h5>
            <input
              className="inputCell"
              name="authNum"
              onChange={onChange}
              //            value={form.authNum}
            ></input>
          </div>
        </form>
      </div>
      <div className="buttonsection02">
        <button className="button02 style01" type="submit">
          <Link to="/login">확인</Link>
        </button>
        <button className="button02 style02">
          <Link to="/">취소</Link>
        </button>
      </div>
    </div>
  );
};

export default RegisterAuth;
*/
