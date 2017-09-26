import React from 'react';
import ReactDOM from 'react-dom';

class EntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: '',
      description: ''
    };

    this.getValue = this.getValue.bind(this);
    this.submitEntry = this.submitEntry.bind(this);
  }

  getValue(e) {
    let value = e.target.value;
    let key = e.target.className;
    let state = {};
    state[key] = value;

    this.setState(state);
  }

  submitEntry() {
    this.props.submit(this.state.rating, this.state.description);
  }

  render() {
    return (
      <div>
        <h4>RATING</h4>
        <input type="text" className="rating" value={this.state.rating} onChange={this.getValue}></input>
        <h4>THOUGHTS</h4>
        <input type="text" className="description" value={this.state.description} onChange={this.getValue}></input>
        <button className="submit" onClick={this.submitEntry}>Submit</button>
      </div>
    );
  }
}

export default EntryForm;