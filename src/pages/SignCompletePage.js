import React from "react";
import TemplateNew2 from "../components/login/TemplateNew2";
import Complete from "../components/login/SignUpComplete";
import Responsive from "../components/common/Responsive";

const SignCompletePage = () => {
  return (
    <Responsive>
      <TemplateNew2>
        <Complete />
      </TemplateNew2>
    </Responsive>
  );
};

export default SignCompletePage;
