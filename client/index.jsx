import React from 'react';
import ReactDOM from 'react-dom';
import BeerEntryList from './components/BeerEntryList.jsx';
import EntryForm from './components/EntryForm.jsx';
import ResultsList from './components/ResultsList.jsx'
import SearchForm from './components/SearchForm.jsx'
import $ from 'jquery';

class App extends React.Component {
  constructor() {
    super();

    this.submit = this.submit.bind(this);
    this.search = this.search.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.setSortParameter = this.setSortParameter.bind(this);

    this.state = {
      list: [],
      results: [],
      selected: {name: 'none selected'},
      sortParameter: {rating: -1}
    };
  }

  render() {
    // console.log(this.state.selected);
    console.log('sort', this.state.sortParameter);
    return (
      <div>
        <SearchForm search={this.search} />
        <div id="results">
          <h3>RESULTS</h3>
          <ResultsList results={this.state.results} select={this.handleSelect}/>
        </div>

        <div id="add-entry">
          <h3>Adding entry for: {this.state.selected.name}</h3>
          <EntryForm submit={this.submit}/>
        </div>

        <div id="journal">
          <h3>BeerJournal</h3>
          <BeerEntryList list={this.state.list} sort={this.setSortParameter}/>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.getList();
    // this.search('banana');
  }

  setSortParameter(sortBy) {
    let sortObj = {};
    sortObj[sortBy] = -1;

    this.setState({
      sortParameter: sortObj
    }, this.getList);
  }

  search(query) {
   let ajaxOptions = {
      url: 'http://localhost:8332/search',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        query: query
      })
    };

    $.ajax(ajaxOptions)
      .done((data) => {
        this.setState({
          results: JSON.parse(data)
        });
        console.log(this.state.results);
        console.log('Searched for: ', query);
      })
      .fail(() => {
        console.log('Error POSTing search');
      });
  }

  getList() {
    console.log('calling getlist');
    let ajaxOptions = {
      url: 'http://localhost:8332/list',
      method: 'GET',
      data: {sort: this.state.sortParameter}
    };

    $.ajax(ajaxOptions)
      .done((data) => {

        console.log('Retrieved data from server', data);

        this.setState({
          list: data
        });
      })
      .fail(() => {
        console.log('Error getting data from server');
      });
  }

  handleSelect(result) {
    this.setState({
      selected: result
    });
  }

  submit(rating, description) {
    console.log('submitting abv, ', this.state.selected.abv);

    let beer = this.state.selected;
    beer.rating = rating;
    beer.description = description;

    let ajaxOptions = {
      url: 'http://localhost:8332/list',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(beer)
    };

    $.ajax(ajaxOptions)
      .done((data) => {
        this.getList();
        console.log('Submitted: ', name + ' ' + rating + ' ' + description);
      })
      .fail(() => {
        console.log('Error POSTing data');
      });

  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;