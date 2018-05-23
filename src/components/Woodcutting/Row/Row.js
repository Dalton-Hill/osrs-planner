import React from 'react';
import * as styles from './styles';


const row = ({ log, onUpdateCount }) => {
  const location = 'woodcutting';
  const woodcuttingCount = log.counts.find(count => count.location === location);
  return (
    <tr>
      <td>
        <img src={require('../../../Assets/images/' + log.imageName)} alt={log.name} style={styles.img}/>
        {log.name}
      </td>
      <td>{woodcuttingCount.levelRequired}</td>
      <td><input type={'text'} className={"form-control"} value={woodcuttingCount.count}
                 onChange={(event) => onUpdateCount(event, log.name, location)}/></td>
      <td>{(woodcuttingCount.count * woodcuttingCount.xpPer).toFixed(2)}</td>
    </tr>
  )
};


export default row;