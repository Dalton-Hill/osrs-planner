import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from '../../components/Herblore/Tabs/Tabs';
import HerbloreTable from '../../components/Herblore/Table';
import SkillProgressBar from '../../UI/Progress/SkillProgressBar/SkillProgressBar';
import SkillExperienceForm from '../../Forms/SkillExperienceForm/SkillExperienceForm';
import {primarySkillForAction} from '../../store/utils';
import * as actions from '../../store/actions';
import {herblore} from "../../store/initialState/skills/allskillNames";
import {grimyHerb, cleanHerb} from "../../store/initialState/items/allTypeNames";


class Herblore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startingXP: 0,
      goalXP: 0,
      activeSectionIndex: 0,
      sections: [
        {name: 'Clean Herbs', actions: () => this.props.cleanHerbActions, imageName: 'Grimy_guam_leaf.png'},
        {name: 'Make Potions', actions: () => this.props.makePotionActions, imageName: 'Attack_potion(3).png'},
      ]
    }
  }
  handleSectionClick = (index) => {
    this.setState({ activeSectionIndex: index})
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
    const skillToDisplay = herblore;
    if (typeof this.props.herbloreActions !== "undefined") {
      return this.props.herbloreActions.reduce((totalXP, action) => {
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
          <h2 className={"card-title"}>Herblore</h2>
          <Tabs sections={this.state.sections} activeSectionIndex={this.state.activeSectionIndex} click={this.handleSectionClick}/>
        </div>
        <div className={"card-body"}>
          <SkillExperienceForm startingXP={this.state.startingXP} goalXP={this.state.goalXP}
                               onChangeStartingXP={this.onChangeStartingXP}
                               onChangeGoalXP={this.onChangeGoalXP}/>
          <SkillProgressBar percent={(this.state.startingXP + gainedXP) / this.state.goalXP}/>
          <HerbloreTable herbloreActions={this.state.sections[this.state.activeSectionIndex].actions()}
                         onUpdateActionCount={this.props.onUpdateActionCount}/>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    grimyHerbs: state.inventory.filter(item => item.type === grimyHerb),
    cleanHerbs: state.inventory.filter(item => item.type === cleanHerb),
    herbloreActions: state.actions.filter(action => primarySkillForAction(action).name === herblore),
    cleanHerbActions: state.actions.filter(action => primarySkillForAction(action).name === herblore && action.name.includes('Clean')),
    makePotionActions: state.actions.filter(action => primarySkillForAction(action).name === herblore && action.name.includes('potion'))
  }
};


const mapDispatchToProps = dispatch => {
  return {
    onUpdateActionCount: (event, rsAction) => dispatch({type: actions.UPDATE_ACTION_COUNT, rsAction, event}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Herblore);