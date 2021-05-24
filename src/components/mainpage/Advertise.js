import React /*useState, map*/ from "react";
// import './Advertise.scss';
import { Carousel /*Navbar*/ } from "react-bootstrap";
// import Product from './Product';
// import Pagination from './Pagination';
// import Data from './Data';
// import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";

const Advertise = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://placehold.it/1280x294"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://placehold.it/1280x294"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://placehold.it/1280x294"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default Advertise;
