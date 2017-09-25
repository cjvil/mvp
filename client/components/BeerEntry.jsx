import React from 'react';
import ReactDOM from 'react-dom';

const BeerEntry = (props) => {    
    return (
      <div className='beer-entry'>
        <div>Name: {props.name}</div>
        <div>Rating: {props.rating}</div>
        <div>Thoughts: {props.description}</div>
      </div>
    );
}

export default BeerEntry;