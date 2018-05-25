import React from 'react';
import * as styles from "./styles";
import { primarySkillForAction } from '../../../../../../store/utils';


const usageButton = (props) => {
  const badgeClass = props.isPositive ? "badge badge-success" : "badge badge-danger";
  const primarySkill = primarySkillForAction(props.action);
  return (
    <button className={"btn btn-outline-info"}>
      <img src={require('../../../../../../Assets/images/' + primarySkill.imageName)} alt={props.action.name}
           style={styles.usageButtonImage}/>
      <span className={badgeClass} style={styles.badge}>{props.action.count}</span>
    </button>
  )
};


export default usageButton;