import React from "react";
import Responsive from "../components/common/Responsive";
import QuitComplete from "../components/mypage/QuitCompletePage";
import TemplateNew3 from "../components/login/TemplateNew3";

const QuitCompletePage = () => {
  return (
    <>
      <Responsive>
        <TemplateNew3>
          <QuitComplete />
        </TemplateNew3>
      </Responsive>
    </>
  );
};

export default QuitCompletePage;
