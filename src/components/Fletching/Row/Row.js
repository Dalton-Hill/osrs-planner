import React from 'react';
import * as styles from './styles';
import {fletching} from "../../../store/initialState/skills/allskillNames";
import ItemsAvailableGroup from '../../../UI/ItemsAvailableGroup/ItemsAvailableGroup';
import ItemsRequiredGroup from '../../../UI/ItemsRequiredGroup/ItemsRequiredGroup';


const row = ({ action, onUpdateActionCount, onClickMakeAll }) => {
  const skillToDisplay = fletching;
  const levelRequired = action.skillsRequired.find(skill => skill.name === skillToDisplay).level;
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
        <div className={"input-group mb-2"}>
          <div className="input-group-prepend">
            <div className="input-group-text" style={styles.makeAll}
                 onClick={() => onClickMakeAll(action)}>All</div>
          </div>
          <input type={'text'} className={"form-control"} value={action.count} onChange={(event) => onUpdateActionCount(event, action)}/>
        </div>
      </td>
    </tr>
  )
};


export default row;