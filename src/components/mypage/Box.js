import React from "react";
import { Link } from "react-router-dom";
import "./box.scss";
import star from "./star.png";
import airplane from "./airplane.png";
import hotel from "./hotel.png";
import food from "./food.png";

const style = { display: "inline-block" };
const Box = () => {
  return (
    <>
      <div className="box-container">
        <div className="imageSection">
          <div className="tagSection">#힐링</div>
        </div>
        <div className="infoSection">
          <div className="title" style={style}>
            부산여행
          </div>
          <div className="cost" style={style}>
            125만원
          </div>
          <div className="date">4박 5일</div>
          <div className="cost-sort" style={style}>
            <div className="detail-cost" style={style}>
              <img className="cost-image" src={airplane} alt="" style={style} />
              <div className="cost-text" style={style}>
                21
              </div>
            </div>
            <div className="detail-cost" style={style}>
              <img className="cost-image" src={hotel} alt="" style={style} />
              <div className="cost-text" style={style}>
                13
              </div>
            </div>
            <div className="detail-cost" style={style}>
              <img className="cost-image" src={food} alt="" style={style} />
              <div className="cost-text" style={style}>
                30
              </div>
            </div>
          </div>
          <div className="rate" style={style}>
            <img className="rate-image" src={star} alt="" style={style} />
            <div className="rate-text" style={style}>
              4.5
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Box;
