import React from "react";
import Template from "../components/login/Template";
import FindIDForm from "../containers/login/FindIDForm";
import Responsive from "../components/common/Responsive";

const FindIDPage = () => {
  return (
    <Responsive>
      <Template>
        <FindIDForm />
      </Template>
    </Responsive>
  );
};

export default FindIDPage;
