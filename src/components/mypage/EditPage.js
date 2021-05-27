import React from "react";
import "./setuppage.scss";
import profile from "./profile.png";
//수정 필요!!
const style = { display: "inline-block" };
const EditPage = ({ onChange, nickname_Change, password_Change }) => {
  return (
    <div className="setup">
      <img className="profileImage" src={profile} alt="" />
      <div className="info">
        <div className="infoBox">
          <div className="name">닉네임</div>
          <input
            className="box"
            name="nickname"
            onChange={onChange}
            style={style}
            //            value={form.nickname}
          ></input>
          <button className="change-btn" onClick={nickname_Change}>
            변경
          </button>
        </div>
        <div className="infoBox">
          <div className="name">비밀번호</div>
          <input
            className="box"
            name="password"
            onChange={onChange}
            style={style}
            //            value={form.password}
          ></input>
          <button className="change-btn" onClick={password_Change}>
            변경
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
