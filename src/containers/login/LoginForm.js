import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { changeField, initializeForm, login } from "../../modules/auth";
import Login from "../../components/login/Login";
import { check } from "../../modules/user";
const LoginForm = ({ history }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const { form, success } = useSelector(({ auth }) => ({
    form: auth.login,
    success: auth.loginsuccess,
  }));

  const { user } = useSelector(({ user }) => user);

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
    //    localStorage.clear(); //localStorage 삭제할 때 사용
    //    setError("");
    dispatch(initializeForm("login"));
  }, [dispatch]);

  useEffect(() => {
    if (success === false) {
      setError("아이디나 비밀번호가 일치하지 않습니다.");
      return;
    }

    if (success === true) {
      setError("");
      dispatch(check());
    }
  }, [success, history, dispatch]);

  useEffect(() => {
    if (user) {
      history.push("/");
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch (error) {
        console.log(error);
      }
    }
  }, [user, history]);

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
