import React, { useState } from "react";
import Privacy from "../../components/login/Privacy";
import { withRouter } from "react-router-dom";
import RegisterForm from "./RegisterForm";

const PrivacyForm = ({ history }) => {
  const [remain, setRemain] = useState(null);
  const movetoForm = (e) => {
    e.preventDefault();
    setRemain(history);
    history.push("/signUp");
  };
  const movetoMain = (e) => {
    e.preventDefault();
    setRemain(0);
    history.push("/");
  };
  return (
    <>
      <Privacy
        form="register"
        movetoForm={movetoForm}
        movetoMain={movetoMain}
      />
      <RegisterForm remain={remain}></RegisterForm>
    </>
  );
};

export default withRouter(PrivacyForm);
