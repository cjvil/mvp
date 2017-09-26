import React from 'react';
import ReactDOM from 'react-dom';

const BeerEntry = (props) => {    
    return (
      <div className='beer-entry'>
        <h4>{props.entry.name}</h4>
        <div>{props.entry.style}</div>
        <div>ABV: {props.entry.abv}</div>
        <div>Rating: {props.entry.rating}</div>
        <div>Thoughts: {props.entry.description}</div>
      </div>
    );
}

export default BeerEntry;