import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from '../../components/Inventory/Tabs/Tabs';
import InventorySection from '../../components/Inventory/InventorySection/InventorySection';
import DatabaseButtonGroup from '../../UI/DatabaseButtonGroup/DatabaseButtonGroup';
import * as actions from "../../store/actions";
import {
  log,
  fletchingProduct,
  fletchingSecondary,
  grimyHerb,
  cleanHerb,
  herbloreSecondary, potionDose
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
        {name: 'Potion Doses', props: ['potionDoses'], imageName: 'Attack_potion(1).png'},
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
          <h2 style={{display: "inline"}}>Inventory</h2>
          {this.props.isAuthenticated ? <DatabaseButtonGroup onUpload={() => this.props.upload(this.props.idToken, this.props.inventory)} onDownload={() => this.props.download(this.props.idToken)}/> : null}
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
    isAuthenticated: state.isAuthenticated,
    idToken: state.idToken,
    inventory: state.inventory,
    logs: state.inventory.filter(item => item.type === log),
    fletchingProducts: state.inventory.filter(item => item.type === fletchingProduct),
    fletchingSecondaries: state.inventory.filter(item => item.type === fletchingSecondary),
    grimyHerbs: state.inventory.filter(item => item.type === grimyHerb),
    cleanHerbs: state.inventory.filter(item => item.type === cleanHerb),
    herbloreSecondaries: state.inventory.filter(item => item.type === herbloreSecondary),
    potionDoses: state.inventory.filter(item => item.type === potionDose),
  }
};


const mapDispatchToProps = dispatch => {
  return {
    onUpdateCount: (event, item) => dispatch({type: actions.UPDATE_COUNT, item, event}),
    upload: (idToken, inventory) => dispatch(actions.uploadInventory(idToken, inventory)),
    download: (idToken) => dispatch(actions.downloadInventory(idToken)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);