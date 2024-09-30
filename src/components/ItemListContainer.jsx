import React from 'react';
import '../css/style.css'

const ItemListContainer = (props) => {
  return (
    <div className='container'>
      <h2>{props.message}</h2>
    </div>
  );
};


export default ItemListContainer;
