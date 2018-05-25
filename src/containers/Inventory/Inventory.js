import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from '../../components/Inventory/Tabs/Tabs';
import InventorySection from '../../components/Inventory/InventorySection/InventorySection';
import * as actions from "../../store/actions";
import { log, fletchingProduct, fletchingSecondary } from '../../store/initialState/items/allTypeNames';
import { getItemsByType } from '../../store/utils';


class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSectionIndex: 0,
      sections: [
        {name: 'Logs', itemTypes: [log], imageName: 'Logs.png'},
        {name: 'Fletching Products and Secondaries', itemTypes: [fletchingSecondary, fletchingProduct], imageName: 'Longbow.png'},
      ]
    }
  }

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
        <InventorySection items={getItemsByType(...this.state.sections[this.state.activeSectionIndex].itemTypes)}
                          onUpdateCount={this.props.onUpdateCount}/>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onUpdateCount: (event, itemName) => dispatch({type: actions.UPDATE_COUNT, itemName: itemName,
      location: 'items', newCount: parseInt(event.target.value, 10)}),
  }
};

export default connect(null, mapDispatchToProps)(Inventory);