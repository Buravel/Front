import React from "react";
import TemplateNew1 from "../components/login/TemplateNew1";
import FindIDForm from "../containers/login/FindIDForm";
import Responsive from "../components/common/Responsive";

const FindIDPage = () => {
  return (
    <Responsive>
      <TemplateNew1>
        <FindIDForm />
      </TemplateNew1>
    </Responsive>
  );
};

export default FindIDPage;
