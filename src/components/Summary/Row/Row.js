import React from 'react';
import * as styles from './styles';
import {xpGainedForSkill} from "../../../store/utils";


const row = (props) => {
  return (
    <tr>
      <td>
        <img src={require('../../../Assets/images/' + props.skill.imageName)} alt={props.skill.name} style={styles.img}/>
      </td>
      <td>{xpGainedForSkill(props.skill.name)}</td>
    </tr>
  )
};


export default row;