import React from "react";
import { Link } from "react-router-dom";
import "./common.scss";
import "./register.scss";

const style = { display: "inline-block" };
const Register = ({ form, onChange, onSubmit }) => {
  return (
    <div className="registerBlock">
      <form onSubmit={onSubmit}>
        <h2 className="h201">
          <b>버라벨</b>과 함께 하세요!
        </h2>
        <div>
          <div className="inputBox">
            <h5 className="h502">닉네임</h5>
            <input
              className="inputCell"
              name="username"
              onChange={onChange}
              value={form.username}
            ></input>
          </div>
          <div className="inputBox">
            <h5 className="h502">아이디</h5>
            <input
              className="inputCell"
              name="id"
              onChange={onChange}
              value={form.id}
            ></input>
          </div>
          <div className="inputBox">
            <h5 className="h502">이메일 주소</h5>
            <input
              className="inputCell"
              type="email"
              name="email"
              onChange={onChange}
              value={form.email}
            ></input>
          </div>
          <div className="inputBox">
            <h5 className="h502">비밀번호</h5>
            <input
              className="inputCell"
              type="password"
              name="password"
              onChange={onChange}
              value={form.password}
            ></input>
          </div>
          <div className="inputBox">
            <h5 className="h502">비밀번호 확인</h5>
            <input
              className="inputCell"
              type="password"
              name="passwordConfirm"
              onChange={onChange}
              value={form.passwordConfirm}
            ></input>
          </div>
        </div>
        <div className="privacy">
          <input type="checkbox"></input>
          <Link to="/privacyPolicy">
            <h6 className="h601" style={style}>
              약관 확인 및 동의하기(필수)
            </h6>
          </Link>
        </div>
        <button className="button01 style02" type="submit">
          확인
        </button>
      </form>
    </div>
  );
};

export default Register;
