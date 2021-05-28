import React from "react";
import Template from "../components/login/Template";
import FindPWForm from "../containers/login/FindPWForm";
import Responsive from "../components/common/Responsive";

const FindPWPage = () => {
  return (
    <Responsive>
      <Template>
        <FindPWForm />
      </Template>
    </Responsive>
  );
};

export default FindPWPage;
