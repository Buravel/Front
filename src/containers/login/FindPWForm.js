import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { changeField, initializeForm, findPW } from "../../modules/auth";
import FindPW from "../../components/login/FindPW";

const FindPWForm = ({ history }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const { form, success } = useSelector(({ auth }) => ({
    form: auth.findPW,
    success: auth.findpwsuccess,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "findPW",
        key: name,
        value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const email = form;
    dispatch(findPW({ email }));
  };

  useEffect(() => {
    dispatch(initializeForm("findPW"));
  }, [dispatch]);

  useEffect(() => {
    if (success === false) {
      setError("가입하지 않은 회원이거나, 이메일 인증을 받지 않은 회원입니다.");
      return;
    }
    if (success === true) {
      console.log("비밀번호 찾기 성공");
      history.push("/findAuth");
    }
  }, [success, history]);

  return (
    <FindPW
      type="findPW"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(FindPWForm);
