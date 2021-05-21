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
        <div className="shadowbox">
            <div className="col-xs-2">
                <p className="product_img"><img className="img-full" src="http://placehold.it/200x185" alt="Product Images"/><div className="tag"><span className="tag_text">#{props.product.title}</span></div></p>
                        
                <div className="product_topline"><span className="product_name">&nbsp;{props.product.title}</span><span className="price">&nbsp;{props.product.price}</span></div>
                <div className="plan"><span className="plan_text">&nbsp;{props.product.day}</span></div>
                
                <div className="product_box">
                    <span className="icon"><img src="/images/mainpage/plane_product.png" srcset="img/food@2x.png 2x,img/food@3x.png 3x"class="plane"/></span>
                    <span className="plan">{props.product.icon}</span>
                
                    <span className="icon"><img src="/images/mainpage/hotel_product.png" srcset="img/food@2x.png 2x,img/food@3x.png 3x"class="hotel"/></span>
                    <span className="plan">{props.product.icon}</span>
                
                    <span className="icon"><img src="/images/mainpage/food_product.png" srcset="img/food@2x.png 2x,img/food@3x.png 3x"class="food"/></span>
                    <span className="plan">{props.product.icon}</span>
                    &nbsp;
                    &nbsp;
                    <span className="icon"><img src="/images/mainpage/star.png" srcset="img/food@2x.png 2x,img/food@3x.png 3x"class="star"/></span>
                    <span className="plan plan_star">{props.product.mark}&nbsp; </span>

                </div>
            </div>
           

            {/*사용자 표시 박스 디자이너님 삭제........혹시 모르니까 일단 냅둬
            <div className="product_Writer_container">
                <img className="product_Writer_img" src="http://placehold.it/40x40" alt="글쓴이 이미지 Images"/>
                <span className="product_Writer">엄마는 외계인</span>
                <span className="product_Writer_day">2021-02-12</span>
            </div> */}


        </div>
        </>
    );
}
export default Product;