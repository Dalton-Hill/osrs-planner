import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from '../../components/Inventory/Tabs/Tabs';
import InventorySection from '../../components/Inventory/InventorySection/InventorySection';
import * as actions from "../../store/actions";
import {
  log,
  fletchingProduct,
  fletchingSecondary,
  grimyHerb,
  cleanHerb,
  herbloreSecondary
} from '../../store/initialState/items/allTypeNames';


class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSectionIndex: 0,
      sections: [
        {name: 'Logs', props: ['logs'], imageName: 'Logs.png'},
        {name: 'Fletching Products and Secondaries', props: ['fletchingSecondaries', 'fletchingProducts'], imageName: 'Longbow.png'},
        {name: 'Grimy Herbs', props: ['grimyHerbs'], imageName: 'Grimy_guam_leaf.png'},
        {name: 'Clean Herbs', props: ['cleanHerbs'], imageName: 'Guam_leaf.png'},
        {name: 'Herblore Secondaries', props: ['herbloreSecondaries'], imageName: 'Limpwurt_root.png'},
      ]
    }
  }

  unpackItemsForProps = (...propNames) => {
    return propNames.reduce((allItems, propName) => {
      return allItems.concat(this.props[propName])
    }, []);
  };

  handleSectionClick = (index) => {
    this.setState({ activeSectionIndex: index})
  };

  render() {

    return (
      <div className="card">
        <div className="card-header">
          <h2>Inventory</h2>
          <Tabs sections={this.state.sections} activeSectionIndex={this.state.activeSectionIndex} click={this.handleSectionClick}/>
        </div>
        <InventorySection items={this.unpackItemsForProps(...this.state.sections[this.state.activeSectionIndex].props)}
                          onUpdateCount={this.props.onUpdateCount}/>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    logs: state.inventory.filter(item => item.type === log),
    fletchingProducts: state.inventory.filter(item => item.type === fletchingProduct),
    fletchingSecondaries: state.inventory.filter(item => item.type === fletchingSecondary),
    grimyHerbs: state.inventory.filter(item => item.type === grimyHerb),
    cleanHerbs: state.inventory.filter(item => item.type === cleanHerb),
    herbloreSecondaries: state.inventory.filter(item => item.type === herbloreSecondary),
  }
};


const mapDispatchToProps = dispatch => {
  return {
    onUpdateCount: (event, item) => dispatch({type: actions.UPDATE_COUNT, item, event}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);