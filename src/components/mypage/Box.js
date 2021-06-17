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

  const top3 = [
    { img: flightImg, price: flight },
    { img: shopImg, price: shopping },
    { img: hotelImg, price: hotel },
    { img: trafficImg, price: traffic },
    { img: dishImg, price: dish },
    { img: etcImg, price: etc },
  ].sort(function (a, b) {
    return b.price - a.price;
  });
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
                  {title.length > 6 ? title.substring(0, 5) + "..." : title}
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
                      src={top3[0].price ? top3[0].img : ""}
                      alt=""
                      style={style}
                    />
                    <div className="cost-text" style={style}>
                      {top3[0].price
                        ? Math.round((top3[0].price / 10000) * 10) / 10
                        : ""}
                    </div>
                  </div>
                  <div className="detail-cost" style={style}>
                    <img
                      className="cost-image"
                      src={top3[1].price ? top3[1].img : ""}
                      alt=""
                      style={style}
                    />
                    <div className="cost-text" style={style}>
                      {top3[1].price
                        ? Math.round((top3[1].price / 10000) * 10) / 10
                        : ""}
                    </div>
                  </div>
                  <div className="detail-cost" style={style}>
                    <img
                      className="cost-image"
                      src={top3[2].price ? top3[2].img : ""}
                      alt=""
                      style={style}
                    />
                    <div className="cost-text" style={style}>
                      {top3[2].price
                        ? Math.round((top3[2].price / 10000) * 10) / 10
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
