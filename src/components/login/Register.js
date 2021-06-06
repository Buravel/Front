import React from "react";
import "./common.scss";
import "./register.scss";

const Register = ({ form, onChange, onSubmit, error, errormsg, success }) => {
  return (
    <div className="registerBlock">
      <form onSubmit={onSubmit}>
        <div className="registerBox">
          <h2 className="title">
            <b>버라벨</b>과 함께 하세요!
          </h2>
          <div>
            <div className="inputBox-reg">
              <h5 className="nick">닉네임</h5>
              <input
                className="inputCell"
                name="nickname"
                onChange={onChange}
                value={form.nickname}
              ></input>
            </div>
            <div className="inputBox-reg">
              <h5 className="id">아이디</h5>
              <input
                className="inputCell"
                name="username"
                onChange={onChange}
                value={form.username}
              ></input>
            </div>
            <div className="inputBox-reg">
              <h5 className="emailA">이메일 주소</h5>
              <input
                className="inputCell"
                type="email"
                name="email"
                onChange={onChange}
                value={form.email}
              ></input>
            </div>
            <div className="inputBox-reg">
              <h5 className="pw">비밀번호</h5>
              <input
                className="inputCell"
                type="password"
                name="password"
                onChange={onChange}
                value={form.password}
              ></input>
            </div>
            <div className="inputBox-reg">
              <h5 className="pwC">비밀번호 확인</h5>
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
            회원가입
          </button>
        </div>{" "}
      </form>
    </div>
  );
};

export default Register;
