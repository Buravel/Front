import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { changeField, initializeForm, findID } from "../../modules/auth";
import FindID from "../../components/login/FindID";

const FindIDForm = ({ history }) => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.findID,
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
    dispatch(findID(email));
  };

  useEffect(() => {
    dispatch(initializeForm("findID"));
  }, [dispatch]);

  return (
    <FindID type="findID" form={form} onChange={onChange} onSubmit={onSubmit} />
  );
};

export default withRouter(FindIDForm);
