import React from "react";
import { Link } from "react-router-dom";
import "./box.scss";
import star from "./img/star.png";
import flightImg from "./img/airplane.png";
import hotelImg from "./img/hotel.png";
import dishImg from "./img/food.png";
import trafficImg from "./img/traffic.png";
import shopImg from "./img/shopping.png";
import etcImg from "./img/etc.png";
import basicImg from "./img/basicImg.png";
import stackImg from "./img/stack.png";

const style = { display: "inline-block" };
const Box = ({ box }) => {
  const title = box.planTitle;
  const top3List = box.top3List;
  const getTotalprice = box.totalPrice;
  const totalprice = Math.round((getTotalprice / 10000) * 10) / 10;
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
          <div className="stack">
            <img className="stack-img" alt="" src={stackImg}></img>
            <div className="contentbox">
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
                  {title.length > 8 ? title.substring(0, 7) + "..." : title}
                </div>
                <div className="cost" style={style}>
                  {totalprice}
                  <div className="unit" style={style}>
                    만원
                  </div>
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
                      {top3Price[0]
                        ? Math.round((top3Price[0] / 10000) * 10) / 10
                        : ""}
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
                      {top3Price[1]
                        ? Math.round((top3Price[1] / 10000) * 10) / 10
                        : ""}
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
                      {top3Price[2]
                        ? Math.round((top3Price[2] / 10000) * 10) / 10
                        : ""}
                    </div>
                  </div>
                </div>
                <div className="rate" style={style}>
                  <img className="rate-image" src={star} alt="" style={style} />
                  <div className="rate-text" style={style}>
                    {Number.isInteger(rating) ? rating + ".0" : rating}
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </Link>{" "}
    </>
  );
};

export default Box;
