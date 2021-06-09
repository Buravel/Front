import React, { useState } from "react";
import "./editpage.scss";
import profile from "./profile.png";
import axios from "axios";
import { withRouter } from "react-router-dom";
axios.defaults.baseURL = "http://34.64.93.115";
let token;
const style = { display: "inline-block" };
const EditPage = () => {
  const [nick, setNick] = useState(null);
  const [img, setImg] = useState({ selectedFile: [] });
  const [pass, setPassword] = useState(null);
  const [passConfirm, setPassConfirm] = useState(null);
  const [pw, setPw] = useState(false);
  const [change, setChange] = useState(false);
  const [errmsg, setErrmsg] = useState(false);
  const [choose, setChoose] = useState(1);
  const nickChange = (e) => {
    setNick(e.target.value);
  };

  const passChange = (e) => {
    setPassword(e.target.value);
  };

  const passConfirmChange = (e) => {
    setPassConfirm(e.target.value);
  };

  const onChangeFile = (event) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setImg(base64.toString().split(",")[1]); // 파일 base64 상태 업데이트
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
      setChoose(2);
    }
  };

  const ImageSubmit = async (e) => {
    e.preventDefault();
    token = localStorage.getItem("token");
    if (token) token = token.replace(/\"/gi, "");
    axios.defaults.headers.common["Authorization"] = `${token}`;
    await axios
      .patch("/mypage/picture", { profileImage: img })
      .then((response) => {
        setChange(true);
        setErrmsg(null);
        return response.data.profileImage;
      })
      .catch((error) => {
        setChange(false);
        return Promise.reject(error);
      });
  };

  const NicknameSubmit = async (e) => {
    e.preventDefault();
    token = localStorage.getItem("token");
    if (token) token = token.replace(/\"/gi, "");
    axios.defaults.headers.common["Authorization"] = `${token}`;
    await axios
      .patch("/mypage/nickname", { nickname: nick })
      .then((response) => {
        setChange(true);
        setErrmsg(null);
        return response.data.nickname;
      })
      .catch((error) => {
        setChange(false);
        setErrmsg(error.response.data.errors[0].defaultMessage);
        return Promise.reject(error);
      });
  };

  const PasswordSubmit = async (e) => {
    e.preventDefault();
    token = localStorage.getItem("token");
    if (token) token = token.replace(/\"/gi, "");
    axios.defaults.headers.common["Authorization"] = `${token}`;
    setPw(true);
    setChange(false);
    setErrmsg(null);
  };

  const PasswordConfirmSubmit = async (e) => {
    e.preventDefault();
    token = localStorage.getItem("token");
    if (token) token = token.replace(/\"/gi, "");
    axios.defaults.headers.common["Authorization"] = `${token}`;
    setPw(false);
    if (pass === passConfirm) {
      await axios
        .patch("/mypage/password", { password: pass })
        .then((response) => {
          setChange(true);
          setErrmsg(null);
          return response.data.password;
        })
        .catch((error) => {
          setChange(false);
          setErrmsg(error.response.data.errors[0].defaultMessage);
          return Promise.reject(error);
        });
    } else {
      setChange(false);
      setErrmsg("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <div className="edit">
      <div className="prof_img">
        {choose === 1 ? (
          <img src={profile} alt="" className="profileImage" />
        ) : (
          <img src={`data:image/png;base64,${img}`} alt="" />
        )}
      </div>{" "}
      <div className="info">
        <div className="profileBox">
          <input
            id="input-file"
            type="file"
            onChange={onChangeFile}
            className="choose-file"
            style={{ display: "none" }}
          />
          <div className="imgUpload">
            <label className="upload-btn" for="input-file">
              프로필 사진 업로드
            </label>
            <button className="profile-btn" type="submit" onClick={ImageSubmit}>
              변경
            </button>
          </div>{" "}
          <div style={{ color: "#535353" }}>
            업로드 후 '변경'을 눌러주셔야 변경이 완료됩니다.
          </div>
        </div>
        {pw === true ? (
          <div className="msg">확인을 위해 한 번 더 입력해주세요.</div>
        ) : (
          <div></div>
        )}
        {change === true ? (
          <div className="msg">성공적으로 변경되었습니다. </div>
        ) : (
          <div></div>
        )}
        {errmsg !== null ? (
          <div className="error-msg">{errmsg} </div>
        ) : (
          <div></div>
        )}
        <div className="infoBox">
          <div className="name">닉네임</div>
          <input
            className="box"
            name="nickname"
            style={style}
            onChange={nickChange}
          ></input>
          <button className="change-btn" type="submit" onClick={NicknameSubmit}>
            변경
          </button>
        </div>
        <div className="infoBox">
          <div className="name">비밀번호</div>
          <input
            className="box"
            type="password"
            name="password"
            style={style}
            onChange={passChange}
          ></input>
          <button className="change-btn" onClick={PasswordSubmit}>
            변경
          </button>
        </div>
        {pw === true ? (
          <div className="infoBox">
            <div className="name">비밀번호 확인</div>
            <input
              className="box"
              type="password"
              name="passwordConfirm"
              style={style}
              onChange={passConfirmChange}
            ></input>
            <button className="change-btn" onClick={PasswordConfirmSubmit}>
              변경
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default withRouter(EditPage);
