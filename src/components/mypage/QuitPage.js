import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./quit.scss";
import quitImage from "./img/quit.png";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { logout } from "../../modules/user";
axios.defaults.baseURL = "http://34.64.93.115";

const style = { display: "inline-block" };
let token = localStorage.getItem("token");
if (token) token = token.replace(/\"/gi, "");
axios.defaults.headers.common["Authorization"] = `${token}`;

const QuitPage = ({ history }) => {
  const dispatch = useDispatch();
  const [msg, setMsg] = useState(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    axios
      .delete("/mypage/account")
      .then((response) => {
        dispatch(logout());
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        history.push("/quitComplete");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="quitpage">
      <img className="quitImage" src={quitImage} alt="" />
      <div className="txt">
        탈퇴 즉시 개인정보 및 이용기록이 모두 삭제됩니다.{" "}
      </div>
      <div className="txt">
        재가입시 탈퇴한 계정의 기록을 다시 복구할 수 없습니다.{" "}
      </div>
      <div className="txt">이점 모두 양지해 주시길 바랍니다. </div>&nbsp;
      <div className="txt">
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
      {msg === "탈퇴하기" ? (
        <Link to="/quitComplete">
          <button
            type="submit"
            className="quit-btn"
            style={style}
            onClick={onSubmit}
          >
            확인
          </button>
        </Link>
      ) : (
        <Link to="/setupPage">
          <button className="quit-cancel" style={style}>
            취소
          </button>
        </Link>
      )}
    </div>
  );
};

export default withRouter(QuitPage);
