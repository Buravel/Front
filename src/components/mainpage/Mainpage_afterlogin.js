import React, { useState /* map*/ } from 'react';
import './Mainpage_afterlogin.scss';
import Product from './Product';
import Advertise from './Advertise';
import After_Topnav from './After_Topnav';
import After_topBar from './After_topBar';
import Data from './Data';
import axios from 'axios';
// import Pagination from './Pagination';
// import Topbar from './Topbar';
// import { Carousel, Navbar } from 'react-bootstrap';

// 로그인 전과 후는 라우팅으로 구성해주면 될 듯
const Mainpage_afterlogin = (props) => {

    let [product, setProduct] = useState(Data);

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
            <div className="topbar">
                <After_Topnav />
            </div>

            <div className="afterlogin-main-background">
                <div className="advertise">
                    <Advertise />
                </div>

                <div className="After_topbar">
                    <After_topBar />
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
                            className="btn"
                            onClick={() => {
                                axios
                                    .get(
                                        'https://codingapple1.github.io/shop/data2.json',
                                    )
                                    .then((result) => {
                                        product변경([
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
                <button className="btn" onClick={()=>{
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{  setProduct([...product, ...result.data ])   })
            .catch(()=>{ })
            }}>더보기</button></div>
            {/* axios를 시험하기 위한 버튼입니다. */}
            </div>
        </>
    );
};
export default Mainpage_afterlogin;
