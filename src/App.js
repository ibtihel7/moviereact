import React, { Component } from 'react';
import Header from './header'
import Liste from './liste'
import './App.css';
const newstab=[{
  
  }]
class App extends Component {
  constructor(props){
    super(props)
    this.state={
   news:newstab ,
   filtred:newstab   
      }
    }
  serach(keyword){
    let filter1=this.state.news.filter((el,i)=>{return el.title.toLocaleLowerCase().indexOf(keyword)>-1})
    this.setState({filtred:filter1})
  }
  render() {
    return (
      <div className="App">
        <Header  searchname={(keyword)=>this.serach(keyword)}/>
        <Liste news={this.state.filtred}/>
      </div>
    );
  }
}

export default App;
