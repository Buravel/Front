import React from "react";
import Responsive from "../components/common/Responsive";
import QuitComplete from "../components/mypage/QuitCompletePage";
import Template2 from "../components/login/Template2";

const QuitCompletePage = () => {
  return (
    <>
      <Template2>
        <Responsive>
          <QuitComplete />
        </Responsive>
      </Template2>{" "}
    </>
  );
};

export default QuitCompletePage;
