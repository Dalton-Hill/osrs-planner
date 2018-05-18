import React from 'react';
import * as styles from './styles';


const tab = ({ id, name, image_name, active, click}) => {
  const imgClass = active ? 'nav-link active' : 'nav-link';
  return (
    <li className={"nav-item"}>
      <img src={require('../../../../Assets/images/inventoryIcons/' + image_name)} alt={name} className={imgClass} onClick={() => click(id)}
      style={styles.img}/>
    </li>
  )
};


export default tab;