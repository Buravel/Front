import React from "react";
import "./common.scss";
import "./findIDPW.scss";

const FindPW = ({ form, onChange, onSubmit, error }) => {
  return (
    <div className="findBlock">
      <form action="" onSubmit={onSubmit}>
        <div>
          <h2 className="h203">임시 비밀번호 발급</h2>
          <h5 className="h506">가입한 이메일 주소를 입력해주세요.</h5>
          <div className="inputBox">
            <h5 className="h507">이메일 주소</h5>
            <input
              className="inputCell"
              type="email"
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

export default FindPW;
