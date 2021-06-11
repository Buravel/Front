import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm, register } from "../../modules/auth";
import Register from "../../components/login/Register";
import { withRouter } from "react-router-dom";

const RegisterForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, success, errormsg } = useSelector(({ auth }) => ({
    form: auth.register,
    success: auth.registersuccess,
    errormsg: auth.errormsg,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "register",
        key: name,
        value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { nickname, username, email, password, passwordConfirm } = form;
    if ([nickname, username, email, password, passwordConfirm].includes("")) {
      setError("빈 칸을 모두 입력하세요.");
      return;
    } else if (password !== passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
      changeField({ form: "register", key: "password", value: "" });
      changeField({ form: "register", key: "passwordConfirm", value: "" });
    } else {
      setError(null);
      dispatch(register({ nickname, username, email, password }));
    }
  };

  useEffect(() => {
    dispatch(initializeForm("register"));
  }, [dispatch]);

  useEffect(() => {
    if (success === true && error === null) {
      history.push("/signUpComplete");
    }
  }, [success, dispatch, history, error]);

  return (
    <Register
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      errormsg={errormsg}
      success={success}
    />
  );
};

export default withRouter(RegisterForm);
