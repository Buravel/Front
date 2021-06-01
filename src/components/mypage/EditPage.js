import React, { useEffect, useState } from "react";
import "./setuppage.scss";
import profile from "./profile.png";
import axios from "axios";
import { withRouter } from "react-router-dom";
//import imageCompression from "browser-image-compression";
axios.defaults.baseURL = "http://34.64.93.115";
let token;
const style = { display: "inline-block" };
const EditPage = () => {
  const [nick, setNick] = useState(null);
  const [img, setImg] = useState({ selectedFile: [] });
  const [pass, setPassword] = useState(null);
  const [pw, setPw] = useState(false);
  const [change, setChange] = useState(false);
  const [errmsg, setErrmsg] = useState(false);
  const nickChange = (e) => {
    setNick(e.target.value);
  };

  const passChange = (e) => {
    setPassword(e.target.value);
  };

  const imageChange = (e) => {
    setImg({ selectedFile: e.target.files[0] });
  };

  const onChangeFile = (event) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result;
      if (base64) {
        setImg(base64.toString().split(",")[1]); // 파일 base64 상태 업데이트
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
      // setImgFile(event.target.files[0]); // 파일 상태 업데이트
    }
  };

  const ImageSubmit = async (e) => {
    e.preventDefault();
    token = localStorage.getItem("token");
    if (token) token = token.replace(/\"/gi, "");
    axios.defaults.headers.common["Authorization"] = `${token}`;
    /*    const config = {
      headers: {
        "Content-type": "multipart/formed-data",
      },
    };*/

    //    const formData = new FormData();
    //    formData.append("profileImage", img.selectedFile, img.selectedFile.name);
    //    console.log(typeof formData);
    await axios
      .patch("/mypage/picture", { profileImage: img })
      .then((response) => {
        //        console.log(response);
        //        console.log(img);
        setChange(true);
        setErrmsg(null);
        //        setImg(response.data.profileImage);
        return response.data.profileImage;
      })
      .catch((error) => {
        console.log(img);
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
    await axios
      .patch("/mypage/password", { password: pass })
      .then((response) => {
        setChange(true);
        setErrmsg(null);
        console.log(response);
        return response.data.password;
      })
      .catch((error) => {
        setChange(false);
        setErrmsg(error.response.data.errors[0].defaultMessage);
        return Promise.reject(error);
      });
  };

  return (
    <div className="setup">
      <img src={profile} alt="" className="profileImage" />
      <img src={`data:image/png;base64,${img}`} alt="" />
      <div className="info">
        <div className="profileBox">
          <input type="file" onChange={onChangeFile} />
          <button className="profile-btn" type="submit" onClick={ImageSubmit}>
            프로필 사진 변경
          </button>
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
              name="password"
              style={style}
              onChange={passChange}
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
