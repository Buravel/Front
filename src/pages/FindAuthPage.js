import React from "react";
import TemplateNew2 from "../components/login/TemplateNew2";
import FindAuth from "../components/login/FindAuth";
import Responsive from "../components/common/Responsive";

const FindAuthPage = () => {
  return (
    <Responsive>
      <TemplateNew2>
        <FindAuth />
      </TemplateNew2>
    </Responsive>
  );
};

export default FindAuthPage;
