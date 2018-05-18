import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Woodcutting from './Woodcutting/Woodcutting';
import Firemaking from './Firemaking/Firemaking';
import Layout from '../hoc/Layout/Layout';
import './App.css';


class App extends Component {
  state = {
    routes: [
      {description: "Inventory", logoName: 'Inventory.png', component: null},
      {description: "Woodcutting", logoName: 'woodcutting_icon.png', component: Woodcutting},
      {description: "Firemaking", logoName: 'Firemaking_icon.png', component: Firemaking}
    ]
  };

  render() {
    return (
      <Router>
        <Layout routes={this.state.routes}>
          {this.state.routes.map((route, index) => <Route key={index} path={'/' + route.description} component={route.component}/>)}
        </Layout>
      </Router>
    );
  }
}

export default App;
