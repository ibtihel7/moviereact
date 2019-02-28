import React from 'react';
import Item from './item'
const Liste=({news})=>{
    return(<div>
        {news.map((el,index)=>{return<Item  key={index}  item={el}  />})}
    </div>)
}
export default Liste
