import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  changeField,
  initializeForm,
  registerAuth,
  registerReAuth,
} from "../../modules/auth";
import RegisterAuth from "../../components/mypage/RegisterAuth";

const RegisterAuthForm = ({ history }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const { form, verification } = useSelector(({ auth }) => ({
    form: auth.registerAuth,
    verification: auth.verification,
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
    if (verification === false) {
      setError("인증번호가 일치하지 않습니다.");
      return;
    }

    if (verification === true) {
      history.push("/authComplete");
    }
  }, [verification, history]);

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
