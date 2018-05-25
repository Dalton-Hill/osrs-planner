import React from 'react';
import * as styles from "./styles";
import { calculateItemCountAfterActions } from '../../../store/utils';



const itemAvailableButton = (props) => {
  const itemCountAfterActions = calculateItemCountAfterActions(props.item);
  const badgeClass = itemCountAfterActions > 0 ? "badge badge-success" : "badge badge-danger";
  return (
    <button className={"btn btn-outline-info"}>
      <img src={require('../../../Assets/images/' + props.item.imageName)} alt={props.item.name}
           style={styles.usageButtonImage}/>
      <span className={badgeClass} style={styles.badge}>{itemCountAfterActions}</span>
    </button>
  )
};


export default itemAvailableButton;