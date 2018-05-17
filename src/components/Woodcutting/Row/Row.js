import React from 'react';
import * as styles from './styles';


const row = ({ log, onChoppedCountChange }) => {
  return (
    <tr>
      <td>
        <img src={require('../../../Assets/images/logs/' + log.imageName)} alt={log.name} style={styles.img}/>
        {log.name}
      </td>
      <td>{log.woodcuttingLevelRequired}</td>
      <td><input type={'text'} className={"form-control"} value={log.counts.chopped}
                 onChange={(event) => onChoppedCountChange(event, log.name)}/></td>
      <td>{(log.counts.chopped * log.woodcuttingExperienceRewarded).toFixed(2)}</td>
    </tr>
  )
};


export default row;