import React from "react";
import Template2 from "../components/login/Template2";
import RegisterAuth from "../components/login/RegisterAuth";
import Responsive from "../components/common/Responsive";

const RegisterAuthPage = () => {
  return (
    <Responsive>
      <Template2>
        <RegisterAuth />
      </Template2>
    </Responsive>
  );
};

export default RegisterAuthPage;
