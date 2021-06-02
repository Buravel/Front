import React, { useState, useEffect } from "react";
import "./Mainpage_afterlogin.scss";
import Product from "./Product";
import Advertise from "./Advertise";
import After_Topnav from "./After_Topnav";
import After_topBar from "./After_topBar";
import Data from "./Data";
import axios from "axios";

// import Pagination from './Pagination';
// import Topbar from './Topbar';
// import { Carousel, Navbar } from 'react-bootstrap';
const Mainpage_afterlogin = () => {
  let [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://34.64.93.115/plans")
      .then((result) => {
        const data = result.data._embedded.planResponseDtoList;
        setProduct([...product, ...data]);
        // console.log(data);
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
      <div className="topbar">
        <After_Topnav product={product[0]} />
      </div>

      <div className="afterlogin-main-background">
        <div className="advertise">
          <Advertise />
        </div>

        <div className="After_topbar">
          <After_topBar product={product.length} />
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
export default Mainpage_afterlogin;
