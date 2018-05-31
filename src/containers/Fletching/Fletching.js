import React, { Component } from 'react';
import { connect } from 'react-redux';
import FletchingTable from '../../components/Fletching/Table';
import SkillProgressBar from '../../UI/Progress/SkillProgressBar/SkillProgressBar';
import SkillExperienceForm from '../../Forms/SkillExperienceForm/SkillExperienceForm';
import {primarySkillForAction} from '../../store/utils';
import * as actions from '../../store/actions';
import {fletching} from "../../store/initialState/skills/allskillNames";


class Fletching extends Component {
  state = {
    startingXP: 0,
    goalXP: 0
  };

  onChangeStartingXP = (event) => {
    let newStartingXP = parseFloat(event.target.value);
    if (isNaN(newStartingXP) || !newStartingXP) newStartingXP = 0;
    this.setState({ startingXP: newStartingXP})
  };

  onChangeGoalXP = (event) => {
    let newGoalXP = parseFloat(event.target.value);
    if (isNaN(newGoalXP) || !newGoalXP) newGoalXP = 0;
    this.setState({ goalXP: newGoalXP})
  };

  calculateGainedXP = () => {
    const skillToDisplay = fletching;
    if (typeof this.props.fletchingActions !== "undefined") {
      return this.props.fletchingActions.reduce((totalXP, action) => {
        const xpPerAction = action.skillExperienceRewards.find(skill => skill.name === skillToDisplay).amount;
        return xpPerAction * action.count + totalXP
      }, 0);
    }
    return 0;
  };

  render() {
    const gainedXP = this.calculateGainedXP();
    return (
      <div className={"card"}>
        <div className={"card-header"}>
          <h2 className={"card-title"}>Fletching</h2>
        </div>
        <div className={"card-body"}>
          <SkillExperienceForm startingXP={this.state.startingXP} goalXP={this.state.goalXP}
                               onChangeStartingXP={this.onChangeStartingXP}
                               onChangeGoalXP={this.onChangeGoalXP}/>
          <SkillProgressBar percent={(this.state.startingXP + gainedXP) / this.state.goalXP}/>
          <FletchingTable fletchingActions={this.props.fletchingActions}
                          onUpdateActionCount={this.props.onUpdateActionCount}
                          onClickMakeAll={this.props.onClickMakeAll}/>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    fletchingActions: state.actions.filter(action => primarySkillForAction(action).name === fletching)
  }
};


const mapDispatchToProps = dispatch => {
  return {
    onUpdateActionCount: (event, rsAction) => dispatch({type: actions.UPDATE_ACTION_COUNT, rsAction, event}),
    onClickMakeAll: (rsAction) => dispatch({type: actions.MAKE_ALL_ACTION, rsAction}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Fletching);