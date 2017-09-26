import React from 'react';
import ReactDOM from 'react-dom';
import BeerEntry from './BeerEntry.jsx';
import SortBar from './SortBar.jsx';

const BeerEntryList = (props) => {
  // console.log('props in BeerEntryList:', props.sort); // sort func made it here
  // console.log('list here: ', props.list);

  let renderedEntries = props.list.map((entry, index) => {
    return <BeerEntry entry={entry} key={index}/>
  });

  return (
    <div className='beer-entry-list'>
      <SortBar sort={props.sort}/>
      {renderedEntries}
    </div>
  );  
}

export default BeerEntryList;