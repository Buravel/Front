import React, { useState, map } from 'react'
import './Advertise.css'
import { Carousel, Navbar } from 'react-bootstrap'

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
}
export default Advertise;