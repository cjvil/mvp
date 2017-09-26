import React from 'react';
import ReactDOM from 'react-dom';

const SortBar = (props) => {
  // add select function to props
  console.log('inside sortbar', props.sort);

  return (
    <div className='sort-bar'>
      <h4>Sort by:</h4>
      <div className='sort-buttons'>
        <button className='by-rating'>Rating</button>
        <button className='by-abv'>ABV</button>
        <button className='by-name'>Name</button>
      </div>
  
    </div>
  );  
}

export default SortBar;