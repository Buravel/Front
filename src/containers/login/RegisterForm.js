import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm, register } from "../../modules/auth";
import Register from "../../components/login/Register";
import { withRouter } from "react-router-dom";

const RegisterForm = ({ history, remain }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, success } = useSelector(({ auth }) => ({
    form: auth.register,
    success: auth.success,
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
    dispatch(register({ nickname, username, email, password }));
  };

  useEffect(() => {
    dispatch(initializeForm("register"));
  }, [dispatch]);

  useEffect(() => {
    if (success === false) {
      setError("회원가입 실패");
      return;
    }

    if (success === true) {
      history.push("/signUpComplete");
    }
  }, [success, dispatch, history]);

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
