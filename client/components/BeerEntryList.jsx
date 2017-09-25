import React from 'react';
import ReactDOM from 'react-dom';
import BeerEntry from './BeerEntry.jsx';

const BeerEntryList = (props) => {
  console.log('list here: ', props.list);

  let renderedEntries = props.list.map((entry, index) => {
    return <BeerEntry name={entry.name} rating={entry.rating} description={entry.description} key={index}/>
  });

  return (
    <div className='beer-entry-list'>
      {renderedEntries}
    </div>
  );  
}

export default BeerEntryList;