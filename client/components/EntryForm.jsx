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
        <div>EntryForm rendered</div>
      </div>
    );
  }
}

export default EntryForm;