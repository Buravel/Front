import React from "react";
import TemplateNew2 from "../components/login/TemplateNew2";
import RegisterAuthForm from "../containers/mypage/RegisterAuthForm";
import Responsive from "../components/common/Responsive";

const RegisterAuthPage = () => {
  return (
    <Responsive>
      <TemplateNew2>
        <RegisterAuthForm />
      </TemplateNew2>
    </Responsive>
  );
};

export default RegisterAuthPage;
