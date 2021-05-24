import React, { useState,useEffect } from 'react'
import './Product.scss'
import { AiFillStar } from "react-icons/ai";
import { Carousel, Navbar } from 'react-bootstrap';
import { IoAirplaneSharp } from "react-icons/io5";
import { FaBed } from "react-icons/fa";
import { GiForkKnifeSpoon } from "react-icons/gi";
import Pagination from 'react-bootstrap/Pagination'
import axios from 'axios';

const Product = (props) => {
    // let [product, product변경] = useState(Data);
    //props로 부모 component의 함수를 가져온다.
    const[posts, setPosts] = useState([]);
    const[info, setInfo] = useState([]);
    const[loading,setLoading] = useState(false);
    const[err,setError] = useState(null);

    let [product, setProduct] = useState(Data);

    useEffect(() => {
        const fetchPosts = async () => {
            try{
                setError(null);
                setPost(null);
                setLoading(true);
                const response = await axios.get('http://34.64.93.115/plans/');
                setProduct([...product, ...result.data ])
            } catch (e) {
                setError(e);
            }
        setLoading(false);
        };
        fetchPosts();

      }, []);

      if (!posts) return null;

      const togglePopup = () => {
        setIsOpen(!isOpen);
      };
      const toggleBmarkPopup = () => {
        setBmarkisOpen(!isbmarkOpen);
      };
      const postTerm = posts.postForPlanResponseDtos;
      const postId = postTerm && postTerm.filter((k) => k.id === props.id);
      const category = postId && postId.map((k) => k.category)[0];
      const postImg = postId && postId.map((k) => k.postImage)[0];
      const outputPlanTotalPrice = postId && postId.map((k) => k.outputPlanTotalPrice)[0];

      const hotelprice = postId && postId.map((k) => k.hotelprice)[0];
      const trafficprice = postId && postId.map((k) => k.trafficprice)[0];
      const shoppingprice = postId && postId.map((k) => k.shoppingprice)[0];

      const postTitle = postId && postId.map((k) => k.postTitle)[0];
      const rating = postId && postId.map((k) => k.rating)[0];
      const hashTag = postId && postId.map((k) => k.postTagResponseDtoList);
      const tags = hashTag && hashTag.map((k) => k).length;

      const tagsArray = [];
      for (let i = 0; i <= tags; i++) {
        tagsArray.push(hashTag && hashTag.map((k) => k[i].postTagTitle));
      }
      const K = [];
      for (let i = 0; i < tagsArray.length - 1; i++) {
        K.push(tagsArray && tagsArray.map((k) => k[i]));
      }
      const tagTitle = K[0];
      console.log(tagTitle);

    return (
        <>
        <div className="shadowbox">
            <div className="col-xs-2">
                <p className="product_img"><img className="img-full" src={postImg} alt="Product Images"/><div className="tag"><span className="tag_text">#{category}</span></div></p>
                        
                <div className="product_topline"><span className="product_name">&nbsp;{postTitle}</span><span className="price">&nbsp;{outputPlanTotalPrice}</span></div>
                <div className="plan"><span className="plan_text">&nbsp;  ({Math.max.apply(null,postTerm && postTerm.map((item, i) => item.day))}
                박{" "}{Math.max.apply(null,postTerm && postTerm.map((item, i) => item.day)) + 1}일)</span></div>
                <div className="product_box">
                    <span className="icon"><img src="/images/mainpage/plane_product.png" srcset="img/food@2x.png 2x,img/food@3x.png 3x"class="plane"/></span>
                    <span className="plan">{String(posts.flightTotalPrice).substr(0,String(posts.flightTotalPrice).length - 4)}</span>
                
                    <span className="icon"><img src="/images/mainpage/hotel_product.png" srcset="img/food@2x.png 2x,img/food@3x.png 3x"class="hotel"/></span>
                    <span className="plan"> {String(posts.hotelTotalPrice).substr(0,String(posts.hotelTotalPrice).length - 4)}</span>
                
                    <span className="icon"><img src="/images/mainpage/food_product.png" srcset="img/food@2x.png 2x,img/food@3x.png 3x"class="food"/></span>
                    <span className="plan">{String(posts.dishTotalPrice).substr(0,String(posts.dishTotalPrice).length - 4)}</span>
                    &nbsp;
                    &nbsp;
                    <span className="icon"><img src="/images/mainpage/star.png" srcset="img/food@2x.png 2x,img/food@3x.png 3x"class="star"/></span>
                    <span className="plan plan_star">{rating}&nbsp; </span>

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