import React, { Component } from 'react';
import ContentComponent from './ContentComponent';
import variables from './variables.scss';
import './App.scss';

class App extends Component {
  render() {
    return (
      <main id={`app-${variables.styleVersion}`}>
        This is a test of style versioning.
        <ContentComponent />
      </main>
    );
  }
}

export default App;
