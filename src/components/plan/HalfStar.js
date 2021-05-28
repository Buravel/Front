import React from "react";
import Icon from "./Icon";
function HalfStar() {
  return (
    <span className="halfIcon">
      <Icon picture="starempty" className="starempty" />

      <Icon picture="starhalf" className="halfStar" />
    </span>
  );
}
export default HalfStar;
