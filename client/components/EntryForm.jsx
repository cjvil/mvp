import React from 'react';
import ReactDOM from 'react-dom';

class EntryForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      rating: '',
      value: ''
    }
  }

  render() {
    return (
      <div>
        <input type="text" className="name"></input>
        <input type="text" className="rating"></input>
        <input type="text" className="comments"></input>
        <button className="submit">Submit</button>
      </div>
    );
  }
}

export default EntryForm;