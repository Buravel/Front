import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './After_Topnav.scss';

const After_Topnav = (props) => {
    // let [product, product변경] = useState(Data);
    let [topnav, setTopnav] = useState([]);

    const [posts, setPosts] = useState([]);
    if (!posts) return null;

    console.log(props);

    // const hotelprice = props.topnav.hotelTotalPrice;
    // const flightTotalPrice = props.topnav.flightTotalPrice;
    // const dishTotalPrice = props.topnav.dishTotalPrice;
    // const trafficprice = props.topnav.trafficprice;
    // const outputPlanTotalPrice = props.topnav.outputPlanTotalPrice;


    return (
        <>
            <div className="after_topbar">
                <span className="after_topbar1_1">지수님의 예정된 여행</span>
                <span className="after_topbar1_2">{/*{Year}년 {Month}월 {Day}일*/}</span>
                <span className="after_topbar1_3"></span>

                <span className="after_topbar2_1">위치</span>
                <span className="after_topbar2_2">강릉</span>
                <span className="after_topbar2_3"></span>

                <span className="after_topbar3_1">예산</span>
                <span className="after_topbar3_2">{/*outputPlanTotalPrice*/}</span>
                <span className="after_topbar3_3"></span>

                <span className="after_topbar4_1">예산상세</span>
                <span className="after_topbar4_2">
                    <img
                        src="/images/mainpage/bus.png"
                        srcset="img/food@2x.png 2x,img/food@3x.png 3x"
                        class="food"
                        alt="bus"
                    />
                    {/*trafficprice*/} &nbsp;&nbsp;
                    <img
                        src="/images/mainpage/plane.png"
                        srcset="img/food@2x.png 2x,img/food@3x.png 3x"
                        class="food"
                        alt="plane"
                    />
                    {/*flightTotalPrice*/} &nbsp;&nbsp;
                    <img
                        src="/images/mainpage/food.png"
                        srcset="img/food@2x.png 2x,img/food@3x.png 3x"
                        class="food"
                        alt="food"
                    />
                    {/*dishTotalPrice*/} &nbsp;&nbsp;
                    <img
                        src="/images/mainpage/dot.png"
                        srcset="img/food@2x.png 2x,img/food@3x.png 3x"
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
