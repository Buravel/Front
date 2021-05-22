import React, { useState, map } from 'react'
import './Topbar.css'
import Product from './Product'
import Pagination from './Pagination'
import Advertise from './Advertise'
import SelectBox from './SelectBox'

import { Carousel, Navbar } from 'react-bootstrap'
import Data from './Data'
import axios from 'axios';

const Topbar = () => {
    return ( 
        <>
        
        <span className = "topbar-title">다른 사람들의 여행을 둘러보세요</span>
        <span className = "product-topbar"><SelectBox/></span>
        
       </>
    );
}
    export default Topbar;