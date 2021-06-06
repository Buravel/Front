import React from "react";
import TemplateNew1 from "../components/login/TemplateNew1";
import LoginForm from "../containers/login/LoginForm";
import Responsive from "../components/common/Responsive";

const LoginPage = () => {
  return (
    <Responsive>
      <TemplateNew1>
        <LoginForm />
      </TemplateNew1>
    </Responsive>
  );
};

export default LoginPage;
