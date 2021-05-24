import React, { useState, useEffect } from 'react';
// import './Mainpage.scss';
import './Product.scss';
import axios from 'axios';
import { getNight, splitDate } from '../../util/date';


const Product = (props) => {
    // let [product, product변경] = useState(Data);
    //props로 부모 component의 함수를 가져온다.
    const [posts, setPosts] = useState([]);
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setError] = useState(null);

    let [product, setProduct] = useState([]);

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         try{
    //             setError(null);
    //             setPosts(null);
    //             setLoading(true);
    //             const result = await axios.get('http://34.64.93.115/index/search?keyword=&min=0&max=0');
    //             // setProduct([...product, ...result.data ])
    //             console.log(result);
    //         } catch (e) {
    //             setError(e);
    //         }
    //     setLoading(false);
    //     };
    //     fetchPosts();

    //   }, []);

    if (!posts) return null;
    
    console.log(props);


    const postTerm = posts.postForPlanResponseDtos;
    const postId = postTerm && postTerm.filter((k) => k.id === props.id);
    const category = postId && postId.map((k) => k.category)[0];

    const planImage = props.product.planImage;
    const outputPlanTotalPrice = props.product.outputPlanTotalPrice;

    const hotelprice = props.product.hotelTotalPrice;
    const trafficprice = props.product.flightTotalPrice;
    const shoppingprice = props.product.etcTotalPrice;

    const postTitle = props.product.planTitle;
    const planTagTitle = props.product.planTagResponseDtos[0].planTagTitle;

    const planRating = props.product.planRating;
    const hashTag = postId && postId.map((k) => k.postTagResponseDtoList);
    const tags = hashTag && hashTag.map((k) => k).length;

    const [sY, sM, sD] = splitDate(props.product.startDate.split("-").join(""));
    const [eY, eM, eD] = splitDate(props.product.endDate.split("-").join(""));
    const night = getNight(`${sY}-${sM}-${sD}`, `${eY}-${eM}-${eD}`);

    const day = night + 1;
    console.log(night);

    // const tagsArray = [];
    // for (let i = 0; i <= tags; i++) {
    //     tagsArray.push(hashTag && hashTag.map((k) => k[i].postTagTitle));
    // }
    // const K = [];
    // for (let i = 0; i < tagsArray.length - 1; i++) {
    //     K.push(tagsArray && tagsArray.map((k) => k[i]));
    // }
    // const tagTitle = K[0];
    // // console.log(tagTitle);

    return (
        <>
            <div className="product-shadowbox">
                <div className="col-xs-2">
                <div className="product_img"><img className="img-full" src={planImage} alt="Product Images"/><div className="tag"><span className="tag_text">#{planTagTitle}</span></div></div>
                        
                        <div className="product_topline"><span className="product_name">&nbsp;{postTitle}</span><span className="price">&nbsp;{outputPlanTotalPrice}</span></div>
                        <div className="plan"><span className="plan_text">&nbsp;</span></div>
                        <div className="product_box">
                            <span className="icon"><img src="/images/mainpage/plane_product.png" srcset="img/food@2x.png 2x,img/food@3x.png 3x"class="plane"/></span>
                            <span className="plan">{trafficprice}</span>
                        
                            <span className="icon"><img src="/images/mainpage/hotel_product.png" srcset="img/food@2x.png 2x,img/food@3x.png 3x"class="hotel"/></span>
                            <span className="plan">{hotelprice}</span>
                        
                            <span className="icon"><img src="/images/mainpage/food_product.png" srcset="img/food@2x.png 2x,img/food@3x.png 3x"class="food"/></span>
                            <span className="plan">{shoppingprice}</span>
                            &nbsp;
                            &nbsp;
                            <span className="icon"><img src="/images/mainpage/star.png" srcset="img/food@2x.png 2x,img/food@3x.png 3x"class="star"/></span>
                            <span className="plan plan_star">{planRating}&nbsp; </span>
                </div>
            </div>
        </div>
        </>
    );
};
export default Product;
