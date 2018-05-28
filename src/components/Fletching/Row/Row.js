import React from 'react';
import * as styles from './styles';
import {fletching} from "../../../store/initialState/skills/allskillNames";
import ItemsAvailableGroup from '../../../UI/ItemsAvailableGroup/ItemsAvailableGroup';
import ItemsRequiredGroup from '../../../UI/ItemsRequiredGroup/ItemsRequiredGroup';


const row = ({ action, onUpdateActionCount }) => {
  const skillToDisplay = fletching;
  const levelRequired = action.skillsRequired.find(skill => skill.name === skillToDisplay).level;
  const xpPerAction = action.skillExperienceRewards.find(skill => skill.name === skillToDisplay).amount;
  const totalXPGained = xpPerAction * action.count;
  return (
    <tr>
      <td>
        <img src={require('../../../Assets/images/' + action.imageName)} alt={action.name} style={styles.img}/>
        {action.name}
      </td>
      <td>{levelRequired}</td>
      <td><ItemsRequiredGroup action={action}/></td>
      <td><ItemsAvailableGroup action={action}/></td>
      <td>
        <input type={'text'} className={"form-control"} value={action.count} onChange={(event) => onUpdateActionCount(event, action)}/>
      </td>
      <td>{totalXPGained.toFixed(2)}</td>
    </tr>
  )
};


export default row;