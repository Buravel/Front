import React, { useState, map } from 'react'
import './Topbar.css'
import './Mainpage.css'
import Product from './Product'
import Pagination from './Pagination'
import Advertise from './Advertise'

import { Carousel, Navbar } from 'react-bootstrap'
import Data from './Data'
import axios from 'axios';

const After_topBar = () => {
    return ( 
        <>
        <span className = "topbar-title">최신작성글(??)</span>
        <span className="product-topbar">
            <select id = "selectbox"> 
                <option selected>최신순</option> 
                <option>옵션1</option> 
                <option>옵션2</option> 
                <option>옵션3</option> 
            </select>
        </span>
        </>
    );
}
    export default After_topBar;