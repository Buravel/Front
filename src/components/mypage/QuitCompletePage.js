import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./setuppage.scss";
import completeImage from "./complete_white.png";
axios.defaults.baseURL = "http://34.64.93.115";

const QuitCompletePage = ({ onSubmit }) => {
  return (
    <>
      <img className="completeImage" src={completeImage} alt="" />
      <div>탈퇴가 완료되었습니다. </div>&nbsp;{" "}
      <div>
        지금까지 <div>버라벨</div>을 이용해주셔서 감사합니다.
      </div>
      <Link to="/">
        <button>메인으로</button>
      </Link>{" "}
    </>
  );
};

export default QuitCompletePage;
