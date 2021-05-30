import React from "react";
import Responsive from "../components/common/Responsive";
import Quit from "../components/mypage/QuitPage";
import Template2 from "../components/login/Template2";

const QuitPage = () => {
  return (
    <>
      <Template2>
        <Responsive>
          <Quit />
        </Responsive>
      </Template2>{" "}
    </>
  );
};

export default QuitPage;
