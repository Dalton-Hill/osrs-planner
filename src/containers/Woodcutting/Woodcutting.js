import React, { Component } from 'react';
import { connect } from 'react-redux';
import WoodcuttingTable from '../../components/Woodcutting/Table';
import SkillProgressBar from '../../UI/Progress/SkillProgressBar/SkillProgressBar';
import SkillExperienceForm from '../../Forms/SkillExperienceForm/SkillExperienceForm';
import DatabaseButtonGroup from '../../UI/DatabaseButtonGroup/DatabaseButtonGroup';
import * as actions from '../../store/actions';
import { woodcutting } from '../../store/initialState/skills/allskillNames';
import { primarySkillForAction } from '../../store/utils';


class Woodcutting extends Component {
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
    const skillToDisplay = woodcutting;
    if (typeof this.props.woodcuttingActions !== "undefined") {
      return this.props.woodcuttingActions.reduce((totalXP, action) => {
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
          <h2 className={"card-title"} style={{display: "inline"}}>Woodcutting</h2>
          {this.props.isAuthenticated ? <DatabaseButtonGroup onUpload={() => this.props.upload(this.props.idToken, this.props.actions)} onDownload={() => this.props.download(this.props.idToken)}/> : null}
        </div>
        <div className={"card-body"}>
          <SkillExperienceForm startingXP={this.state.startingXP} goalXP={this.state.goalXP}
                               onChangeStartingXP={this.onChangeStartingXP}
                               onChangeGoalXP={this.onChangeGoalXP}/>
          <SkillProgressBar percent={(this.state.startingXP + gainedXP) / this.state.goalXP}/>
          <WoodcuttingTable woodcuttingActions={this.props.woodcuttingActions} onUpdateActionCount={this.props.onUpdateActionCount}/>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated,
    idToken: state.idToken,
    actions: state.actions,
    woodcuttingActions: state.actions.filter(action => primarySkillForAction(action).name === woodcutting)
  }
};


const mapDispatchToProps = dispatch => {
  return {
    onUpdateActionCount: (event, rsAction) => dispatch({type: actions.UPDATE_ACTION_COUNT, rsAction, event}),
    upload: (idToken, actionsState) => dispatch(actions.uploadActions(idToken, actionsState)),
    download: (idToken) => dispatch(actions.downloadActions(idToken)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Woodcutting);