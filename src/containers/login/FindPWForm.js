import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { changeField, initializeForm, findpw } from "../../modules/auth";
import FindPW from "../../components/login/FindPW";

const FindPWForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.findpw,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "findpw",
        key: name,
        value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const email = form;
    dispatch(findpw(email));
  };

  useEffect(() => {
    dispatch(initializeForm("findpw"));
  }, [dispatch]);

  return (
    <FindPW type="findpw" form={form} onChange={onChange} onSubmit={onSubmit} />
  );
};

export default withRouter(FindPWForm);
