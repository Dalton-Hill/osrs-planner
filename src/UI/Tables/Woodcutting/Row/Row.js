import React from 'react';
import * as styles from './styles';


const row = ({ log }) => {
  return (
    <tr>
      <td>
        <img src={require('../../../../Assets/images/treePlanner/' + log.imageName)} alt={log.name} style={styles.img}/>
        {log.name}
      </td>
      <td>{log.woodcuttingLevelRequired}</td>
      <td>{log.counts.chopped}</td>
      <td>{(log.counts.chopped * log.woodcuttingExperienceRewarded).toFixed(2)}</td>
    </tr>
  )
};


export default row;