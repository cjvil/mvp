import React from 'react';
import ReactDOM from 'react-dom';

class EntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      rating: '',
      description: ''
    };

    this.getValue = this.getValue.bind(this);
    this.submit = this.props.submit.bind(this);
  }

  getValue(e) {
    let value = e.target.value;
    let key = e.target.className;
    let state = {};
    state[key] = value;

    this.setState(state);
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