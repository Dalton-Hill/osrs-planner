import React, { Component } from 'react';
import { connect } from 'react-redux';
import WoodcuttingTable from '../../components/Woodcutting/Table';
import * as actions from './store/actions';


class Woodcutting extends Component {
  render() {
    return (
      <div className={"card"}>
        <div className={"card-body"}>
          <h2 className={"card-title"}>Woodcutting</h2>
          <WoodcuttingTable logs={this.props.logs} onChoppedCountChange={this.props.onChoppedCountChange}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    logs: state.wcReducer.inventory.filter(item => item.type === 'log')
  }
};


const matchDispatchToProps = dispatch => {
  return {
    onChoppedCountChange: (event, logName) => dispatch({type: actions.UPDATE_CHOPPED_COUNT, payload: {event: event, logName: logName}})
  }
};

export default connect(mapStateToProps, matchDispatchToProps)(Woodcutting);