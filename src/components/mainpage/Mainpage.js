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
    let [product, setProduct] = useState(Data);
    //한글 지양

    //페이지 열자마자 정보 가져오기.
    useEffect(()=>{
        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((result)=>{   setProduct([...product, ...result.data ])   })
        .catch(()=>{ console.log('err')})
    },[])

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

                    <div className="btn">
                        <button
                            onClick={() => {
                                axios
                                    .get(
                                        'https://codingapple1.github.io/shop/data2.json',
                                    )
                                    .then((result) => {
                                        setProduct([
                                            ...product,
                                            ...result.data,
                                        ]);
                                    })
                                    .catch(() => {});
                            }}
                        >
                            더보기
                        </button>
                    </div>
                    {/* axios를 시험하기 위한 버튼입니다. */}
                </div>                
                <div className = "btn">
                <button onClick={()=>{
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{   setProduct([...product, ...result.data ])   })
            .catch(()=>{ console.log('err')})
            }}>더보기</button>
            </div>
            {/* axios를 시험하기 위한 버튼입니다. */}
            </div>
        </>
    );
};
export default Mainpage;
