import React from "react";
import Template2 from "../components/login/Template2";
import FindAuth from "../components/login/FindAuth";
import Responsive from "../components/common/Responsive";

const FindAuthPage = () => {
  return (
    <Responsive>
      <Template2>
        <FindAuth />
      </Template2>
    </Responsive>
  );
};

export default FindAuthPage;
