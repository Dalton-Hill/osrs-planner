import React, { Component } from 'react';
import Tabs from '../../components/Inventory/Tabs/Tabs';


class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSectionId: 1,
      sections: [
        {id: 1, name: 'Logs', body: null, imageName: 'Logs.png'},
        {id: 2, name: 'Ores', body: null, imageName: 'Coal.png'},
        {id: 3, name: 'Bars', body: null, imageName: 'Iron_bar.png'}
      ]
    }
  }

  handleSectionClick = (id) => {
    this.setState({ activeSectionId: id})
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h2>Inventory</h2>
          <Tabs sections={this.state.sections} activeSectionId={this.state.activeSectionId} click={this.handleSectionClick}/>
        </div>
        <div className="card-body">
        </div>
      </div>
    )
  }
}


export default Inventory;