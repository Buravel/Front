import React, { useState, useEffect } from 'react';
import './Search.scss';
import Product from './Product';
import Pagination from './Pagination';
// import Advertise from './Advertise';
import Search_topbar from './Search_topbar';

import { /*Carousel,*/ Navbar } from 'react-bootstrap';
import Data from './Data';
import axios from 'axios';

// 로그인 전과 후는 라우팅으로 구성해주면 될 듯
const Search = () => {
    let [product, setProduct] = useState([]);
    //페이지 열자마자 정보 가져오기.
    useEffect(() => {
        axios
            .get('http://34.64.93.115/index/search?keyword=&min=0&max=0')
            .then((result) => {
                const data = result.data._embedded.planResponseDtoList;
                setProduct([...product, ...data]);
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    if (!product) return null;
    return (
        <>
            
            <div className="search-main_background">
                <div>
                    <Search_topbar product={product.length}/>
                </div>

                <div className="container">
                    <div className="row">
                        {product.map((a, i) => {
                            return <Product product={product[i]} key={i} />;
                        })}
                        {/* <Product product={product[0]}/>
                        <Product product={product[1]}/>
                        <Product product={product[2]}/>
                        <Product product={product[3]}/>
                        <Product product={product[4]}/> */}
                    </div>
                </div>
            </div>
        </>
    );
};
export default Search;
