import React from 'react';
import * as styles from './styles';
import { calculateAvailable } from '../../../store/utils';


const row = ({ log, onUpdateCount }) => {
  const location = 'firemaking';
  const firemakingCount = log.counts.find(count => count.location === location);
  return (
    <tr>
      <td>
        <img src={require('../../../Assets/images/items/' + log.imageName)} alt={log.name} style={styles.img}/>
        {log.name}
      </td>
      <td>{firemakingCount.levelRequired}</td>
      <td>{calculateAvailable(log)}</td>
      <td><input type={'text'} className={"form-control"} value={firemakingCount.count}
                 onChange={(event) => onUpdateCount(event, log.name, location)}/></td>
      <td>{(firemakingCount.count * firemakingCount.xpPer).toFixed(2)}</td>
    </tr>
  )
};


export default row;