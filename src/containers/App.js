import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import TreePlanner from './TreePlanner/TreePlanner';
import Summary from './Summary/Summary';
import Layout from '../hoc/Layout/Layout';
import './App.css';


class App extends Component {
  state = {
    routes: [
      {description: "Summary", logoName: 'Stats_icon.png', component: Summary},
      {description: "TreePlanner", logoName: 'woodcutting_icon.png', component: TreePlanner},
      {description: "Herblore", logoName: 'Herblore_icon.png', component: null}
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
