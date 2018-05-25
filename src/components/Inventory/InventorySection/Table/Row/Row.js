import React from 'react';
import * as styles from './styles';
import UsageButton from './UsageButton/UsageButton';
import { actionsThatRequiredItem, actionsThatRewardedItem, primarySkillForAction } from '../../../../../store/utils';


const groupActionsBySkillAndIsPositive = item => {
  const negativeSkillActions = actionsThatRequiredItem(item);
  const groupedNegativeSkillActions = [];
  negativeSkillActions.forEach(action => {
    const negativeSkill = primarySkillForAction(action);
    const groupedNegativeSkill = groupedNegativeSkillActions.find(gnSkill => gnSkill.name === negativeSkill.name);
    if (typeof groupedNegativeSkill === "undefined") groupedNegativeSkillActions.push({ ...negativeSkill, count: action.count });
    else groupedNegativeSkill.count += action.count;
  });


  const positiveSkillActions = actionsThatRewardedItem(item);
  const groupedPositiveSkillActions = [];
  positiveSkillActions.forEach(action => {
    const positiveSkill = primarySkillForAction(action);
    const groupedPositiveSkill = groupedPositiveSkillActions.find(gnSkill => gnSkill.name === positiveSkill.name);
    if (typeof groupedPositiveSkill === "undefined") groupedPositiveSkillActions.push({ ...positiveSkill, count: action.count });
    else groupedPositiveSkill.count += action.count;
  });

  console.log(groupedNegativeSkillActions);
  return ({groupedNegativeSkillActions, groupedPositiveSkillActions})
};



const row = (props) => {
  const { groupedNegativeSkillActions, groupedPositiveSkillActions } = groupActionsBySkillAndIsPositive(props.item);
  return (
    <tr>
      <td style={styles.description}>
        <img src={require('../../../../../Assets/images/' + props.item.imageName)} alt={props.item.name} style={styles.img}/>
        {props.item.name}
      </td>
      <td style={styles.amount}><input type={'text'} className={"form-control"} value={props.item.count}
                                       onChange={(event) => props.onUpdateCount(event, props.item.name)}/></td>
      <td>
        <div className={"btn-group"} role={"group"}>
          {groupedPositiveSkillActions.map(skill => <UsageButton key={skill.name} skill={skill} isPositive={true}/>)}
          {groupedNegativeSkillActions.map(skill => <UsageButton key={skill.name} skill={skill} isPositive={false}/>)}
        </div>
      </td>
      <td></td>
    </tr>
  )
};


export default row;