import React from 'react';
import * as styles from './styles';
import UsageButton from './UsageButton/UsageButton';


const calculateAvailable = (item) => {
  return item.counts.reduce((available, count) => {
    const countMultiplier = count.isPositive ? 1 : -1;
    return available + (countMultiplier * count.count)
  }, 0)
};


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
      <td>
        <div className={"btn-group"} role={"group"}>
          {props.item.counts.map(count => {
            return (
              <UsageButton key={count.location} count={count} item={props.item}/>
            )
          })}
        </div>
      </td>
      <td>{calculateAvailable(props.item)}</td>
    </tr>
  )
};


export default row;