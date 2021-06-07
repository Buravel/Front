import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./checkPW.scss";
import lock from "./lock.png";
import { withRouter } from "react-router-dom";
axios.defaults.baseURL = "http://34.64.93.115";

const style = { display: "inline-block" };
const CheckPW = ({ history }) => {
  let token;
  const [pass, setPassword] = useState(null);
  const [success, setSuccess] = useState(0);
  const passChange = (e) => {
    setPassword(e.target.value);
  };

  const PasswordSubmit = async (e) => {
    e.preventDefault();
    token = localStorage.getItem("token");
    if (token) token = token.replace(/\"/gi, "");
    axios.defaults.headers.common["Authorization"] = `${token}`;
    await axios
      .post("/mypage/passwordChecking", { password: pass })
      .then((response) => {
        setSuccess(1);
        return response.data.password;
      })
      .catch((error) => {
        setSuccess(2);
        return Promise.reject(error);
      });
  };

  useEffect(() => {
    if (success === 1) {
      history.push("/editPage");
    }
  }, [success, history]);

  return (
    <div className="checkPW">
      <div className="lockBox">
        <img src={lock} alt="" className="lockImg" />
      </div>
      <div className="msg">
        <b>회원정보 수정</b>을 위해 비밀번호를 입력해주세요.
      </div>
      {success === 2 ? (
        <div className="error-msg">비밀번호가 일치하지 않습니다.</div>
      ) : (
        <div></div>
      )}
      <div className="pwBox">
        <input
          className="box"
          type="password"
          name="password"
          style={style}
          onChange={passChange}
          placeholder="비밀번호를 입력해주세요"
        ></input>
      </div>
      <div className="btnSection">
        <button className="change-btn" onClick={PasswordSubmit}>
          확인
        </button>
        <Link to="/">
          <button className="cancel-btn">취소</button>
        </Link>
      </div>{" "}
    </div>
  );
};

export default withRouter(CheckPW);
