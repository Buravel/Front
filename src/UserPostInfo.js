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
    <div className="InfoBackground">
      <span className="PostDay">
        <span className="PostDate">2020년 7월</span>
        <span className="PostTerm">
          ({props.date}박 {Number(props.date) + 1}일)
        </span>
      </span>
      <span className="UserPostName">
        <span className="UserName">{props.UserName}</span>
        <span className="UserPlace">님의 아이슬란드</span>
      </span>
      <span className="CostBackground">
        <span className="TotalCost">
          <span className="TotalMoney">377</span>
          <span className="TotalMoneyname">만원</span>
        </span>
        <span className="TotalImg">
          <img src={Airplane} className="TotalAirplane" alt="budget icon" />
          <img src={food} className="Totalfood" alt="budget icon" />
          <img src={shopping} className="Totalshopping" alt="budget icon" />
          <img src={bus} className="Totalbus" alt="budget icon" />
          <img src={bed} className="Totalbed" alt="budget icon" />
        </span>
        <span className="TotalMoneylist">
          <span className="TotalAirplaneCost">120</span>
          <span className="TotalfoodCost">120</span>
          <span className="TotalshoppingCost">120</span>
          <span className="TotalbusCost">120</span>
          <span className="TotalbedCost">120</span>
        </span>
      </span>
    </div>
  );
}

export default UserPostInfo;
