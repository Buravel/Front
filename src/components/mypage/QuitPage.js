import React, { useState } from "react";
import axios from "axios";
import "./quit.scss";
import quitImage from "./quit.png";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
axios.defaults.baseURL = "http://34.64.93.115";

const style = { display: "inline-block" };
let token = localStorage.getItem("token");
if (token) token = token.replace(/\"/gi, "");
axios.defaults.headers.common["Authorization"] = `${token}`;

const QuitPage = () => {
  const [msg, setMsg] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    axios.delete("/mypage/account").then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="quitpage">
      <form onSubmit={onSubmit}>
        <img className="quitImage" src={quitImage} alt="" />
        <div>탈퇴 즉시 개인정보 및 이용기록이 모두 삭제됩니다. </div>
        <div>재가입시 탈퇴한 계정의 기록을 다시 복구할 수 없습니다. </div>
        <div>이점 모두 양지해 주시길 바랍니다. </div>&nbsp;
        <div>
          탈퇴를 원하시면 입력란에{" "}
          <div className="bold" style={style}>
            '탈퇴하기'
          </div>
          를 입력해주세요.
        </div>
        <input
          onChange={(e) => {
            setMsg(e.target.value);
          }}
          placeholder="탈퇴하기"
          className="quit-input"
        ></input>
        <div className="error-msg">
          {msg === "탈퇴하기" ? (
            <div></div>
          ) : (
            <div>'탈퇴하기'를 입력해주세요.</div>
          )}
        </div>
        <Link to="/setupPage">
          {msg === "탈퇴하기" ? (
            <button type="submit" className="quit-btn" style={style}>
              확인
            </button>
          ) : (
            <button className="quit-cancel" style={style}>
              취소
            </button>
          )}
        </Link>
      </form>
    </div>
  );
};

export default withRouter(QuitPage);
