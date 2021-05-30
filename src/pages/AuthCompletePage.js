import React from "react";
import Template2 from "../components/login/Template2";
import AuthComplete from "../components/login/AuthComplete";
import Responsive from "../components/common/Responsive";

const SignCompletePage = () => {
  return (
    <Responsive>
      <Template2>
        <AuthComplete />
      </Template2>{" "}
    </Responsive>
  );
};

export default SignCompletePage;
