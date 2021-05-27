import React from "react";
function Bicon(props) {
  const c = "/images/bookmarksImg/" + props.picture + ".svg";
  return <img src={c} className={props.className} />;
}
export default Bicon;
