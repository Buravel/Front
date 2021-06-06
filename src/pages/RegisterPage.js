import React from "react";
import TemplateNew1 from "../components/login/TemplateNew1";
import RegisterForm from "../containers/login/RegisterForm";
import Responsive from "../components/common/Responsive";

const RegisterPage = () => {
  return (
    <Responsive>
      <TemplateNew1>
        <RegisterForm />
      </TemplateNew1>
    </Responsive>
  );
};

export default RegisterPage;
