import React, { useState, map } from 'react'
import './After_topBar.css'
import Product from './Product'
import Pagination from './Pagination'
import Advertise from './Advertise'
import SelectBox from './SelectBox';

import { Carousel, Navbar } from 'react-bootstrap'
import Data from './Data'
import axios from 'axios';

const After_topBar = () => {
    return ( 
        <>
        <div className="tobar">
            <span className = "topbar-title">최신작성글(??)</span>
            <span className="product-topbar"><SelectBox/></span>
        </div>
        </>
    );
}
    export default After_topBar;