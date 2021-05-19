import React from 'react'
import './Pagination.css'
import './Mainpage.css'
import Product from './Product'
import { AiFillStar } from "react-icons/ai";
import { Carousel, Navbar } from 'react-bootstrap';
import { IoAirplaneSharp } from "react-icons/io5";
import { FaBed } from "react-icons/fa";
import { GiForkKnifeSpoon } from "react-icons/gi";


const Pagination = () => {
  return (
    <>
        <span className="pagination">
            <a href="#">&laquo;</a>
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
            <a href="#">&raquo;</a>
        </span>
        {/* <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item disabled>{3}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Next />
            <Pagination.Last />
        </Pagination> */}
    </>
  );
}

export default Pagination;
