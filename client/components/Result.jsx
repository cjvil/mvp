import React from 'react';
import ReactDOM from 'react-dom';

const Result = (props) => {    
    return (
      <div className='result'>
        <div>Name: {props.name}</div>
      </div>
    );
}

export default Result;