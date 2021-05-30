import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./quit.scss";
import completeImage from "./complete_white.png";
axios.defaults.baseURL = "http://34.64.93.115";

const style = { display: "inline-block" };
const QuitCompletePage = () => {
  return (
    <div className="quitpage">
      <img className="quitImage" src={completeImage} alt="" />
      <div>탈퇴가 완료되었습니다. </div>
      <div>
        지금까지{" "}
        <div className="bold" style={style}>
          버라벨
        </div>
        을 이용해주셔서 감사합니다.
      </div>
      <Link to="/">
        <button className="main-btn">메인으로</button>
      </Link>{" "}
    </div>
  );
};

export default QuitCompletePage;
