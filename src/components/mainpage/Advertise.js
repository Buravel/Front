import React /*useState, map*/ from "react";
import "./Advertise.scss";
import { Carousel /*Navbar*/ } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const Advertise = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/mainpage/ad1.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/mainpage/ad2.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/mainpage/ad3.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default Advertise;
