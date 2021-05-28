import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { changeField, initializeForm, login } from "../../modules/auth";
import Login from "../../components/login/Login";
import Header from "../../components/common/Header";

const LoginForm = ({ history }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [LoginCheck, setLoginCheck] = useState(null);
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "login",
        key: name,
        value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    localStorage.clear(); //localStorage 삭제할 때 사용
    dispatch(initializeForm("login"));
  }, [dispatch]);

  useEffect(() => {
    if (authError != null) {
      console.log("오류 발생");
      setLoginCheck(false);
      return;
    }

    if (auth != null) {
      console.log("로그인 성공");
      setLoginCheck(true);
      history.push("/");
    }
  }, [auth, authError, dispatch, history]);

  return (
    <Login
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
    );
};

export default withRouter(LoginForm);
