import React from "react";
import Responsive from "../components/common/Responsive";
import HeaderContainer from "../containers/common/HeaderContainer";
import PlanContainer from "../containers/plan/PlanContainer";
import PlanBackground from "../components/plan/PlanBackground";

const Plan = () => {
  return (
    <>
      <PlanBackground />
      <HeaderContainer />

      <Responsive>
        <PlanContainer />
      </Responsive>
    </>
  );
};

export default Plan;
