import React from 'react';
import ReactDOM from 'react-dom';
import Result from './Result.jsx';

const ResultsList = (props) => {
  console.log('results here: ', props.results);

  let renderedResults = props.results.map((result, index) => {
    return <Result select={props.select} result={result} key={index}/>
  });

  if(props.results.length === 0) {
    return (
      <div className='result-entry-list'>
        Enter a search term
      </div>
    )
  }

  return (
    <div className='result-entry-list'>
      {renderedResults}
    </div>
  );  
}

export default ResultsList;

// let renderedResults = props.list.map((result, index) => {
//     return <Result name={result.name}/>
//   });