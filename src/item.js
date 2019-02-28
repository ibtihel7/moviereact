import React, { Component } from 'react';
class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {item}=this.props
        return ( <div className='item'>
       <h2>{item.title}</h2>
       <p>{item.article}</p>
        </div> );
    }
}
 
export default Item;