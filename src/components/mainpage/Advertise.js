import React, { useState, map } from 'react'
import './Advertise.css'
import Product from './Product'
import Pagination from './Pagination'
import { Carousel, Navbar } from 'react-bootstrap'
import Data from './Data'
import axios from 'axios';

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
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="http://placehold.it/1280x294"
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="http://placehold.it/1280x294"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>

    </>
);
}
export default Advertise;