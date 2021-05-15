import React, { useState, map } from 'react'
import './Topbar.css'
import './Mainpage.css'
import Product from './Product'
import Pagination from './Pagination'
import Advertise from './Advertise'
import SelectBox from './SelectBox'
import { Carousel, Navbar } from 'react-bootstrap'
import Data from './Data'
import Demo from './demo';
import axios from 'axios';

const Topbar = () => {
    return ( 
        <>
        <span className = "topbar-title">다른 사람들의 여행을 둘러보세요</span>
        <Demo/>
        </>
    );
}
    export default Topbar;