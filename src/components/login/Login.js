import React from "react";
import { Link } from "react-router-dom";
import "./common.scss";
import "./login.scss";

const style = { display: "inline-block" };
const Login = ({ form, onChange, onSubmit }) => {
  return (
    <div className="loginBlock">
      <form onSubmit={onSubmit}>
        <div>
          <h1 className="h101">반갑습니다!</h1>
          <div className="inputBox">
            <h5 className="h501">아이디</h5>
            <input
              className="inputCell"
              name="id"
              onChange={onChange}
              value={form.id}
            ></input>
          </div>
          <div className="inputBox">
            <h5 className="h501">비밀번호</h5>
            <input
              className="inputCell"
              type="password"
              name="password"
              onChange={onChange}
              value={form.password}
            ></input>
          </div>
        </div>

        <button className="button01 style01" type="submit" name="btn">
          로그인
        </button>
      </form>

      <footer className="loginFooter">
        <Link to="/signUp">회원가입</Link>
        <h4 style={style}> &nbsp;|&nbsp; </h4>
        <Link to="/findID">아이디 찾기</Link>
        <h4 style={style}> &nbsp;|&nbsp; </h4>
        <Link to="/findPW">비밀번호 찾기</Link>
      </footer>
    </div>
  );
};

export default Login;
