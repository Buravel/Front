import React from "react";
import Template3 from "../components/login/Template3";
import FindAuth from "../components/login/FindAuth";
import Responsive from "../components/common/Responsive";

const FindAuthPage = () => {
  return (
    <Responsive>
      <Template3>
        <FindAuth />
      </Template3>
    </Responsive>
  );
};

export default FindAuthPage;
