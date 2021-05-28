import React from "react";
function Icon(props) {
  const c = "/images/planImg/" + props.picture + ".svg";
  return <img src={c} className={props.className} />;
}
export default Icon;
