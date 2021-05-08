import React from "react";
import Appstyle from "../Appstyle.css";
import buravelIcon from "../image/buravelIcon.svg";
function HeaderBlock() {
  return (
    <>
      <h1 className="mainTop">
        <img src={buravelIcon} alt="버라벨 아이콘" className="buravelIcon" />
      </h1>
    </>
  );
}

export default HeaderBlock;
