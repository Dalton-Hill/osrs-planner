import React from 'react';
import * as styles from "./styles";
import { getImageNameFromItem, isCountLinkedToItem, getCountFromItem } from '../../../../../store/utils';


const updateForeignCount = (count) => {
  const copyCount = {...count};
  copyCount.imageName = getImageNameFromItem(count.fromItemName);
  copyCount.isPositive = true;
  copyCount.count = getCountFromItem(count.fromItemName, count.fromItemLocation);
  return copyCount;
};


const usageButton = (props) => {
  let count = props.count;
  if (isCountLinkedToItem(count)) count = updateForeignCount(count);

  const badgeClass = count.isPositive ? "badge badge-success" : "badge badge-danger";
  return (
    <button className={"btn btn-outline-info"}>
      <img src={require('../../../../../Assets/images/' + count.imageName)} alt={props.item.name}
           style={styles.usageButtonImage}/>
      <span className={badgeClass} style={styles.badge}>{count.count}</span>
    </button>
  )
};


export default usageButton;