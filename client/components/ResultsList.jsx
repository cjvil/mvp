import React from 'react';
import ReactDOM from 'react-dom';
import Result from './Result.jsx';

const ResultsList = (props) => {
  console.log('results here: ', props.results);

  

  return (
    <div className='result-entry-list'>
      results
    </div>
  );  
}

export default ResultsList;

// let renderedResults = props.list.map((result, index) => {
//     return <Result name={result.name}/>
//   });