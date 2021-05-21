import React, { useState, map } from 'react'
import './After_topBar.css'
import Product from './Product'
import Pagination from './Pagination'
import Advertise from './Advertise'
import SelectBox from './SelectBox';

import { Carousel, Navbar } from 'react-bootstrap'
import Data from './Data'
import axios from 'axios';

const Footer = () => {
    return (
        <>
        <div className = "footer">
            <span className = "footer_icon"><img src="/images/mainpage/footer_icon.png" srcset="img/food@2x.png 2x,img/food@3x.png 3x"class="footer_icon"/></span>
            <span className = "footer_text1">이용약관</span>
            <span className = "footer_text2">개인정보 처리방침</span>
            <span className = "footer_text3">고객센터</span>
            <span className = "footer_text4">© 2021 buravel, Inc. All rights reserved.</span>
        </div>
        </>
        );
}
export default Footer;