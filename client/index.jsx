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
    this.submit = this.submit.bind(this);

    this.state = {
      list: list
    };

    console.log(this.state.list);
  }

  render() {
    return (
      <div>
        <div id="entry-form">
          <EntryForm submit={this.submit}/>
        </div>
        <BeerEntryList list={this.state.list}/>
      </div>
    );
  }

  getList() {
    console.log('getting something at least');
    $.ajax('http://localhost:8332/list')
      .done((data) => {
        console.log('Retrieved data from server', data);
        console.log('Retrieved data from server', typeof data);
        this.setState({
          list: data
        });
      })
      .fail(() => {
        console.log('AJAX error');
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

    // console.log(context);
    // oooooh I can either have the correct binding for getlist or submit
    // getlist should be bound to app
    // submit should be bound to form
    // save context as var

    $.ajax(ajaxOptions)
      .done((data) => {
        this.getList();
        console.log('Submitted: ', name + ' ' + rating + ' ' + description);
      })
      .fail(() => {
        console.log('AJAX error');
      });

  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;