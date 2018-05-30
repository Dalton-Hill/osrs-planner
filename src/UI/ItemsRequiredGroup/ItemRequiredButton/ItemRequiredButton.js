import React from 'react';
import * as styles from "./styles";
import { countNeededPerAction } from '../../../store/utils';



const itemRequiredButton = (props) => {
  const countPerAction = countNeededPerAction(props.action, props.item);
  return (
    <button className={"btn btn-outline-info"} tabIndex={-1} title={props.item.name}>
      <img src={require('../../../Assets/images/' + props.item.imageName)} alt={props.item.name}
           style={styles.usageButtonImage}/>
      <span className={"badge badge-info"} style={styles.badge}>{countPerAction}</span>
    </button>
  )
};


export default itemRequiredButton;