import React, { Component } from 'react';
import { connect } from 'react-redux';
import FiremakingTable from '../../components/Firemaking/Table';
import SkillProgressBar from '../../UI/Progress/SkillProgressBar/SkillProgressBar';
import SkillExperienceForm from '../../Forms/SkillExperienceForm/SkillExperienceForm';
import * as actions from '../../store/actions';


class Firemaking extends Component {
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

  render() {
    let gainedXP = 0;
    if (typeof this.props.logs !== "undefined") {
      gainedXP = this.props.logs.reduce((totalXP, log) => {
        const firemakingCount = log.counts.find(count => count.location === 'firemaking');
        return totalXP + firemakingCount.count * firemakingCount.xpPer;
      }, 0);
    }

    return (
      <div className={"card"}>
        <div className={"card-header"}>
          <h2 className={"card-title"}>Firemaking</h2>
        </div>
        <div className={"card-body"}>
          <SkillExperienceForm startingXP={this.state.startingXP} goalXP={this.state.goalXP}
                               onChangeStartingXP={this.onChangeStartingXP}
                               onChangeGoalXP={this.onChangeGoalXP}/>
          <SkillProgressBar percent={(this.state.startingXP + gainedXP) / this.state.goalXP}/>
          <FiremakingTable logs={this.props.logs} onUpdateCount={this.props.onUpdateCount}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Firemaking);