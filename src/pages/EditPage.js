import React from "react";
import EditPage1 from "../components/mypage/EditPage";
import Responsive from "../components/common/Responsive";
import TemplateNew3 from "../components/login/TemplateNew3";

const EditPage = () => {
  return (
    <>
      <Responsive>
        <TemplateNew3>
          <EditPage1 />
        </TemplateNew3>
      </Responsive>
    </>
  );
};

export default EditPage;
