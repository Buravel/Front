import React from "react";
import "./common.scss";
import "./findIDPW.scss";

const FindID = ({ form, onChange, onSubmit, error }) => {
  return (
    <div className="findBlock">
      <form action="" onSubmit={onSubmit}>
        <div className="findBox">
          <h2 className="title">아이디 찾기</h2>
          <h5 className="emailtitle">가입한 이메일 주소를 입력해주세요.</h5>
          <div className="inputBox-find">
            <h5 className="emailA">이메일 주소</h5>
            <input
              className="inputCell"
              name="email"
              onChange={onChange}
              value={form.email}
            ></input>
          </div>
        </div>
        <div className="error-msg">
          {error ? <div>{error}</div> : <div></div>}
        </div>
        <button className="check-btn" type="submit">
          확인
        </button>
      </form>
    </div>
  );
};

export default FindID;
