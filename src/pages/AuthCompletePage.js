import React from "react";
import TemplateNew3 from "../components/login/TemplateNew3";
import AuthComplete from "../components/login/AuthComplete";
import Responsive from "../components/common/Responsive";

const SignCompletePage = () => {
  return (
    <Responsive>
      <TemplateNew3>
        <AuthComplete />
      </TemplateNew3>{" "}
    </Responsive>
  );
};

export default SignCompletePage;
