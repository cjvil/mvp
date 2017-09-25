import React from 'react';
import ReactDOM from 'react-dom';

class EntryForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      rating: '',
      description: ''
    };

    this.getValue = this.getValue.bind(this);
    this.submit = this.submit.bind(this);
  }

  getValue(e) {
    let value = e.target.value;
    let key = e.target.className;
    let state = {};
    state[key] = value;

    this.setState(state);
  }

  submit() {
    // TODO:
    // actually submit
    // move up to app component
    console.log('Submitted: ', this.state.name + ' ' + this.state.rating + ' ' + this.state.description);
  }

  render() {
    return (
      <div>
        <input type="text" className="name" value={this.state.name} onChange={this.getValue}></input>
        <input type="text" className="rating" value={this.state.rating} onChange={this.getValue}></input>
        <input type="text" className="description" value={this.state.description} onChange={this.getValue}></input>
        <button className="submit" onClick={this.submit}>Submit</button>
      </div>
    );
  }
}

export default EntryForm;