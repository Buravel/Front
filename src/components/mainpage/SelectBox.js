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

class SelectBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '0'};

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
            <option value="0">최신순</option>
            <option value="1">오래된순</option>
            <option value="2">낮은가격순</option>
            <option value="3">높은가격순</option>
          </select>
        </label>
        {/* <input type="submit" value="Submit" /> */}
      </form>
    );
  }
}
export default SelectBox;