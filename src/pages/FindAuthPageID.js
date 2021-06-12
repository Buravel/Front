import React from "react";
import TemplateNew2 from "../components/login/TemplateNew2";
import FindAuthID from "../components/login/FindAuthID";
import Responsive from "../components/common/Responsive";

const FindAuthPageID = () => {
  return (
    <Responsive>
      <TemplateNew2>
        <FindAuthID />
      </TemplateNew2>
    </Responsive>
  );
};

export default FindAuthPageID;
