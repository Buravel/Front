import React from "react";
import TemplateNew2 from "../components/login/TemplateNew2";
import FindAuthPW from "../components/login/FindAuthPW";
import Responsive from "../components/common/Responsive";

const FindAuthPagePW = () => {
  return (
    <Responsive>
      <TemplateNew2>
        <FindAuthPW />
      </TemplateNew2>
    </Responsive>
  );
};

export default FindAuthPagePW;
