import React from 'react';
import * as styles from "./styles";


const usageButton = (props) => {
  const badgeClass = props.isPositive ? "badge badge-success" : "badge badge-danger";
  return (
    <button className={"btn btn-outline-info"}>
      <img src={require('../../../../../../Assets/images/' + props.skill.imageName)} alt={props.skill.name}
           style={styles.usageButtonImage}/>
      <span className={badgeClass} style={styles.badge}>{props.skill.count}</span>
    </button>
  )
};


export default usageButton;