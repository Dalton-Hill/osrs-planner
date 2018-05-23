import React from 'react';
import * as styles from "./styles";


const usageButton = (props) => {
  const badgeClass = props.count.isPositive ? "badge badge-success" : "badge badge-danger";
  return (
    <button className={"btn btn-outline-info"}>
      <img src={require('../../../../../Assets/images/' + props.count.imageName)} alt={props.item.name}
           style={styles.usageButtonImage}/>
      <span className={badgeClass} style={styles.badge}>{props.count.count}</span>
    </button>
  )
};


export default usageButton;