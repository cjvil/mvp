import React from 'react';
import ReactDOM from 'react-dom';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };

    this.getValue = this.getValue.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  getValue(e) {
    let value = e.target.value;
    let key = e.target.className;
    let state = {};
    state[key] = value;

    this.setState(state);
  }

  submitSearch() {
    console.log(this.state.query);
    this.props.search(this.state.query);
  }

  render() {
    return (
      <div>
        <h3>SEARCH</h3>
        <input type="text" className="query" value={this.state.query} onChange={this.getValue}></input>
        <button className="submit-search" onClick={this.submitSearch}>Submit</button>
      </div>
    );
  }
}

export default SearchForm;