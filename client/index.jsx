console.log('App loaded');

import React from 'react';
import ReactDOM from 'react-dom';
import BeerEntryList from './components/BeerEntryList.jsx';
import EntryForm from './components/EntryForm.jsx';

// dummy data
const list = [
  {name: 'Campfire Stout', rating: '2', description: 'Tasted like campfires, gross'},
  {name: 'Worst Beer Ever', rating: '10', description: 'Sooo good'},
  {name: 'Dolphin Blue Brew', rating: '7', description: 'Fresh taste but made from dolphins :('}
];

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div id="entry-form">
          <EntryForm />
        </div>

        <div>App rendered</div>
        <BeerEntryList list={list}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;