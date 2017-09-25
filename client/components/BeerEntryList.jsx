import React from 'react';
import ReactDOM from 'react-dom';
import BeerEntry from './BeerEntry.jsx';

const BeerEntryList = () => {
  return (
    <div className='beer-entry-list'>
      List goes here
      <BeerEntry />
    </div>
  );  
}

export default BeerEntryList;