import React, { Component } from 'react';
import { connect } from 'react-redux';
import WoodcuttingTable from '../../components/Woodcutting/Table';
import SkillProgressBar from '../../UI/Progress/SkillProgressBar/SkillProgressBar';
import SkillExperienceForm from '../../Forms/SkillExperienceForm/SkillExperienceForm';
import * as actions from './store/actions';


class Woodcutting extends Component {
  render() {
    const startingXP = null;
    const goalXP = null;
    const gainedXP = null;

    return (
      <div className={"card"}>
        <div className={"card-header"}>
          <h2 className={"card-title"}>Woodcutting</h2>
        </div>
        <div className={"card-body"}>
          <SkillExperienceForm startingXP={startingXP} goalXP={goalXP}/>
          <SkillProgressBar percent={(startingXP + gainedXP) / goalXP}/>
          <WoodcuttingTable logs={this.props.logs} onChoppedCountChange={this.props.onChoppedCountChange}/>
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


const mapDispatchToProps = dispatch => {
  return {
    onUpdateCount: (event, itemName, location) => dispatch({type: actions.UPDATE_COUNT, itemName: itemName,
      location: location, newCount: parseInt(event.target.value, 10)}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Woodcutting);