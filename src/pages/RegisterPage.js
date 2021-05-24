import React from "react";
import Template from "../components/login/Template";
import RegisterForm from "../containers/login/RegisterForm";
import Responsive from "../components/common/Responsive";

const RegisterPage = () => {
  return (
    <Responsive>
      <Template>
        <RegisterForm />
      </Template>
    </Responsive>
  );
};

export default RegisterPage;
