import React from 'react';
import * as styles from './styles';
import UsageButton from './UsageButton/UsageButton';
import { calculateAvailable } from '../../../../../store/utils';


const groupUsagePerLocation = counts => {
  const locations = [];
  counts.forEach(count => {
    const existingSkill = locations.find(location => location.location === count.location);
    if (typeof existingSkill !== "undefined") existingSkill.count += count.count;
    else locations.push(count);
  });
  return locations;
};


const row = (props) => {
  const location = 'items';
  const inventoryCount = props.item.counts.find(count => count.location === location);
  const counts = groupUsagePerLocation(props.item.counts);
  return (
    <tr>
      <td style={styles.description}>
        <img src={require('../../../../../Assets/images/' + props.item.imageName)} alt={props.item.name} style={styles.img}/>
        {props.item.name}
      </td>
      <td style={styles.amount}><input type={'text'} className={"form-control"} value={inventoryCount.count}
                 onChange={(event) => props.onUpdateCount(event, props.item.name)}/></td>
      <td>
        <div className={"btn-group"} role={"group"}>
          {counts.map((count, index) => {
            return (
              <UsageButton key={index} count={count} item={props.item}/>
            )
          })}
        </div>
      </td>
      <td>{calculateAvailable(props.item)}</td>
    </tr>
  )
};


export default row;