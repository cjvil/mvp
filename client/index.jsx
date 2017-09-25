console.log('App loaded');

import React from 'react';
import ReactDOM from 'react-dom';
import BeerEntryList from './components/BeerEntryList.jsx';
import EntryForm from './components/EntryForm.jsx';

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
        <BeerEntryList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;