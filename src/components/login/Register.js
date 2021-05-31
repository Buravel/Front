import React from "react";
import "./common.scss";
import "./register.scss";

const style = { display: "inline-block" };
const Register = ({ form, onChange, onSubmit, error, errormsg, success }) => {
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
              name="nickname"
              onChange={onChange}
              value={form.nickname}
            ></input>
          </div>
          <div className="inputBox">
            <h5 className="h502">아이디</h5>
            <input
              className="inputCell"
              name="username"
              onChange={onChange}
              value={form.username}
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
        <div className="error-msg">
          {error ? (
            <div>{error}</div>
          ) : (
            <div className="error-msg">
              {success ? <div> </div> : <div>{errormsg}</div>}
            </div>
          )}
        </div>
        <button className="checkbtn" type="submit">
          확인
        </button>
      </form>
    </div>
  );
};

export default Register;
