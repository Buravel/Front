import React /* useState, map */ from 'react';
import './After_Topnav.scss';
import './Mainpage.scss';
// import Product from './Product';
// import Pagination from './Pagination';
// import Advertise from './Advertise';

// import { Carousel, Navbar } from 'react-bootstrap';
// import Data from './Data';
// import axios from 'axios';

const After_Topnav = () => {
    // let [product, product변경] = useState(Data);

    return (
        <>
            <div className="after_topbar">
                <span className="after_topbar1_1">지수님의 예정된 여행</span>
                <span className="after_topbar1_2">2021년 5월 17일</span>
                <span className="after_topbar1_3"></span>

                <span className="after_topbar2_1">위치</span>
                <span className="after_topbar2_2">강릉</span>
                <span className="after_topbar2_3"></span>

                <span className="after_topbar3_1">예산</span>
                <span className="after_topbar3_2">58만원</span>
                <span className="after_topbar3_3"></span>

                <span className="after_topbar4_1">예산상세</span>
                <span className="after_topbar4_2">
                    <img
                        src="/images/mainpage/bus.png"
                        srcset="img/food@2x.png 2x,img/food@3x.png 3x"
                        class="food"
                        alt="bus"
                    />
                    20 &nbsp;&nbsp;
                    <img
                        src="/images/mainpage/plane.png"
                        srcset="img/food@2x.png 2x,img/food@3x.png 3x"
                        class="food"
                        alt="plane"
                    />
                    12 &nbsp;&nbsp;
                    <img
                        src="/images/mainpage/food.png"
                        srcset="img/food@2x.png 2x,img/food@3x.png 3x"
                        class="food"
                        alt="food"
                    />
                    30 &nbsp;&nbsp;
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
