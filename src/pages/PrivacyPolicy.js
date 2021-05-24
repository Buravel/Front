import React from "react";
import Template from "../components/login/Template";
import PrivacyForm from "../containers/login/PrivacyForm";
import Responsive from "../components/common/Responsive";

const PrivacyPolicy = () => {
  return (
    <Responsive>
      <Template>
        <PrivacyForm />
      </Template>
    </Responsive>
  );
};

export default PrivacyPolicy;
