import React from 'react';
import ReactDOM from 'react-dom';

const Result = (props) => {    
    return (
      <div className='result' onClick={() => props.select(props.result)}>
        <div>Name: {props.result.name}</div>
      </div>
    );
}

export default Result;

//<div>Name: {props.name}</div>