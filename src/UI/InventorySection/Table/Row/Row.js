import React from 'react';
import * as styles from './styles';


const row = (props) => {
  const location = 'inventory';
  const inventoryCount = props.item.counts.find(count => count.location === location);
  return (
    <tr>
      <td style={styles.description}>
        <img src={require('../../../../Assets/images/items/' + props.item.imageName)} alt={props.item.name} style={styles.img}/>
        {props.item.name}
      </td>
      <td style={styles.amount}><input type={'text'} className={"form-control"} value={inventoryCount.count}
                 onChange={(event) => props.onUpdateCount(event, props.item.name)}/></td>
      <td>Temp Fill</td>
    </tr>
  )
};


export default row;