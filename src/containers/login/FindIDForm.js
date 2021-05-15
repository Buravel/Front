import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { changeField, initializeForm, findid } from "../../modules/auth";
import FindID from "../../components/login/FindID";

const FindIDForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.findid,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "findid",
        key: name,
        value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const email = form;
    dispatch(findid(email));
  };

  useEffect(() => {
    dispatch(initializeForm("findid"));
  }, [dispatch]);

  return (
    <FindID type="findid" form={form} onChange={onChange} onSubmit={onSubmit} />
  );
};

export default withRouter(FindIDForm);
