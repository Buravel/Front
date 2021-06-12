import React from "react";
import TemplateNew1 from "../components/login/TemplateNew1";
//import Privacy from "../components/login/Privacy";
import PrivacyForm from "../containers/login/PrivacyForm";
import Responsive from "../components/common/Responsive";

const PrivacyPolicy = () => {
  return (
    <Responsive>
      <TemplateNew1>
        <PrivacyForm />
      </TemplateNew1>
    </Responsive>
  );
};

export default PrivacyPolicy;
