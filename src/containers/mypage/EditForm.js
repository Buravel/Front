/*import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import EditPage from "../../components/mypage/EditPage";
import {
  changeField,
  initializeForm,
  nicknameChange,
  profileImageChange,
  passwordChange,
} from "../../modules/mypage";

const EditPageForm = ({ history }) => {
  const dispatch = useDispatch();
  const { form, success } = useSelector(({ mypage }) => ({
    form: mypage.nicknameChange,
    success: mypage.success,
  }));

  const nChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "nicknameChange",
        key: name,
        value,
      })
    );
  };

  const pChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "passwordChange",
        key: name,
        value,
      })
    );
  };

  const nSubmit = (e) => {
    e.preventDefault();
    const { nickname } = form;
    dispatch(nicknameChange({ nickname }));
  };

  const pSubmit = (e) => {
    e.preventDefault();
    const { password } = form;
    dispatch(passwordChange({ password }));
  };

  useEffect(() => {
    dispatch(initializeForm("nickname"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(initializeForm("password"));
  }, [dispatch]);

  useEffect(() => {
    if (success === true) {
      history.push("/setupPage");
    }
  }, [success, history]);

  return (
    <EditPage
      form={form}
      nChange={nChange}
      pChange={pChange}
      nickname_Change={nSubmit}
      password_Change={pSubmit}
      image_Change={profileImageChange}
    ></EditPage>
  );
};
export default withRouter(EditPageForm);
*/
