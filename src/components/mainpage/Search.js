import React, { useState, map } from 'react'
import './Mainpage.css'
import Product from './Product'
import Pagination from './Pagination'
import Advertise from './Advertise'
import Topbar from './Topbar'

import { Carousel, Navbar } from 'react-bootstrap'
import Data from './Data'
import axios from 'axios';

// 로그인 전과 후는 라우팅으로 구성해주면 될 듯
const Search = () => {

    let [product, product변경] = useState(Data);
    
    return (
        <>
        <Navbar bg="light">
            <Navbar.Brand href="#home">Header</Navbar.Brand>
        </Navbar>

        <body className="main_background">
            <div>
                <Topbar/>
            </div>

            <div className="container">
                <div className="row">
                    {
                        product.map((a,i) => {
                            return <Product product={product[i]} key={i}/>
                        })
                    }
                        {/* <Product product={product[0]}/>
                        <Product product={product[1]}/>
                        <Product product={product[2]}/>
                        <Product product={product[3]}/>
                        <Product product={product[4]}/> */}
                </div>
                <div className = "btn">
                <button className="btn" onClick={()=>{
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{   product변경([...product, ...result.data ])   })
            .catch(()=>{ })
            }}>더보기</button></div>
            {/* axios를 시험하기 위한 버튼입니다. */}
            </div>
        

            <div className="footer">
            <Pagination/>
            </div>
    </body>
        </>
    );
}
export default Search;