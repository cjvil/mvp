console.log('Hello console!!!');

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>App rendered</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// Don't forget to export