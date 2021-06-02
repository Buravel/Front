import React from "react";
import Template4 from "../components/login/Template4";
import RegisterAuthForm from "../containers/mypage/RegisterAuthForm";
import Responsive from "../components/common/Responsive";

const RegisterAuthPage = () => {
  return (
    <Responsive>
      <Template4>
        <RegisterAuthForm />
      </Template4>
    </Responsive>
  );
};

export default RegisterAuthPage;
