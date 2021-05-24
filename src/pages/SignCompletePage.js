import React from "react";
import Template2 from "../components/login/Template2";
import Complete from "../components/login/SignUpComplete";
import Responsive from "../components/common/Responsive";

const SignCompletePage = () => {
  return (
    <Responsive>
      <Template2>
        <Complete />
      </Template2>{" "}
    </Responsive>
  );
};

export default SignCompletePage;
