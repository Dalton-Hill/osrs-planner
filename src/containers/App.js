import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Inventory from './Inventory/Inventory';
import Woodcutting from './Woodcutting/Woodcutting';
import Firemaking from './Firemaking/Firemaking';
import Fletching from './Fletching/Fletching';
import Herblore from './Herblore/Herblore';
import Home from './Home/Home';
import Layout from '../hoc/Layout/Layout';
import Summary from "./Summary/Summary";
import './App.css';


class App extends Component {
  state = {
    routes: [
      {description: "Inventory", logoName: 'Inventory.png', component: Inventory},
      {description: "Summary", logoName: 'Stats_icon.png', component: Summary},
      {description: "Woodcutting", logoName: 'woodcutting_icon.png', component: Woodcutting},
      {description: "Firemaking", logoName: 'Firemaking_icon.png', component: Firemaking},
      {description: "Fletching", logoName: 'Fletching_icon.png', component: Fletching},
      {description: "Herblore", logoName: 'Herblore_icon.png', component: Herblore},
    ]
  };

  render() {
    return (
      <Router>
        <Layout routes={this.state.routes}>
          <Switch>
            <Route path={'/Home'} component={Home}/>
            {this.state.routes.map((route, index) => <Route key={index} path={'/' + route.description} component={route.component}/>)}
            <Redirect from={'/'} to={'/Home'} exact={true}/>
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
