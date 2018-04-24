import React, { Component } from 'react';
import TreePlanner from './TreePlanner/TreePlanner';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className={"container App"}>
        <header className={"App-header"}>
          <h1>Welcome to OSRS Planner</h1>
        </header>
        <TreePlanner/>
      </div>
    );
  }
}

export default App;
