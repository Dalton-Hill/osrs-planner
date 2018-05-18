import React, { Component } from 'react';
import SkillProgressBar from '../../UI/Progress/SkillProgressBar/SkillProgressBar';
import SkillExperienceForm from '../../Forms/SkillExperienceForm/SkillExperienceForm';


class Firemaking extends Component {
  render() {
    return (
      <div className={"card"}>
        <div className={"card-body"}>
          <h2 className={"card-title"}>Firemaking</h2>
          <SkillExperienceForm startingXP={0} goalXP={0}
                               onChangeStartingXP={0}
                               onChangeGoalXP={0}/>
          <SkillProgressBar percent={0}/>
        </div>
      </div>
    )
  }
}


export default Firemaking;