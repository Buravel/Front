import React from "react";
import TemplateNew1 from "../components/login/TemplateNew1";
import FindPWForm from "../containers/login/FindPWForm";
import Responsive from "../components/common/Responsive";

const FindPWPage = () => {
  return (
    <Responsive>
      <TemplateNew1>
        <FindPWForm />
      </TemplateNew1>
    </Responsive>
  );
};

export default FindPWPage;
