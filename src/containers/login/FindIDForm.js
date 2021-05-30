import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { changeField, initializeForm, findID } from "../../modules/auth";
import FindID from "../../components/login/FindID";

const FindIDForm = ({ history }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const { form, success } = useSelector(({ auth }) => ({
    form: auth.findID,
    success: auth.success,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "findID",
        key: name,
        value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email } = form;
    dispatch(findID({ email }));
  };

  useEffect(() => {
    dispatch(initializeForm("findID"));
  }, [dispatch]);

  useEffect(() => {
    if (success === false) {
      setError("가입하지 않은 회원이거나, 이메일 인증을 받지 않은 회원입니다.");
      return;
    }
    if (success === true) {
      console.log("아이디 찾기 성공");
      history.push("/findAuth");
    }
  }, [success, history]);

  return (
    <FindID
      type="findID"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(FindIDForm);
