import React from 'react';
import * as styles from '../../../Forms/SkillExperienceForm/styles';


const experienceForm = (props) => {
  return (
    <form style={styles.form}>
      <div className="row">
        <div className="col">
          <input type="text" className="form-control" placeholder="Starting XP"/>
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Goal XP"/>
        </div>
      </div>
    </form>
  )
};


export default experienceForm;