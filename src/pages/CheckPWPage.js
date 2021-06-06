import React from "react";
import Responsive from "../components/common/Responsive";
import CheckPW from "../components/mypage/checkPW";
import TemplateNew3 from "../components/login/TemplateNew3";

const CheckPWPage = () => {
  return (
    <>
      <Responsive>
        <TemplateNew3>
          <CheckPW />
        </TemplateNew3>
      </Responsive>
    </>
  );
};

export default CheckPWPage;
