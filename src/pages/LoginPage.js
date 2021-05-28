import React from "react";
import Template from "../components/login/Template";
import LoginForm from "../containers/login/LoginForm";
import Responsive from "../components/common/Responsive";

const LoginPage = () => {
  return (
    <Responsive>
      <Template>
        <LoginForm />
      </Template>
    </Responsive>
  );
};

export default LoginPage;
