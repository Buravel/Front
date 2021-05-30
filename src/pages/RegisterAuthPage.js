import React from "react";
import Template2 from "../components/login/Template2";
import RegisterAuthForm from "../containers/mypage/RegisterAuthForm";
import Responsive from "../components/common/Responsive";

const RegisterAuthPage = () => {
  return (
    <Responsive>
      <Template2>
        <RegisterAuthForm />
      </Template2>
    </Responsive>
  );
};

export default RegisterAuthPage;
