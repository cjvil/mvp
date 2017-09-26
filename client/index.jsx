import React from 'react';
import ReactDOM from 'react-dom';
import BeerEntryList from './components/BeerEntryList.jsx';
import EntryForm from './components/EntryForm.jsx';
import ResultsList from './components/ResultsList.jsx'
import SearchForm from './components/SearchForm.jsx'
import $ from 'jquery';

// dummy data
const list = [
  {name: 'Campfire Stout', rating: 2, description: 'Tasted like campfires, gross'},
  {name: 'Worst Beer Ever', rating: 10, description: 'Sooo good'},
  {name: 'Dolphin Blue Brew', rating: 7, description: 'Fresh taste but made from dolphins :('}
];

class App extends React.Component {
  constructor() {
    super();

    this.submit = this.submit.bind(this);
    this.search = this.search.bind(this);
    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      list: [],
      results: [],
      selected: {}
    };
  }

  render() {
    console.log(this.state.selected);
    return (
      <div>
        <SearchForm search={this.search} />
        <ResultsList results={this.state.results} select={this.handleSelect}/>
        <EntryForm submit={this.submit}/>
        <BeerEntryList list={this.state.list}/>
      </div>
    );
  }

  componentDidMount() {
    this.getList();
    // this.search('banana');
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
    $.ajax('http://localhost:8332/list')
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

  submit(name, rating, description) {
    let ajaxOptions = {
      url: 'http://localhost:8332/list',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        // name: name,
        name: this.state.selected.name, 
        rating: rating,
        description: description
      })
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