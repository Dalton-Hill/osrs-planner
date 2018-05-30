import React from 'react';
import * as styles from './styles';
import { woodcutting } from "../../../store/initialState/skills/allskillNames";


const row = ({ action, onUpdateActionCount }) => {
  const skillToDisplay = woodcutting;
  const levelRequired = action.skillsRequired.find(skill => skill.name === skillToDisplay).level;
  return (
    <tr>
      <td>
        <img src={require('../../../Assets/images/' + action.imageName)} alt={action.name} style={styles.img}/>
        {action.name}
      </td>
      <td>{levelRequired}</td>
      <td>
        <input type={'text'} className={"form-control"} value={action.count} onChange={(event) => onUpdateActionCount(event, action)}/>
      </td>
    </tr>
  )
};


export default row;