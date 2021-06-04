import React from "react";
import Responsive from "../components/common/Responsive";
import HeaderContainer from "../containers/common/HeaderContainer";
import PlanContainer from "../containers/plan/PlanContainer";
const Plan = () => {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <PlanContainer />
      </Responsive>
    </>
  );
};

export default Plan;
