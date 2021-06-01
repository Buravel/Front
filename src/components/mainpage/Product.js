import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import './Mainpage.scss';
import "./Product.scss";
import axios from "axios";
import { getNight, splitDate } from "../../util/date";

const Product = (props) => {
  // let [product, product변경] = useState(Data);
  //props로 부모 component의 함수를 가져온다.
  const [posts, setPosts] = useState([]);
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(null);

  let [product, setProduct] = useState([]);

  if (!props.product) return null;

  // console.log(props);

  const postTerm = posts.postForPlanResponseDtos;
  const postId = postTerm && postTerm.filter((k) => k.id === props.id);
  const category = postId && postId.map((k) => k.category)[0];

  const planImage = props.product.planImage;

  const outputPlanTotalPrice = props.product.outputPlanTotalPrice;

  const hotelprice = parseInt(props.product.hotelTotalPrice / 1000);
  const trafficprice = parseInt(props.product.flightTotalPrice / 1000);
  const shoppingprice = parseInt(props.product.etcTotalPrice / 1000);

  const postTitle = props.product.planTitle;
  const planTagTitle = props.product.planTagResponseDtos[0].planTagTitle;

  const planRating = props.product.planRating;
  const hashTag = postId && postId.map((k) => k.postTagResponseDtoList);
  const tags = hashTag && hashTag.map((k) => k).length;

  const [sY, sM, sD] = splitDate(props.product.startDate.split("-").join(""));
  const [eY, eM, eD] = splitDate(props.product.endDate.split("-").join(""));
  const night = getNight(`${sY}-${sM}-${sD}`, `${eY}-${eM}-${eD}`);

  const day = night + 1;
  // console.log(night);

  const planId = props.product.id;

  // function toplan(e) {
  //     window.location.href => 원래 온클릭이벤트 줄려고 했는데 그냥 Link아예 걺
  // } //product박스 클릭시 해당 포스트plan페이지로
  //http://placehold.it/230x160

  // src={`data:image/png;base64,${planImage}`} 나중에 잇기(지금 이미지가 없어,,)
  return (
    <>
      <div className="product-shadowbox">
        <Link to={`/plans/${planId}`}>
            <div className="col-xs-2">
              <div className="product_img">
                {planImage ? (<img src={`data:image/png;base64,${planImage}`}/>) : (<img
                  className="img-full"
                  src="http://placehold.it/200x185"
                  alt="Product Images"
                />)}

                {/* {planImage !== "" && planImage !== undefined && (<img src={`data:image/png;base64,${planImage}`}/>)} */}
                <span className="tag">
                  &nbsp;#{planTagTitle}&nbsp;
                </span>
              </div>
              <div className="product_topline">
                <span className="product_name">&nbsp;{postTitle}</span>
                <span className="price">&nbsp;{outputPlanTotalPrice}</span>
              </div>
              <div className="plan">
                <span className="plan_text">
                  &nbsp;{night}박{day}일
                </span>
              </div>
              <div className="product_box">
                <span className="icon">
                  <img src="/images/mainpage/plane_product.png" alt="" />
                </span>
                <span className="plan">{trafficprice}</span>
                <span className="icon">
                  <img src="/images/mainpage/hotel_product.png" alt="" />
                </span>
                <span className="plan">{hotelprice}</span>
                <span className="icon">
                  <img src="/images/mainpage/food_product.png" alt="" />
                </span>
                <span className="plan">{shoppingprice}</span>
                <span className="star">
                  <span className="icon">
                    <img src="/images/mainpage/star.png" alt="" />
                  </span>
                  <span className="plan plan_star">{planRating}&nbsp; </span>
                </span>
              </div>
              <div className="stackimg"><img  src= "/images/mainpage/stack.png"/></div>
            </div>
        </Link>
      </div>
    </>
  );
};
export default Product;
