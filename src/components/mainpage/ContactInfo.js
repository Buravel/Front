import React from 'react'

export default class ContactInfo extends React.Component {
    render() {
        return(
            <div>{this.props.contact.title} {this.props.contact.day}</div>
        )
    }
}

 //cm.없어도 된다고 하심(안씀.)