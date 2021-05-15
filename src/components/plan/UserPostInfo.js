import React from "react";
import Appstyle from "./Appstyle.css";
import Icon from "./Icon";

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
          <Icon
            picture="Airplane"
            className="TotalAirplane"
            alt="budget icon"
          />
          <Icon picture="food" className="Totalfood" alt="budget icon" />
          <Icon
            picture="shopping"
            className="Totalshopping"
            alt="budget icon"
          />
          <Icon picture="bus" className="Totalbus" alt="budget icon" />
          <Icon picture="bed" className="Totalbed" alt="budget icon" />
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
