import React, { Component } from 'react';
import './App.css';
import HotColdGame from './components/hot-cold';
import Header from './components/header'


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <h2 className="App-intro"> HOT or COLD </h2>
        <HotColdGame />
      </div>
    );
  }
}

export default App;
