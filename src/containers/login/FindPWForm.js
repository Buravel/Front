import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { changeField, initializeForm, findPW } from "../../modules/auth";
import FindPW from "../../components/login/FindPW";

const FindPWForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.findPW,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "findPW",
        key: name,
        value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const email = form;
    dispatch(findPW(email));
  };

  useEffect(() => {
    dispatch(initializeForm("findPW"));
  }, [dispatch]);

  return (
    <FindPW type="findPW" form={form} onChange={onChange} onSubmit={onSubmit} />
  );
};

export default withRouter(FindPWForm);
