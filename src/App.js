import React, { Component } from 'react';
import butchie from './butch.gif';
import butchieNo from './ButchNope.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={butchie} className="App-logo" alt="logo" />
            <h1 className="App-title"><img src={butchieNo}/> </h1>
        </header>
        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App;
