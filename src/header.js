import React, { Component } from 'react';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            keyword:''
         }
    }
handelchange=(event)=>{
    this.setState({keyword:event.target.value})
    this.props.searchname(event.target.value)
}
    render() { 
        return ( <div className='header-container'>
<h1>Search</h1>
<input type='text' onChange={this.handelchange} />
{this.state.keyword}
        </div> );
    }
}
export default Header  