import React, { useState, useEffect } from 'react';
import './Mainpage.scss';
import Product from './Product';
import Advertise from './Advertise';
import Topbar from './Topbar';
import Data from './Data';
import axios from 'axios';

// import { Carousel, Navbar } from 'react-bootstrap';
// import Pagination from './Pagination';

// 로그인 전과 후는 라우팅으로 구성해주면 될 듯
const Mainpage = () => {
    let [product, setProduct] = useState([]);
    //한글 지양

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
            {/* <Navbar bg="light">
            <Navbar.Brand href="#home">Header</Navbar.Brand>
        </Navbar> */}

            <div className="mainpage-main_background">
                <div className="advertise">
                    <Advertise />
                </div>

                <div className="topbar">
                    <Topbar />
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
export default Mainpage;
