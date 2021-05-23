import React from 'react'
import ContactInfo from './ContactInfo'
import './Contact.css'
import Data from './Data'
import { Dropdown } from 'react-bootstrap'

export default class Contact extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            min: 0,
            max: 0,
            contactData: Data
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        this.setState({
            keyword: e.target.value,
            min: e.target.value,
            max: e.target.value
        });
    }
    render() {
        // const mapToComponents = (data) => {
        //     data.sort();
        //     data = data.filter((contact)=>{
        //         return contact.title.toLowerCase().indexOf(this.state.keyword) > -1;
        //     });
        //     // console.log(Data)

        //     return data.map((contact, i) => {
        //         return (<ContactInfo contact={contact} key={i}/>);
        //     });
        // };
        //cm.없어도 된다고 하심
        return (
            <div className="search-container">
                {/* <h1>Contacts</h1> */}
                <button>
                        <img
                            src="/images/mainpage/search_icon.png"
                            alt="search"
                        />
                </button>
                 <form action="search.jsp" method="get">
                    <input className="for_search"
                        name="keyword"
                        placeholder="Search"
                        value={this.state.keyword}
                        onChange={this.handleChange}
                    />
                    <label for="fname">First Name</label>
                    <input type="text" id="fname"  name="keyword"
                        placeholder="Search"
                        value={this.state.keyword}
                        onChange={this.handleChange}/>
                    <label for="lname">Last Name</label>
                    <input type="text" id="lname"  name="keyword"
                        placeholder="Search"
                        value={this.state.keyword}
                        onChange={this.handleChange}></input>
                </form>
                {/* <div>{mapToComponents(this.state.contactData)}</div> */}
                
                {/* <div className="dropdown">
                    <label for="toggle_button" class="toggle_button">금액검색</label>
                    <input type="checkbox" id="toggle_button"/>
                    
                    <div id="toggle_contents">
                    <span className="dropdown-content-text">금액검색</span>
                    <form action="search.jsp" method="get">
                        <input className="for_pricesearch1"
                            name="min"
                            placeholder="최소금액"
                            value={this.state.min}
                            onChange={this.handleChange}
                        />
                        <span className="fromto">~</span> 
                        <input className="for_pricesearch2"
                            name="max"
                            placeholder="최대금액"
                            value={this.state.max}
                            onChange={this.handleChange}
                        />
                        <input className="for_pricesearch_button" type="submit" value="검색"></input>
                        </form>
                        <label for="toggle_button" class="close_button"><img src="/images/mainpage/x.png" srcset="img/food@2x.png 2x,img/food@3x.png 3x"class="x"/></label>
                </div> */}

                    {/* <button className="dropbtn">금액검색</button>
                    <div className="dropdown-content">
                        <span className="dropdown-content-text">금액검색</span>
                        <input className="for_pricesearch1"
                            name="keyword"
                            placeholder="최소금액"
                            value={this.state.keyword}
                            onChange={this.handleChange}
                        />
                        <span className="fromto">~</span> 
                        <input className="for_pricesearch2"
                            name="keyword"
                            placeholder="최대금액"
                            value={this.state.keyword}
                            onChange={this.handleChange}
                        />

                        <input className="for_pricesearch_button" type="submit" value="검색"></input>
                        <span className="text">만원</span> 

                        
                
                    </div> */}
                {/* </div> */}

            </div>
        );
    }
}
