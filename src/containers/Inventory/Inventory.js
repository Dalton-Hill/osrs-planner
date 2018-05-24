import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from '../../components/Inventory/Tabs/Tabs';
import InventorySection from '../../components/Inventory/InventorySection/InventorySection';
import * as actions from "../../store/actions";


class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSectionId: 1,
      sections: [
        {id: 1, name: 'Logs', itemTypes: ['logs'], imageName: 'Logs.png'},
        {id: 2, name: 'Fletching.js Products', itemTypes: ['fletchingSecondaries', 'fletchingProducts'], imageName: 'Longbow.png'}
      ]
    }
  }

  unpackItemTypes = () => {
    const activeSection = this.state.sections.find(section => section.id === this.state.activeSectionId);
    let items = [];
    activeSection.itemTypes.forEach(itemType => {
      if (typeof this.props[itemType] !== "undefined") items = items.concat(...this.props[itemType]);
    });
    return items;
  };

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
        <InventorySection items={this.unpackItemTypes()}
                          onUpdateCount={this.props.onUpdateCount}/>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    logs: state.inventory.filter(item => item.type === 'log'),
    fletchingProducts: state.inventory.filter(item => item.type === 'fletching product'),
    fletchingSecondaries: state.inventory.filter(item => item.type === 'fletching secondary'),
  }
};


const mapDispatchToProps = dispatch => {
  return {
    onUpdateCount: (event, itemName) => dispatch({type: actions.UPDATE_COUNT, itemName: itemName,
      location: 'items', newCount: parseInt(event.target.value, 10)}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);