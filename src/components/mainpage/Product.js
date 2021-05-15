import React, { useState } from 'react'
import './Mainpage.css'
import './Product.css'
import { AiFillStar } from "react-icons/ai";
import { Carousel, Navbar } from 'react-bootstrap';
import { IoAirplaneSharp } from "react-icons/io5";
import { FaBed } from "react-icons/fa";
import { GiForkKnifeSpoon } from "react-icons/gi";
import Pagination from 'react-bootstrap/Pagination'
import Data from './Data'


const Product = (props) => {
    // let [product, product변경] = useState(Data);
    //props로 부모 component의 함수를 가져온다.
    return (
        <>
        <div className="col-md-2">
            <div className="product">
                <div className="product_container">
                    <p><img className="img-full" src="http://placehold.it/200x185" alt="Product Images"/><span className="tag"><span className="tag_text">#{props.product.title}</span></span></p>
                    <div>
                        <div><span className="product_name">&nbsp;{props.product.title}</span><span className="price">&nbsp;{props.product.price}</span></div>
                        <span className="plan">&nbsp;{props.product.day}</span>
                    </div>
                    <div className="icons">
                        <div className="icons_threeof">
                            <div><IoAirplaneSharp color="#bfbfbf"/><span className="plan">25</span></div>
                            <div><FaBed color="#bfbfbf"/><span className="plan">21</span></div>
                            <div><GiForkKnifeSpoon color="#bfbfbf"/><span className="plan">26</span></div>
                        </div>
                        
                        <div className="icons_star"><AiFillStar color="#ef9f00"/> {props.product.mark}&nbsp; </div></div>
                </div>

                <div className="product_Writer_container">
                    <img className="product_Writer_img" src="http://placehold.it/40x40" alt="글쓴이 이미지 Images"/>
                    <span className="product_Writer">엄마는 외계인</span>
                    <span className="product_Writer_day">2021-02-12</span>
                </div>
            </div>
        </div>
        </>
    );
}
export default Product;