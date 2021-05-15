import React from 'react'
import ContactInfo from './ContactInfo'
import './Contact.css'
import Data from './Data'

export default class Contact extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            contactData: Data
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        this.setState({
            keyword: e.target.value
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
                <input
                    name="keyword"
                    placeholder="Search"
                    value={this.state.keyword}
                    onChange={this.handleChange}
                />

                {/* <div>{mapToComponents(this.state.contactData)}</div> */}
            </div>
        );
    }
}
