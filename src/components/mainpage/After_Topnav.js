import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './After_Topnav.scss';
import { getNight, splitDate } from '../../util/date';

const After_Topnav = (props) => {
    // let [product, product변경] = useState(Data);
    // let [product, product변경] = useState(Data);
    //props로 부모 component의 함수를 가져온다.
    // const [posts, setPosts] = useState([]);
    // const [info, setInfo] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [err, setError] = useState(null);

    // let [product, setProduct] = useState([]);

    if (!props.product) return null;

    console.log(props);

    // const postTerm = posts.postForPlanResponseDtos;
    // const postId = postTerm && postTerm.filter((k) => k.id === props.id);
    // const category = postId && postId.map((k) => k.category)[0];

    // const planImage = props.product.planImage;
    const outputPlanTotalPrice = props.product.outputPlanTotalPrice;

    // const hotelprice = props.product.hotelTotalPrice;
    const flightTotalPrice = parseInt(props.product.flightTotalPrice/ 1000);
    const dishTotalPrice = parseInt(props.product.dishTotalPricee/ 1000);
    const trafficTotalPrice = parseInt(props.product.trafficTotalPrice/ 1000);
    const planTagTitle = parseInt(props.product.planTagResponseDtos[0].planTagTitle/ 1000);
    const username = props.product.accountResponseDto.username;


    const Date = String(props.product.startDate).split("-");
    const Year = Date[0];
    const Month = Date[1];
    const Day = Date[2];

    const planTitle = props.product.planTitle;
    // const planTagTitle = props.product.planTagResponseDtos[0].planTagTitle;

    // const planRating = props.product.planRating;
    // const hashTag = postId && postId.map((k) => k.postTagResponseDtoList);
    // const tags = hashTag && hashTag.map((k) => k).length;

    //  const [sY, sM, sD] = splitDate(props.product[0].startDate.split("-").join(""));
    //  const Year = (`${sY}`);
    //  const Month = (`${sM}`)
    //  const Day = (`${sD}`)

    //  const [eY, eM, eD] = splitDate(props.product[0].endDate.split("-").join(""));
    //  const night = getNight(`${sY}-${sM}-${sD}`, `${eY}-${eM}-${eD}`);

    // const day = night + 1;
    // console.log(night);
    return (
        <>
            <div className="after_topbar">
                <span className="after_topbar1_1">{username}님의 예정된 여행</span>
                <span className="after_topbar1_2">
                    {Year}년 {Month}월 {Day}일
                </span>
                <span className="after_topbar1_3"></span>

                <span className="after_topbar2_1">위치</span>
                <span className="after_topbar2_2">{planTitle}</span>
                <span className="after_topbar2_3"></span>

                <span className="after_topbar3_1">예산</span>
                <span className="after_topbar3_2">{outputPlanTotalPrice}</span>
                <span className="after_topbar3_3"></span>

                <span className="after_topbar4_1">예산상세</span>
                <span className="after_topbar4_2">
                    <img
                        src="/images/mainpage/bus.png"
                        /*srcset="img/food@2x.png 2x,img/food@3x.png 3x"*/
                        class="food"
                        alt="bus"
                    />
                    {trafficTotalPrice} &nbsp;&nbsp;
                    <img
                        src="/images/mainpage/plane.png"
                        /*srcset="img/food@2x.png 2x,img/food@3x.png 3x"*/
                        class="food"
                        alt="plane"
                    />
                    {flightTotalPrice} &nbsp;&nbsp;
                    <img
                        src="/images/mainpage/food.png"
                        /*srcset="img/food@2x.png 2x,img/food@3x.png 3x"*/
                        class="food"
                        alt="food"
                    />
                    {dishTotalPrice} &nbsp;&nbsp;
                    <img
                        src="/images/mainpage/dot.png"
                        /*srcset="img/food@2x.png 2x,img/food@3x.png 3x"*/
                        class="food"
                        alt="dot"
                    />
                </span>
                <span className="after_topbar4_3"></span>
            </div>
        </>
    );
};
export default After_Topnav;
