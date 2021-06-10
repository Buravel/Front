import React from "react";
import Responsive from "../components/common/Responsive";
import HeaderContainer from "../containers/common/HeaderContainer";
import PlanContainer from "../containers/plan/PlanContainer";
import PlanBackground from "../components/plan/PlanBackground";
import PostResponsive from "../components/plan/PostResponsive";

const Plan = () => {
  return (
    <>
      <HeaderContainer />
      <PostResponsive>
        <Responsive>
          <PlanContainer />
        </Responsive>
      </PostResponsive>
    </>
  );
};

export default Plan;
