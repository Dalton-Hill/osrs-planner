import React, { Component } from 'react';
import { connect } from 'react-redux';
import WoodcuttingTable from '../../UI/Tables/Woodcutting/Table';


class Woodcutting extends Component {
  render() {
    return (
      <div className={"card"}>
        <div className={"card-body"}>
          <h2 className={"card-title"}>Woodcutting</h2>
          <WoodcuttingTable logs={this.props.logs}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    logs: state.inventory.filter(item => item.type === 'log')
  }
};

export default connect(mapStateToProps)(Woodcutting);