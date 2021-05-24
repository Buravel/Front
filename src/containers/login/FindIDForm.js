import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { changeField, initializeForm, findID } from "../../modules/auth";
import FindID from "../../components/login/FindID";
import { isEmail } from "validator";
import { check } from "../../modules/user";

const FindIDForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.findID,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
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
    if (!isEmail(email)) {
      setError("잘못된 이메일 형식입니다.");
      changeField({ form: "findID", key: "email", value: " " });
      return;
    }
    dispatch(findID(email));
  };

  useEffect(() => {
    dispatch(initializeForm("findID"));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log("오류 발생");
      console.log(authError);
      setError("이메일 전송(id) 실패");
      return;
    }

    if (auth) {
      console.log("이메일 전송(id) 성공");
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      history.push("/findAuth");
    }
  }, [history, user]);

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
