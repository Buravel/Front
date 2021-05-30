import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  changeField,
  initializeForm,
  registerAuth,
  registerReAuth,
} from "../../modules/auth";
import RegisterAuth from "../../components/login/RegisterAuth";

const RegisterAuthForm = ({ history }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const { form, success } = useSelector(({ auth }) => ({
    form: auth.registerAuth,
    success: auth.success,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "registerAuth",
        key: name,
        value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { number } = form;
    dispatch(registerAuth({ number }));
  };

  const reSubmit = (e) => {
    e.preventDefault();
    const { number } = form;
    dispatch(registerReAuth({ number }));
  };

  useEffect(() => {
    dispatch(initializeForm("registerAuth"));
  }, [dispatch]);

  useEffect(() => {
    if (success === false) {
      setError("인증번호가 일치하지 않습니다.");
      return;
    }

    if (success === true) {
      history.push("/authComplete");
    }
  }, [success, history]);

  return (
    <RegisterAuth
      type="registerAuth"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      reSubmit={reSubmit}
      error={error}
    />
  );
};

export default withRouter(RegisterAuthForm);
