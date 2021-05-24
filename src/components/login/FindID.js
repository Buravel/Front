import React from "react";
import { Link } from "react-router-dom";
import "./common.scss";
import "./findIDPW.scss";

const FindID = ({ form, onChange, onSubmit }) => {
  return (
    <div className="findBlock">
      <form onSubmit={onSubmit}>
        <div>
          <h2 className="h203">아이디 찾기</h2>
          <h5 className="h506">가입한 이메일 주소를 입력해주세요.</h5>
          <div className="inputBox">
            <h5 className="h507">이메일주소</h5>
            <input
              className="inputCell"
              type="email"
              name="email"
              onChange={onChange}
              value={form.email}
            ></input>
          </div>
        </div>
        <button className="button01 style05" type="submit">
          확인
        </button>
      </form>
    </div>
  );
};

export default FindID;
