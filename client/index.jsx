import React from 'react';
import ReactDOM from 'react-dom';
import BeerEntryList from './components/BeerEntryList.jsx';
import EntryForm from './components/EntryForm.jsx';
import ResultsList from './components/ResultsList.jsx'
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

    this.state = {
      list: []
    };
  }

  render() {
    return (
      <div>
        <ResultsList />
        <EntryForm submit={this.submit}/>
        <BeerEntryList list={this.state.list}/>
      </div>
    );
  }

  componentDidMount() {
    this.getList();
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

  submit(name, rating, description) {
    let ajaxOptions = {
      url: 'http://localhost:8332/list',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        name: name,
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