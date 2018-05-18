import React, { Component } from 'react';
import { connect } from 'react-redux';
import WoodcuttingTable from '../../components/Woodcutting/Table';
import SkillProgressBar from '../../UI/Progress/SkillProgressBar/SkillProgressBar';
import SkillExperienceForm from '../../Forms/SkillExperienceForm/SkillExperienceForm';
import * as actions from './store/actions';


class Woodcutting extends Component {
  render() {
    return (
      <div className={"card"}>
        <div className={"card-header"}>
          <h2 className={"card-title"}>Woodcutting</h2>
        </div>
        <div className={"card-body"}>
          <SkillExperienceForm startingXP={this.props.startingXP} goalXP={this.props.goalXP}
                               onChangeStartingXP={this.props.onChangeStartingXP}
                               onChangeGoalXP={this.props.onChangeGoalXP}/>
          <SkillProgressBar percent={(this.props.startingXP + this.props.xpGained) / this.props.goalXP}/>
          <WoodcuttingTable logs={this.props.logs} onChoppedCountChange={this.props.onChoppedCountChange}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    startingXP: state.wcReducer.startingXP,
    goalXP: state.wcReducer.goalXP,
    xpGained: state.wcReducer.xpGained,
    logs: state.wcReducer.inventory.filter(item => item.type === 'log')
  }
};


const matchDispatchToProps = dispatch => {
  return {
    onChoppedCountChange: (event, logName) => dispatch({type: actions.UPDATE_CHOPPED_COUNT, payload: {event: event, logName: logName}}),
    onChangeStartingXP: (event) => dispatch({type: actions.UPDATE_STARTING_XP, payload: {event: event}}),
    onChangeGoalXP: (event) => dispatch({type: actions.UPDATE_GOAL_XP, payload: {event: event}})
  }
};

export default connect(mapStateToProps, matchDispatchToProps)(Woodcutting);