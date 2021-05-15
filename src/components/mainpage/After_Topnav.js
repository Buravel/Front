import React, { useState, map } from 'react'
import './After_Topnav.css'
import './Mainpage.css'
import Product from './Product'
import Pagination from './Pagination'
import Advertise from './Advertise'

import { Carousel, Navbar } from 'react-bootstrap'
import Data from './Data'
import axios from 'axios';

const After_Topnav = () => {

    let [product, product변경] = useState(Data);
    
    return (
        <>
         <div className="after_topbar">
            <ul>
                <li><span>~님의 예정된 여행</span> </li>
                <li><span>위치</span> </li>
                <li><span>예산</span> </li>
                <li><span>예산상세</span> </li>
            </ul>
            {/* <div className="after_topbar_container">
                    <span className="after_topbar_name">지수님의 예정된 여행</span>
                    <span className="after_topbar_plan">2021-02-12</span>
            </div> */}
         </div>
        </>
    );
}
export default After_Topnav;
