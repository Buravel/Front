import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm, register } from "../../modules/auth";
import Register from "../../components/login/Register";
import { withRouter } from "react-router-dom";
import { isEmail, isLength, isAlphanumeric } from "validator";

const RegisterForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
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
    /*    if (!isAlphanumeric(username) || !isLength(username, { min: 6, max: 12 })) {
      setError("아이디는 6~12 글자의 알파벳 혹은 숫자로 이뤄져야 합니다.");
      changeField({ form: "register", key: "username", value: " " });
      return;
    }

    if (!isEmail(email)) {
      setError("잘못된 이메일 형식입니다.");
      changeField({ form: "register", key: "email", value: " " });
      return;
    }

    if (!isLength(password, { min: 8 })) {
      setError("비밀번호를 8자 이상 입력하세요.");
      changeField({ form: "register", key: "password", value: " " });
      return;
    }

    if (password !== passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
      changeField({ form: "register", key: "password", value: " " });
      changeField({ form: "register", key: "passwordConfirm", value: " " });
      return;
    }

    if ([nickname, username, email, password, passwordConfirm].includes(" ")) {
      setError("빈 칸을 모두 채워주세요.");
      return;
    }*/
    dispatch(register({ nickname, username, email, password }));
  };

  useEffect(() => {
    dispatch(initializeForm("register"));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      setError("회원가입 실패");
      return;
    }

    if (auth) {
      console.log("회원가입 성공");
      console.log(auth);
      history.push("/signUpComplete");
    }
  }, [auth, authError, dispatch, history]);

  return (
    <Register
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(RegisterForm);
