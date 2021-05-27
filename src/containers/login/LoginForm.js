import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { changeField, initializeForm, login } from "../../modules/auth";
import Login from "../../components/login/Login";
import { check } from "../../modules/user";

const LoginForm = ({ history }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
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
    const { id, password } = form;
    dispatch(login({ id, password }));
  };

  useEffect(() => {
    //    localStorage.clear(); //localStorage 삭제할 때 사용
    dispatch(initializeForm("login"));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      if (authError.response.status === 401) {
        setError("아이디 또는 비밀번호가 일치하지 않습니다.");
        return;
      }
      console.log("오류 발생");
      console.log(authError);
      setError("로그인 실패");
      return;
    }

    if (auth) {
      console.log("로그인 성공");
      //      localStorage.setItem("token",value);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      history.push("/");
      /*      try { //사용 시에만 주석 해제.
        localStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.log("localStorage is not working");
      }*/
    }
  }, [history, user]);

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
