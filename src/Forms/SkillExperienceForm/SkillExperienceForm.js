import React from 'react';
import * as styles from './styles';


const skillExperienceForm = (props) => {
  return (
    <form style={styles.form}>
      <div className="form-group">
        <label htmlFor={"startingXPInput"}>Starting XP</label>
        <input id={"startingXPInput"} type="text" className="form-control" value={props.startingXP}
        onChange={(event) => props.onChangeStartingXP(event)}/>
      <div className="form-group">
        <label htmlFor={"goalXPInput"}>Goal XP</label>
        <input id={"goalXPInput"} type="text" className="form-control" value={props.goalXP}
               onChange={(event) => props.onChangeGoalXP(event)}/>
      </div>
      </div>
    </form>
  )
};


export default skillExperienceForm;