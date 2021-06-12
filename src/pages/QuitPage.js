import React from "react";
import Responsive from "../components/common/Responsive";
import Quit from "../components/mypage/QuitPage";
import TemplateNew3 from "../components/login/TemplateNew3";

const QuitPage = () => {
  return (
    <>
      <Responsive>
        <TemplateNew3>
          <Quit />
        </TemplateNew3>
      </Responsive>
    </>
  );
};

export default QuitPage;
