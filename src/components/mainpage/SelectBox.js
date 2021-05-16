import React, { useState, map } from 'react'
import './Mainpage.css'
import './SelectBox.css'
import Product from './Product'
import Pagination from './Pagination'
import Advertise from './Advertise'
import Topbar from './Topbar'

import { Carousel, Navbar } from 'react-bootstrap'
import Data from './Data'
import axios from 'axios';

class selectBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'by_latest'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  } 

  handleSubmit(event) {
    alert('확인용' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="by_latest">최신순</option>
            <option value="by_price">가격순</option>
            <option value="by_star">별점순</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        {/* <input type="submit" value="Submit" /> */}
      </form>
    );
  }
}
export default selectBox;