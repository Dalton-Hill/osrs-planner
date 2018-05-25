import React from 'react';
import * as styles from './styles';
import UsageButton from './UsageButton/UsageButton';
import { actionsThatRequiredItem, actionsThatRewardedItem } from '../../../../../store/utils';


const row = (props) => {
  return (
    <tr>
      <td style={styles.description}>
        <img src={require('../../../../../Assets/images/' + props.item.imageName)} alt={props.item.name} style={styles.img}/>
        {props.item.name}
      </td>
      <td style={styles.amount}><input type={'text'} className={"form-control"} value={props.item.count}
                 onChange={(event) => props.onUpdateCount(event, props.item.name)}/></td>
      <td>
        <div className={"btn-group"} role={"group"}>
          {actionsThatRewardedItem(props.item).map(action => <UsageButton key={action.name} action={action} isPositive={true}/>)}
          {actionsThatRequiredItem(props.item).map(action => <UsageButton key={action.name} action={action} isPositive={false}/>)}
        </div>
      </td>
      <td></td>
    </tr>
  )
};


export default row;