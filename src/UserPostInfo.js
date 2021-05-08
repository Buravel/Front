import React from "react";
import Appstyle from "./Appstyle.css";
import {
  Airplane,
  bed,
  bookmark,
  buravelIcon,
  bus,
  day,
  dayLine,
  etc,
  food,
  landmark,
  mapButton,
  menu,
  nextButton,
  rating,
  search,
  shopping,
} from "./image/iconimg";

function UserPostInfo(props) {
  return (
    <>
      <div className="InfoBackground">
        <span className="PostDay">
          <span className="PostDate">2020년 7월</span>
          <span className="PostTerm">(9박 10일)</span>
        </span>
        <span className="UserPostName">
          <span className="UserName">{props.UserName}</span>
          <span className="UserPlace">님의 아이슬란드</span>
        </span>
      </div>
    </>
  );
}

export default UserPostInfo;
