import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./box.scss";
import star from "./star.png";
import flightImg from "./airplane.png";
import hotelImg from "./hotel.png";
import dishImg from "./food.png";
import trafficImg from "./traffic.png";
import shopImg from "./shopping.png";
import etcImg from "./etc.png";
import basicImg from "./basicImg.png";

const style = { display: "inline-block" };
const Box = ({ box }) => {
  const title = box.planTitle;
  const top3List = box.top3List;
  const totalprice = box.outputPlanTotalPrice;
  const rating = box.planRating;
  const sday = box.startDate;
  const eday = box.endDate;
  const shopping = box.shoppingTotalPrice;
  const traffic = box.trafficTotalPrice;
  const dish = box.dishTotalPrice;
  const hotel = box.hotelTotalPrice;
  const flight = box.flightTotalPrice;
  const etc = box.etcTotalPrice;
  const planimage = box.planImage;
  const planID = box.id;
  let tag;
  if (
    box.planTagResponseDtos !== undefined &&
    box.planTagResponseDtos !== null &&
    box.planTagResponseDtos !== ""
  )
    tag = box.planTagResponseDtos[0].planTagTitle;

  //여행 기간
  var sdayArr = sday.split("-");
  var edayArr = eday.split("-");
  const sdate = new Date(sdayArr[0], sdayArr[1], sdayArr[2]);
  const edate = new Date(edayArr[0], edayArr[1], edayArr[2]);
  const night = (edate.getTime() - sdate.getTime()) / 1000 / 60 / 60 / 24;
  const period = `${night}박 ${night + 1}일`;

  //top3
  //(top3Price[0],top3Img[0]) / (top3Price[1],top3Img[1]) / (top3Price[2],top3Img[2]) 순으로 출력

  const top3Price = [];
  const top3Img = [];
  if (top3List.includes("FLIGHT")) {
    top3Img.push(flightImg);
    top3Price.push(flight);
  }
  if (top3List.includes("SHOPPING")) {
    top3Img.push(shopImg);
    top3Price.push(shopping);
  }
  if (top3List.includes("HOTEL")) {
    top3Img.push(hotelImg);
    top3Price.push(hotel);
  }
  if (top3List.includes("TRAFFIC")) {
    top3Img.push(trafficImg);
    top3Price.push(traffic);
  }
  if (top3List.includes("DISH")) {
    top3Img.push(dishImg);
    top3Price.push(dish);
  }
  if (top3List.includes("ETC")) {
    top3Img.push(etcImg);
    top3Price.push(etc);
  }
  return (
    <>
      <Link to={"plan/" + planID}>
        <div className="box-container">
          <div className="imageSection">
            {planimage ? (
              <img
                src={`data:image/png;base64,${planimage}`}
                alt=""
                className="image_fix"
              ></img>
            ) : (
              <img src={basicImg} alt="" className="image_fix" />
            )}
            <div className="tagSection">
              {tag !== undefined && tag !== null && tag !== "" && tag !== {}
                ? `#${tag}`
                : ""}
            </div>
          </div>
          <div className="infoSection">
            <div className="title" style={style}>
              {title}
            </div>
            <div className="cost" style={style}>
              {totalprice}
            </div>
            <div className="date">{period}</div>
            <div className="cost-sort" style={style}>
              <div className="detail-cost" style={style}>
                <img
                  className="cost-image"
                  src={top3Img[0] ? top3Img[0] : ""}
                  alt=""
                  style={style}
                />
                <div className="cost-text" style={style}>
                  {top3Price[0] ? top3Price[0] / 10000 : ""}
                </div>
              </div>
              <div className="detail-cost" style={style}>
                <img
                  className="cost-image"
                  src={top3Img[1] ? top3Img[1] : ""}
                  alt=""
                  style={style}
                />
                <div className="cost-text" style={style}>
                  {top3Price[1] ? top3Price[1] / 10000 : ""}
                </div>
              </div>
              <div className="detail-cost" style={style}>
                <img
                  className="cost-image"
                  src={top3Img[2] ? top3Img[2] : ""}
                  alt=""
                  style={style}
                />
                <div className="cost-text" style={style}>
                  {top3Price[2] ? top3Price[2] / 10000 : ""}
                </div>
              </div>
            </div>
            <div className="rate" style={style}>
              <img className="rate-image" src={star} alt="" style={style} />
              <div className="rate-text" style={style}>
                {rating}
              </div>
            </div>
          </div>
        </div>
      </Link>{" "}
    </>
  );
};

export default Box;
