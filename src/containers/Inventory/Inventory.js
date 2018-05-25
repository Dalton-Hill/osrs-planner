import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from '../../components/Inventory/Tabs/Tabs';
import InventorySection from '../../components/Inventory/InventorySection/InventorySection';
import * as actions from "../../store/actions";
import { log } from '../../store/initialState/items/allTypeNames';
import { getItemsByType } from '../../store/utils';


class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSectionIndex: 0,
      sections: [
        {name: 'Logs', itemTypes: [log], imageName: 'Logs.png'}
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
        <InventorySection items={getItemsByType(...this.state.sections[this.state.activeSectionIndex].itemTypes)}
                          onUpdateCount={this.props.onUpdateCount}/>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    logs: state.inventory.filter(item => item.type === log)
  }
};


const mapDispatchToProps = dispatch => {
  return {
    onUpdateCount: (event, itemName) => dispatch({type: actions.UPDATE_COUNT, itemName: itemName,
      location: 'items', newCount: parseInt(event.target.value, 10)}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);