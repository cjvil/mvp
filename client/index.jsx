import React from 'react';
import ReactDOM from 'react-dom';
import BeerEntryList from './components/BeerEntryList.jsx';
import EntryForm from './components/EntryForm.jsx';
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
  }

  render() {
    return (
      <div>
        <div id="entry-form">
          <EntryForm submit={this.submit}/>
        </div>
        <BeerEntryList list={list}/>
      </div>
    );
  }

  submit() {
    let ajaxOptions = {
      url: 'http://localhost:8332/list',
      method: 'POST',
      contentType: 'application/json',
      data: this.state
    };

    $.ajax(ajaxOptions)
      .done((data) => {
        console.log('Submitted: ', this.state.name + ' ' + this.state.rating + ' ' + this.state.description);
      })
      .fail(() => {
        console.log('AJAX error');
      });

  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;